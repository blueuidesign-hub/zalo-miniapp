# Lệnh cho phiên Design: soạn một nhóm yêu cầu YC

Dán nguyên khối dưới đây vào phiên Design. Thay <YCn> và <tên nhóm> theo item DC. Mỗi lần một nhóm.

```text
Người đang làm: Tùng.

Nhiệm vụ: từ bản thiết kế Home247 trong phiên này, viết tài liệu yêu cầu cho nhóm
<YCn> "<tên nhóm>". Kết quả là MỘT file markdown tên <YCn>-<ten-khong-dau>.md,
đặt trong một khối code để tôi copy.

Danh sách nhóm cấp 1 (không đổi số):
YC1 Đăng nhập, vai trò, kết nối · YC2 Lịch chủ nhà · YC3 Căn và giá · YC4 Booking ·
YC5 Tìm phòng và gửi khách · YC6 Nguồn phòng và căn tự nhập · YC7 Thống kê ·
YC8 Đội nhóm, cộng tác viên · YC9 Quản trị và dữ liệu
Chỉ viết những gì thuộc <YCn>. Thấy hành vi thuộc nhóm khác thì ghi một dòng "thuộc YCx".

Luật đặt mã:
- Yêu cầu trong nhóm: <YCn>.1, <YCn>.2... Yêu cầu con khi quá lớn: <YCn>.2.1. Tối đa 3 tầng.
- Tiêu chí nghiệm thu: <YCn>.2-NT1, <YCn>.2-NT2...
- Mã màn hình: dùng đúng mã trên canvas (A1, CN4, S2...). Một mã đang chỉ hai màn khác nhau
  thì ghi vào "Câu hỏi còn mở", không tự chọn.
- Không tự đặt mã cho quy tắc, quyền, quyết định. Ghi vào các mục riêng ở cuối.

Khuôn của file:

---
id: <YCn>
tieu_de: <tên nhóm>
trang_thai: de-xuat
nguoi_chu: tung
nguon: canvas Design "Home247 · Lịch phòng Hạ Long", ngày <hôm nay>
---
# <YCn> · <tên nhóm>
<2 đến 4 câu: nhóm này giải quyết việc gì cho ai>

## <YCn>.1 · <tên yêu cầu>
bản 1 · rủi ro: thap | tb | cao   (cao nếu chạm quyền xem, dữ liệu giữa người dùng, xóa dữ liệu)
Mục đích: một câu, ai cần, để làm gì.
Màn hình: <mã màn>, <mã màn>
Khi nào xảy ra: <người dùng đang ở đâu, bấm gì>

| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
Điền cột Người dùng và Mini App theo thiết kế. Cột Server, Zalo, Dữ liệu đổi: điền nếu thiết kế
thể hiện rõ, không thì ghi "?".

Trạng thái màn: rỗng · đang tải · lỗi mạng · không có quyền · đã từ chối quyền Zalo ·
quay lại từ nền · mở từ link. Mỗi trạng thái một dòng: thiết kế hiện gì, hoặc "chưa thiết kế".

Tiêu chí nghiệm thu:
- <YCn>.1-NT1 Khi ..., thì ...   (mỗi tiêu chí kiểm được bằng một lần thử, có số cụ thể nếu là giá hay ngày)

(lặp lại cho <YCn>.2, <YCn>.3...)

## Quy tắc nghiệp vụ phát hiện
Mọi quy tắc dùng chung mà thiết kế ngầm định (giá, đêm, ngưỡng, ai thấy gì).
Mỗi dòng: nội dung · yêu cầu nào dùng · ví dụ số nếu có.

## Ai thấy gì
Dữ liệu nào, vai nào được xem, sửa: chủ nhà, sale đã kết nối, người mở link chưa kết nối,
cộng tác viên, khách.

## Câu hỏi còn mở
Chỗ thiết kế không trả lời, hoặc hai màn mâu thuẫn. Mỗi câu hỏi kèm các phương án.

## Màn hình trong nhóm
| Mã | Tên | Artboard |

Luật bắt buộc:
- Chỉ mô tả những gì thiết kế đã thể hiện. Chỗ nào không có thì ghi "?" hoặc đưa vào
  Câu hỏi còn mở. Không lấp bằng cách làm phổ biến của các app khác.
- Mọi câu đều ở trạng thái đề xuất. Không ghi "đã chốt".
- Không chép quy tắc vào từng yêu cầu. Yêu cầu chỉ ghi "theo quy tắc: <tên ngắn>".
- Một ý một chỗ. Không lặp cùng một hành vi ở hai yêu cầu.
```
