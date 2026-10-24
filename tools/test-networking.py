"""Compile the course examples and check local socket behavior (Linux/WSL)."""
from pathlib import Path
import socket
import subprocess
import tempfile

sources = Path(__file__).resolve().parent.parent / 'examples' / 'networking'
with tempfile.TemporaryDirectory(prefix='guruthuma-cpp-') as temporary:
    build = Path(temporary)
    for source in sorted(sources.glob('*.cpp')):
        subprocess.run(['g++', '-std=c++17', '-Wall', '-Wextra', '-Werror', str(source), '-o', str(build / source.stem)], check=True, capture_output=True)
    print('PASS: all 13 C++ programs compile without warnings')
    for name, expected in [('01-hello', 'Hello, network! Port: 8080'), ('02-endpoint', '127.0.0.1:8080'), ('03-transports', 'UDP: separate datagrams'), ('04-socket', 'Socket created'), ('05-listener', 'Listening'), ('07-framing', 'Message: HELLO\nMessage: BYE'), ('08-partial-io', 'HELLO'), ('09-udp', 'PING'), ('10-timeout', 'timeout'), ('11-raii', 'Owned descriptor')]:
        result = subprocess.run([str(build / name)], capture_output=True, text=True, timeout=4, check=True)
        assert expected in result.stdout, (name, result.stdout)
    print('PASS: 10 standalone examples produce their expected results')
    for mode in ['client', 'fragmented', 'connect']:
        server = subprocess.Popen([str(build / '12-echo-server')], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        try:
            assert 'Ready' in server.stdout.readline(), server.stderr.read()
            if mode in ('client', 'connect'):
                result = subprocess.run([str(build / ('echo-client' if mode == 'client' else '06-connect'))], capture_output=True, text=True, timeout=5, check=True)
                assert ('Hello from C++!\n' == result.stdout) if mode == 'client' else ('Connected' in result.stdout)
            else:
                with socket.create_connection(('127.0.0.1', 8080), timeout=3) as peer:
                    payload = b'A' * 8192 + b'\x00B\n'
                    for i in range(0, len(payload), 127):
                        peer.sendall(payload[i:i + 127])
                    peer.shutdown(socket.SHUT_WR)
                    echoed = b''
                    while True:
                        data = peer.recv(193)
                        if not data:
                            break
                        echoed += data
                    assert echoed == payload
            assert server.wait(timeout=5) == 0
            print('PASS: TCP echo / ' + mode)
        finally:
            if server.poll() is None:
                server.kill()
                server.wait()
