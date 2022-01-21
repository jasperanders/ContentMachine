---
author: Jasper Anders ©
omitBackButton: true
---

# Continuous Deployment: Building an Integrated Dev-Ops Environment

This project aims to achieve an fast and easy deployment for [oTree](https://otree.org) experiments. We want to achieve the following user story:

1. A user clones a base project from the universities GitLab.
2. The user adds their experiment code to the repository and makes some minor configurations. They then push the code to a new project. This triggers an CI/CD pipeline.
3. The pipeline builds the new code and makes it ready for manual deployment.
4. If deployed, the application is accessible via HTTPS under assigned URL (e.g. `experiment-name.k2lab.kit.edu`).
5. If the user changes something, these changes trigger a new pipeline. If it succeeds, the user can deploy new changes to production.
7. Besides deploying new code, there are two other alternatives:
   1. Delete the deployment from the cluster
   2. Reset the oTree Database and Deploy

This is a classic application of a [[01 Understanding DevOps|DevOps]] approach. Changes happen iteratively and can be deployed with no downtime.

# Read Next

[[01 Understanding DevOps|Understand the DevOps approach and get to know som terminology.]]