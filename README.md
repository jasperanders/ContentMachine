# oForest
Continuous Deployment: Building an Integrated DevOps Environment

This project aims to achieve a fast and easy deployment for [oTree](https://www.otree.org/) experiments. oTree is a python library that helps you to create experiments in the field of economics. The Karlsruhe Institute of Technology uses oTree in their [decision & design lab](https://www.kd2lab.kit.edu/english/index.php). Currently, the provisioning of new experiments is outdated and mainly manual. We wanted the new approach to be low effort for experimenters and largely automated. For this, we laid out the following user story:

1. The experimenter clones a base project from the universities GitLab.
2. The user adds their experiment code to the repository and makes some minor configurations. They then push the code to a new project. This triggers a CI/CD pipeline.
3. The pipeline builds the new code and makes it ready for deployment. Deploying is done with a single click.
4. If deployed, the application is accessible via HTTPS under an assigned URL (e.g. `experiment-name.k2lab.kit.edu`).
5. If the experimenter updates their code, these changes trigger a new pipeline. After it succeeds, the user can deploy new changes to production.
7. Besides deploying new code, the user should be able to
	- delete their experiment production
	- reset their oTree database on the production server

This is a classic application of a [[01 Understanding DevOps|DevOps]] approach. Changes happen iteratively and can be deployed with no overhead. Our goal is to build an automated deployment process for multiple oTree experiments, naturally we refer to our project as **oForest**.

To read the full documentation go to [devops.jasperanders.xyz](https://devops.jasperanders.xyz).