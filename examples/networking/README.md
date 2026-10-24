# C++ networking lab

The course includes 12 focused C++17 examples and a companion echo client. Use Linux or WSL with `g++`. These examples use POSIX sockets and a few Linux APIs, including `MSG_NOSIGNAL`. Native Windows requires a Winsock adaptation. No additional C++ libraries are needed.

The website's packet lab is a simulation. Its C++ source review checks selected constructs; it does not compile code or establish real connections. Download edited code from the lesson to test it locally.

## First program

From this directory:

```bash
g++ -std=c++17 -Wall -Wextra 01-hello.cpp -o hello
./hello
```

## Echo project

Compile both programs:

```bash
g++ -std=c++17 -Wall -Wextra 12-echo-server.cpp -o echo-server
g++ -std=c++17 -Wall -Wextra echo-client.cpp -o echo-client
```

In terminal 1:

```bash
./echo-server
```

Wait for `Ready on 127.0.0.1:8080 (one client)`. In terminal 2:

```bash
./echo-client
```

The client prints `Hello from C++!`. The server handles that single connection, then exits. Restart it before another client test. The client sends its message, half-closes its sending direction, and reads until EOF. The server handles partial writes and interrupted I/O, uses a bounded receive buffer, and releases descriptors through RAII. This is a teaching server; it does not add TLS, session timeouts, or multiple-client scheduling.

## Suggested experiments

1. Change the client's message and compare the complete returned text.
2. Change the server receive buffer from 1024 to 2 bytes. The full response should still arrive.
3. Run the client without a server; observe and explain connection refusal.
4. Send a long message to exercise the send and receive loops.
5. Combine the framing example with the echo server to process newline-delimited messages. Add a maximum pending-buffer size.

## Example notes

- [05-listener.cpp](./05-listener.cpp) demonstrates `bind` and `listen`, then closes immediately. It is not the persistent server used by the client.
- [06-connect.cpp](./06-connect.cpp) needs the echo server running first; it connects and closes without sending a message.
- [07-framing.cpp](./07-framing.cpp) uses prepared chunks so framing can be tested without a network.
- [08-partial-io.cpp](./08-partial-io.cpp) and [10-timeout.cpp](./10-timeout.cpp) use a local stream socket pair.
- [09-udp.cpp](./09-udp.cpp) sends between two real loopback UDP sockets in one process and bounds its receive wait.

References: [Linux socket API](https://man7.org/linux/man-pages/man7/socket.7.html), [recv return values](https://man7.org/linux/man-pages/man2/recv.2.html), [Boost.Asio tutorial for a portable continuation](https://www.boost.org/latest/doc/html/boost_asio/tutorial.html).
