# Using Kubernetes

## kubectl
`kubectl` is the CLI tool to interact with the [[00 Understanding Kubernetes]] cluster. This is an alternative to the Kubernetes API.

#### Print all resources
```bash
kubectl get all [--all-namespaces]
```

#### Print resource usage
```bash
kubectl top pod
```

## Pods, Deployments and services

## Define ENVs for [[00 Understanding Kubernetes#Pods|Pods]] inside YAML
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