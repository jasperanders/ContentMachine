Here you find a selection of definitions for containerization technology.

#### Image
An **image** can be seen as an operating system snapshot. It can be easily shared and thus allows reproducible environments for code to run in. ^a92879

#### Container
A **container** is a running an image. A container normally is only running one Application. In a standard web application for example you would have one container for your frontend, one for the backend and one for the Database. There can be multiple containers running the same image. By default, Docker provides a (funny) Name for each Container.  ^75e9da

#### Host System
The **host system** is the system where the container is running in. ^912230

#### Volume
A **volume** can be mounted into a container to get data persistency in an otherwise volatile environment.

#### Container Runtime
A **container runtime** is responsible for actually running a container on the host machine. Docker provides a container runtime, but there are also standalone runtimes (e.g. [Containerd](https://containerd.io/)). ^47bfaa

#### Registry
- [ ] Todo
[[GitLab Container Registry]]