#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
#include <string>
#include <cerrno>
int main() {
    int fd = socket(AF_INET, SOCK_STREAM, 0);
    if (fd < 0) return 1;
    sockaddr_in peer{};
    peer.sin_family = AF_INET; peer.sin_port = htons(8080);
    if (inet_pton(AF_INET, "127.0.0.1", &peer.sin_addr) != 1) { close(fd); return 1; }
    if (connect(fd, reinterpret_cast<sockaddr*>(&peer), sizeof(peer)) < 0) {
        perror("connect"); close(fd); return 1;
    }
    const std::string message = "Hello from C++!\n";
    std::size_t sent = 0;
    while (sent < message.size()) {
        auto n = send(fd, message.data() + sent, message.size() - sent, MSG_NOSIGNAL);
        if (n < 0 && errno == EINTR) continue;
        if (n <= 0) { close(fd); return 1; }
        sent += static_cast<std::size_t>(n);
    }
    shutdown(fd, SHUT_WR);
    char buffer[1024];
    for (;;) {
        auto n = recv(fd, buffer, sizeof(buffer), 0);
        if (n < 0 && errno == EINTR) continue;
        if (n < 0) { close(fd); return 1; }
        if (n == 0) break;
        std::cout.write(buffer, n);
    }
    close(fd);
}
