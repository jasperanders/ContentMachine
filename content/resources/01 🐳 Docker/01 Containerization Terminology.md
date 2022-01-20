# Containerization Terminology

Here you find a selection of definitions for containerization technology.

### Image
An **image** can be seen as an operating system snapshot. It has all dependencies a piece of software needs preinstalled. It can be easily shared and thus allows reproducible environments for code to run in.

### Container
A **container** is a running an image. A container normally is only running one Application. In a standard web application for example you would have one container for your frontend, one for the backend and one for the Database. There can be multiple containers running the same image. By default, Docker provides a (funny) Name for each Container.

### Host System
The **host system** is the system where the container is running in.

### Volume
A **volume** can be mounted into a container to get data persistency in an otherwise volatile environment.

### Container Runtime
A **container runtime** is responsible for actually running a container on the host machine. Docker provides a container runtime, but there are also standalone runtimes (e.g. [Containerd](https://containerd.io/), which is used by Kubernetes).

### Container Registry
A **container registy** is a repository where container images are saved. These images can be public, like the [Docker Hub](https://hub.docker.com), or private like the integrated [[GitLab Registry|GitLab Registry]]. When running a container, you can specify where an image should be pulled from. It is a best practice to build an image in a CI pipeline, push it to a registry and while deploying pull the image again.

[[02 GitLab Container Registry Integration|Read how to set up your Kubernetes Cluster to pull from the gitlab registry.]]

### Dockerfile

> _"Docker can build images automatically by reading the instructions from a `Dockerfile`. A `Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image."_ -- Docker