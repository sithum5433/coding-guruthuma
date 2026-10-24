#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
#include <cerrno>
int main() {
    int receiver = socket(AF_INET, SOCK_DGRAM, 0);
    int sender = socket(AF_INET, SOCK_DGRAM, 0);
    if (receiver < 0 || sender < 0) {
        if (receiver >= 0) close(receiver);
        if (sender >= 0) close(sender);
        return 1;
    }
    const auto finish = [&] { close(sender); close(receiver); };
    sockaddr_in address{};
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
    address.sin_port = 0; // Let the OS choose an available local port.
    if (bind(receiver, reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0) {
        finish(); return 1;
    }
    socklen_t length = sizeof(address);
    if (getsockname(receiver, reinterpret_cast<sockaddr*>(&address), &length) < 0) {
        finish(); return 1;
    }
    timeval timeout{1, 0};
    if (setsockopt(receiver, SOL_SOCKET, SO_RCVTIMEO, &timeout, sizeof(timeout)) < 0) {
        finish(); return 1;
    }
    const char message[] = "PING";
    if (sendto(sender, message, 4, 0, reinterpret_cast<sockaddr*>(&address), length) != 4) {
        finish(); return 1;
    }
    char buffer[16];
    auto n = recvfrom(receiver, buffer, sizeof(buffer), 0, nullptr, nullptr);
    if (n < 0) { perror("recvfrom"); finish(); return 1; }
    std::cout.write(buffer, n); std::cout << '\n';
    finish();
}
