---
id: SK4
tieu_de: Chạy app đơn giản nhất trên điện thoại thật, xem dev có code và thử được không
loai: SK
trang_thai: san-sang
cha: EP1
truoc: [EN3]
nguoi: duc
rui_ro: cao
sprint: SP0
uoc_luong: 1 ngày
ngay_tao: 2026-10-23
---
## Vì sao làm đầu tiên
Mọi việc code về sau đều giả định rằng sửa code xong là thấy được trên Zalo thật. Nếu giả định này sai, hoặc mỗi lần thử mất nửa tiếng, thì kế hoạch các sprint sau sai theo. Spike này kiểm giả định đó với chi phí một ngày, trước khi viết dòng code nghiệp vụ nào.

## Câu hỏi cần trả lời
1. App mẫu trống chạy được trên máy tính của Đức không (`zmp start`, mở localhost).
2. Deploy bản Development rồi quét QR, app có mở được trên điện thoại của Đức không. Trên điện thoại của Tùng không. Thử cả iPhone và Android nếu có.
3. Tài khoản Zalo nào mở được bản Development và bản Testing. Người ngoài nhóm có mở được không. Câu này quyết định cách cho 2 đến 3 người dùng thử ở EP3.
4. Một vòng "sửa một dòng chữ, thấy trên điện thoại" mất bao lâu. Có cách xem thay đổi trên điện thoại mà không phải deploy mỗi lần không.
5. Khi app lỗi trên điện thoại thì xem log ở đâu.
6. Bước nào bắt buộc làm ở máy local. `zmp login` cần quét QR bằng Zalo, và phiên Claude Code cloud có mạng hạn chế. Ghi rõ phần nào cloud làm được, phần nào không (CL10).
7. Code Vue hiện có ở zalo-miniapp-vue có build và chạy được trong Zalo không, gọi được zmp-sdk không. Câu này là đầu vào cho QD7.

## Task
- [ ] SK4-TA1 Đức: cài Node.js và Zalo Mini App CLI (hoặc VS Code kèm Zalo Mini App Extension) trên máy của Đức
- [ ] SK4-TA2 Đức: tạo app từ mẫu trống chính thức, chạy `zmp start`
- [ ] SK4-TA3 Đức: `zmp login`, `zmp deploy` bản Development, quét QR, mở trên điện thoại của Đức rồi của Tùng
- [ ] SK4-TA4 Đức: sửa một dòng chữ, đo thời gian tới khi thấy trên điện thoại
- [ ] SK4-TA5 Đức: thử build và deploy code từ zalo-miniapp-vue
- [ ] SK4-TA6 Đức: ghi kết quả vào docs/dev/chay-va-test.md (cách chạy, cách deploy, cách mở trên điện thoại, cách xem log, thời gian một vòng) và trả lời các câu ở mục 9 của docs/external/zalo-hanh-vi.md nếu thử tới
- [ ] SK4-TA7 Tùng: tự làm theo docs/dev/chay-va-test.md từ bước quét QR. Mở được app trên điện thoại của mình thì spike xong

## Giới hạn thời gian
Một ngày làm việc. Hết giờ mà chưa mở được trên điện thoại thì dừng, ghi đã kẹt ở bước nào, mở IM.

## Không làm trong spike này
Không viết màn nghiệp vụ, không dựng backend, không chọn thư viện giao diện. Code thử bỏ đi được.

## Nhật ký
