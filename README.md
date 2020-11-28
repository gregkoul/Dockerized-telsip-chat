# Dockerized-telsip-chat
This is a simple chatroom webapp using NodeJS along with express, ejs and socket.io libraries.

# Follow these steps in order to create your Dockerized-telsip-chat

1. First of all you have to clone this repository on your server.
```bash
    -$ mkdir -p ~/MyProjects
    -$ cd ~/MyProjects
    -$ git clone https://github.com/gregkoul/Dockerized-telsip-chat.git
                      OR via SSH
    -$ git clone git@github.com:gregkoul/Dockerized-telsip-chat.git
```
2. Now you have to build the Docker Image locally.
```bash
    -$ cd ~/MyProjects/Dockerized-telsip-chat
    -$ docker build . -t telsip-chat:1.0
```
3. Now you have to spin up your container.

```bash
    -$ docker run -p 4000:4000 --name=chat -e PROTOCOL=http -e HOST=your.domain.gr -e PORT=4000 telsip-chat:1.0
```
