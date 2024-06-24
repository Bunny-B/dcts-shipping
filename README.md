# DCTS - Direct Communication Through Sockets
![Version](https://img.shields.io/static/v1?label=State&message=Early%20Access&color=orange) 
<!-- ![GitHub all releases](https://img.shields.io/github/downloads/hackthedev/dcts-shipping/total?color=success&label=Downloads) -->
[Visit our Forum (Planned Features and more)](https://dcts.chat/)

This project was made with the goal to combine TeamSpeak and Discord. The goal: A platform that looks modern like Discord but runs the server like TeamSpeak. DCTS allows you to run your own Discord Server like a TeamSpeak server, in simple words.

Since you can host the server yourself you're also the one in control of the data. This could be important for people who value their data privacy.

<br>

## Licensing
While the code itself is open-source i dont plan to license it (maybe in the future until i find a license). As long as its not used for commercial use or re-published _(e.g. editing it and releasing it with the same or different name; forks etc are fine ofc)_ i really dont mind it. 
If you have questions feel free to contact me.

<br>

## Installing
### Docker
To install via docker you can either clone and build or use the prebuilt image.
```
$ sudo docker run --name dcts-server  -p 8080:2052 ghcr.io/t2vee/dcts
```
or via docker-compose:
```
$ curl -L -O https://github.com/t2vee/dcts-shipping/raw/docker-support/docker/docker-compose.yml
$ sudo docker compose up -d
```


### NPM
Requires node.js to be installed, see [Tested Versions](https://github.com/t2vee/dcts-shipping/tree/docker-support?tab=readme-ov-file#tested-versions). Clone the git repository and execute the following commands inside the app's directory.
```
$ git clone https://github.com/hackthedev/dcts-shipping --depth 1
$ npm install
$ node .
```

<br>

## Connecting to your server
Once you've installed the server and its running, you can open your browser and enter the server's ip and add the port 2052.<br>
Example: localhost:2052

<br>

## Tested Versions
- ✔️ v21.7.3
- ✔️ v18.20.2
- ✔️ v16.16.0
- 🚫 v12.22.9

<br>

## Tutorial
(version in video slightly outdated)<br>
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/LJ_IEe7nZnw/0.jpg)](https://www.youtube.com/watch?v=LJ_IEe7nZnw)
