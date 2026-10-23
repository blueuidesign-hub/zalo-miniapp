---
id: CL6
tieu_de: Luật thay đổi
trang_thai: de-xuat
nguoi_chu: tung
ban: 1
---
# CL6 · Luật thay đổi

## CL6.1 · Luật chung
Mục có mã đổi nghĩa thì tăng phiên bản. Trạng thái thực hiện về Chưa code. Phải có ít nhất một item mở trỏ tới phiên bản mới. Mọi tài liệu nhắc tới mã đó phải được xem lại: sửa trong cùng PR, hoặc tạo DC ghi "xem lại".

Quy tắc không ghi mã việc. Item trỏ tới quy tắc bằng thuc_hien.

## CL6.2 · Trạng thái của một mục có mã
Quyết định: de-xuat, da-chot, da-thay, bo. Người đổi qua PR Tùng duyệt.
Thực hiện, theo từng phiên bản: Chưa code, Chưa test, Test lỗi [MỞ: QD4], Đã test OK. Do script ghi, có [tự sinh]. Cho tới khi có script (EN2), chưa ghi dòng này.

## CL6.3 · Bước kiểm bắt buộc để lên Đã test OK
| Rủi ro | Bước kiểm |
|---|---|
| Thấp | Đức xem trên Zalo, ghi một dòng biên bản |
| Trung bình | Test tự động theo ví dụ số, cộng xem trên Zalo |
| Cao | Test tự động, test vi phạm quyền, KB trên iPhone và Android, Tùng nghiệm thu |

## CL6.4 · Điểm kiểm (bật dần, xem EN2)
K1 PR đổi mục có mã: tăng bản, hoặc khai "chỉ sửa chữ". Đổi số trong bảng ví dụ luôn là đổi nghĩa.
K2 Mục chưa xong phải có item mở trỏ tới.
K3 Tài liệu nhắc tới mã vừa tăng bản phải được xem lại.
K4 Bắt đầu item: liệt kê yêu cầu liên quan đang chưa xong.
K5 PR của item: tài liệu item đọc có đổi kể từ based_on không.
K6 Không sửa tay dòng [tự sinh].
K7 Không phát hành khi yêu cầu trong phạm vi chưa Đã test OK.

## CL6.5 · Ngoài repo thì chưa có hiệu lực
Quyết định nói miệng, trong chat, hay màn sửa trên canvas chỉ có hiệu lực khi đã vào repo (QD, YC, bảng đăng ký màn).
