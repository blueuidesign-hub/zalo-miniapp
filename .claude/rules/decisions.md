---
paths:
  - "docs/decisions/**"
---
# Quy ước khi sửa docs/decisions/

- Khuôn: docs/process/templates/qd.md. Một QD một câu hỏi. Hai câu hỏi thì hai QD.
- Mục "Phương án" luôn là bảng Được gì / Mất gì, kể cả phương án "không làm gì". Mục "Đề xuất" của AI chỉ là đề xuất. Mục "Quyết định" chỉ Tùng viết.
- Trạng thái: cho-chot, da-chot, da-thay, bo. AI chỉ tạo cho-chot. Chuyển sang da-chot là việc của Tùng.
- Mỗi QD ghi anh_huong: mã mọi mục phải sửa theo. Khi QD đã chốt, tạo DC cho mỗi mục chưa sửa kịp trong cùng PR.
- QD đã chốt không sửa nội dung. Muốn đổi thì tạo QD mới có thay_cho, QD cũ chuyển da-thay.
- Cấp mã: số lớn nhất của QD trong repo cộng 1. Thêm một dòng vào docs/decisions/INDEX.md trong cùng PR.
- QD là nguồn tin cậy cao nhất. Câu trong chat chưa vào QD thì chưa phải quyết định (CL6.5).
