---
author: Jasper Anders ©
---

# Using Docker

You should read about "[[00 Understanding Docker|Docker]]" first. For the *installation*, just follow the great [documentation](https://docs.docker.com) on the Docker website.

## Useful Commands
    
### Build a docker [[01 Containerization Terminology#Image|image]]
Build a docker image with the tag (`-t`) `imageName`. For this, you need a Dockefile ([[01 Containerization Terminology#Dockerfile|What is a Dockerfile?]], [[#Sample Dockerfile|Go to a Sample Dockerfile]]) in your `./` directory:
```bash
docker build -t imageName ./
```

### Create and run a [[01 Containerization Terminology#Container|container]] 
from an image named `imageName`. Name the container `containerName` and map its internal port `9000` to port `8000` of the [[01 Containerization Terminology#Host System|host system]].
```bash
docker run --name containerName -p 9000:8000 imageName
```

### Start a Docker [[01 Containerization Terminology#Container|Container]] 
Start a Docker container, that was created previously with the [[#Create and run a 01 Containerization Terminology Container container|run command.]]
```bash
docker start containerName
```

### Mount a File
Mount a file `db.sqlite3` to a file with the same name under a specific path.
```
docker run --name containerName \
-p 8000:8000 \
--mount type=bind,source="$(pwd)"/db.sqlite3,target=/src/db.sqlite3 \
imageName
```

### Sample Dockerfile
This is a sample Dockerfile for a generic python application. As a base image, this sample uses `python:3.9` provided by the [docker hub](https://hub.docker.com/).

```Dockerfile
# use a docker img from docker-hub as basis
# if no other location is provided docker will
# always pull from the dockerhub
FROM python:3.9

# Create a new directory in the container
RUN mkdir /src
# make /src the working directory of the container
WORKDIR /src

# Move pipfiles to project
ADD Pipfile Pipfile.lock ./

# Install pipenv
RUN pip install -U pip pipenv
# Use pipenv to intall dependencies
# you might want to change this if you don't use pipenv
RUN pipenv install

# Copy all files from your local -/ to /src/ 
# on the container
COPY . /src/

# expose the containers port 8000 to the host system
EXPOSE 8000

# echo "Hello World" on container start
CMD [ "echo", "Hello World"]
```
