---
paths:
  - "docs/product/**"
---
# Quy ước khi sửa docs/product/

- Khuôn: docs/process/templates/yc.md cho YC, qt.md cho QT. Không bỏ mục nào của khuôn.
- Yêu cầu (YC) trả lời "làm gì, cho ai". Quy tắc (QT) trả lời "tính thế nào". Công thức, số, ngưỡng nằm ở QT. YC chỉ ghi "Dùng quy tắc: QTx.y".
- Mỗi YC có tiêu chí nghiệm thu NT viết dạng "Khi ..., thì ...". Mỗi QT có ít nhất một ví dụ số VD, do Tùng viết hoặc duyệt. AI không tự bịa số.
- Không viết yêu cầu từ trí nhớ hay từ chat. Nguồn là file do phiên Design soạn hoặc QD đã chốt. Không có nguồn thì ghi [MỞ: QDn] và tạo QD.
- Chỗ hai nguồn nói khác nhau: ghi cả hai, tạo QD cho-chot, không chọn bên nào.
- Thêm hoặc đổi YC thì cập nhật docs/product/requirements/INDEX.md trong cùng PR. Thêm hoặc đổi QT thì cập nhật rules/INDEX.md.
- Sửa nghĩa một YC hay QT đã de-xuat hoặc da-chot: tăng "bản" và làm theo CL6. Chỉ sửa chữ thì khai "chỉ sửa chữ" trong PR.
- Không tự đổi trang_thai sang da-chot. Chỉ Tùng đổi, bằng PR của chính Tùng.
- Căn tự nhập của sale không có lịch trống: không viết YC nào làm ô ngày hiện "trống" cho căn đó.
