#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
#include <stdexcept>
class Socket {
    int fd_;
public:
    explicit Socket(int fd) : fd_(fd) {
        if (fd < 0) throw std::runtime_error("socket failed");
    }
    ~Socket() { close(fd_); }
    Socket(const Socket&) = delete;
    Socket& operator=(const Socket&) = delete;
    int get() const { return fd_; }
};
int main() {
    try {
        Socket connection(socket(AF_INET, SOCK_STREAM, 0));
        std::cout << "Owned descriptor: " << connection.get() << '\n';
    } catch (const std::exception& e) {
        std::cerr << e.what() << '\n'; return 1;
    }
}
