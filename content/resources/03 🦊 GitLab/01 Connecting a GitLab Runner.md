---
author: Jasper Anders ©
---

# Connecting a GitLab Runner to your cluster

GitLab allows us to run CI/CD pipelines. For this, GitLab provides _GitLab Runners_. These runners can run on almost anywhere. If you use the official [GitLab](https://gitlab.com) instance, for example, you can use _shared_ runners provided by GitLab for all its users. You could also run the GitLab runners
on your local machine.

We require our runners to run `kubectl` commands. This allows us to create, apply and delete Kubernetes resources from the CI/CD pipeline. To achieve this, we need the runners to be running inside our cluster.

First, we need to create a configuration file we call `gitlab-runner-config.yaml`. See below for specification. The values for `gitlabUrl` & `runnerRegistrationToken` can be found under the repo `settings > CI/CD > Runners`. I created a group for all the projects I want to deploy. The installed runners can then be used by every project in the group. If you do the same, use the runner parameters of the group repository (not of one specific application).

![GitLab Runners](./attachments/RunnersSetup.png)

```YAML
# gitlab-runner-config.yaml

gitlabUrl: https://gitlab.com/
runnerRegistrationToken: "YOUR_RUNNERTOKEN_HERE"

runners:
 config: |
   [[runners]]
     [runners.kubernetes]
       namespace = "{{.Release.Namespace}}"
       image = "ubuntu:16.04"
# this is required for docker in docker (dind) to run. We need this for our CI/CD to build containers.
       privileged = true
```

Now we can install the GitLab runner using `helm3`. Make sure the `helm3` add-on in your MicroK8s installation is enabled.

```bash
microk8s helm3 install --namespace default gitlab-runner -f gitlab-runner-config.yaml gitlab/gitlab-runner
```

If you want to uninstall the runner again, run:

```bash
m helm3 delete --namespace default gitlab-runner
```

# Read Next

[[02 GitLab Container Registry Integration|Read next, how to pull form the GitLab registry inside your Kubernetes Cluster.]]