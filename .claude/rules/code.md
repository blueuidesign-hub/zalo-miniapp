---
paths:
  - "src/**"
  - "server/**"
  - "tests/**"
---
# Quy ước khi viết code

- Chỉ code theo mục đã da-chot. Câu có [MỞ: QD...] thì không code theo. Câu có [GIẢ ĐỊNH: GD...] thì code được và ghi rõ trong PR.
- Đọc item trước. Chỉ sửa file trong mục Phạm vi của item. File ngoài phạm vi thì dừng và tạo item mới.
- Mỗi test mang mã tiêu chí nó kiểm, ví dụ test_YC5_1_NT2. Tiêu chí chưa có test thì item chưa xong. Không tắt, xóa, sửa test để cho qua.
- Giá và quyền tính ở server. Mini App chỉ hiển thị cái server gửi. Chủ nhà tắt "hiện giá cho sale" thì server không gửi giá đi.
- Tiền là số nguyên đồng. Ngày theo giờ Việt Nam. Booking chiếm các đêm từ ngày nhận tới trước ngày trả.
- Chặn trùng booking bằng ràng buộc ở database, không chỉ kiểm ở giao diện.
- Không lưu thông tin khách. Không ghi log chứa số điện thoại, tên khách.
- Không đọc .env. App Secret và khóa production không bao giờ có trong code, test, log hay phiên cloud.
- Giao diện: chữ tối thiểu 14 px, vùng bấm 44 px. Mọi màn có đủ trạng thái trong khuôn yc.md: rỗng, đang tải, lỗi mạng, không có quyền, đã từ chối quyền Zalo, quay lại từ nền, mở từ link.
- Không dùng localStorage, cookie. Bản build dưới 10 MB, mỗi file dưới 3 MB. Chi tiết: docs/external/zalo-rang-buoc.md.
- Đổi cấu trúc module hay thêm thư viện cần Đức duyệt (CL4.2).
