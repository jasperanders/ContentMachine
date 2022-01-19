tags: #devops
docs: _[kubernetes.io](https://kubernetes.io/docs/home/)_

---

# Why use Kubernetes?

Kubernetes is the industry standard for [[DevOps#Container Orchestration|Container Orchestration]]. The power but also the complexity of Kubernetes is its high level of abstraction. Instead of directly interacting with a technology, you always interact with Kubernetes, which then internally interacts with the technology. You don't start docker containers, you start Kubernetes pods; you don't configure a Nginx web server yourself but configure an ingress resource that uses Nginx. This has the advantage that if underlying technology needs to change, Kubernetes can simply switch it out. 

This actually happened, in the beginning Kubernetes was using the Docker container runtime, then they made the switch to _containerd_. Still using Kubernetes didn't change, that's why abstraction is useful.

# Alternatives to Kubernetes

At the moment, nothing really. Still, there might be something in the future. If you want to look for alternatives, use [this or a similar search query.](https://www.google.com/search?q=os+level+virtualization+software)

# Read Next

[[MicroK8s Setup|Learn how to deploy a application to the internet using microk8s.]]

# Further Resources
### Internal
- [[Kubernetes Components]]
- [[Using Kubernetes]]

### External
- [A great full course on K8s.](https://www.youtube.com/watch?v=X48VuDVv0do)

