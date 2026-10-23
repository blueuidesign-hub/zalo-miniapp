---
id: CL4
tieu_de: Quyền hạn
trang_thai: de-xuat
nguoi_chu: tung
ban: 1
---
# CL4 · Quyền hạn

| Mã | Mức | Gồm |
|---|---|---|
| CL4.1 | AI tự làm, báo sau | Tạo item Mới. Soạn nháp tài liệu trên nhánh. Code, test trên nhánh của item. Chạy test. Ghi nhật ký. Mở PR. Báo cáo. Đề xuất |
| CL4.2 | Đức duyệt | Gộp PR code rủi ro thấp, trung bình. Thêm thư viện. Đổi cấu trúc module trong khuôn QD đã chốt. Migration ở môi trường thử |
| CL4.3.1 | Tùng duyệt trước | Chốt hoặc đổi YC, QT, PQ, HV |
| CL4.3.2 | Tùng duyệt trước | Đổi Product Goal, Sprint Goal, thứ tự backlog. Thêm item vào sprint đang chạy |
| CL4.3.3 | Tùng duyệt trước | Gộp PR rủi ro cao |
| CL4.3.4 | Tùng duyệt trước | Xóa, sửa, xuất dữ liệu thật. Migration production |
| CL4.3.5 | Tùng duyệt trước | Phát hành, gửi duyệt Zalo, xin quyền Zalo |
| CL4.3.6 | Tùng duyệt trước | Đổi docs/process/, CLAUDE.md, .claude/, .github/ |
| CL4.3.7 | Tùng duyệt trước | Dịch vụ trả phí, tài khoản, khóa bí mật |
| CL4.3.8 | Tùng duyệt trước | Liên hệ người dùng thật, đăng gì ra ngoài |
| CL4.4 | Cấm | Đẩy thẳng vào main, đẩy ép. Đọc .env, khóa bí mật. Tắt, xóa, sửa test để cho qua. Sửa dòng [tự sinh]. Tự gộp PR chuyển tài liệu sang da-chot. Dùng tài khoản GitHub của Tùng |

## CL4.5 · Cách xin và cách duyệt
1. Item ghi quyền cần: can_duyet: [CL4.3.4].
2. AI dừng, mở PR nháp ghi: xin gì, vì sao, làm gì nếu được duyệt, quay lại thế nào nếu hỏng.
3. Tùng duyệt bằng nút Approve hoặc tự gộp PR trên GitHub.
4. Chữ "đồng ý" trong chat không tính, vì hai người dùng chung tài khoản Claude.

## CL4.6 · Tạm thời khi còn dùng chung tài khoản
Nếu hai người còn dùng chung cả tài khoản GitHub, máy không phân biệt được ai duyệt. Khi đó lời duyệt chỉ là: Tùng tự bấm gộp trên web GitHub. AI không bao giờ gộp PR thuộc CL4.3. Cần tách tài khoản GitHub trước khi code thật (RR2).
