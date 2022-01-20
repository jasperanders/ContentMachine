# Understanding DevOps

DevOps is a concept. A collection of a diverse set of philosophies and
management principles. The DevOps approach is often used in agile software
development.

The DevOps process has a multitude of steps (which differ from source to
source):

1. Coding – code development and
   review, [source code management](https://en.wikipedia.org/wiki/Version_control) tools,
   code merging.
2. Building
   – [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) tools,
   build status.
3. Testing
   – [continuous testing](https://en.wikipedia.org/wiki/Continuous_testing) tools
   that provide quick and timely feedback on business risks.
4. Packaging
   – [artifact repository](https://en.wikipedia.org/wiki/Binary_repository_manager),
   application pre-deployment staging.
5. Releasing – change management, release
   approvals, [release automation](https://en.wikipedia.org/wiki/Application_release_automation).
6. Configuring – infrastructure configuration and
   management, [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) tools.
7. Monitoring
   – [applications performance monitoring](https://en.wikipedia.org/wiki/Application_performance_management),
   end-user experience.

## Related Terminology

Modern software development has grown very complex. Beyond actual technical
implementations, it is important to know some terminology to understand how
systems work and interact with oneanother.

### Software Containerization

**Software Containerization** enables running applications in a predictable and
reproducible environment, also known as _containers_. They are predictable
because they use a standardized _image_ format as their basis. These images can
be seen as a minimal Linux installation frozen in time. Running them on a host
operating system recreates the same environment no matter where you run the
container. So even if you are on Windows or Mac, you will still always run a
Linux container. Containerization has many advantages and has become an
industry-wide accepted _best practice_.

Containers are portable. You can bring/run them wherever you want to run your
Application code. If you have your application running locally (on your
machine), it will always also work in the production environment. No hassle with
different versions of specific software your application is dependent on. Your
development environment is the same environment you deploy in.

Containers are scalable. With the rise of [[#Container Orchestration]] tools
such as [[00 Understanding Kubernetes]], containers i.e. multiple instances of
an app can be created and destroyed very fast. If the demand for your frontend
application is high, just start a few more containers and balance the load
between them. If the demand decreases, kill the containers again. Of course,
this can be done automatically. This allows for optimal resource usage. The free
space can be used for other services and if you use a cloud provider such as
[AWS](https://en.wikipedia.org/wiki/Amazon_Web_Services) you only pay for what
you use.

To get started with containerization technology, continue with
"[[00 Understanding Docker]]".
[[01 Containerization Terminology|Or dig deeper into the Container Terminology here.]]

### Container Orchestration

> _"Container orchestration automates the deployment, management, scaling, and
> networking of containers."_ --
> [Red Hat](https://www.redhat.com/en/topics/containers/what-is-container-orchestration)

As long as you frequently need to change or update your application,
orchestration may be the right thing for you.

To get an overview of a major player in container orchestration, read more about
[[00 Understanding Kubernetes]].
[[01 Kubernetes Components|Or directly dig deeper into Kubernetes components here.]]

### Version Control System

A version control system makes it easy to collaborate on code. In contrast to
e.g. Google Docs where everybody can change everything, Git gives collaborators
more control over who can make which changes. It allows for a sound review
process before code gets accepted. With a version control system, it is easy to
restore old versions of projects, files or even single lines.
[Git](https://git-scm.com/) is the unchallenged king of version control systems,
it's used by nearly every software developer. For further explanation, take a
look at
[this video by _Computerphile_](https://www.youtube.com/watch?v=92sycL8ij-U).

To understand the difference between git and GitLab, read more
[[00 Understanding GitLab|here]].

### CI Pipeline

A pipeline is a set of instructions that is automatically executed. CI
(continuous integration) or CD (continuous deployment) pipelines can automate
steps of the DevOps cycle explained above. They can run build processes, code
style checks, tests and also deploy new application versions. Pipeline
executions are most often automatically triggered, e.g. when a new commit is
pushed.

To build a CI pipeline in GitLab, read the instructions
[[03 Setting Up a GitLab CI Pipeline|here]].

---

Sources: https://aws.amazon.com/devops/,
https://azure.microsoft.com/en-us/overview/what-is-devops/#devops-overview
