

![oTreeAchitecture](./attachments/oTreeArchitecture.drawio.svg)

<oTreeArchitecture />

# oForrest Codeflow

In the next paragraphs, we follow a single line of code. From its creation to
its deployment to the internet. You will find keywords highlighted the first
time they appear. Clicking them will provide high level motivation why we want
to use such a technology, specific setup procedures and in some cases an
overview of useful commands.

Being checked into a version control system is the very first big step toward
deployment for a code snippet. This example uses [[GitLab]] as a VCS platform.
The moment GitLab realizes there has been a new commit, it triggers the
[[GitLab CI-CD Pipeline]]. This pipeline needs physical resources to be run on.
Luckily, the project administrator has provided shared
[[GitLab Runner|GitLab Runners]]. And just like that, the runners start
performing the steps defined in the `.gitlab-ci.yml`.

First thing they do is build an [[Containerization Terminology#^a92879|image]]
for this they use [[Docker|Docker]]. The build process is specified in the
[[Using Docker#Dockerfile|Dockerfile]]. While building, the line of code that we
followed gets copied over to the image, just like every other line of code. The
finished build is then pushed to the build in
[[Containerization Terminology#Registry|GitLab Container Registry]]. The next
step in the CI pipeline is the actual deployment. This step has to wait for now.
We first must discuss our production environment.

The server we use is an Ubuntu 20.04 LTS machine, provisioned by [[BW-Cloud]] a
cloud provider for universities in the state of Baden-Württemberg, Germany. But
really any cloud provider would work well. We want our applications to run in a
[[Kubernetes|Kubernetes cluster]], we thus install a fully working Kubernetes
version using [[MicroK8s Setup|MicroK8s]]. Additionally, we add an
[[Kubernetes#Ingress|Ingress Controller]] and a
[[SSL Encryption using Cert Manager|SSL certificate issuer]]. Lastly, we add the
GitLab Runner, we introduced earlier, to the cluster. It now uses the cluster's
resources to run our pipelines. Further, it has access to the
[[Using Kubernetes]] command and thus can make changes to our cluster. We use
this to apply and delete [[Kubernetes#Manifests|Kubernetes Manifests]].

As we now have laid out our production environment, we can take a closer look at
the next step of our CI pipeline, the deployment. The runner applies the
manifests we specified in our project repository. The cluster then immediately
gets to work and tries to match the described state. For this, it creates
multiple resources.

First, two [[Kubernetes#Deployment|Deployments]] are created. Both start their
respective [[Kubernetes#Pods|pods]]. The first Deployment is the oTree
application. The second is a Postgres database, where all application data is
stored. Both resources are started from container images. The Postgres resource
is based on the official Postgres image found on the
[docker hub](https://hub.docker.com/_/postgres), the other is pulled from the
GitLab Registry. Remember, our runners build and pushed a new image to the
registry earlier.

To allow for communication between Deployments and to the outside, one
[[Kubernetes#Service|Service]] each is created. After the oTree Service is
connected to the Postgres Service, application data can be stored and red. Until
now, we can't reach our service over the internet. For this, we create an
[[Kubernetes#Ingress|Ingress]] resource. In the manifest for the ingress, we
provide the URL, under which our service should be available. The ingress
controller will now forward all incoming traffic to this new ingress resource.
Because we have a valid SSL certificate in place, incoming traffic will arrive
over HTTPS. As the oTree Application does not support HTTPS traffic, we
terminate the SSL at the Ingress and forward the HTTP traffic to our oTree
application. On the way back, the HTTP traffic is encrypted again at the
ingress, then forwarded to the ingress controller and finally back to the user.

Our line of code has made the journey. It is now deployed to a production
environment. This concludes the architectural overview.

# And now You!

[[Setup|Start your own oTree deployment.]]
