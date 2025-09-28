# 🐳 Docker Labs – Self Study

A collection of hands-on Docker labs to practice and strengthen containerization skills.

---

## 📌 Docker Lab 1: Basic Docker Commands

### Tasks

* Check Docker version
* Search images on Docker Hub
* Pull the latest **nginx** image from Docker Hub
* List images on local machine
* Run an nginx container in **detached mode**, mapping to port `8080` on the host
* Check running containers
* Check all containers (including stopped ones)
* Stop a container
* Start a container
* Remote into a running container or run a command inside
* Tag a Docker image

### Extra Tasks

* Create a **Docker Hub account**
* Create a repository on Docker Hub
* Push nginx image to your repository
* Delete nginx image from your local machine
* Pull the nginx image back from your repository

---

## 📌 Docker Lab 2: Build Custom Docker Images

### Task 1: Build Nginx Image

* Write a `Dockerfile` to build an nginx image from **Ubuntu / CentOS / RedHat / OracleLinux / Alpine** base image
* Create a `html` file locally and copy it to your image
* Push the custom image to your repository
* Run a container from your image
* Test with `curl` from your localhost

### Task 2: Build Tomcat Image

* Write a `Dockerfile` to build a tomcat image from **Ubuntu / CentOS / RedHat / OracleLinux / Alpine** base image
* Push the custom image to your repository
* Run a container from your image
* Test with `curl` from your localhost

### Task 3: Build NodeJS Image

* Write a `Dockerfile` to build a NodeJS image from **Ubuntu / CentOS / RedHat / OracleLinux / Alpine** base image
* Push the custom image to your repository
* Run a container from your image
* Test with `curl` from your localhost

---

## 📌 Docker Lab 3: Docker Compose

### Task 1: Install Docker Compose

* Install Docker Compose → [Official docs](https://docs.docker.com/compose/install/)
* Test installation
* Run `docker-compose version` to check version
* Run `docker-compose --help` to see CLI references

### Task 2: Quick Start with WordPress

* Use Docker Compose to easily run **WordPress** in an isolated environment with Docker containers
* Reference: [WordPress with Docker](https://docs.docker.com/samples/wordpress/)

### Task 3: Real Project – NodeJS + MySQL

* Create `Dockerfile` for NodeJS and MySQL images
* Create `docker-compose.yml` to run NodeJS + MySQL services
* Connect NodeJS service to MySQL service
* Display web page on browser

---

## 📌 Docker Lab 4: Volumes and Mounts

### Task 1: Volume Mount

* Create a volume named `task1-volume`
* Run an nginx container with the volume mounted at `/opt/mount_point/`
* Use `docker exec` to log into the container and create a file inside the mount point
* Run a second nginx container with the same volume mount
* Use `docker exec` to log into the second container and verify the file exists

### Task 2: Bind Mount

* Create an `index.html` file with custom content
* Run an nginx container mapped to port `80:80`
* Use **bind mount** to mount your local `index.html` to `/usr/share/nginx/html` in the container
* Verify that the web page shows your custom content
* Modify `index.html` in the container and check if it also updates on the host

---

## 🚀 How to Use

1. Clone this repo:

   ```bash
   git clone https://github.com/<your-username>/DockerLab.git
   cd DockerLab
   ```
2. Navigate into each lab folder and follow instructions in the `README.md` (if available).

---

## 📚 References

* [Docker Documentation](https://docs.docker.com/)
* [Docker Hub](https://hub.docker.com/)
* [Compose Documentation](https://docs.docker.com/compose/)

---

✍️ *Maintained for self-study & practice. Feel free to fork and try out yourself!*
