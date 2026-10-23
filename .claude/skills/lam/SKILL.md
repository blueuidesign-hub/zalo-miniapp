---
name: lam
description: "Làm một item backlog theo quy trình: đọc, kiểm điều kiện, liệt kê quyền, lập kế hoạch, làm trên nhánh, ghi nhật ký, mở PR."
argument-hint: "<mã item, ví dụ US12>"
disable-model-invocation: true
---

Làm đúng docs/process/CL5-lenh.md mục CL5.3 cho item $ARGUMENTS. Câu đầu tiên của người dùng phải cho biết ai đang làm, chưa có thì hỏi trước.
Nhánh: <mã>-<tên-ngắn> từ main. Một phiên một item.
Dừng và báo, không tự làm tiếp, khi: item chưa san-sang, item trong truoc chưa xong, yêu cầu trong thuc_hien đã lên bản mới, có [MỞ: QD...] chưa chốt, hoặc cần quyền CL4.3 (mở PR nháp xin duyệt).
Cuối phiên ghi một dòng vào Nhật ký của item và báo ba dòng: đã làm, còn lại, ai làm gì tiếp.
