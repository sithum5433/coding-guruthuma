/** C++ networking: activity-led lessons and locally runnable Linux/WSL examples. */
window.CG_CURRICULUM = window.CG_CURRICULUM || {};
window.CG_CURRICULUM.cpp = {
  "id": "cpp",
  "name": "C++ Networking",
  "shortName": "C++",
  "tagline": "From your first message to a working TCP echo service",
  "description": "Build confidence with short explanations, packet experiments, and real C++17 programs. Learn endpoints, sockets, TCP, UDP, framing, and resource ownership.",
  "color": "#367e68",
  "secondaryColor": "#73a18a",
  "accentGlow": "rgba(54,126,104,.15)",
  "executionModel": "C++17 → local compiler → POSIX sockets → TCP / UDP",
  "creator": "C++ with Linux/POSIX sockets",
  "useCases": [
    "Client-server applications",
    "Network services",
    "Protocol design",
    "Systems programming"
  ],
  "sections": [
    {
      "id": "beginner",
      "level": "Beginner",
      "badge": "Explore",
      "title": "01 · Start with the basics",
      "description": "Messages, addresses, and transport choices.",
      "lessons": [
        {
          "id": "cpp-beg-1",
          "number": "01",
          "title": "Hello, C++: your first network message",
          "duration": "15 min",
          "xp": 100,
          "summary": "A network program is still a regular program. Start with a message, a number, and a way to show them on screen.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "Write a postcard before learning how the post office moves it. The string is your postcard; the port number will tell the receiving computer which program should open it.",
            "keyInsight": "std::cout prints the integer. No socket exists yet."
          },
          "quickStart": {
            "goal": "Print a message and choose a port for your future server.",
            "intro": "A network program is still a regular program. Start with a message, a number, and a way to show them on screen.",
            "objectives": [
              "Print a message and choose a port for your future server.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "const int port = 8080;\nstd::cout << port;",
            "question": "What appears in the console?",
            "options": [
              "8080",
              "A network connection opens",
              "The program listens for clients"
            ],
            "correctIndex": 0,
            "explanation": "std::cout prints the integer. No socket exists yet."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>A C++ program starts in main(). Include iostream for console output and string for text. const keeps a binding unchanged. The << operator sends values to std::cout; it does not send network packets.</p>"
            },
            {
              "heading": "Build and run a tiny program",
              "content": "<p>Save the code as main.cpp. Compile with g++ -std=c++17 main.cpp -o app, then run ./app. Compilation creates an executable; changing source code requires compiling again.</p>",
              "codeSnippet": "#include <iostream>\n#include <string>\nint main() {\n    const std::string message = \"Hello, network!\";\n    const int port = 8080;\n    std::cout << message << \" Port: \" << port << '\\n';\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Expecting console output to travel to another computer.",
              "whyItFails": "Console output writes to stdout. It does not create a connection or address a remote program.",
              "fix": "Use console output for observation; use a socket for network communication."
            }
          ],
          "keyTakeaways": [
            "Print a message and choose a port for your future server.",
            "Use console output for observation; use a socket for network communication.",
            "std::cout prints the integer. No socket exists yet."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Hello, C++: your first network message",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Store the text in a std::string.",
                "codeLine": "Store the text in a std::string.",
                "narration": "Store the text in a std::string. A network program is still a regular program. Start with a message, a number, and a way to show them on screen.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Store the text in a std::string."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Store 8080 in an integer.",
                "codeLine": "Store 8080 in an integer.",
                "narration": "Store 8080 in an integer. A network program is still a regular program. Start with a message, a number, and a way to show them on screen.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Store 8080 in an integer."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Print both values.",
                "codeLine": "Print both values.",
                "narration": "Print both values. A network program is still a regular program. Start with a message, a number, and a way to show them on screen.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Print both values."
                  }
                ],
                "heap": [],
                "output": "Hello, network! Port: 8080"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Change the port from 0 to 8080, then review the source and run the downloaded program.",
            "starterCode": "#include <iostream>\n#include <string>\nint main() {\n    const std::string message = \"Hello, network!\";\n    const int port = 0;\n    std::cout << message << \" Port: \" << port << '\\n';\n}\n",
            "solutionCode": "#include <iostream>\n#include <string>\nint main() {\n    const std::string message = \"Hello, network!\";\n    const int port = 8080;\n    std::cout << message << \" Port: \" << port << '\\n';\n}\n",
            "expectedOutput": "Hello, network! Port: 8080",
            "hints": [
              "Use console output for observation; use a socket for network communication.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "std::cout",
                "8080"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "std::cout << \"port\";",
            "options": [
              {
                "text": "Remove the quotes to print the variable port.",
                "isCorrect": true,
                "feedback": "Use console output for observation; use a socket for network communication."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "What appears in the console?",
              "options": [
                "8080",
                "A network connection opens",
                "The program listens for clients"
              ],
              "correctIndex": 0,
              "explanation": "std::cout prints the integer. No socket exists yet."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Use console output for observation; use a socket for network communication.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "A C++ program starts in main(). Include iostream for console output and string for text. const keeps a binding unchanged. The << operator sends values to std::cout; it does not send network packets."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/01-hello.cpp",
            "filename": "01-hello.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 01-hello.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        },
        {
          "id": "cpp-beg-2",
          "number": "02",
          "title": "Find the address: IPs, ports & byte order",
          "duration": "15 min",
          "xp": 100,
          "summary": "An IP address identifies a host or interface. A port helps the operating system deliver traffic to the right socket.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "The IP address is an apartment building. The port is the apartment number. You need both to deliver a message.",
            "keyInsight": "The matching conversions recover 8080 regardless of host byte order."
          },
          "quickStart": {
            "goal": "Describe a local endpoint and convert its port to network byte order.",
            "intro": "An IP address identifies a host or interface. A port helps the operating system deliver traffic to the right socket.",
            "objectives": [
              "Describe a local endpoint and convert its port to network byte order.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "address.sin_port = htons(8080);\nstd::cout << ntohs(address.sin_port);",
            "question": "What value is printed after the round trip?",
            "options": [
              "80",
              "8080",
              "Always 36895"
            ],
            "correctIndex": 1,
            "explanation": "The matching conversions recover 8080 regardless of host byte order."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>127.0.0.1 is IPv4 loopback: traffic stays on your computer. sockaddr_in stores an IPv4 endpoint. Zero-initialize it with {}. AF_INET chooses IPv4 and inet_pton converts readable address text into binary form.</p>"
            },
            {
              "heading": "Put numbers in the agreed order",
              "content": "<p>TCP/IP uses network byte order for fields such as ports. htons converts a 16-bit host value to network order; ntohs converts it back. Do not assume the host uses a particular byte order.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_port = htons(8080);\n    if (inet_pton(AF_INET, \"127.0.0.1\", &address.sin_addr) != 1) return 1;\n    std::cout << \"Loopback endpoint: 127.0.0.1:\" << ntohs(address.sin_port) << '\\n';\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Writing a host-order integer directly into the network port field.",
              "whyItFails": "The port field requires network byte order. A host-order value can identify a different port on a little-endian machine.",
              "fix": "Use htons when writing the port and ntohs when reading it."
            }
          ],
          "keyTakeaways": [
            "Describe a local endpoint and convert its port to network byte order.",
            "Use htons when writing the port and ntohs when reading it.",
            "The matching conversions recover 8080 regardless of host byte order."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Find the address: IPs, ports & byte order",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Choose the loopback IPv4 address.",
                "codeLine": "Choose the loopback IPv4 address.",
                "narration": "Choose the loopback IPv4 address. An IP address identifies a host or interface. A port helps the operating system deliver traffic to the right socket.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Choose the loopback IPv4 address."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Convert the port with htons.",
                "codeLine": "Convert the port with htons.",
                "narration": "Convert the port with htons. An IP address identifies a host or interface. A port helps the operating system deliver traffic to the right socket.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Convert the port with htons."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Read the port back with ntohs.",
                "codeLine": "Read the port back with ntohs.",
                "narration": "Read the port back with ntohs. An IP address identifies a host or interface. A port helps the operating system deliver traffic to the right socket.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Read the port back with ntohs."
                  }
                ],
                "heap": [],
                "output": "Loopback endpoint: 127.0.0.1:8080"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Wrap the port in htons before storing it. Run the program and check that ntohs prints 8080.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_port = 8080;\n    if (inet_pton(AF_INET, \"127.0.0.1\", &address.sin_addr) != 1) return 1;\n    std::cout << \"Loopback endpoint: 127.0.0.1:\" << ntohs(address.sin_port) << '\\n';\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_port = htons(8080);\n    if (inet_pton(AF_INET, \"127.0.0.1\", &address.sin_addr) != 1) return 1;\n    std::cout << \"Loopback endpoint: 127.0.0.1:\" << ntohs(address.sin_port) << '\\n';\n}\n",
            "expectedOutput": "Loopback endpoint: 127.0.0.1:8080",
            "hints": [
              "Use htons when writing the port and ntohs when reading it.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "htons(8080)",
                "inet_pton",
                "AF_INET"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "address.sin_port = 8080;",
            "options": [
              {
                "text": "Use htons(8080) for the port field.",
                "isCorrect": true,
                "feedback": "Use htons when writing the port and ntohs when reading it."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "What value is printed after the round trip?",
              "options": [
                "80",
                "8080",
                "Always 36895"
              ],
              "correctIndex": 1,
              "explanation": "The matching conversions recover 8080 regardless of host byte order."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Use htons when writing the port and ntohs when reading it.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "127.0.0.1 is IPv4 loopback: traffic stays on your computer. sockaddr_in stores an IPv4 endpoint. Zero-initialize it with {}. AF_INET chooses IPv4 and inet_pton converts readable address text into binary form."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/02-endpoint.cpp",
            "filename": "02-endpoint.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 02-endpoint.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        },
        {
          "id": "cpp-beg-3",
          "number": "03",
          "title": "Pick a transport: TCP or UDP?",
          "duration": "15 min",
          "xp": 100,
          "summary": "TCP delivers an ordered byte stream while a connection is healthy. UDP sends independent datagrams without built-in delivery or ordering guarantees.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "TCP resembles a continuous conversation with missing words retried. UDP resembles individual postcards: each keeps its boundary, but delivery is not guaranteed.",
            "keyInsight": "SOCK_DGRAM creates an IPv4 UDP socket here. HTTP is an application protocol."
          },
          "quickStart": {
            "goal": "Choose a transport by the guarantees your application needs.",
            "intro": "TCP delivers an ordered byte stream while a connection is healthy. UDP sends independent datagrams without built-in delivery or ordering guarantees.",
            "objectives": [
              "Choose a transport by the guarantees your application needs.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "socket(AF_INET, SOCK_DGRAM, 0);",
            "question": "Which transport is selected?",
            "options": [
              "TCP",
              "UDP",
              "HTTP"
            ],
            "correctIndex": 1,
            "explanation": "SOCK_DGRAM creates an IPv4 UDP socket here. HTTP is an application protocol."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>socket(AF_INET, SOCK_STREAM, 0) selects a TCP socket for IPv4. SOCK_DGRAM selects UDP. Creating either socket does not send data. TCP does not preserve message boundaries; UDP preserves datagram boundaries, but a small receive buffer can truncate a datagram.</p>"
            },
            {
              "heading": "Try packet loss before writing code",
              "content": "<p>Open Try and send the same message using TCP and UDP. Drop a simulated chunk. The activity illustrates TCP retrying it and UDP leaving it missing. Real TCP can also time out or fail; delivery is not an absolute guarantee.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int tcp = socket(AF_INET, SOCK_STREAM, 0);\n    int udp = socket(AF_INET, SOCK_DGRAM, 0);\n    if (tcp < 0 || udp < 0) {\n        if (tcp >= 0) close(tcp);\n        if (udp >= 0) close(udp);\n        std::cerr << \"Could not create sockets\\n\";\n        return 1;\n    }\n    std::cout << \"TCP: ordered byte stream\\nUDP: separate datagrams\\n\";\n    close(tcp);\n    close(udp);\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Assuming that one send equals one receive.",
              "whyItFails": "TCP transports bytes, so reads can split or combine the data supplied by separate sends.",
              "fix": "For TCP, accumulate bytes and use an application framing rule."
            }
          ],
          "keyTakeaways": [
            "Choose a transport by the guarantees your application needs.",
            "For TCP, accumulate bytes and use an application framing rule.",
            "SOCK_DGRAM creates an IPv4 UDP socket here. HTTP is an application protocol."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Pick a transport: TCP or UDP?",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Choose SOCK_STREAM for a byte stream.",
                "codeLine": "Choose SOCK_STREAM for a byte stream.",
                "narration": "Choose SOCK_STREAM for a byte stream. TCP delivers an ordered byte stream while a connection is healthy. UDP sends independent datagrams without built-in delivery or ordering guarantees.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Choose SOCK_STREAM for a byte stream."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Choose SOCK_DGRAM for datagrams.",
                "codeLine": "Choose SOCK_DGRAM for datagrams.",
                "narration": "Choose SOCK_DGRAM for datagrams. TCP delivers an ordered byte stream while a connection is healthy. UDP sends independent datagrams without built-in delivery or ordering guarantees.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Choose SOCK_DGRAM for datagrams."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Release both descriptors with close.",
                "codeLine": "Release both descriptors with close.",
                "narration": "Release both descriptors with close. TCP delivers an ordered byte stream while a connection is healthy. UDP sends independent datagrams without built-in delivery or ordering guarantees.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Release both descriptors with close."
                  }
                ],
                "heap": [],
                "output": "TCP: ordered byte stream\nUDP: separate datagrams"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Make the second socket a UDP socket. Explain why creating a socket is different from connecting it.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int tcp = socket(AF_INET, SOCK_STREAM, 0);\n    int udp = socket(AF_INET, SOCK_STREAM, 0);\n    if (tcp < 0 || udp < 0) {\n        if (tcp >= 0) close(tcp);\n        if (udp >= 0) close(udp);\n        std::cerr << \"Could not create sockets\\n\";\n        return 1;\n    }\n    std::cout << \"TCP: ordered byte stream\\nUDP: separate datagrams\\n\";\n    close(tcp);\n    close(udp);\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int tcp = socket(AF_INET, SOCK_STREAM, 0);\n    int udp = socket(AF_INET, SOCK_DGRAM, 0);\n    if (tcp < 0 || udp < 0) {\n        if (tcp >= 0) close(tcp);\n        if (udp >= 0) close(udp);\n        std::cerr << \"Could not create sockets\\n\";\n        return 1;\n    }\n    std::cout << \"TCP: ordered byte stream\\nUDP: separate datagrams\\n\";\n    close(tcp);\n    close(udp);\n}\n",
            "expectedOutput": "TCP: ordered byte stream\nUDP: separate datagrams",
            "hints": [
              "For TCP, accumulate bytes and use an application framing rule.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "SOCK_STREAM",
                "SOCK_DGRAM",
                "close"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "TCP preserves each send() as one recv().",
            "options": [
              {
                "text": "TCP is a byte stream; the receiver defines message boundaries.",
                "isCorrect": true,
                "feedback": "For TCP, accumulate bytes and use an application framing rule."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "Which transport is selected?",
              "options": [
                "TCP",
                "UDP",
                "HTTP"
              ],
              "correctIndex": 1,
              "explanation": "SOCK_DGRAM creates an IPv4 UDP socket here. HTTP is an application protocol."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "For TCP, accumulate bytes and use an application framing rule.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "socket(AF_INET, SOCK_STREAM, 0) selects a TCP socket for IPv4. SOCK_DGRAM selects UDP. Creating either socket does not send data. TCP does not preserve message boundaries; UDP preserves datagram boundaries, but a small receive buffer can truncate a datagram."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/03-transports.cpp",
            "filename": "03-transports.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 03-transports.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        }
      ]
    },
    {
      "id": "intermediate",
      "level": "Intermediate",
      "badge": "Connect",
      "title": "02 · Connect two programs",
      "description": "Create sockets and learn the client/server lifecycle.",
      "lessons": [
        {
          "id": "cpp-int-1",
          "number": "04",
          "title": "Create your first socket",
          "duration": "20 min",
          "xp": 175,
          "summary": "A socket is an operating-system resource. C++ receives an integer descriptor that identifies it.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "Opening a socket is like getting a phone. Owning a phone does not mean someone is already on the other end.",
            "keyInsight": "Zero is a valid file descriptor. Check for -1 or a negative value."
          },
          "quickStart": {
            "goal": "Create a socket, check for failure, and release it.",
            "intro": "A socket is an operating-system resource. C++ receives an integer descriptor that identifies it.",
            "objectives": [
              "Create a socket, check for failure, and release it.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "int fd = socket(AF_INET, SOCK_STREAM, 0);\n// Suppose fd is 0.",
            "question": "Does a return value of 0 mean socket() failed?",
            "options": [
              "Yes",
              "No, only -1 indicates failure",
              "It means UDP"
            ],
            "correctIndex": 1,
            "explanation": "Zero is a valid file descriptor. Check for -1 or a negative value."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>socket returns a nonnegative descriptor on success and -1 on failure. Descriptor 0 is valid, so checking fd == 0 for failure is incorrect. perror describes the current errno; report it before other calls can change it.</p>"
            },
            {
              "heading": "Give every resource a lifetime",
              "content": "<p>close releases your descriptor. Avoid using the descriptor afterwards: the operating system may reuse that number. Later, RAII will make release automatic even when a function exits early.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int fd = socket(AF_INET, SOCK_STREAM, 0);\n    if (fd == -1) { perror(\"socket\"); return 1; }\n    std::cout << \"Socket created; no connection yet\\n\";\n    close(fd);\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Treating 0 as a failed descriptor.",
              "whyItFails": "The operating system may assign descriptor 0. Failure is reported with -1.",
              "fix": "Check for -1 and release every successful descriptor."
            }
          ],
          "keyTakeaways": [
            "Create a socket, check for failure, and release it.",
            "Check for -1 and release every successful descriptor.",
            "Zero is a valid file descriptor. Check for -1 or a negative value."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Create your first socket",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Request an IPv4 stream socket.",
                "codeLine": "Request an IPv4 stream socket.",
                "narration": "Request an IPv4 stream socket. A socket is an operating-system resource. C++ receives an integer descriptor that identifies it.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Request an IPv4 stream socket."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Check whether the descriptor is -1.",
                "codeLine": "Check whether the descriptor is -1.",
                "narration": "Check whether the descriptor is -1. A socket is an operating-system resource. C++ receives an integer descriptor that identifies it.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Check whether the descriptor is -1."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Close the resource after use.",
                "codeLine": "Close the resource after use.",
                "narration": "Close the resource after use. A socket is an operating-system resource. C++ receives an integer descriptor that identifies it.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Close the resource after use."
                  }
                ],
                "heap": [],
                "output": "Socket created; no connection yet"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Correct the failure check to handle -1. Keep the close call and compile the example.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int fd = socket(AF_INET, SOCK_STREAM, 0);\n    if (fd == 0) { perror(\"socket\"); return 1; }\n    std::cout << \"Socket created; no connection yet\\n\";\n    close(fd);\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int fd = socket(AF_INET, SOCK_STREAM, 0);\n    if (fd == -1) { perror(\"socket\"); return 1; }\n    std::cout << \"Socket created; no connection yet\\n\";\n    close(fd);\n}\n",
            "expectedOutput": "Socket created; no connection yet",
            "hints": [
              "Check for -1 and release every successful descriptor.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "socket(",
                "fd == -1",
                "close(fd)"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "if (fd == 0) return 1;",
            "options": [
              {
                "text": "Test fd == -1; descriptor 0 can be valid.",
                "isCorrect": true,
                "feedback": "Check for -1 and release every successful descriptor."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "Does a return value of 0 mean socket() failed?",
              "options": [
                "Yes",
                "No, only -1 indicates failure",
                "It means UDP"
              ],
              "correctIndex": 1,
              "explanation": "Zero is a valid file descriptor. Check for -1 or a negative value."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Check for -1 and release every successful descriptor.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "socket returns a nonnegative descriptor on success and -1 on failure. Descriptor 0 is valid, so checking fd == 0 for failure is incorrect. perror describes the current errno; report it before other calls can change it."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/04-socket.cpp",
            "filename": "04-socket.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 04-socket.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        },
        {
          "id": "cpp-int-2",
          "number": "05",
          "title": "Open the door: bind & listen",
          "duration": "20 min",
          "xp": 175,
          "summary": "A server chooses a local endpoint, binds to it, and starts listening. Another socket will handle each accepted connection.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "bind puts your business at an address. listen opens the waiting room. accept welcomes one visitor and gives them a separate conversation.",
            "keyInsight": "bind assigns the local address before listen begins accepting connection requests."
          },
          "quickStart": {
            "goal": "Prepare a server socket to receive connection requests.",
            "intro": "A server chooses a local endpoint, binds to it, and starts listening. Another socket will handle each accepted connection.",
            "objectives": [
              "Prepare a server socket to receive connection requests.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "socket → ? → listen → accept",
            "question": "Which call belongs in the gap?",
            "options": [
              "recv",
              "bind",
              "shutdown"
            ],
            "correctIndex": 1,
            "explanation": "bind assigns the local address before listen begins accepting connection requests."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>bind associates the socket with a local address and port. For this lesson, bind to INADDR_LOOPBACK so the example is reachable on this computer. listen changes the stream socket into a listening socket. Its backlog concerns pending connections; it is not a lifetime client limit.</p>"
            },
            {
              "heading": "Read errors before trying again",
              "content": "<p>A bind error can mean another process owns the port. This short example prints that error and exits. It closes immediately after demonstrating listen; use lesson 12 for a server that waits for a client.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int server = socket(AF_INET, SOCK_STREAM, 0);\n    if (server < 0) { perror(\"socket\"); return 1; }\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_port = htons(8080);\n    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n    if (bind(server, reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0) {\n        perror(\"bind\"); close(server); return 1;\n    }\n    if (listen(server, 4) < 0) { perror(\"listen\"); close(server); return 1; }\n    std::cout << \"Listening on 127.0.0.1:8080; demo now closes\\n\";\n    close(server);\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Confusing a listening socket with a connected client socket.",
              "whyItFails": "The listener accepts connection requests. Each accepted descriptor represents an individual conversation.",
              "fix": "Keep the listener for accepting; use the descriptor returned by accept for data."
            }
          ],
          "keyTakeaways": [
            "Prepare a server socket to receive connection requests.",
            "Keep the listener for accepting; use the descriptor returned by accept for data.",
            "bind assigns the local address before listen begins accepting connection requests."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Open the door: bind & listen",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Create a stream socket.",
                "codeLine": "Create a stream socket.",
                "narration": "Create a stream socket. A server chooses a local endpoint, binds to it, and starts listening. Another socket will handle each accepted connection.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Create a stream socket."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Bind 127.0.0.1:8080.",
                "codeLine": "Bind 127.0.0.1:8080.",
                "narration": "Bind 127.0.0.1:8080. A server chooses a local endpoint, binds to it, and starts listening. Another socket will handle each accepted connection.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Bind 127.0.0.1:8080."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Listen for pending connection requests.",
                "codeLine": "Listen for pending connection requests.",
                "narration": "Listen for pending connection requests. A server chooses a local endpoint, binds to it, and starts listening. Another socket will handle each accepted connection.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Listen for pending connection requests."
                  }
                ],
                "heap": [],
                "output": "Listening on 127.0.0.1:8080; demo now closes"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Add listen after bind, including error handling. Run this short setup demo locally.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int server = socket(AF_INET, SOCK_STREAM, 0);\n    if (server < 0) { perror(\"socket\"); return 1; }\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_port = htons(8080);\n    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n    if (bind(server, reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0) {\n        perror(\"bind\"); close(server); return 1;\n    }\n    // TODO: call listen(server, 4) and handle failure.\n    std::cout << \"Listening on 127.0.0.1:8080; demo now closes\\n\";\n    close(server);\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int server = socket(AF_INET, SOCK_STREAM, 0);\n    if (server < 0) { perror(\"socket\"); return 1; }\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_port = htons(8080);\n    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n    if (bind(server, reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0) {\n        perror(\"bind\"); close(server); return 1;\n    }\n    if (listen(server, 4) < 0) { perror(\"listen\"); close(server); return 1; }\n    std::cout << \"Listening on 127.0.0.1:8080; demo now closes\\n\";\n    close(server);\n}\n",
            "expectedOutput": "Listening on 127.0.0.1:8080; demo now closes",
            "hints": [
              "Keep the listener for accepting; use the descriptor returned by accept for data.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "bind(",
                "listen(",
                "INADDR_LOOPBACK"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "listen(server, 4); // no explicit local endpoint",
            "options": [
              {
                "text": "Explicitly bind to your chosen loopback address and port before listen.",
                "isCorrect": true,
                "feedback": "Keep the listener for accepting; use the descriptor returned by accept for data."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "Which call belongs in the gap?",
              "options": [
                "recv",
                "bind",
                "shutdown"
              ],
              "correctIndex": 1,
              "explanation": "bind assigns the local address before listen begins accepting connection requests."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Keep the listener for accepting; use the descriptor returned by accept for data.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "bind associates the socket with a local address and port. For this lesson, bind to INADDR_LOOPBACK so the example is reachable on this computer. listen changes the stream socket into a listening socket. Its backlog concerns pending connections; it is not a lifetime client limit."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/05-listener.cpp",
            "filename": "05-listener.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 05-listener.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        },
        {
          "id": "cpp-int-3",
          "number": "06",
          "title": "Meet the server: connect & accept",
          "duration": "20 min",
          "xp": 175,
          "summary": "The client calls connect with the server endpoint. The server calls accept to obtain a connected descriptor.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "A receptionist keeps the front desk open while giving a visitor a private meeting room. The listener is the desk; the accepted socket is the room.",
            "keyInsight": "accept returns a separate connected socket. The listener is for accepting connections."
          },
          "quickStart": {
            "goal": "Connect a client to a listener and identify both socket roles.",
            "intro": "The client calls connect with the server endpoint. The server calls accept to obtain a connected descriptor.",
            "objectives": [
              "Connect a client to a listener and identify both socket roles.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "int connected = accept(listener, nullptr, nullptr);",
            "question": "Where should the server read the client message?",
            "options": [
              "From listener",
              "From connected",
              "From std::cout"
            ],
            "correctIndex": 1,
            "explanation": "accept returns a separate connected socket. The listener is for accepting connections."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>connect returns 0 on a successful blocking connection and -1 on failure. accept creates a new descriptor; it does not replace the listener. Both sides must release their connected descriptors when finished.</p>"
            },
            {
              "heading": "Use two terminal windows",
              "content": "<p>First run the lesson 12 echo server in one terminal. Then run this client in another. This client only connects and closes. Without the listener, connection refusal is expected. Restart the one-client echo server before each client run.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int client = socket(AF_INET, SOCK_STREAM, 0);\n    if (client < 0) { perror(\"socket\"); return 1; }\n    sockaddr_in peer{};\n    peer.sin_family = AF_INET;\n    peer.sin_port = htons(8080);\n    if (inet_pton(AF_INET, \"127.0.0.1\", &peer.sin_addr) != 1) {\n        close(client); return 1;\n    }\n    if (connect(client, reinterpret_cast<sockaddr*>(&peer), sizeof(peer)) < 0) {\n        perror(\"connect (start the lesson 12 server first)\");\n        close(client); return 1;\n    }\n    std::cout << \"Connected to the echo server\\n\";\n    close(client);\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Expecting connect to succeed when no server is listening.",
              "whyItFails": "Without a listening service at the destination, the operating system can refuse the connection.",
              "fix": "Start the server first and match its address and port."
            }
          ],
          "keyTakeaways": [
            "Connect a client to a listener and identify both socket roles.",
            "Start the server first and match its address and port.",
            "accept returns a separate connected socket. The listener is for accepting connections."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Meet the server: connect & accept",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. The server listens on the loopback endpoint.",
                "codeLine": "The server listens on the loopback endpoint.",
                "narration": "The server listens on the loopback endpoint. The client calls connect with the server endpoint. The server calls accept to obtain a connected descriptor.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "The server listens on the loopback endpoint."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. The client calls connect.",
                "codeLine": "The client calls connect.",
                "narration": "The client calls connect. The client calls connect with the server endpoint. The server calls accept to obtain a connected descriptor.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "The client calls connect."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. accept returns a separate connected descriptor.",
                "codeLine": "accept returns a separate connected descriptor.",
                "narration": "accept returns a separate connected descriptor. The client calls connect with the server endpoint. The server calls accept to obtain a connected descriptor.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "accept returns a separate connected descriptor."
                  }
                ],
                "heap": [],
                "output": "Connected to the echo server"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Restore the connect call. Start the capstone server, then run the client in a second terminal.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int client = socket(AF_INET, SOCK_STREAM, 0);\n    if (client < 0) { perror(\"socket\"); return 1; }\n    sockaddr_in peer{};\n    peer.sin_family = AF_INET;\n    peer.sin_port = htons(8080);\n    if (inet_pton(AF_INET, \"127.0.0.1\", &peer.sin_addr) != 1) {\n        close(client); return 1;\n    }\n    if (/* TODO: restore the connect call */ missing_call(client, reinterpret_cast<sockaddr*>(&peer), sizeof(peer)) < 0) {\n        perror(\"connect (start the lesson 12 server first)\");\n        close(client); return 1;\n    }\n    std::cout << \"Connected to the echo server\\n\";\n    close(client);\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\nint main() {\n    int client = socket(AF_INET, SOCK_STREAM, 0);\n    if (client < 0) { perror(\"socket\"); return 1; }\n    sockaddr_in peer{};\n    peer.sin_family = AF_INET;\n    peer.sin_port = htons(8080);\n    if (inet_pton(AF_INET, \"127.0.0.1\", &peer.sin_addr) != 1) {\n        close(client); return 1;\n    }\n    if (connect(client, reinterpret_cast<sockaddr*>(&peer), sizeof(peer)) < 0) {\n        perror(\"connect (start the lesson 12 server first)\");\n        close(client); return 1;\n    }\n    std::cout << \"Connected to the echo server\\n\";\n    close(client);\n}\n",
            "expectedOutput": "Connected to the echo server",
            "hints": [
              "Start the server first and match its address and port.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "connect(",
                "inet_pton",
                "close(client)"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "recv(listener, buffer, sizeof(buffer), 0);",
            "options": [
              {
                "text": "Read from the socket returned by accept.",
                "isCorrect": true,
                "feedback": "Start the server first and match its address and port."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "Where should the server read the client message?",
              "options": [
                "From listener",
                "From connected",
                "From std::cout"
              ],
              "correctIndex": 1,
              "explanation": "accept returns a separate connected socket. The listener is for accepting connections."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Start the server first and match its address and port.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "connect returns 0 on a successful blocking connection and -1 on failure. accept creates a new descriptor; it does not replace the listener. Both sides must release their connected descriptors when finished."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/06-connect.cpp",
            "filename": "06-connect.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 06-connect.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        }
      ]
    },
    {
      "id": "advanced",
      "level": "Advanced",
      "badge": "Experiment",
      "title": "03 · Handle real network behavior",
      "description": "Framing, partial I/O, and datagrams.",
      "lessons": [
        {
          "id": "cpp-adv-1",
          "number": "07",
          "title": "Find the message: TCP framing",
          "duration": "25 min",
          "xp": 250,
          "summary": "The receiver may see one message split across several reads, or several messages in one read. Your protocol must define the boundaries.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "Imagine receiving a book in pieces of paper cut at random positions. A newline is a bookmark that tells you when one message ends.",
            "keyInsight": "Keep unfinished text between chunks and split at newline boundaries, not read boundaries."
          },
          "quickStart": {
            "goal": "Reassemble complete lines from arbitrarily split chunks.",
            "intro": "The receiver may see one message split across several reads, or several messages in one read. Your protocol must define the boundaries.",
            "objectives": [
              "Reassemble complete lines from arbitrarily split chunks.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "chunks = {\"HEL\", \"LO\\nBY\", \"E\\n\"};",
            "question": "Which complete messages should emerge?",
            "options": [
              "HEL, LO, BY, E",
              "HELLO and BYE",
              "Only HEL"
            ],
            "correctIndex": 1,
            "explanation": "Keep unfinished text between chunks and split at newline boundaries, not read boundaries."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>Append each received chunk to a pending buffer. While a newline exists, extract one complete message and remove only that message plus the delimiter. Keep any unfinished tail for the next read.</p>"
            },
            {
              "heading": "Set a limit on unfinished data",
              "content": "<p>This example uses fixed chunks so you can predict the result. A real line protocol must limit pending data and decide how to handle embedded newlines. A length-prefix protocol is another option; validate the declared length before allocating memory.</p>",
              "codeSnippet": "#include <iostream>\n#include <string>\nint main() {\n    std::string pending;\n    const std::string chunks[] = {\"HEL\", \"LO\\nBY\", \"E\\n\"};\n    for (const auto& chunk : chunks) {\n        pending += chunk;\n        std::size_t end;\n        while ((end = pending.find('\\n')) != std::string::npos) {\n            std::cout << \"Message: \" << pending.substr(0, end) << '\\n';\n            pending.erase(0, end + 1);\n        }\n    }\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Dropping the unfinished tail between reads.",
              "whyItFails": "Replacing pending discards the unfinished part of the previous chunk, so messages are lost or shortened.",
              "fix": "Keep pending bytes and remove only complete messages."
            }
          ],
          "keyTakeaways": [
            "Reassemble complete lines from arbitrarily split chunks.",
            "Keep pending bytes and remove only complete messages.",
            "Keep unfinished text between chunks and split at newline boundaries, not read boundaries."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Find the message: TCP framing",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Receive HEL and keep it pending.",
                "codeLine": "Receive HEL and keep it pending.",
                "narration": "Receive HEL and keep it pending. The receiver may see one message split across several reads, or several messages in one read. Your protocol must define the boundaries.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Receive HEL and keep it pending."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Append LO + newline + BY; emit HELLO.",
                "codeLine": "Append LO + newline + BY; emit HELLO.",
                "narration": "Append LO + newline + BY; emit HELLO. The receiver may see one message split across several reads, or several messages in one read. Your protocol must define the boundaries.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Append LO + newline + BY; emit HELLO."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Append E + newline; emit BYE.",
                "codeLine": "Append E + newline; emit BYE.",
                "narration": "Append E + newline; emit BYE. The receiver may see one message split across several reads, or several messages in one read. Your protocol must define the boundaries.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Append E + newline; emit BYE."
                  }
                ],
                "heap": [],
                "output": "Message: HELLO\nMessage: BYE"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Accumulate chunks instead of replacing the pending buffer. Run it and recover HELLO and BYE.",
            "starterCode": "#include <iostream>\n#include <string>\nint main() {\n    std::string pending;\n    const std::string chunks[] = {\"HEL\", \"LO\\nBY\", \"E\\n\"};\n    for (const auto& chunk : chunks) {\n        pending = chunk;\n        std::size_t end;\n        while ((end = pending.find('\\n')) != std::string::npos) {\n            std::cout << \"Message: \" << pending.substr(0, end) << '\\n';\n            pending.erase(0, end + 1);\n        }\n    }\n}\n",
            "solutionCode": "#include <iostream>\n#include <string>\nint main() {\n    std::string pending;\n    const std::string chunks[] = {\"HEL\", \"LO\\nBY\", \"E\\n\"};\n    for (const auto& chunk : chunks) {\n        pending += chunk;\n        std::size_t end;\n        while ((end = pending.find('\\n')) != std::string::npos) {\n            std::cout << \"Message: \" << pending.substr(0, end) << '\\n';\n            pending.erase(0, end + 1);\n        }\n    }\n}\n",
            "expectedOutput": "Message: HELLO\nMessage: BYE",
            "hints": [
              "Keep pending bytes and remove only complete messages.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "pending += chunk",
                "pending.find",
                "pending.erase"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "pending = chunk;",
            "options": [
              {
                "text": "Append with += so incomplete bytes survive the next read.",
                "isCorrect": true,
                "feedback": "Keep pending bytes and remove only complete messages."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "Which complete messages should emerge?",
              "options": [
                "HEL, LO, BY, E",
                "HELLO and BYE",
                "Only HEL"
              ],
              "correctIndex": 1,
              "explanation": "Keep unfinished text between chunks and split at newline boundaries, not read boundaries."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Keep pending bytes and remove only complete messages.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "Append each received chunk to a pending buffer. While a newline exists, extract one complete message and remove only that message plus the delimiter. Keep any unfinished tail for the next read."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/07-framing.cpp",
            "filename": "07-framing.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 07-framing.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        },
        {
          "id": "cpp-adv-2",
          "number": "08",
          "title": "Finish the job: partial reads & writes",
          "duration": "25 min",
          "xp": 250,
          "summary": "send and recv return the number of bytes handled. That number may be smaller than your requested size.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "Moving a sofa through a small doorway takes several trips with its parts. Keep track of what has moved, rather than assuming the first trip moved everything.",
            "keyInsight": "Zero reports an orderly end of stream. A blocking read does not return zero merely because no data is ready."
          },
          "quickStart": {
            "goal": "Handle byte counts, interruption, and end of stream.",
            "intro": "send and recv return the number of bytes handled. That number may be smaller than your requested size.",
            "objectives": [
              "Handle byte counts, interruption, and end of stream.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "recv(fd, buffer, sizeof(buffer), 0) == 0",
            "question": "What does this mean for a stream socket?",
            "options": [
              "Try forever; no data yet",
              "The peer finished sending",
              "The buffer contains zero bytes of text"
            ],
            "correctIndex": 1,
            "explanation": "Zero reports an orderly end of stream. A blocking read does not return zero merely because no data is ready."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>Advance a send offset by the positive byte count returned. recv > 0 means bytes arrived, recv == 0 means the peer finished sending on a stream socket, and recv < 0 indicates an error. EINTR means a signal interrupted the operation and it may be retried.</p>"
            },
            {
              "heading": "Force small reads to see the loop work",
              "content": "<p>The example uses a local stream socketpair to avoid a separate server. A two-byte receive buffer forces multiple reads of HELLO. Append exactly n bytes, never assume received bytes end with a null character. MSG_NOSIGNAL here is Linux-specific.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\n#include <string>\n#include <algorithm>\nint main() {\n    int sockets[2];\n    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sockets) < 0) return 1;\n    const std::string message = \"HELLO\";\n    std::size_t sent = 0;\n    while (sent < message.size()) {\n        auto n = send(sockets[0], message.data() + sent, message.size() - sent, MSG_NOSIGNAL);\n        if (n < 0 && errno == EINTR) continue;\n        if (n <= 0) { close(sockets[0]); close(sockets[1]); return 1; }\n        sent += static_cast<std::size_t>(n);\n    }\n    shutdown(sockets[0], SHUT_WR);\n    char buffer[2];\n    std::string received;\n    for (;;) {\n        auto n = recv(sockets[1], buffer, sizeof(buffer), 0);\n        if (n < 0 && errno == EINTR) continue;\n        if (n < 0) { close(sockets[0]); close(sockets[1]); return 1; }\n        if (n == 0) break;\n        received.append(buffer, static_cast<std::size_t>(n));\n    }\n    std::cout << received << '\\n';\n    close(sockets[0]); close(sockets[1]);\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Treating received data as a null-terminated C string.",
              "whyItFails": "recv reports a byte count and does not append a null terminator. Reading beyond that count can include unrelated memory.",
              "fix": "Use append(buffer, n) or write(buffer, n)."
            }
          ],
          "keyTakeaways": [
            "Handle byte counts, interruption, and end of stream.",
            "Use append(buffer, n) or write(buffer, n).",
            "Zero reports an orderly end of stream. A blocking read does not return zero merely because no data is ready."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Finish the job: partial reads & writes",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Send remaining bytes and advance the offset.",
                "codeLine": "Send remaining bytes and advance the offset.",
                "narration": "Send remaining bytes and advance the offset. send and recv return the number of bytes handled. That number may be smaller than your requested size.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Send remaining bytes and advance the offset."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Receive at most two bytes per call.",
                "codeLine": "Receive at most two bytes per call.",
                "narration": "Receive at most two bytes per call. send and recv return the number of bytes handled. That number may be smaller than your requested size.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Receive at most two bytes per call."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Stop on EOF and release both descriptors.",
                "codeLine": "Stop on EOF and release both descriptors.",
                "narration": "Stop on EOF and release both descriptors. send and recv return the number of bytes handled. That number may be smaller than your requested size.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Stop on EOF and release both descriptors."
                  }
                ],
                "heap": [],
                "output": "HELLO"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Advance the send offset with +=. Inspect the receive loop and test the tiny buffer locally.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\n#include <string>\n#include <algorithm>\nint main() {\n    int sockets[2];\n    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sockets) < 0) return 1;\n    const std::string message = \"HELLO\";\n    std::size_t sent = 0;\n    while (sent < message.size()) {\n        auto n = send(sockets[0], message.data() + sent, message.size() - sent, MSG_NOSIGNAL);\n        if (n < 0 && errno == EINTR) continue;\n        if (n <= 0) { close(sockets[0]); close(sockets[1]); return 1; }\n        sent = static_cast<std::size_t>(n);\n    }\n    shutdown(sockets[0], SHUT_WR);\n    char buffer[2];\n    std::string received;\n    for (;;) {\n        auto n = recv(sockets[1], buffer, sizeof(buffer), 0);\n        if (n < 0 && errno == EINTR) continue;\n        if (n < 0) { close(sockets[0]); close(sockets[1]); return 1; }\n        if (n == 0) break;\n        received.append(buffer, static_cast<std::size_t>(n));\n    }\n    std::cout << received << '\\n';\n    close(sockets[0]); close(sockets[1]);\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\n#include <string>\n#include <algorithm>\nint main() {\n    int sockets[2];\n    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sockets) < 0) return 1;\n    const std::string message = \"HELLO\";\n    std::size_t sent = 0;\n    while (sent < message.size()) {\n        auto n = send(sockets[0], message.data() + sent, message.size() - sent, MSG_NOSIGNAL);\n        if (n < 0 && errno == EINTR) continue;\n        if (n <= 0) { close(sockets[0]); close(sockets[1]); return 1; }\n        sent += static_cast<std::size_t>(n);\n    }\n    shutdown(sockets[0], SHUT_WR);\n    char buffer[2];\n    std::string received;\n    for (;;) {\n        auto n = recv(sockets[1], buffer, sizeof(buffer), 0);\n        if (n < 0 && errno == EINTR) continue;\n        if (n < 0) { close(sockets[0]); close(sockets[1]); return 1; }\n        if (n == 0) break;\n        received.append(buffer, static_cast<std::size_t>(n));\n    }\n    std::cout << received << '\\n';\n    close(sockets[0]); close(sockets[1]);\n}\n",
            "expectedOutput": "HELLO",
            "hints": [
              "Use append(buffer, n) or write(buffer, n).",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "sent +=",
                "n == 0",
                "received.append"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "std::cout << buffer;",
            "options": [
              {
                "text": "Use the received byte count; the buffer may not be null-terminated.",
                "isCorrect": true,
                "feedback": "Use append(buffer, n) or write(buffer, n)."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "What does this mean for a stream socket?",
              "options": [
                "Try forever; no data yet",
                "The peer finished sending",
                "The buffer contains zero bytes of text"
              ],
              "correctIndex": 1,
              "explanation": "Zero reports an orderly end of stream. A blocking read does not return zero merely because no data is ready."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Use append(buffer, n) or write(buffer, n).",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "Advance a send offset by the positive byte count returned. recv > 0 means bytes arrived, recv == 0 means the peer finished sending on a stream socket, and recv < 0 indicates an error. EINTR means a signal interrupted the operation and it may be retried."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/08-partial-io.cpp",
            "filename": "08-partial-io.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 08-partial-io.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        },
        {
          "id": "cpp-adv-3",
          "number": "09",
          "title": "Send a postcard: UDP datagrams",
          "duration": "25 min",
          "xp": 250,
          "summary": "UDP uses sendto and recvfrom to send independent messages. It does not need TCP-style listen or accept.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "Each postcard carries a destination and keeps its own boundary. Two postcards do not turn into one continuous roll of paper.",
            "keyInsight": "UDP receives datagrams with recvfrom; it does not use TCP listen/accept."
          },
          "quickStart": {
            "goal": "Send and receive a local UDP datagram.",
            "intro": "UDP uses sendto and recvfrom to send independent messages. It does not need TCP-style listen or accept.",
            "objectives": [
              "Send and receive a local UDP datagram.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "sendto(sender, \"PING\", 4, 0, ...);",
            "question": "Which operation does this UDP receiver need?",
            "options": [
              "listen, then accept",
              "recvfrom",
              "TCP handshake"
            ],
            "correctIndex": 1,
            "explanation": "UDP receives datagrams with recvfrom; it does not use TCP listen/accept."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>Bind a UDP receiver to a local endpoint. Port 0 asks the OS to choose an available port; getsockname tells you the assigned endpoint. sendto specifies the destination. recvfrom can also return the sender address when provided with address arguments.</p>"
            },
            {
              "heading": "Plan for loss and size",
              "content": "<p>This example puts both endpoints in one process and uses a one-second receive timeout. A four-byte datagram fits the buffer. In a real protocol, choose a maximum datagram size and handle loss, duplicates, and ordering when your application needs them.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\nint main() {\n    int receiver = socket(AF_INET, SOCK_DGRAM, 0);\n    int sender = socket(AF_INET, SOCK_DGRAM, 0);\n    if (receiver < 0 || sender < 0) {\n        if (receiver >= 0) close(receiver);\n        if (sender >= 0) close(sender);\n        return 1;\n    }\n    const auto finish = [&] { close(sender); close(receiver); };\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n    address.sin_port = 0; // Let the OS choose an available local port.\n    if (bind(receiver, reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0) {\n        finish(); return 1;\n    }\n    socklen_t length = sizeof(address);\n    if (getsockname(receiver, reinterpret_cast<sockaddr*>(&address), &length) < 0) {\n        finish(); return 1;\n    }\n    timeval timeout{1, 0};\n    if (setsockopt(receiver, SOL_SOCKET, SO_RCVTIMEO, &timeout, sizeof(timeout)) < 0) {\n        finish(); return 1;\n    }\n    const char message[] = \"PING\";\n    if (sendto(sender, message, 4, 0, reinterpret_cast<sockaddr*>(&address), length) != 4) {\n        finish(); return 1;\n    }\n    char buffer[16];\n    auto n = recvfrom(receiver, buffer, sizeof(buffer), 0, nullptr, nullptr);\n    if (n < 0) { perror(\"recvfrom\"); finish(); return 1; }\n    std::cout.write(buffer, n); std::cout << '\\n';\n    finish();\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Applying TCP connection setup to UDP.",
              "whyItFails": "UDP sends independent datagrams and does not use the TCP listen/accept lifecycle.",
              "fix": "Use datagram operations and define application-level delivery rules if needed."
            }
          ],
          "keyTakeaways": [
            "Send and receive a local UDP datagram.",
            "Use datagram operations and define application-level delivery rules if needed.",
            "UDP receives datagrams with recvfrom; it does not use TCP listen/accept."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Send a postcard: UDP datagrams",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Bind a receiver to an OS-selected port.",
                "codeLine": "Bind a receiver to an OS-selected port.",
                "narration": "Bind a receiver to an OS-selected port. UDP uses sendto and recvfrom to send independent messages. It does not need TCP-style listen or accept.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Bind a receiver to an OS-selected port."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Send one PING datagram to that endpoint.",
                "codeLine": "Send one PING datagram to that endpoint.",
                "narration": "Send one PING datagram to that endpoint. UDP uses sendto and recvfrom to send independent messages. It does not need TCP-style listen or accept.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Send one PING datagram to that endpoint."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Receive up to one datagram and print its bytes.",
                "codeLine": "Receive up to one datagram and print its bytes.",
                "narration": "Receive up to one datagram and print its bytes. UDP uses sendto and recvfrom to send independent messages. It does not need TCP-style listen or accept.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Receive up to one datagram and print its bytes."
                  }
                ],
                "heap": [],
                "output": "PING"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Restore recvfrom and check its return value. Run the loopback datagram experiment.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\nint main() {\n    int receiver = socket(AF_INET, SOCK_DGRAM, 0);\n    int sender = socket(AF_INET, SOCK_DGRAM, 0);\n    if (receiver < 0 || sender < 0) {\n        if (receiver >= 0) close(receiver);\n        if (sender >= 0) close(sender);\n        return 1;\n    }\n    const auto finish = [&] { close(sender); close(receiver); };\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n    address.sin_port = 0; // Let the OS choose an available local port.\n    if (bind(receiver, reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0) {\n        finish(); return 1;\n    }\n    socklen_t length = sizeof(address);\n    if (getsockname(receiver, reinterpret_cast<sockaddr*>(&address), &length) < 0) {\n        finish(); return 1;\n    }\n    timeval timeout{1, 0};\n    if (setsockopt(receiver, SOL_SOCKET, SO_RCVTIMEO, &timeout, sizeof(timeout)) < 0) {\n        finish(); return 1;\n    }\n    const char message[] = \"PING\";\n    if (sendto(sender, message, 4, 0, reinterpret_cast<sockaddr*>(&address), length) != 4) {\n        finish(); return 1;\n    }\n    char buffer[16];\n    auto n = missing_receive(receiver, buffer, sizeof(buffer), 0, nullptr, nullptr);\n    if (n < 0) { perror(\"recvfrom\"); finish(); return 1; }\n    std::cout.write(buffer, n); std::cout << '\\n';\n    finish();\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\nint main() {\n    int receiver = socket(AF_INET, SOCK_DGRAM, 0);\n    int sender = socket(AF_INET, SOCK_DGRAM, 0);\n    if (receiver < 0 || sender < 0) {\n        if (receiver >= 0) close(receiver);\n        if (sender >= 0) close(sender);\n        return 1;\n    }\n    const auto finish = [&] { close(sender); close(receiver); };\n    sockaddr_in address{};\n    address.sin_family = AF_INET;\n    address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n    address.sin_port = 0; // Let the OS choose an available local port.\n    if (bind(receiver, reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0) {\n        finish(); return 1;\n    }\n    socklen_t length = sizeof(address);\n    if (getsockname(receiver, reinterpret_cast<sockaddr*>(&address), &length) < 0) {\n        finish(); return 1;\n    }\n    timeval timeout{1, 0};\n    if (setsockopt(receiver, SOL_SOCKET, SO_RCVTIMEO, &timeout, sizeof(timeout)) < 0) {\n        finish(); return 1;\n    }\n    const char message[] = \"PING\";\n    if (sendto(sender, message, 4, 0, reinterpret_cast<sockaddr*>(&address), length) != 4) {\n        finish(); return 1;\n    }\n    char buffer[16];\n    auto n = recvfrom(receiver, buffer, sizeof(buffer), 0, nullptr, nullptr);\n    if (n < 0) { perror(\"recvfrom\"); finish(); return 1; }\n    std::cout.write(buffer, n); std::cout << '\\n';\n    finish();\n}\n",
            "expectedOutput": "PING",
            "hints": [
              "Use datagram operations and define application-level delivery rules if needed.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "SOCK_DGRAM",
                "sendto(",
                "recvfrom("
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "listen(udp_socket, 4);",
            "options": [
              {
                "text": "Use recvfrom on the UDP receiver; listen is for connection-oriented sockets.",
                "isCorrect": true,
                "feedback": "Use datagram operations and define application-level delivery rules if needed."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "Which operation does this UDP receiver need?",
              "options": [
                "listen, then accept",
                "recvfrom",
                "TCP handshake"
              ],
              "correctIndex": 1,
              "explanation": "UDP receives datagrams with recvfrom; it does not use TCP listen/accept."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Use datagram operations and define application-level delivery rules if needed.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "Bind a UDP receiver to a local endpoint. Port 0 asks the OS to choose an available port; getsockname tells you the assigned endpoint. sendto specifies the destination. recvfrom can also return the sender address when provided with address arguments."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/09-udp.cpp",
            "filename": "09-udp.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 09-udp.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        }
      ]
    },
    {
      "id": "master",
      "level": "Master",
      "badge": "Build",
      "title": "04 · Build your echo service",
      "description": "Timeouts, ownership, and a complete local project.",
      "lessons": [
        {
          "id": "cpp-mst-1",
          "number": "10",
          "title": "Wait wisely: readiness & timeouts",
          "duration": "30 min",
          "xp": 325,
          "summary": "A program can wait for a descriptor to become ready before reading. A timeout lets it return to other work.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "Set a kitchen timer instead of staring at the oven forever. When it rings, decide whether to wait again, cancel, or do something else.",
            "keyInsight": "poll returns zero when its timeout expires without requested readiness."
          },
          "quickStart": {
            "goal": "Observe a timeout without blocking indefinitely.",
            "intro": "A program can wait for a descriptor to become ready before reading. A timeout lets it return to other work.",
            "objectives": [
              "Observe a timeout without blocking indefinitely.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "int ready = poll(&watched, 1, 100);\n// ready == 0",
            "question": "What should the program report?",
            "options": [
              "A message arrived",
              "The timeout expired",
              "A new connection is guaranteed"
            ],
            "correctIndex": 1,
            "explanation": "poll returns zero when its timeout expires without requested readiness."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>poll inspects descriptors for requested events. A positive return means inspect revents, zero means timeout, and a negative value means error. POLLIN reports readability; readability can include EOF, so recv still determines whether data or shutdown arrived.</p>"
            },
            {
              "heading": "Readiness is a prompt to inspect",
              "content": "<p>The example creates a stream socketpair but sends no data. poll waits up to 100 milliseconds and times out. For an event loop, use nonblocking sockets, handle EAGAIN, and recompute remaining time after interruptions when enforcing a deadline.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <poll.h>\n#include <cerrno>\nint main() {\n    int sockets[2];\n    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sockets) < 0) return 1;\n    pollfd watched{sockets[0], POLLIN, 0};\n    int ready = poll(&watched, 1, 100);\n    if (ready == 0) std::cout << \"No data yet: timeout\\n\";\n    else if (ready < 0) perror(\"poll\");\n    else if (watched.revents & POLLIN) std::cout << \"Readable\\n\";\n    else std::cout << \"Socket state changed; inspect revents\\n\";\n    close(sockets[0]); close(sockets[1]);\n    return ready < 0 ? 1 : 0;\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Assuming readability guarantees a full application message.",
              "whyItFails": "A readable socket may have only part of a message, or it may be reporting an orderly shutdown.",
              "fix": "Call recv, inspect its result, and continue accumulating a framed message."
            }
          ],
          "keyTakeaways": [
            "Observe a timeout without blocking indefinitely.",
            "Call recv, inspect its result, and continue accumulating a framed message.",
            "poll returns zero when its timeout expires without requested readiness."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Wait wisely: readiness & timeouts",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Watch a descriptor for POLLIN.",
                "codeLine": "Watch a descriptor for POLLIN.",
                "narration": "Watch a descriptor for POLLIN. A program can wait for a descriptor to become ready before reading. A timeout lets it return to other work.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Watch a descriptor for POLLIN."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Wait with a bounded poll timeout.",
                "codeLine": "Wait with a bounded poll timeout.",
                "narration": "Wait with a bounded poll timeout. A program can wait for a descriptor to become ready before reading. A timeout lets it return to other work.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Wait with a bounded poll timeout."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Handle timeout separately from errors and readiness.",
                "codeLine": "Handle timeout separately from errors and readiness.",
                "narration": "Handle timeout separately from errors and readiness. A program can wait for a descriptor to become ready before reading. A timeout lets it return to other work.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Handle timeout separately from errors and readiness."
                  }
                ],
                "heap": [],
                "output": "No data yet: timeout"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Correct the timeout condition and run the demo. Explain why readiness does not promise a complete message.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <poll.h>\n#include <cerrno>\nint main() {\n    int sockets[2];\n    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sockets) < 0) return 1;\n    pollfd watched{sockets[0], POLLIN, 0};\n    int ready = poll(&watched, 1, 100);\n    if (ready > 0) std::cout << \"No data yet: timeout\\n\";\n    else if (ready < 0) perror(\"poll\");\n    else if (watched.revents & POLLIN) std::cout << \"Readable\\n\";\n    else std::cout << \"Socket state changed; inspect revents\\n\";\n    close(sockets[0]); close(sockets[1]);\n    return ready < 0 ? 1 : 0;\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <poll.h>\n#include <cerrno>\nint main() {\n    int sockets[2];\n    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sockets) < 0) return 1;\n    pollfd watched{sockets[0], POLLIN, 0};\n    int ready = poll(&watched, 1, 100);\n    if (ready == 0) std::cout << \"No data yet: timeout\\n\";\n    else if (ready < 0) perror(\"poll\");\n    else if (watched.revents & POLLIN) std::cout << \"Readable\\n\";\n    else std::cout << \"Socket state changed; inspect revents\\n\";\n    close(sockets[0]); close(sockets[1]);\n    return ready < 0 ? 1 : 0;\n}\n",
            "expectedOutput": "No data yet: timeout",
            "hints": [
              "Call recv, inspect its result, and continue accumulating a framed message.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "poll(",
                "POLLIN",
                "ready == 0"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "if (ready > 0) std::cout << \"Timeout\";",
            "options": [
              {
                "text": "Zero indicates timeout; positive means inspect the event flags.",
                "isCorrect": true,
                "feedback": "Call recv, inspect its result, and continue accumulating a framed message."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "What should the program report?",
              "options": [
                "A message arrived",
                "The timeout expired",
                "A new connection is guaranteed"
              ],
              "correctIndex": 1,
              "explanation": "poll returns zero when its timeout expires without requested readiness."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Call recv, inspect its result, and continue accumulating a framed message.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "poll inspects descriptors for requested events. A positive return means inspect revents, zero means timeout, and a negative value means error. POLLIN reports readability; readability can include EOF, so recv still determines whether data or shutdown arrived."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/10-timeout.cpp",
            "filename": "10-timeout.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 10-timeout.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        },
        {
          "id": "cpp-mst-2",
          "number": "11",
          "title": "Own the resource: sockets with RAII",
          "duration": "30 min",
          "xp": 325,
          "summary": "C++ can tie an operating-system resource to an object lifetime. The destructor releases the descriptor when the object leaves scope.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "A room key is issued to one guest. When the guest checks out, the key is returned automatically. Copying ownership would make two guests return the same key.",
            "keyInsight": "Preventing copying avoids duplicate ownership. RAII manages lifetime, not network delivery."
          },
          "quickStart": {
            "goal": "Make socket cleanup automatic and prevent accidental copying.",
            "intro": "C++ can tie an operating-system resource to an object lifetime. The destructor releases the descriptor when the object leaves scope.",
            "objectives": [
              "Make socket cleanup automatic and prevent accidental copying.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "Socket(const Socket&) = delete;",
            "question": "Which problem does this prevent?",
            "options": [
              "Slow network speed",
              "Two owners closing the same descriptor",
              "Packet loss"
            ],
            "correctIndex": 1,
            "explanation": "Preventing copying avoids duplicate ownership. RAII manages lifetime, not network delivery."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>A small Socket class owns the descriptor. Its destructor closes it. Deleting the copy constructor and copy assignment prevents two objects from owning the same integer. A production wrapper can also implement move semantics to transfer ownership.</p>"
            },
            {
              "heading": "Follow every exit path",
              "content": "<p>In this example the constructor throws if descriptor creation failed; main catches the exception. If another operation throws after construction, stack unwinding destroys the owning object. The short teaching wrapper is noncopyable and nonmovable.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <stdexcept>\nclass Socket {\n    int fd_;\npublic:\n    explicit Socket(int fd) : fd_(fd) {\n        if (fd < 0) throw std::runtime_error(\"socket failed\");\n    }\n    ~Socket() { close(fd_); }\n    Socket(const Socket&) = delete;\n    Socket& operator=(const Socket&) = delete;\n    int get() const { return fd_; }\n};\nint main() {\n    try {\n        Socket connection(socket(AF_INET, SOCK_STREAM, 0));\n        std::cout << \"Owned descriptor: \" << connection.get() << '\\n';\n    } catch (const std::exception& e) {\n        std::cerr << e.what() << '\\n'; return 1;\n    }\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Copying a descriptor-owning object without transferring ownership.",
              "whyItFails": "Two objects holding the same owned descriptor can close it twice, potentially closing a later resource that reused the number.",
              "fix": "Make the owner noncopyable; implement moves deliberately if required."
            }
          ],
          "keyTakeaways": [
            "Make socket cleanup automatic and prevent accidental copying.",
            "Make the owner noncopyable; implement moves deliberately if required.",
            "Preventing copying avoids duplicate ownership. RAII manages lifetime, not network delivery."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Own the resource: sockets with RAII",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Construct one owner from the descriptor.",
                "codeLine": "Construct one owner from the descriptor.",
                "narration": "Construct one owner from the descriptor. C++ can tie an operating-system resource to an object lifetime. The destructor releases the descriptor when the object leaves scope.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Construct one owner from the descriptor."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Use get() to access the borrowed descriptor.",
                "codeLine": "Use get() to access the borrowed descriptor.",
                "narration": "Use get() to access the borrowed descriptor. C++ can tie an operating-system resource to an object lifetime. The destructor releases the descriptor when the object leaves scope.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Use get() to access the borrowed descriptor."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Leave scope and close automatically.",
                "codeLine": "Leave scope and close automatically.",
                "narration": "Leave scope and close automatically. C++ can tie an operating-system resource to an object lifetime. The destructor releases the descriptor when the object leaves scope.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Leave scope and close automatically."
                  }
                ],
                "heap": [],
                "output": "Owned descriptor: <OS-assigned number>"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Delete the copy constructor. Compile the wrapper and explain when its destructor runs.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <stdexcept>\nclass Socket {\n    int fd_;\npublic:\n    explicit Socket(int fd) : fd_(fd) {\n        if (fd < 0) throw std::runtime_error(\"socket failed\");\n    }\n    ~Socket() { close(fd_); }\n    // TODO: delete the copy constructor.\n    Socket& operator=(const Socket&) = delete;\n    int get() const { return fd_; }\n};\nint main() {\n    try {\n        Socket connection(socket(AF_INET, SOCK_STREAM, 0));\n        std::cout << \"Owned descriptor: \" << connection.get() << '\\n';\n    } catch (const std::exception& e) {\n        std::cerr << e.what() << '\\n'; return 1;\n    }\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <stdexcept>\nclass Socket {\n    int fd_;\npublic:\n    explicit Socket(int fd) : fd_(fd) {\n        if (fd < 0) throw std::runtime_error(\"socket failed\");\n    }\n    ~Socket() { close(fd_); }\n    Socket(const Socket&) = delete;\n    Socket& operator=(const Socket&) = delete;\n    int get() const { return fd_; }\n};\nint main() {\n    try {\n        Socket connection(socket(AF_INET, SOCK_STREAM, 0));\n        std::cout << \"Owned descriptor: \" << connection.get() << '\\n';\n    } catch (const std::exception& e) {\n        std::cerr << e.what() << '\\n'; return 1;\n    }\n}\n",
            "expectedOutput": "Owned descriptor: <OS-assigned number>",
            "hints": [
              "Make the owner noncopyable; implement moves deliberately if required.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "~Socket()",
                "close(fd_)",
                "Socket(const Socket&) = delete"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "Socket copy = original; // both hold the same fd",
            "options": [
              {
                "text": "Delete copying or explicitly transfer ownership using move semantics.",
                "isCorrect": true,
                "feedback": "Make the owner noncopyable; implement moves deliberately if required."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "Which problem does this prevent?",
              "options": [
                "Slow network speed",
                "Two owners closing the same descriptor",
                "Packet loss"
              ],
              "correctIndex": 1,
              "explanation": "Preventing copying avoids duplicate ownership. RAII manages lifetime, not network delivery."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Make the owner noncopyable; implement moves deliberately if required.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "A small Socket class owns the descriptor. Its destructor closes it. Deleting the copy constructor and copy assignment prevents two objects from owning the same integer. A production wrapper can also implement move semantics to transfer ownership."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/11-raii.cpp",
            "filename": "11-raii.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 11-raii.cpp -o lesson\n./lesson",
            "client": null
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        },
        {
          "id": "cpp-mst-3",
          "number": "12",
          "title": "Build it: your TCP echo service",
          "duration": "30 min",
          "xp": 325,
          "summary": "Bring the pieces together: a listener, an accepted socket, bounded buffers, partial writes, and automatic cleanup.",
          "mentalModel": {
            "title": "Picture it first",
            "analogy": "An echo service is a mirror for messages. It sends the received bytes back so you can verify the whole round trip.",
            "keyInsight": "A TCP connection has two directions. A write half-close signals EOF to the peer while still permitting reads."
          },
          "quickStart": {
            "goal": "Connect two processes and echo the exact bytes the client sends.",
            "intro": "Bring the pieces together: a listener, an accepted socket, bounded buffers, partial writes, and automatic cleanup.",
            "objectives": [
              "Connect two processes and echo the exact bytes the client sends.",
              "Predict the result before running the local example.",
              "Explain one mistake and how to fix it."
            ],
            "code": "client: send → shutdown(SHUT_WR) → recv\nserver: recv → echo → recv == 0 → close",
            "question": "Why can the client still read after shutdown(SHUT_WR)?",
            "options": [
              "It only closes the sending direction",
              "It opens a new connection",
              "It switches to UDP"
            ],
            "correctIndex": 0,
            "explanation": "A TCP connection has two directions. A write half-close signals EOF to the peer while still permitting reads."
          },
          "theory": [
            {
              "heading": "The idea, one piece at a time",
              "content": "<p>The server listens on 127.0.0.1:8080 and handles one client. The client sends a message, then shutdown(SHUT_WR) signals that it has finished sending while leaving reading available. The server echoes bytes until EOF and closes; the client reads the reply until EOF.</p>"
            },
            {
              "heading": "Prove the round trip",
              "content": "<p>Compile the downloaded server and companion client in two terminals. Start the server, then run the client and compare the exact response. This teaching server handles one connection and exits. Extensions: add maximum session time, multiple clients, a line protocol, and tests for fragmented input.</p>",
              "codeSnippet": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\n#include <csignal>\n#include <stdexcept>\nclass Socket {\n    int fd_;\npublic:\n    explicit Socket(int fd) : fd_(fd) {\n        if (fd < 0) throw std::runtime_error(\"socket operation failed\");\n    }\n    ~Socket() { close(fd_); }\n    Socket(const Socket&) = delete;\n    Socket& operator=(const Socket&) = delete;\n    int get() const { return fd_; }\n};\nbool send_all(int fd, const char* data, std::size_t size) {\n    std::size_t sent = 0;\n    while (sent < size) {\n        auto n = send(fd, data + sent, size - sent, MSG_NOSIGNAL);\n        if (n < 0 && errno == EINTR) continue;\n        if (n <= 0) return false;\n        sent += static_cast<std::size_t>(n);\n    }\n    return true;\n}\nint main() {\n    try {\n        Socket listener(socket(AF_INET, SOCK_STREAM, 0));\n        int reuse = 1;\n        if (setsockopt(listener.get(), SOL_SOCKET, SO_REUSEADDR, &reuse, sizeof(reuse)) < 0)\n            throw std::runtime_error(\"setsockopt failed\");\n        sockaddr_in address{};\n        address.sin_family = AF_INET;\n        address.sin_port = htons(8080);\n        address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n        if (bind(listener.get(), reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0)\n            throw std::runtime_error(\"bind failed: is port 8080 busy?\");\n        if (listen(listener.get(), 4) < 0) throw std::runtime_error(\"listen failed\");\n        std::cout << \"Ready on 127.0.0.1:8080 (one client)\" << std::endl;\n        int accepted;\n        do { accepted = accept(listener.get(), nullptr, nullptr); } while (accepted < 0 && errno == EINTR);\n        Socket client(accepted);\n        char buffer[1024];\n        for (;;) {\n            auto n = recv(client.get(), buffer, sizeof(buffer), 0);\n            if (n < 0 && errno == EINTR) continue;\n            if (n < 0) throw std::runtime_error(\"recv failed\");\n            if (n == 0) break;\n            if (!send_all(client.get(), buffer, static_cast<std::size_t>(n)))\n                throw std::runtime_error(\"send failed\");\n        }\n        std::cout << \"Client disconnected; resources released\\n\";\n    } catch (const std::exception& e) {\n        std::cerr << e.what() << '\\n'; return 1;\n    }\n}\n"
            }
          ],
          "pitfalls": [
            {
              "mistake": "Closing the entire connection before reading the reply.",
              "whyItFails": "close releases the descriptor for both directions. The program cannot receive the reply through it afterwards.",
              "fix": "Half-close the sending direction, read until EOF, then close the descriptor."
            }
          ],
          "keyTakeaways": [
            "Connect two processes and echo the exact bytes the client sends.",
            "Half-close the sending direction, read until EOF, then close the descriptor.",
            "A TCP connection has two directions. A write half-close signals EOF to the peer while still permitting reads."
          ],
          "simulation": {
            "type": "network-tracer",
            "title": "Trace it: Build it: your TCP echo service",
            "instructions": "Follow the prepared states, then change the message and transport in the packet lab.",
            "steps": [
              {
                "label": "1. Bind and listen on the loopback endpoint.",
                "codeLine": "Bind and listen on the loopback endpoint.",
                "narration": "Bind and listen on the loopback endpoint. Bring the pieces together: a listener, an accepted socket, bounded buffers, partial writes, and automatic cleanup.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Bind and listen on the loopback endpoint."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "2. Accept one client into a separate socket.",
                "codeLine": "Accept one client into a separate socket.",
                "narration": "Accept one client into a separate socket. Bring the pieces together: a listener, an accepted socket, bounded buffers, partial writes, and automatic cleanup.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Accept one client into a separate socket."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "3. Receive bytes and echo them with a partial-write loop.",
                "codeLine": "Receive bytes and echo them with a partial-write loop.",
                "narration": "Receive bytes and echo them with a partial-write loop. Bring the pieces together: a listener, an accepted socket, bounded buffers, partial writes, and automatic cleanup.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Receive bytes and echo them with a partial-write loop."
                  }
                ],
                "heap": [],
                "output": "Waiting for the next step."
              },
              {
                "label": "4. Observe EOF and release owned sockets.",
                "codeLine": "Observe EOF and release owned sockets.",
                "narration": "Observe EOF and release owned sockets. Bring the pieces together: a listener, an accepted socket, bounded buffers, partial writes, and automatic cleanup.",
                "stack": [
                  {
                    "name": "Program state",
                    "type": "network",
                    "value": "Observe EOF and release owned sockets."
                  }
                ],
                "heap": [],
                "output": "Client prints: Hello from C++!"
              }
            ]
          },
          "playground": {
            "title": "Your local C++ lab",
            "mission": "Restore recv in the echo loop. Download server and client, compile both, and verify the full round trip.",
            "starterCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\n#include <csignal>\n#include <stdexcept>\nclass Socket {\n    int fd_;\npublic:\n    explicit Socket(int fd) : fd_(fd) {\n        if (fd < 0) throw std::runtime_error(\"socket operation failed\");\n    }\n    ~Socket() { close(fd_); }\n    Socket(const Socket&) = delete;\n    Socket& operator=(const Socket&) = delete;\n    int get() const { return fd_; }\n};\nbool send_all(int fd, const char* data, std::size_t size) {\n    std::size_t sent = 0;\n    while (sent < size) {\n        auto n = send(fd, data + sent, size - sent, MSG_NOSIGNAL);\n        if (n < 0 && errno == EINTR) continue;\n        if (n <= 0) return false;\n        sent += static_cast<std::size_t>(n);\n    }\n    return true;\n}\nint main() {\n    try {\n        Socket listener(socket(AF_INET, SOCK_STREAM, 0));\n        int reuse = 1;\n        if (setsockopt(listener.get(), SOL_SOCKET, SO_REUSEADDR, &reuse, sizeof(reuse)) < 0)\n            throw std::runtime_error(\"setsockopt failed\");\n        sockaddr_in address{};\n        address.sin_family = AF_INET;\n        address.sin_port = htons(8080);\n        address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n        if (bind(listener.get(), reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0)\n            throw std::runtime_error(\"bind failed: is port 8080 busy?\");\n        if (listen(listener.get(), 4) < 0) throw std::runtime_error(\"listen failed\");\n        std::cout << \"Ready on 127.0.0.1:8080 (one client)\" << std::endl;\n        int accepted;\n        do { accepted = accept(listener.get(), nullptr, nullptr); } while (accepted < 0 && errno == EINTR);\n        Socket client(accepted);\n        char buffer[1024];\n        for (;;) {\n            auto n = missing_receive(client.get(), buffer, sizeof(buffer), 0);\n            if (n < 0 && errno == EINTR) continue;\n            if (n < 0) throw std::runtime_error(\"recv failed\");\n            if (n == 0) break;\n            if (!send_all(client.get(), buffer, static_cast<std::size_t>(n)))\n                throw std::runtime_error(\"send failed\");\n        }\n        std::cout << \"Client disconnected; resources released\\n\";\n    } catch (const std::exception& e) {\n        std::cerr << e.what() << '\\n'; return 1;\n    }\n}\n",
            "solutionCode": "#include <sys/socket.h>\n#include <netinet/in.h>\n#include <arpa/inet.h>\n#include <unistd.h>\n#include <iostream>\n#include <cerrno>\n#include <csignal>\n#include <stdexcept>\nclass Socket {\n    int fd_;\npublic:\n    explicit Socket(int fd) : fd_(fd) {\n        if (fd < 0) throw std::runtime_error(\"socket operation failed\");\n    }\n    ~Socket() { close(fd_); }\n    Socket(const Socket&) = delete;\n    Socket& operator=(const Socket&) = delete;\n    int get() const { return fd_; }\n};\nbool send_all(int fd, const char* data, std::size_t size) {\n    std::size_t sent = 0;\n    while (sent < size) {\n        auto n = send(fd, data + sent, size - sent, MSG_NOSIGNAL);\n        if (n < 0 && errno == EINTR) continue;\n        if (n <= 0) return false;\n        sent += static_cast<std::size_t>(n);\n    }\n    return true;\n}\nint main() {\n    try {\n        Socket listener(socket(AF_INET, SOCK_STREAM, 0));\n        int reuse = 1;\n        if (setsockopt(listener.get(), SOL_SOCKET, SO_REUSEADDR, &reuse, sizeof(reuse)) < 0)\n            throw std::runtime_error(\"setsockopt failed\");\n        sockaddr_in address{};\n        address.sin_family = AF_INET;\n        address.sin_port = htons(8080);\n        address.sin_addr.s_addr = htonl(INADDR_LOOPBACK);\n        if (bind(listener.get(), reinterpret_cast<sockaddr*>(&address), sizeof(address)) < 0)\n            throw std::runtime_error(\"bind failed: is port 8080 busy?\");\n        if (listen(listener.get(), 4) < 0) throw std::runtime_error(\"listen failed\");\n        std::cout << \"Ready on 127.0.0.1:8080 (one client)\" << std::endl;\n        int accepted;\n        do { accepted = accept(listener.get(), nullptr, nullptr); } while (accepted < 0 && errno == EINTR);\n        Socket client(accepted);\n        char buffer[1024];\n        for (;;) {\n            auto n = recv(client.get(), buffer, sizeof(buffer), 0);\n            if (n < 0 && errno == EINTR) continue;\n            if (n < 0) throw std::runtime_error(\"recv failed\");\n            if (n == 0) break;\n            if (!send_all(client.get(), buffer, static_cast<std::size_t>(n)))\n                throw std::runtime_error(\"send failed\");\n        }\n        std::cout << \"Client disconnected; resources released\\n\";\n    } catch (const std::exception& e) {\n        std::cerr << e.what() << '\\n'; return 1;\n    }\n}\n",
            "expectedOutput": "Client prints: Hello from C++!",
            "hints": [
              "Half-close the sending direction, read until EOF, then close the descriptor.",
              "Compare the relevant line with the annotated example. Compile locally to validate C++ syntax and behavior."
            ],
            "validation": {
              "requiredKeywords": [
                "accept(",
                "recv(",
                "send_all(",
                "SO_REUSEADDR",
                "INADDR_LOOPBACK"
              ],
              "expectedOutputContains": []
            }
          },
          "miniActivity": {
            "type": "bug-hunter",
            "title": "Spot the networking mistake",
            "prompt": "Which change addresses this problem?",
            "buggyCode": "close(fd); // then try to read the echo",
            "options": [
              {
                "text": "Use shutdown(fd, SHUT_WR) before reading; close only after receiving the response.",
                "isCorrect": true,
                "feedback": "Half-close the sending direction, read until EOF, then close the descriptor."
              },
              {
                "text": "Ignore the return values and repeat the operation forever.",
                "isCorrect": false,
                "feedback": "Return values distinguish progress, end of stream, and failure. Inspect them before choosing the next action."
              },
              {
                "text": "Increase every buffer without changing the logic.",
                "isCorrect": false,
                "feedback": "A larger buffer does not fix ownership, connection setup, or protocol logic."
              }
            ]
          },
          "quiz": [
            {
              "question": "Why can the client still read after shutdown(SHUT_WR)?",
              "options": [
                "It only closes the sending direction",
                "It opens a new connection",
                "It switches to UDP"
              ],
              "correctIndex": 0,
              "explanation": "A TCP connection has two directions. A write half-close signals EOF to the peer while still permitting reads."
            },
            {
              "question": "Which habit makes this example more reliable?",
              "options": [
                "Ignore errors if the example is small",
                "Half-close the sending direction, read until EOF, then close the descriptor.",
                "Assume the first run proves every edge case"
              ],
              "correctIndex": 1,
              "explanation": "The server listens on 127.0.0.1:8080 and handles one client. The client sends a message, then shutdown(SHUT_WR) signals that it has finished sending while leaving reading available. The server echoes bytes until EOF and closes; the client reads the reply until EOF."
            },
            {
              "question": "What does the in-browser C++ source review verify?",
              "options": [
                "That a real network connection succeeded",
                "That a compiler accepted the program",
                "That selected constructs appear in the source; run locally to verify behavior"
              ],
              "correctIndex": 2,
              "explanation": "The browser activity is a model, and source review checks selected text. The downloaded C++ example runs with a local compiler."
            }
          ],
          "localLab": {
            "source": "examples/networking/12-echo-server.cpp",
            "filename": "12-echo-server.cpp",
            "platform": "Linux / WSL · C++17 · POSIX sockets",
            "command": "g++ -std=c++17 -Wall -Wextra 12-echo-server.cpp -o lesson\n./lesson",
            "client": "examples/networking/echo-client.cpp"
          },
          "references": [
            {
              "title": "Linux socket API",
              "url": "https://man7.org/linux/man-pages/man7/socket.7.html"
            },
            {
              "title": "Boost.Asio: a portable next step",
              "url": "https://www.boost.org/latest/doc/html/boost_asio/tutorial/tutdaytime1.html"
            }
          ]
        }
      ]
    }
  ]
};
