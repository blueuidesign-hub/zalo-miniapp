# Thứ tự Product Backlog

Chỉ Tùng sắp (CL4.3.2). Trên cùng làm trước. Cột Người là người làm. Tùng chịu trách nhiệm mọi dòng.

| # | Mã | Việc | Người | Loại việc |
|---|---|---|---|---|
| 1 | EN3 | Tạo Mini App, cấp quyền cho Đức | Tùng | Quản lý, tài khoản |
| 2 | SK4 | Chạy app trống trên điện thoại thật | Đức | Môi trường |
| 3 | DC2 | Soạn YC1 Đăng nhập, vai trò, kết nối | Tùng | Đặc tả |
| 4 | DC16 | Chốt quyết định nền QD1, QD3 đến QD7 | Tùng | Quản lý |
| 5 | SK1 | Thử getPhoneNumber | Đức | Môi trường |
| 6 | DC4 | Soạn YC2 Lịch của chủ nhà | Tùng | Đặc tả |
| 7 | DC5 | Soạn YC3 Căn và giá | Tùng | Đặc tả |
| 8 | DC6 | Soạn YC4 Booking | Tùng | Đặc tả |
| 9 | SK5 | Chọn backend, database, nơi chạy | Đức | Môi trường |
| 10 | EN6 | Thiết lập GitHub theo QD5, QD6 | Tùng | Quản lý, tài khoản |
| 11 | DC12 | Bảng đăng ký màn, gỡ xung đột mã | Tùng | Đặc tả |
| 12 | EN4 | Dựng khung code ở repo đã chọn | Đức | Build |
| 13 | EN5 | CI build, test, kiểm cỡ bản build | Đức | Build |
| 14 | DC1 | Chuyển tài liệu Project vào repo | Tùng | Đặc tả |
| 15 | EN8 | Tìm 2 đến 3 người dùng thử | Tùng | Quản lý |
| 16 | EN7 | Server thử và dữ liệu giả | Đức | Môi trường |
| 17 | DC7 | Soạn YC5 Tìm phòng và gửi khách | Tùng | Đặc tả |
| 18 | DC8 | Soạn YC6 Nguồn phòng và căn tự nhập | Tùng | Đặc tả |
| 19 | DC11 | Soạn YC9 Quản trị và dữ liệu | Tùng | Đặc tả |
| 20 | DC13 | Rút quy tắc QT | Tùng | Đặc tả |
| 21 | DC14 | Ma trận quyền PQ | Tùng, Đức | Đặc tả |
| 22 | EN2 | Script quản lý | Đức | Build |
| 23 | DC15 | Viết US cho EP3 lát mỏng | Tùng, Đức | Đặc tả |
| 24 | SK2 | Thử bảng chia sẻ | Đức | Môi trường |
| 25 | SK3 | Thử Zalo trên máy tính | Đức | Môi trường |
| 26 | DC9 | Soạn YC7 Thống kê | Tùng | Đặc tả |
| 27 | DC10 | Soạn YC8 Đội nhóm, cộng tác viên | Tùng | Đặc tả |

## Lý do thứ tự
- EN3 và SK4 lên đầu. Mọi việc code đều giả định sửa code xong là thấy trên Zalo thật. Kiểm giả định này mất một ngày, sai thì phải biết trước khi viết đặc tả sâu.
- EN3 chỉ một giờ nhưng chặn SK4, nên Tùng làm trước tiên.
- Đặc tả (DC) và môi trường (SK, EN) chạy song song: Tùng soạn yêu cầu trong lúc Đức dựng môi trường. Hai luồng ít chặn nhau.
- EN8 tìm người dùng thử bắt đầu sớm vì hẹn người mất thời gian, nhưng sau SK4 để biết họ mở bản thử bằng cách nào.
- YC7, YC8 thuộc EP6 nên xếp cuối.

## Chưa sắp
(trống)
