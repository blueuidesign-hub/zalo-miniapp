---
id: CL10
tieu_de: Phiên làm việc Claude và Claude Code
trang_thai: de-xuat
nguoi_chu: tung
ban: 1
---
# CL10 · Phiên làm việc

## CL10.1 · Đặt tên phiên
<Người> · <mã item hoặc loại> · <tên ngắn>. Ví dụ: T · YC1 · đặc tả đăng nhập · Đ · US12 · tìm căn trống.
Câu đầu tiên trong phiên: "Người đang làm: Tùng" hoặc "Đức". Claude Code: tên phiên trùng tên nhánh, đổi bằng /rename.

## CL10.2 · Claude (chat trong Project Homestay)
Đặc tả YC, so phương án QD, thiết kế (Claude Design), hỏi nhanh (hôm nay, tình hình). Chat chỉ đọc nhánh main đã đồng bộ. Kết quả đưa vào repo qua Claude Code.

## CL10.3 · Claude Code trên cloud
Code logic, API, test tự động. Doc Task. Dựng khung, script. Sinh backlog, nháp sprint, review, retro. Báo cáo theo lịch.
Không đưa App Secret, khóa production, dữ liệu thật vào cloud.

## CL10.4 · Claude Code trên máy của Đức
Spike với API Zalo, chạy app trên điện thoại, test tay KB, lỗi chỉ có trên một loại máy, đẩy bản lên Zalo, thao tác dữ liệu thật (luôn cần CL4.3.4). Kéo phiên cloud về máy bằng claude --teleport.

## CL10.5 · Vòng đời
Một phiên một item. Mỗi người tối đa 2 phiên đang làm. Kết thúc: ghi nhật ký, mở PR, báo ba dòng. Item xong thì lưu trữ phiên.
