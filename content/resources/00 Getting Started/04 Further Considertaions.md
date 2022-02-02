# Further Considerations

The oForest architecture and setup was created as a university project, as such it has a somewhat limited scope. For the implementation, we suggest thinking about the following:

- Check for high availability. This setup is made for a single node cluster. If this server crashes, the oForest won't be accessible anymore. Kubernetes makes it easy to add more nodes, if you have more servers.
- GitLab's runners can currently do arbitrary code executions in the Kubernetes cluster. Everybody that is invited to deploy an experiment thus can also deploy/run anything they want inside the cluster. With the current (free) plan, there is no other integration possible than these runners. In the future, maybe the _GitLab Kubernetes agent_ may allow for more security features. It would also be a possibility to make use of different namespaces in Kubernetes and minimize rights of resources in these namespaces.
- Kubernetes makes automatization easy, if you know what you are doing. There is a learning curve involved. If you don't plan to have anyone around, that is willing to learn about Kubernetes, I wouldn't use it. A solution like [Heroku](https://heroku.com) might suit you better.

## _"no backup no mercy"_

The Postgres databases for the experiments are mounted via a [[01 Kubernetes Components#Persistent Volume Claim|persistent volume claim]]. As a default storage location, [[02 MicroK8s Setup|micorK8s]] uses this path: `/var/snap/microk8s/common/default-storage/`. You should frequently back up your data!

## Resources and Storage Limitations

Make sure you provide your databases with enough available storage. The current default is 1 GB, this is defined in the `PersistentVolumeClaim` of each DB. It might be a good idea to run some resource requirements tests before you conduct the experiment. Also, it might be nice to make this available for configuration through a environment variable.

