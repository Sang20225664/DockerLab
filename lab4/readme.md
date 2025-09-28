# Docker Lab 4 - Volume & Bind Mount

## Task 1: Experiment Volume Mount

### Mục tiêu
Thực hành sử dụng **Docker Volume** để chia sẻ dữ liệu giữa nhiều container.

### Các bước thực hiện
1. Tạo volume
```bash
docker volume create task1-volume
```

2. Chạy container nginx với volume vừa tạo
```bash
docker run -d --name nginx1 -v task1-volume:/opt/mount_point nginx
```

3. Tạo file trong container thứ nhất
```bash
docker exec -it nginx1 bash
echo "Hello from volume" > /opt/mount_point/hello.txt
exit
```

4. Chạy container nginx thứ hai với cùng volume
```bash
docker run -d --name nginx2 -v task1-volume:/opt/mount_point nginx
```

5. Kiểm tra file trong container thứ hai
```bash
docker exec -it nginx2 cat /opt/mount_point/hello.txt
# Output: Hello from volume
```

### Kết quả
- File `hello.txt` được tạo trong container `nginx1` vẫn tồn tại và được truy cập trong container `nginx2`.  
- Chứng minh dữ liệu trong **Docker Volume** được lưu trữ độc lập với vòng đời container và có thể chia sẻ giữa nhiều container khác nhau.

---

## Task 2: Experiment Bind Mount

### Mục tiêu
Thực hành sử dụng **Bind Mount** để ánh xạ file từ host vào container và kiểm tra tính đồng bộ.

### Các bước thực hiện
1. Tạo file `index.html` trên host
```bash
echo "<h1>Hello from Bind Mount</h1>" > ~/index.html
```

2. Chạy nginx container, map port và bind mount file `index.html`
```bash
docker run -d --name nginx-bind -p 8080:80   -v $(pwd)/index.html:/usr/share/nginx/html/index.html   nginx
```

3. Kiểm tra nội dung web trên trình duyệt
Truy cập: `http://localhost:8080`  
→ Hiển thị nội dung `Hello from Bind Mount`

4. Chỉnh sửa file `index.html` trên host và refresh trình duyệt  
→ Nội dung web thay đổi theo ngay lập tức.

5. Thử chỉnh sửa file trong container
```bash
docker exec -it nginx-bind bash
echo "<h1>Changed inside container</h1>" > /usr/share/nginx/html/index.html
exit
```
→ Kiểm tra lại file trên host, nội dung cũng thay đổi.

### Kết quả
- Bind mount cho phép chia sẻ file/thư mục trực tiếp giữa host và container.  
- Mọi thay đổi ở một phía (host hoặc container) đều phản ánh ngay ở phía còn lại.
