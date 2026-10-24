#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
int main() {
    sockaddr_in address{};
    address.sin_family = AF_INET;
    address.sin_port = htons(8080);
    if (inet_pton(AF_INET, "127.0.0.1", &address.sin_addr) != 1) return 1;
    std::cout << "Loopback endpoint: 127.0.0.1:" << ntohs(address.sin_port) << '\n';
}
