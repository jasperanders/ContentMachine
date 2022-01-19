tags: #devops #root
---

DevOps is a concept. A collection of a diverse set of philosophies and management principles. It takes inspiration from:
- [[Lean]]: Short runtimes and small batch sizes -- Pull instead of Push
- [[Agile]]: Small batch sizes and incremental releases. Use of small self-motivated Teams, with strong trust relationships.
   
DevOps has a multitude of steps, which differ from source to source. 
1. Coding – code development and review, [source code management](https://en.wikipedia.org/wiki/Version_control) tools, code merging.
2. Building – [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) tools, build status.
3. Testing – [continuous testing](https://en.wikipedia.org/wiki/Continuous_testing) tools that provide quick and timely feedback on business risks.
4. Packaging – [artifact repository](https://en.wikipedia.org/wiki/Binary_repository_manager), application pre-deployment staging.
5. Releasing – change management, release approvals, [release automation](https://en.wikipedia.org/wiki/Application_release_automation).
6. Configuring – infrastructure configuration and management, [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) tools.
7. Monitoring – [applications performance monitoring](https://en.wikipedia.org/wiki/Application_performance_management), end-user experience.

# DevOps Terminology

## Software Containerization
Software Containerization enables running applications in a predictable and reproducible environment, also known as *containers*. They are predictable because they use a standardized *image* format as their basis. These images can be seen as a minimal Linux installation frozen in time. Running them on a host operating system recreates the same environment no matter where you run the container. So even if you are on Windows or Mac, you will still always run a Linux container. Containerization has many advantages and has become an industry-wide accepted *best practice*.    

Containers are portable. You can bring/run them wherever you want to run your Application code. If you have your application running locally (on your machine), it will always also work in the production environment. No hassle with different versions of specific software your application is dependent on. Your development environment is the same environment you deploy in.

Containers are scalable. With the rise of [[#Container Orchestration]] tools such as [[Kubernetes]], containers i.e. multiple instances of an app can be created and destroyed very fast. If the demand for your frontend application is high, just start a few more containers and balance the load between them. If the demand decreases, kill the containers again. Of course, this can be done automatically. This allows for optimal resource usage. The free space can be used for other services and if you use a cloud provider such as [AWS](https://en.wikipedia.org/wiki/Amazon_Web_Services) you only pay for what you use.

To get started with containerization technology, continue with "[[Docker]]".  [[Containerization Terminology|Or dig deeper into the Container Terminology here.]]

## Container Orchestration

> "Container orchestration automates the deployment, management, scaling, and networking of containers."^[https://www.redhat.com/en/topics/containers/what-is-container-orchestration]

As long as you frequently need to change or update your application, orchestration may be the right thing for you.

To get an overview of a major player in container orchestration, read more about [[Kubernetes]]. [[Kubernetes Components|Or directly dig deeper into Kubernetes components here.]]

## Version Control System
[Git](https://git-scm.com/) needs no further introduction. It is the unchallenged king of version control systems. Git makes it easy to collaborate on code. In contrast to e.g. Google Docs where everybody can change everything, Git gives collaborators more control over who can make which changes. It allows for a sound review process before code gets accepted. For further explanation, take a look at [this video by *Computerphile*](https://www.youtube.com/watch?v=92sycL8ij-U).

Continue with "[[GitLab]]"

## CI/CD Pipeline

A pipeline is a set of instructions that is automatically executed. The execution may be triggered when a new commit is pushed or manually by the user. Pipelines automate build processes, code style checking, running tests and also deployment 