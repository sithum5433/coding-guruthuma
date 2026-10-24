#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
int main() {
    int tcp = socket(AF_INET, SOCK_STREAM, 0);
    int udp = socket(AF_INET, SOCK_DGRAM, 0);
    if (tcp < 0 || udp < 0) {
        if (tcp >= 0) close(tcp);
        if (udp >= 0) close(udp);
        std::cerr << "Could not create sockets\n";
        return 1;
    }
    std::cout << "TCP: ordered byte stream\nUDP: separate datagrams\n";
    close(tcp);
    close(udp);
}
