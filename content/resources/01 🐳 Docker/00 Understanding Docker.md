---
author: Jasper Anders ©
---

# Understanding Docker

## Why use Docker?

Docker is a [[01 Understanding DevOps#Software Containerization|software containerization tool]], that is free and open source. If you want to run or build [[01 Containerization Terminology#Container|containers]] locally or in a pipeline, docker is a good pick. Besides the ability to `build` and `run` containers, docker also provides a large [[01 Containerization Terminology#Container Registry|Registry]] called Docker Hub. You might notice, that the only place you will find docker in this project is in the [[01 Understanding DevOps#CI Pipeline|pipeline]]. Why, might you ask, don't we need docker on the server or in our cluster, if we use docker to create [[01 Containerization Terminology#Image|images]]? The reason is that, container images have been standardized. Any [[01 Containerization Terminology#Container Runtime|container runtime]] can run any image (as long as they follow the standard). The main takeaway here is, you can continue using docker locally or in the pipeline, even if you don't use it in production.

Side note: When people talk about Docker, they mostly mean _Docker Engine_, a product of the company called Docker. The company itself has other products, not all of them are free to use and open source. One example is Docker Desktop (not available for Linux), which is supposed to be very handy and even can provide a local Kubernetes cluster. This tool is not open source and only free for personal use.

## Alternatives to Docker

Because of standardization efforts, Docker images are compatible with other containerization software. If you want to look for alternatives, use [this or a similar search query.](https://www.google.com/search?q=os+level+virtualization+software) 

Some related (currently) big names include:
- [Podman](https://podman.io/)
- [LXD](https://linuxcontainers.org/)
- [Containerd](https://containerd.io/) ([[01 Containerization Terminology#Container Runtime|container runtime]])


# Related

- [[01 Containerization Terminology|Check out containerization terminology.]]    
- [[02 Using Docker|Take a look at some handy docker commands.]]  
- [Docs on docker.com](https://www.docker.com/)  
- [Installation for Ubuntu](https://docs.docker.com/engine/install/ubuntu/)