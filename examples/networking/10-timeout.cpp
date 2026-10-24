#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <iostream>
#include <poll.h>
#include <cerrno>
int main() {
    int sockets[2];
    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sockets) < 0) return 1;
    pollfd watched{sockets[0], POLLIN, 0};
    int ready = poll(&watched, 1, 100);
    if (ready == 0) std::cout << "No data yet: timeout\n";
    else if (ready < 0) perror("poll");
    else if (watched.revents & POLLIN) std::cout << "Readable\n";
    else std::cout << "Socket state changed; inspect revents\n";
    close(sockets[0]); close(sockets[1]);
    return ready < 0 ? 1 : 0;
}
