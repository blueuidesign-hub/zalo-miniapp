---
id: CL2
tieu_de: Backlog, trạng thái, liên kết, điều kiện bắt đầu và xong
trang_thai: de-xuat
nguoi_chu: tung
ban: 1
---
# CL2 · Backlog

## CL2.1 · Loại item
| Cấp | Loại | Mã | Dùng khi |
|---|---|---|---|
| 1 | Epic | EP | Mục tiêu lớn nhiều sprint, ứng với một mốc |
| 2 | User Story | US | Giá trị người dùng thấy được, xong trong một sprint |
| 2 | Enabler | EN | Việc làm nền, người dùng không thấy: hạ tầng, CI, script, môi trường, tài khoản, nợ kỹ thuật, chuẩn bị người dùng thử |
| 2 | Spike | SK | Tìm sự thật bằng thử hoặc tra, có giới hạn thời gian |
| 2 | Doc Task | DC | Một thay đổi kéo theo phải xem lại hay sửa tài liệu khác |
| 2 | Bug | BG | Sản phẩm làm khác yêu cầu |
| 3 | Task | US12-TA1 | Bước con, nằm trong file item cha |
| Ngoài cây | Impediment | IM | Thứ chặn việc mà nhóm phải gỡ |
Quyết định (QD) không phải backlog item. QD nằm trong docs/decisions/.

## CL2.2 · Trạng thái item
moi → san-sang → trong-sprint → dang-lam → cho-nghiem-thu → xong. Từ bất kỳ đâu sang huy (ghi lý do).
Task: can-lam, dang-lam, xong. Impediment: mo, da-go.
Ba cờ máy tính, không ghi tay: Bị chặn (item trong truoc chưa xong, hoặc IM mở), Chờ duyệt (can_duyet chưa có lời duyệt), Đặc tả đổi (yêu cầu trong thuc_hien lên bản mới sau based_on).

## CL2.3 · Liên kết (chỉ ghi ở một đầu, chiều ngược do máy tính)
| Trường | Nghĩa |
|---|---|
| cha | Item cha. Mỗi item một cha |
| truoc | Phải xong trước item này. Không được vòng tròn |
| lien_quan | Liên quan |
| trung_voi | Trùng. Item trùng chuyển huy |
| thay_cho | Mục mới thay mục cũ (khi tách, gộp) |
| thuc_hien | Yêu cầu và phiên bản item làm cho đạt, ví dụ [YC5.1@1]. Bắt buộc với US, BG |
| nguon | Sinh ra từ BB, QD, PH, SC hay item khác |

## CL2.4 · Điều kiện bắt đầu (san-sang)
- thuc_hien trỏ tới yêu cầu đã chốt, có phiên bản (US, BG).
- Yêu cầu có đủ tiêu chí NT, có ví dụ số nếu rủi ro từ trung bình.
- Không còn QD mở chặn việc. Đã biết quyền cần xin.
- Có rui_ro, uoc_luong. Vừa một sprint, không vừa thì tách.

## CL2.5 · Điều kiện xong
- Đã gộp. Test tự động mang mã tiêu chí xanh. Ô quyền chạm tới có test cố tình vi phạm.
- Đủ bước kiểm theo rủi ro (CL6.3), nên yêu cầu lên Đã test OK.
- Tài liệu liên quan đã sửa, hoặc đã có DC cho phần chưa sửa.
- Nhật ký và bằng chứng đã ghi.
Với item chỉ có tài liệu (DC, phần lớn EN, SK): PR đã gộp, kết luận đã ghi vào đúng tài liệu nguồn.

## CL2.6 · Thứ tự và tinh chỉnh
Thứ tự trong work/backlog/THU-TU.md, chỉ Tùng sắp. Item Mới quá 4 tuần không ai đụng thì đưa ra buổi tinh chỉnh để giữ hay hủy.

## CL2.7 · Giới hạn việc dở
Mỗi người tối đa 2 item dang-lam.
