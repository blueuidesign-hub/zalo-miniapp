---
id: CL5
tieu_de: Lệnh ngắn và quy trình AI chạy
trang_thai: de-xuat
nguoi_chu: tung
ban: 1
---
# CL5 · Lệnh ngắn

Lệnh có skill trong .claude/skills/ gọi bằng dấu gạch chéo: /hom-nay (CL5.1), /ghi (CL5.2), /lam (CL5.3), /doi (CL5.4), /loi (CL5.5), /duyet (CL5.8), /tinh-hinh (CL5.9). Skill chỉ trỏ về mục này. Sửa quy trình thì sửa ở đây, không sửa trong skill.

Người dùng gõ lệnh ngắn. AI làm đúng quy trình dưới đây, không hỏi lại những gì đã có trong repo.

## CL5.1 · hôm nay [tên người]
Đọc work/BOARD.md, work/sprints/ (sprint đang chạy), các item trong sprint. Báo theo thứ tự:
1. Chờ Tùng duyệt hoặc chốt: QD cho-chot, item có can_duyet, PR chờ. Mỗi dòng ghi đang chặn item nào.
2. Nên làm trước hôm nay: item có nhiều item khác đang chờ nó nhất (qua truoc), rồi theo THU-TU.md.
3. Bị chặn: item và lý do.
4. Yêu cầu chưa xong: Chưa code, Chưa test, Test lỗi.
5. Cảnh báo: item mồ côi, quá hạn, QD quá hạn chốt.
Không sửa file nào.

## CL5.2 · ghi <ý>
Tạo item trang_thai: moi. Đoán loại và cha, ghi nguon. Báo lại mã. Không đoán được loại thì hỏi.

## CL5.3 · làm <mã>
1. Đọc item, item cha, mục trong thuc_hien (bản hiện tại), item trong truoc, file trong mục Đọc.
2. Kiểm điều kiện bắt đầu (CL2.4), item truoc đã xong, yêu cầu có đổi bản kể từ based_on không.
3. Liệt kê: tài liệu phải sửa, test phải viết, quyền phải xin (CL4), việc phát sinh.
4. Cần quyền CL4.3 thì mở PR nháp xin duyệt, dừng, báo lại.
5. Lập kế hoạch ở plan mode, ghi vào mục Kế hoạch. Rủi ro cao thì chờ Đức duyệt.
6. Làm trên nhánh <mã>-<ten-ngan>. Việc ngoài phạm vi thì chạy "ghi", không làm lẫn.
7. Ghi nhật ký, bằng chứng, mở PR, báo ba dòng: đã làm, còn lại, ai làm gì tiếp.

## CL5.4 · đổi <mã>: <nội dung>
Sửa tài liệu theo nội dung. Đề xuất tăng bản hay "chỉ sửa chữ". Tìm mọi chỗ nhắc tới mã trong repo, liệt kê. Tạo DC, US, BG cho các chỗ bị ảnh hưởng (CL6). Mở PR xin Tùng chốt (CL4.3.1). Luôn dừng ở bước chốt.

## CL5.5 · lỗi <mô tả>
Tạo BG, tìm yêu cầu liên quan, ghi thuc_hien. Đánh giá muc_do. Lỗi lộ dữ liệu hay sai tiền thì báo ngay, đề xuất vào sprint đang chạy.

## CL5.6 · lập sprint
Nháp work/sprints/SP<n>.md: Sprint Goal đề xuất, item theo THU-TU.md vừa sức chứa (CL1.4), phụ thuộc, quyền cần xin. Tùng chốt mục tiêu, Đức chốt phạm vi.

## CL5.7 · tinh chỉnh
Liệt kê item Mới, đề xuất tách, gộp trùng, gắn yêu cầu, ước lượng sơ bộ, item Mới quá 4 tuần.

## CL5.8 · duyệt
Liệt kê mọi thứ chờ Tùng duyệt kèm đường dẫn PR. Không tự duyệt.

## CL5.9 · tình hình <mã>
Cây con và trạng thái. Ví dụ YC1 (các YC con, trạng thái thực hiện, item liên quan), EP1, SP1.

## CL5.10 · họp <file>
Theo CL7.

## CL5.11 · review, retro
Review: item xong và chưa xong, yêu cầu đổi trạng thái, việc mới phát sinh. Retro: ước lượng và thực tế, số lần sửa lại, lỗi lọt, đề xuất 1 đến 2 CT.

## CL5.12 · phát hành
Kiểm mọi yêu cầu trong phạm vi đã Đã test OK, chuẩn bị file phát hành. Gửi Zalo cần Tùng duyệt (CL4.3.5).
