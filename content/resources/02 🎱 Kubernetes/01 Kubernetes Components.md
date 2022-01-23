---
author: Jasper Anders ©
---

# Kubernetes Components

Because of its abstractions, Kubernetes introduces some concepts that need introduction. This is not an in depth description of all components. Consider this a quick overview of some essential components.

For in depth information, take a look at the Kubernetes [docs](https://kubernetes.io/docs/home/).

### kubectl

`kubectl` is the command line tool that is used to manage Kubernetes clusters.

### Manifests

A _manifest_ is a YAML file that is a description of a desired state of specific Kubernetes resources. Every Kubernetes resource (e.g. a Pod, Deployment, Service, etc.) can be described in such a _manifest_. If a _manifest_ is applied, Kubernetes automatically adjusts the state of the current cluster to match the described state. A sample _manifest_ and how to use it can be found [[02 MicroK8s Setup#Applying the First Manifest|here]].

### Pod

_Pods_ are the smallest unit in Kubernetes. It is an abstraction over one or more [[01 Containerization Terminology#Container|containers]] that are tightly coupled.

### Deployment

A _deployment_ describes a desired state for a set of pods to be in. _Deployments_ can be dynamically updated with no application downtime. It also is responsible for scaling the amount of pods for a particular application.

### Service

A _service_ makes [[#Deployment|deployments]] internally available. If you want interaction between two deployments, you need to create a _service_ for each of them and then connect them to the respective _service_.

### Ingress

Kubernetes implements an in-cluster network for inter-resource communication. To serve external requests, Kubernetes employs _ingress_ resources as an entry point to the cluster. _Ingress_ resources forward requests to the right services, dependent on subdomain- or URL-matching. They also can handle the SSL encryption and termination. _Ingress_ resources are managed by a _ingress_ controller, that need to be deployed separately.

### Persistent Volume Claim

Containers have no persistency. If you kill a container, all non-persistent data is gone. A volume allows mounting storage into a service. This storage can be either local or remote (e.g. AWS S3 storage). To be accessible to a resource the volume must be claimed first. This is called a _persistent volume claim_.

### Node

A _node_ is a compute-instance that is part of a Kubernetes cluster. Load is distributed between _nodes_.

### StatefulSet

A _StatefulSet_, as the name suggests, manages stateful pods (applications). These can be databases or other apps that store data. This is necessary because if multiple instances of an application were all allowed to change data, there obviously would be data inconsistency. _StatefulSets_ circumvent this by using a _master-slave_ relationship between all instances of a stateful set. Only the _master_ can make actual changes to the data. _Slaves_ can still query data or ask the _master_ to change data.

