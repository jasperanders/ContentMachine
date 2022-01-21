---
author: Jasper Anders ©
---

# GitLab Container Registry Integration

To allow [[00 Understanding Kubernetes|Kubernetes]] to pull from the GitLab Registry. Create a token in the
GitLab Group Settings (Settings > Repository > Deploy Tokens) and add it to your
cluster like so:

```bash
kubectl create secret docker-registry regcred --docker-server=registry.gitlab.com --docker-username=*** --docker-password=***
```

Don't forget to add the docker secret to the manifest[^1] YAML where you want to
use an image from the specified registry.

```YAML
[...]
spec:
  containers:
    - name: otree04
      image: registry.gitlab.com/oforest/ogardener:latest
      [...]
  imagePullSecrets:
    - name: regcred
[...]
```

# Read Next

[[03 Setting Up a GitLab CI Pipeline|Next you can read, how to set up a fully functional pipeline.]]
