#include <iostream>
#include <string>
int main() {
    std::string pending;
    const std::string chunks[] = {"HEL", "LO\nBY", "E\n"};
    for (const auto& chunk : chunks) {
        pending += chunk;
        std::size_t end;
        while ((end = pending.find('\n')) != std::string::npos) {
            std::cout << "Message: " << pending.substr(0, end) << '\n';
            pending.erase(0, end + 1);
        }
    }
}
