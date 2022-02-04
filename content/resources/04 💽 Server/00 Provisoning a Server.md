	---
author: Jasper Anders ©
---

# Provisoning a Server

For the oForest project, we use cloud resources from the [BW-Cloud](https://www.bw-cloud.org/). For students, there is only a rather low resource quota by default. The documentation of Kubernetes recommended at least 4 GB of memory. To request more quota, follow the instructions [here](https://www.bw-cloud.org/de/faq/quota). Make sure you have enough hard disk storage, otherwise you will frequently run into `diskpressure` errors. These stop pods from starting.

We deployed a `m1.large` Ubuntu 20.04 LTS instance. Make sure you add `ssh` access to your machine. Also check that your system is up-to-date. For this run:

```bash
sudo apt update
sudo apt upgrade
```

## Opening Ports

For any traffic to get through to your cluster or application that is deployed on your compute instance you need to open Ports. The standard ports are:

| For   | Port |
| ----- | ---: |
| HTTP  |   80 |
| HTTPS |  443 |
| SSH   |   22 |

Also, you should allow all egress traffic to exit, if you want to access the internet (you always want). Configure the default security policy as shown below. I tried to add another policy to keep the default one untouched, but at the time of this writing, this didn't seem to work. Instead, I adjusted the default security policy as shown below.

![Security Policy](./attachments/securityPolicy.png)

You should also open these ports on your server firewall. If you do this, double-check the port for ssh is open, otherwise you will lose ssh access. For this, you can use `ufw`:

```bash
# first ssh into you server via ssh user@host
sudo ufw status # check status
sudo ufw open ssh http https # open ports
sudo ufw enable # enable firewall
sudo reboot # you might need to restart your machine
```

# Read Next

[[02 MicroK8s Setup|How to set up a Kubernetes cluster using microk8s.]]
