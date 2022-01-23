---
author: Jasper Anders ©
---

# Understanding Kubernetes

## Why use Kubernetes?

Kubernetes is the industry standard for [[01 Understanding DevOps#Container Orchestration|Container Orchestration]]. One reason why it is so powerful is its use of declarative instructions. Instead of writing code that gets executed and which creates your cluster state, in Kubernetes you provide manifest files, that specify a state you want your cluster to be in. Kubernetes has the ability to automatically move itself into this state. If you tell Kubernetes to always have two instances of your application running, it will automatically create these instances. If one crashes, it gets deleted and a new one is created to again match the defined state. 

As a cluster, can consist of multiple servers, Kubernetes can even handle server outage quite well. Imagine a cluster with three servers which are running and serving an application. Now one of the servers is hit by a power outage; Kubernetes finds that its current state does not meet the required one and distributes the resources from the lost server to the other two. If the server is started again, resources can be moved back. 

Further, Kubernetes implements a high level of abstraction. Instead of directly interacting with a technology, you always interact with Kubernetes, which then internally interacts with the technology. You don't start docker containers, you start Kubernetes pods; you don't configure a Nginx web server yourself but configure an ingress resource that uses Nginx. This has the advantage that if underlying technology evolves, Kubernetes can simply switch it out, without you having to adjust your Manifests. 

This actually happened recently: In the beginning Kubernetes was using the Docker [[01 Containerization Terminology#Container Runtime|container runtime]], then they made the switch to _containerd_. Still, using Kubernetes didn't change, that's why abstraction is useful.

# Alternatives to Kubernetes

If you want to look for alternatives, use [this or a similar search query.](https://www.google.com/search?q=container+as+a+service+tools) Many of the suggested "alternatives" use Docker under the hood (e.g. OpenShift). Keep an eye out for these if you really want something different. 

Some current alternatives include:
- [Docker Swarm](https://docs.docker.com/engine/swarm/)
- [AWS Fairgate](https://aws.amazon.com/de/fargate/)
- [Nomad](https://www.nomadproject.io/)

# Read Next

[[02 MicroK8s Setup|Learn how to deploy an application to the internet using microk8s.]]

# Further Resources
- [[01 Kubernetes Components]]
- [[04 Using Kubernetes]]
- [A great full course on K8s.](https://www.youtube.com/watch?v=X48VuDVv0do)
- [Kubernets Docs](https://kubernetes.io/docs/home/)


