# 🐳 Docker Lab 1 – Basic Commands

This lab covers the fundamental Docker commands to get familiar with container operations.

---

## 🔹 Tasks & Commands

### 1. Check Docker version

```bash
docker --version
docker version
```

### 2. Search Docker images on Docker Hub

```bash
docker search nginx
```

### 3. Pull nginx latest image from Docker Hub

```bash
docker pull nginx:latest
```

### 4. Show list of images on local

```bash
docker images
```

### 5. Run container in detach mode & map port 8080 → 80

```bash
docker run -d -p 8080:80 --name mynginx nginx:latest
```

### 6. Check running containers

```bash
docker ps
```

### 7. Check all containers (including stopped ones)

```bash
docker ps -a
```

### 8. Stop a container

```bash
docker stop mynginx
```

### 9. Start a container

```bash
docker start mynginx
```

### 10. Remote to a running container / run a command inside

```bash
docker exec -it mynginx /bin/bash
```

or

```bash
docker exec -it mynginx ls /usr/share/nginx/html
```

### 11. Tagging a Docker image

```bash
docker tag nginx:latest <your-dockerhub-username>/nginx:lab1
```

---

## 🔹 Extra Tasks

1. Create Docker Hub account → [https://hub.docker.com/](https://hub.docker.com/)
2. Create repository `nginx-lab1`
3. Push nginx image to your repository

   ```bash
   docker push <your-dockerhub-username>/nginx:lab1
   ```
4. Delete nginx image in local

   ```bash
   docker rmi nginx:latest
   ```
5. Pull back nginx image from your repository

   ```bash
   docker pull <your-dockerhub-username>/nginx:lab1
   ```

---

✅ After completing this lab, you should be comfortable with the most common Docker CLI commands.
