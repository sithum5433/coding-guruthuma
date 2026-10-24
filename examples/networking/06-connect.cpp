#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
int main() {
    int client = socket(AF_INET, SOCK_STREAM, 0);
    if (client < 0) { perror("socket"); return 1; }
    sockaddr_in peer{};
    peer.sin_family = AF_INET;
    peer.sin_port = htons(8080);
    if (inet_pton(AF_INET, "127.0.0.1", &peer.sin_addr) != 1) {
        close(client); return 1;
    }
    if (connect(client, reinterpret_cast<sockaddr*>(&peer), sizeof(peer)) < 0) {
        perror("connect (start the lesson 12 server first)");
        close(client); return 1;
    }
    std::cout << "Connected to the echo server\n";
    close(client);
}
