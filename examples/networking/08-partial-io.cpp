#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
#include <cerrno>
#include <string>
#include <algorithm>
int main() {
    int sockets[2];
    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sockets) < 0) return 1;
    const std::string message = "HELLO";
    std::size_t sent = 0;
    while (sent < message.size()) {
        auto n = send(sockets[0], message.data() + sent, message.size() - sent, MSG_NOSIGNAL);
        if (n < 0 && errno == EINTR) continue;
        if (n <= 0) { close(sockets[0]); close(sockets[1]); return 1; }
        sent += static_cast<std::size_t>(n);
    }
    shutdown(sockets[0], SHUT_WR);
    char buffer[2];
    std::string received;
    for (;;) {
        auto n = recv(sockets[1], buffer, sizeof(buffer), 0);
        if (n < 0 && errno == EINTR) continue;
        if (n < 0) { close(sockets[0]); close(sockets[1]); return 1; }
        if (n == 0) break;
        received.append(buffer, static_cast<std::size_t>(n));
    }
    std::cout << received << '\n';
    close(sockets[0]); close(sockets[1]);
}
