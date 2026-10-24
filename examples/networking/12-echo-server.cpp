#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
#include <cerrno>
#include <csignal>
#include <stdexcept>
class Socket {
    int fd_;
public:
    explicit Socket(int fd) : fd_(fd) {
        if (fd < 0) throw std::runtime_error("socket operation failed");
    }
    ~Socket() { close(fd_); }
    Socket(const Socket&) = delete;
    Socket& operator=(const Socket&) = delete;
    int get() const { return fd_; }
};
bool send_all(int fd, const char* data, std::size_t size) {
    std::size_t sent = 0;
    while (sent < size) {
        auto n = send(fd, data + sent, size - sent, MSG_NOSIGNAL);
        if (n < 0 && errno == EINTR) continue;
        if (n <= 0) return false;
        sent += static_cast<std::size_t>(n);
    }
    return true;
}
int main() {
    try {
        Socket listener(socket(AF_INET, SOCK_STREAM, 0));
        int reuse = 1;
        if (setsockopt(listener.get(), SOL_SOCKET, SO_REUSEADDR, &reuse, sizeof(reuse)) < 0)
            throw std::runtime_error("setsockopt failed");
        sockaddr_in address{};
        address.sin_family = AF_INET;
        address.sin_port = htons(8080);
        address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
        if (bind(listener.get(), reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0)
            throw std::runtime_error("bind failed: is port 8080 busy?");
        if (listen(listener.get(), 4) < 0) throw std::runtime_error("listen failed");
        std::cout << "Ready on 127.0.0.1:8080 (one client)" << std::endl;
        int accepted;
        do { accepted = accept(listener.get(), nullptr, nullptr); } while (accepted < 0 && errno == EINTR);
        Socket client(accepted);
        char buffer[1024];
        for (;;) {
            auto n = recv(client.get(), buffer, sizeof(buffer), 0);
            if (n < 0 && errno == EINTR) continue;
            if (n < 0) throw std::runtime_error("recv failed");
            if (n == 0) break;
            if (!send_all(client.get(), buffer, static_cast<std::size_t>(n)))
                throw std::runtime_error("send failed");
        }
        std::cout << "Client disconnected; resources released\n";
    } catch (const std::exception& e) {
        std::cerr << e.what() << '\n'; return 1;
    }
}
