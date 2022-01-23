---
author: Jasper Anders ©
---

# Using Kubernetes

## kubectl
`kubectl` is the CLI tool that allows interaction with your [[00 Understanding Kubernetes|Kubernetes]] cluster. In the following you will find some useful commands.

### Print all resources
```bash
kubectl get all [--all-namespaces]
```

### Print resource usage
```bash
kubectl top pod
```

### Apply/Delete Manifest YAML
```
kubectl apply[delete] -f ./MANIFEST_NAME.yaml
```

## Pods, Deployments and Services

### Multiple Resources in one Manifest
Most of the time, you don't want to create single resources at a time. E.g. when you create a deployment, you almost certainly also want to create a service. If so, you can simply chain resource definition by separating them with three dashes:  

```YAML
[Some Resource]
[...]

--- 

[Nex Resource]
[...]
```

### Define Environment Variables for [[00 Understanding Kubernetes#Pods|Pods]] inside YAML
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: podname
  labels:
    purpose: some-purpose
spec:
  containers:
  - name: container-name
    image: image-name
    # This is for local image usage only.
    # Remember to: 
    # eval $(minikube -p minikube docker-env)
    imagePullPolicy: Never 
    env:
      - name: OTREE_IN_MEMORY
        value: "1" 
      - name: DATABASE_URL
        value: "postgres://postgres:password@host:5432/django_db"
      - name: OTREE_ADMIN_PASSWORD
        value: "pwd"
      - name: OTREE_PRODUCTION
        value: "1"
      - name: OTREE_AUTH_LEVEL
        value: "STUDY"
```