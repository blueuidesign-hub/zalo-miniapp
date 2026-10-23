# Thứ tự Product Backlog

Chỉ Tùng sắp (CL4.3.2). Trên cùng làm trước. Cột Người là người làm. Tùng chịu trách nhiệm mọi dòng.

| # | Mã | Việc | Người | Loại việc |
|---|---|---|---|---|
| 1 | EN3 | Tạo Mini App, cấp quyền cho Đức | Tùng | Quản lý, tài khoản |
| 2 | SK4 | Chạy app trống trên điện thoại thật | Đức | Môi trường |
| 3 | DC2 | Chốt YC1 Đăng nhập, vai trò, kết nối | Tùng | Đặc tả |
| 4 | DC16 | Chốt quyết định nền QD1, QD3 đến QD7 | Tùng | Quản lý |
| 5 | DC17 | Chuyển câu hỏi còn mở trong YC thành QD | Tùng | Đặc tả |
| 6 | SK1 | Thử getPhoneNumber | Đức | Môi trường |
| 7 | DC4 | Duyệt và chốt YC2 Lịch của chủ nhà | Tùng | Đặc tả |
| 8 | DC5 | Duyệt và chốt YC3 Căn và giá | Tùng | Đặc tả |
| 9 | DC6 | Duyệt và chốt YC4 Booking | Tùng | Đặc tả |
| 10 | SK5 | Chọn backend, database, nơi chạy | Đức | Môi trường |
| 11 | EN6 | Thiết lập GitHub theo QD5, QD6 | Tùng | Quản lý, tài khoản |
| 12 | DC12 | Bảng đăng ký màn, gỡ xung đột mã | Tùng | Đặc tả |
| 13 | EN4 | Dựng khung code ở repo đã chọn | Đức | Build |
| 14 | EN5 | CI build, test, kiểm cỡ bản build | Đức | Build |
| 15 | DC1 | Chuyển tài liệu Project vào repo | Tùng | Đặc tả |
| 16 | EN8 | Tìm 2 đến 3 người dùng thử | Tùng | Quản lý |
| 17 | EN7 | Server thử và dữ liệu giả | Đức | Môi trường |
| 18 | DC7 | Duyệt và chốt YC5 Tìm phòng và gửi khách | Tùng | Đặc tả |
| 19 | DC8 | Duyệt và chốt YC6 Nguồn phòng và căn tự nhập | Tùng | Đặc tả |
| 20 | DC11 | Duyệt và chốt YC9 Quản trị và dữ liệu | Tùng | Đặc tả |
| 21 | DC13 | Rút quy tắc QT | Tùng | Đặc tả |
| 22 | DC14 | Ma trận quyền PQ | Tùng, Đức | Đặc tả |
| 23 | EN2 | Script quản lý | Đức | Build |
| 24 | DC15 | Viết US cho EP3 lát mỏng | Tùng, Đức | Đặc tả |
| 25 | SK2 | Thử bảng chia sẻ | Đức | Môi trường |
| 26 | SK3 | Thử Zalo trên máy tính | Đức | Môi trường |
| 27 | DC9 | Duyệt và chốt YC7 Thống kê | Tùng | Đặc tả |
| 28 | DC10 | Duyệt và chốt YC8 Đội nhóm, cộng tác viên | Tùng | Đặc tả |

## Lý do thứ tự
- EN3 và SK4 lên đầu. Mọi việc code đều giả định sửa code xong là thấy trên Zalo thật. Kiểm giả định này mất một ngày, sai thì phải biết trước khi viết đặc tả sâu.
- EN3 chỉ một giờ nhưng chặn SK4, nên Tùng làm trước tiên.
- YC1 đến YC9 đã vào repo ở trạng thái de-xuat (DC3, 23/10). Các việc DC2 đến DC11 giờ là duyệt và chốt. DC17 đứng trước vì câu hỏi chưa trả lời chặn việc chốt.
- Đặc tả (DC) và môi trường (SK, EN) chạy song song: Tùng soạn yêu cầu trong lúc Đức dựng môi trường. Hai luồng ít chặn nhau.
- EN8 tìm người dùng thử bắt đầu sớm vì hẹn người mất thời gian, nhưng sau SK4 để biết họ mở bản thử bằng cách nào.
- YC7, YC8 thuộc EP6 nên xếp cuối.

## Chưa sắp
(trống)
