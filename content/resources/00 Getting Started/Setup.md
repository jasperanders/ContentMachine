# Creating a Contious Deployment Environment 

### Server Set Up

1. [[BW-Cloud|Create a new server instance]]
1. [[MicroK8s Setup|Install Kubernetes]]
1. [[SSL Encryption using Cert Manager|Install Cert Manager into your cluster]]

### GitLab Set Up

1. [[GitLab Runner|Connect a GitLab Runner to your cluster.]]
1. [[GitLab Container Registry|Connect allow Kubernetes pods to pull from the GitLab registry]]
1. [[GitLab CI-CD Pipeline|Write and run a CI Pipeline]]

### Further Admin Setup

1. Add DNS resolution entries for experiments.
2. Do multiple test runs.

### New Experiment Setup for Admin

1. Assign free Project URL to experiment.
2. Invite experimenter to GitLab Project.

### New Experiment Setup for Experimenter

1. Create a new Project under the group you were just given access to.
1. Change ingress URL according to your assigned project URL.
2. Add MASTER_PWD as a CI/CD variable and choose a good password. It should be masked and not protected.
    ![GitLab Env Variable](./attachments/GitLabVariable.png)
3. Clone the repository to disc.
4. Past experiment to oTree folder.
5. Make sure to leave `.resetdb.sh` in the oTree folder untouched. It is a hidden file, if you don't see it, don't worry about it.
6. If necessary, adjust the python version in the `Dockerfile`. If you use `pipenv` you can check the python version you're using in your `pipfile`
7. Stage, commit and push your changes. And wait for the pipeline to be finished.
8. Deploy to Production. You could also reset your database or delete the whole deployment.