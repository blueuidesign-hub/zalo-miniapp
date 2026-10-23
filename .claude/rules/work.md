---
paths:
  - "work/**"
---
# Quy ước khi sửa work/

- Mỗi item một file work/backlog/<MÃ>-<ten-ngan>.md, theo mẫu trong docs/process/templates/.
- Loại item: EP, US, EN, SK, DC, BG, IM. Task nằm trong file item cha (US12-TA1).
- Trạng thái item: moi, san-sang, trong-sprint, dang-lam, cho-nghiem-thu, xong, huy (CL2).
- Liên kết chỉ ghi ở một đầu: cha, truoc, lien_quan, trung_voi, thay_cho, thuc_hien, nguon.
- Chỉ người làm item ghi vào Nhật ký của item đó. Dòng nhật ký: ngày · người · đã làm gì · bất ngờ · mất bao lâu.
- Điều kiện xong của item là CL2.5. Chưa đủ thì để cho-nghiem-thu, không ghi xong.
- Đưa item vào sprint đang chạy, đổi Sprint Goal hay đổi THU-TU.md: chỉ Tùng (CL4.3.2). AI chỉ đề xuất.
- Việc phát sinh ngoài phạm vi: tạo item moi, không làm lẫn vào item đang làm.
- Mỗi người tối đa 2 item dang-lam (CL2.7).
- Item có can_duyet thì mở PR nháp xin duyệt trước, rồi dừng (CL4.5).
- Thứ tự backlog trong work/backlog/THU-TU.md chỉ Tùng sắp.
- Item xong chuyển vào work/backlog/done/<yyyy-mm>/.
- Không đưa tên thật, số điện thoại người dùng vào repo.
