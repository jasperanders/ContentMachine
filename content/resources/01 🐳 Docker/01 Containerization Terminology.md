---
author: Jasper Anders ©
---

# Containerization Terminology

Here you find a selection of definitions for containerization technology. You should read about [[00 Understanding Docker|Understanding Docker]] first.

### Image
An **image** can be seen as an operating system snapshot. It has all dependencies, a piece of software needs, preinstalled. It can be easily shared and thus allows reproducible environments for code to run in.

### Container
A **container** is a running an image. A container normally is only running one Application. For example, in a standard web application, you would have one container running your frontend, one running the backend and one for the Database. There can be multiple containers running the same image.

### Host System
The **host system** is the system where the container is running in.

### Volume
A **volume** can be mounted into a container to get data persistency in an otherwise volatile environment. A volume can be imagined as a USB-stick that you plug into your container, every time you start it. Even if you kill the container and build a new one, the USB-stick can stay the same and your data is persited.

### Container Runtime
A **container runtime** is responsible for actually running a container on the host machine. Docker provides a container runtime, but there are also standalone runtimes (e.g. [Containerd](https://containerd.io/), which is used by Kubernetes).

### Container Registry
A **container registry** is a repository or database where container images are saved. These images can be public, like the [Docker Hub](https://hub.docker.com), or private, like the integrated [[GitLab Registry|GitLab Registry]]. When running a container, you can specify where an image should be pulled from. It is a best practice to build an image in a CI pipeline, push it to a registry and while deploying pull the image again.

[[02 GitLab Container Registry Integration|Read how to set up your Kubernetes Cluster to pull from the gitlab registry.]]

### Dockerfile

Docker itself provides an excellent description of what a Dockerfile is:

> _"Docker can build images automatically by reading the instructions from a `Dockerfile`. A `Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image."_ -- [Docker](https://docker.com)