#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
int main() {
    int server = socket(AF_INET, SOCK_STREAM, 0);
    if (server < 0) { perror("socket"); return 1; }
    sockaddr_in address{};
    address.sin_family = AF_INET;
    address.sin_port = htons(8080);
    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
    if (bind(server, reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0) {
        perror("bind"); close(server); return 1;
    }
    if (listen(server, 4) < 0) { perror("listen"); close(server); return 1; }
    std::cout << "Listening on 127.0.0.1:8080; demo now closes\n";
    close(server);
}
