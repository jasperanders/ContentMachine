---
German Title:
  Kontinuierliche Software bereitstellung: Entwurf und Entwicklung
---

# Continuous Deployment: Building an Integrated Dev-Ops Environment

This project aims to achieve an easier setup for [oTree](https://otree.org) experiments. In the end, I want to achieve the following user story:

1. A user forks a base project in the universities GitLab. The base project contains all the CI/CD files that are needed for deployment.
2. The user pushes her code to the repo. If the CI/CD pipeline succeeds, a new version of the code can be deployed.
3. If deployed, the application is accessible via HTTPS under `experiment-name.k2lab.kit.edu` or an equivalent.
4. If the user changes something, these changes trigger a new pipeline. If it succeeds, the user can deploy new changes to production.
5. Deployments should be triggered manually.
6. Besides, there should be two other deployment alternatives:
   1. Delete the deployment from the cluster
   2. Reset the oTree Database and Deploy

This is a classic application of a [[01 Understanding DevOps|DevOps]] approach.

# Read Next

[[01 Understanding DevOps|Understand the DevOps approach and get to know som terminology.]]