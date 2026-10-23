---
id: YC9
tieu_de: Quản trị và dữ liệu
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC9 · Quản trị và dữ liệu

Nhóm này là tab Cá nhân: menu tài khoản, hồ sơ, cài đặt, và phần dữ liệu (sao lưu, xuất file). Có hai menu: P1 cho chủ nhà và P4 cho sale. Các dòng liên quan nhóm khác nằm ở nhóm đó và được trỏ tới ở bảng đầu YC9.1. Tất cả nội dung dưới đây ở trạng thái đề xuất.

## YC9.1 · Menu tài khoản (tab Cá nhân)
Mục đích: người dùng thấy mình đang đăng nhập là ai, với vai trò gì, và đi tới mọi cài đặt từ một chỗ.
Màn hình: P1, P4
Khi nào xảy ra: người dùng mở tab Cá nhân.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Cá nhân | Đầu trang: chữ cái đầu hoặc ảnh, tên, số điện thoại và vai trò ("Chủ nhà" hoặc "Sale") | ? | ? | ? |
| 2 | Xem nhóm "TÀI KHOẢN" | Dòng "Thông báo" kèm số chưa đọc; dòng "Thông tin cá nhân"; dòng "Đăng nhập bằng Zalo · Đã liên kết" | ? | ? | ? |
| 3 | Xem nhóm cài đặt của chủ nhà (P1) | "CÀI ĐẶT": Cài đặt thông báo ("3 loại đang bật"), Giờ nhận, trả phòng mặc định ("14:00 · 12:00"), Ngày tính giá cuối tuần ("T6, T7") | ? | ? | ? |
| 4 | Xem nhóm dữ liệu của chủ nhà (P1) | "DỮ LIỆU": Tải file sao lưu, Xuất file Excel (CSV) | ? | ? | ? |
| 5 | Xem nhóm bán phòng của sale (P4) | "BÁN PHÒNG": Đội nhóm, Link xin xem lịch ("Gửi chủ nhà"), Mức cộng giá mặc định ("+400k"), Mẫu tin gửi khách | ? | ? | ? |
| 6 | Xem nhóm cài đặt của sale (P4) | "CÀI ĐẶT": Cài đặt thông báo | ? | ? | ? |
| 7 | Xem nhóm hỗ trợ | "HỖ TRỢ": Hướng dẫn sử dụng, Nhắn Zalo cho Home247 | ? | ? | ? |
| 8 | Xem cuối trang | Nút "Đăng xuất", dòng "Home247 · phiên bản 1.0" | ? | ? | ? |
| 9 | Chạm một dòng | Mở màn tương ứng (bảng dưới) | ? | ? | ? |

Dòng và nơi mô tả:
| Dòng trên menu | Thuộc yêu cầu |
|---|---|
| Thông báo | YC1.10 |
| Thông tin cá nhân | YC9.2 |
| Đăng nhập bằng Zalo, Đăng xuất | YC1.11 |
| Cài đặt thông báo | YC9.3 |
| Giờ nhận, trả phòng mặc định | YC9.4 |
| Ngày tính giá cuối tuần | YC3.8 |
| Tải file sao lưu | YC9.5 |
| Xuất file Excel (CSV) | YC9.6 |
| Đội nhóm | YC8.1 |
| Link xin xem lịch, Gửi chủ nhà | YC1.6 |
| Mức cộng giá mặc định | YC5.6 |
| Mẫu tin gửi khách | YC5.7 |
| Hướng dẫn sử dụng, Nhắn Zalo cho Home247 | YC9.7 |

Theo quy tắc: Menu theo vai trò.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng (mỗi vai trò chỉ thấy menu của mình)
- đã từ chối quyền Zalo: chưa thiết kế (tên, ảnh lấy từ Zalo bị từ chối: chữ cái đầu thay ảnh; xem YC9.2)
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC9.1-NT1 Khi người dùng là chủ nhà, thì thấy các nhóm TÀI KHOẢN, CÀI ĐẶT, DỮ LIỆU, HỖ TRỢ và không thấy "BÁN PHÒNG".
- YC9.1-NT2 Khi người dùng là sale, thì thấy TÀI KHOẢN, BÁN PHÒNG, CÀI ĐẶT, HỖ TRỢ và không thấy "DỮ LIỆU".
- YC9.1-NT3 Khi có 2 thông báo chưa đọc, thì dòng "Thông báo" ghi số 2.
- YC9.1-NT4 Khi chủ nhà có 3 loại thông báo đang bật, thì dòng "Cài đặt thông báo" ghi "3 loại đang bật".
- YC9.1-NT5 Khi người dùng chạm một dòng, thì mở đúng màn của dòng đó, không bắt đăng nhập lại.

## YC9.2 · Hồ sơ (Thông tin cá nhân)
Mục đích: người dùng xem và sửa cách người khác thấy mình, và biết số điện thoại, tài khoản Zalo đang gắn.
Màn hình: P2
Khi nào xảy ra: người dùng chạm "Thông tin cá nhân" trên menu.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở hồ sơ | Ảnh hoặc chữ cái đầu, nút "Đổi ảnh đại diện" | ? | ? | ? |
| 2 | Xem tên | Ô "Họ và tên" và ô "Tên hiển thị" kèm ghi chú "Sale thấy tên này trong Nguồn phòng." | ? | ? | ? |
| 3 | Sửa tên hiển thị | Nhập tên mới | ? | ? | ? |
| 4 | Xem số điện thoại | Số lấy từ Zalo, nhãn "Từ Zalo ✓", chỉ xem (theo YC1.5.3) | ? | ? | ? |
| 5 | Xem tài khoản Zalo | "ĐĂNG NHẬP": "Zalo · Nguyễn Hoa", "Dùng để đăng nhập trên máy khác", "Đã liên kết ✓" (theo YC1.11) | ? | ? | ? |
| 6 | Bấm "Đổi ảnh đại diện" | Chọn ảnh mới (màn chọn: chưa thiết kế) | ? | Có thể mở quyền ảnh của Zalo (?) | Ảnh đại diện |
| 7 | Bấm "Lưu thay đổi" | Lưu tên hiển thị và ảnh | ? | ? | Hồ sơ |
| 8 | Bấm "Xóa tài khoản" | Chỉ có nút. Màn xác nhận và hậu quả: chưa thiết kế | ? | ? | Tài khoản (?) |

Theo quy tắc: Số điện thoại từ Zalo, chỉ xem (YC1); Tên hiển thị.

Trạng thái màn:
- rỗng: chưa có số điện thoại thì ô ghi "Chưa có · Zalo sẽ hỏi khi bạn kết nối lần đầu" (YC1.5.3)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: người dùng từ chối quyền tên, ảnh thì tự gõ tên ở đây; ảnh hiện chữ cái đầu (theo docs/external/zalo-rang-buoc.md, mục 2.3). Màn riêng: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC9.2-NT1 Khi người dùng sửa "Tên hiển thị" và bấm "Lưu thay đổi", thì sale thấy tên mới trong Nguồn phòng.
- YC9.2-NT2 Khi số điện thoại lấy từ Zalo, thì ô số điện thoại không sửa được.
- YC9.2-NT3 Khi người dùng đã từ chối quyền tên và ảnh, thì vẫn dùng được hồ sơ và gõ tên hiển thị.
- YC9.2-NT4 Khi người dùng bấm "Xóa tài khoản", thì tài khoản chưa bị xóa ngay (màn xác nhận: xem câu hỏi mở 5).

## YC9.3 · Cài đặt thông báo
Mục đích: người dùng chọn loại việc nào được báo qua Zalo.
Màn hình: P3 (chủ nhà), P12 (sale)
Khi nào xảy ra: người dùng chạm "Cài đặt thông báo".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | Dòng "Thông báo gửi qua Zalo của bạn." và nhóm "BÁO CHO TÔI KHI" | ? | ? | ? |
| 2 | Xem loại của chủ nhà (P3) | Sale đặt phòng mới ("Tên sale, căn và ngày ở"); Sale xin xem lịch ("Để bạn đồng ý hoặc từ chối"); Khách nhận phòng ngày mai ("Nhắc lúc 18:00 hôm trước"); Booking chưa cọc ("Khi còn 3 ngày đến ngày nhận phòng") | ? | ? | ? |
| 3 | Xem loại của sale (P12) | Chủ nhà đồng ý cho xem lịch ("Căn mới vào Nguồn phòng"); Căn bạn đã gửi khách vừa có người đặt ("Để báo khách chọn căn khác"); Chủ nhà xác nhận booking của bạn ("Kèm ngày ở và tiền cọc"); Khách của bạn nhận phòng ngày mai ("Nhắc lúc 18:00 hôm trước") | ? | ? | ? |
| 4 | Bật hoặc tắt một loại | Công tắc đổi trạng thái | ? | Hộp thoại Zalo xin gửi thông báo, lần đầu (?) | Cài đặt thông báo |
| 5 | Bấm "Lưu thay đổi" | Lưu | ? | ? | Cài đặt thông báo |

Theo quy tắc: Thông báo qua Zalo cần người dùng đồng ý; Thông báo trong app (YC1.10).

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: người dùng chưa đồng ý nhận thông báo Zalo (chưa thiết kế)
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC9.3-NT1 Khi người dùng là chủ nhà, thì thấy đúng 4 loại ở P3; khi là sale thì thấy đúng 4 loại ở P12.
- YC9.3-NT2 Khi người dùng tắt "Booking chưa cọc" và lưu, thì không còn nhắc loại đó.
- YC9.3-NT3 Khi người dùng chưa đồng ý nhận thông báo Zalo, thì công tắc không làm app gửi được thông báo (xem câu hỏi mở 2).

## YC9.4 · Giờ nhận, trả phòng mặc định
Mục đích: chủ nhà đặt một lần giờ nhận và trả phòng cho mọi căn, để sale gửi đúng giờ cho khách.
Màn hình: P5
Khi nào xảy ra: chủ nhà chạm "Giờ nhận, trả phòng mặc định".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | "Áp dụng cho tất cả căn. Sale gửi giờ này cho khách cùng thông tin căn." | ? | ? | ? |
| 2 | Chọn giờ | "Giờ nhận phòng", "Giờ trả phòng" | ? | ? | ? |
| 3 | Xem tóm tắt | "Khách nhận phòng từ 14:00, trả phòng trước 12:00 hôm sau." | ? | ? | ? |
| 4 | Bấm "Lưu thay đổi" | Lưu | ? | ? | Giờ nhận, trả mặc định |

Theo quy tắc: Giờ nhận trả mặc định (YC4).

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC9.4-NT1 Khi chủ nhà lưu 14:00 và 12:00, thì dòng trên menu ghi "14:00 · 12:00" và S3 của sale ghi "Nhận phòng 14:00 · Trả phòng 12:00".
- YC9.4-NT2 Khi chủ nhà đổi giờ, thì booking đã có không đổi giờ đã ghi (xem câu hỏi mở 9).

## YC9.5 · Sao lưu và khôi phục dữ liệu
Mục đích: chủ nhà giữ một bản dữ liệu của mình phòng khi mất hoặc xóa nhầm.
Màn hình: P7
Khi nào xảy ra: chủ nhà chạm "Tải file sao lưu".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | "FILE SAO LƯU": "Lần cuối: 02/10/2026 21:14", "2 căn · 48 booking · 3 sale · giá cả năm" | ? | ? | ? |
| 2 | Bấm "Tải file sao lưu" | Tạo file và lưu vào máy. Ghi chú "Gửi file này qua Zalo cho chính mình để giữ an toàn." | ? | ? | Thời điểm sao lưu cuối (?) |
| 3 | Bật "Nhắc tôi sao lưu mỗi tháng" | Công tắc, ghi chú "Nhắc qua Zalo vào ngày 1 hằng tháng." | ? | ? | Cài đặt nhắc |
| 4 | Bấm "Khôi phục từ file sao lưu" | Lời cảnh báo "Toàn bộ dữ liệu hiện tại sẽ được thay bằng dữ liệu trong file." Bước chọn file và xác nhận: chưa thiết kế | ? | ? | Toàn bộ dữ liệu (?) |

Theo quy tắc: Dữ liệu lưu và xử lý ở Việt Nam (CLAUDE.md); Chặn trùng booking ở database (CLAUDE.md).

Trạng thái màn:
- rỗng: chưa từng sao lưu (chưa thiết kế dòng "Lần cuối")
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC9.5-NT1 Khi chủ nhà bấm "Tải file sao lưu", thì "Lần cuối" đổi thành thời điểm vừa tải.
- YC9.5-NT2 Khi chủ nhà bấm "Khôi phục từ file sao lưu", thì app cảnh báo dữ liệu hiện tại sẽ bị thay và chưa thay gì cho tới khi xác nhận.
- YC9.5-NT3 Khi khôi phục xong, thì hai booking trùng đêm trong file bị từ chối, không ghi vào (xem câu hỏi mở 4).

## YC9.6 · Xuất file Excel (CSV)
Mục đích: chủ nhà lấy danh sách booking để xem hoặc tính trên Excel, Google Sheets.
Màn hình: P8
Khi nào xảy ra: chủ nhà chạm "Xuất file Excel (CSV)".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | "Danh sách booking để xem hoặc tính toán trên Excel, Google Sheets." | ? | ? | ? |
| 2 | Chọn thời gian | Chip "Tháng này", "3 tháng gần nhất", "Năm 2026", "Tùy chọn" | ? | ? | ? |
| 3 | Chọn căn | Chip "Tất cả", "1509", "3402" | ? | ? | ? |
| 4 | Xem cột | "FILE GỒM CÁC CỘT": Căn · Ngày nhận · Ngày trả · Số đêm · Khách · SĐT · Sale · Tổng tiền · Đã cọc · Còn lại · Ghi chú | ? | ? | ? |
| 5 | Xem số dòng | "23 booking" | ? | ? | ? |
| 6 | Bấm "Xuất file Excel (CSV)" | Tạo file CSV và lưu hoặc gửi (cách lưu: chưa thiết kế) | ? | ? | ? |

Theo quy tắc: Tiền là số nguyên đồng (CLAUDE.md); Ngày theo giờ Việt Nam (CLAUDE.md); Không lưu thông tin khách (CLAUDE.md).

Trạng thái màn:
- rỗng: khoảng chọn không có booking (chưa thiết kế)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC9.6-NT1 Khi chủ nhà chọn "Tháng này" và căn "1509", thì số dòng ghi đúng số booking của 1509 trong tháng.
- YC9.6-NT2 Khi xuất, thì mỗi dòng có đủ các cột ở mục "FILE GỒM CÁC CỘT" (xem câu hỏi mở 1 về cột Khách, SĐT).
- YC9.6-NT3 Khi số tiền được xuất, thì là số nguyên đồng, không có dấu chấm ngăn nghìn để Excel đọc được là số.

## YC9.7 · Hướng dẫn sử dụng và nhắn Zalo cho Home247
Mục đích: người dùng tự tra cách làm một việc, hoặc nhắn người hỗ trợ khi vẫn chưa rõ.
Màn hình: P9
Khi nào xảy ra: người dùng chạm "Hướng dẫn sử dụng" hoặc "Nhắn Zalo cho Home247".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở hướng dẫn | Nhóm "CHỦ NHÀ" với các mục thu gọn: Thêm căn và ảnh, Đặt giá theo tháng, Đặt giá ngày lễ, Ghi booking, Mời sale xem lịch, Sale được xem gì | ? | ? | ? |
| 2 | Chạm một mục | Mở nội dung. Ví dụ "Đặt giá theo tháng" có 3 bước: mở căn chọn tab Giá; chạm tháng bắt đầu rồi tháng kết thúc; nhập giá ngày thường, cuối tuần rồi bấm Áp dụng | ? | ? | ? |
| 3 | Đọc "Vẫn chưa rõ?" | "Home247 trả lời qua Zalo trong giờ hành chính." | ? | ? | ? |
| 4 | Bấm "Nhắn Zalo cho Home247" | Mở khung chat Zalo với Home247 | ? | Mở chat OA (?) | ? |

Theo quy tắc: Không link ra ngoài Zalo (CLAUDE.md).

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC9.7-NT1 Khi người dùng chạm "Đặt giá theo tháng", thì thấy 3 bước theo đúng thứ tự trong thiết kế.
- YC9.7-NT2 Khi người dùng bấm "Nhắn Zalo cho Home247", thì khung chat Zalo mở trong Zalo, không mở trình duyệt ngoài.
- YC9.7-NT3 Khi người dùng là sale, thì "Hướng dẫn sử dụng" có phần dành cho sale (chưa thiết kế, xem câu hỏi mở 8).

## Quy tắc nghiệp vụ phát hiện
| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Menu theo vai trò | Chủ nhà thấy CÀI ĐẶT, DỮ LIỆU, HỖ TRỢ. Sale thấy BÁN PHÒNG, CÀI ĐẶT, HỖ TRỢ. Cả hai thấy TÀI KHOẢN và Đăng xuất | YC9.1 | P1 và P4 |
| Tên hiển thị | Tên hiển thị là tên sale thấy trong Nguồn phòng. Người dùng sửa được. Họ và tên và tên hiển thị là hai ô | YC9.2 | "Sale thấy tên này trong Nguồn phòng" |
| Thông báo qua Zalo cần đồng ý | Người dùng phải đồng ý nhận thông báo Zalo thì app mới gửi được (docs/external/zalo-rang-buoc.md, mục 2.7) | YC9.3, YC9.5 | Hộp thoại Zalo lần đầu |
| Giờ nhận trả áp dụng mọi căn | Giờ nhận, trả đặt một lần cho tất cả căn của chủ nhà | YC9.4 | 14:00 · 12:00 |
| Xóa nhầm phải cảnh báo | Hành động thay thế toàn bộ dữ liệu phải cảnh báo trước | YC9.5 | "Toàn bộ dữ liệu hiện tại sẽ được thay" |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Hồ sơ của mình | Thấy, sửa | Thấy, sửa | Không có hồ sơ cho tới khi kết nối (xem YC1) | ? | Không |
| Tên hiển thị | Sale thấy tên chủ nhà trong Nguồn phòng | Chủ nhà thấy tên sale | Không | ? | Không |
| Sao lưu, xuất Excel | Chỉ chủ nhà, chỉ dữ liệu của mình | Không | Không | ? | Không |
| Giờ nhận, trả mặc định | Đặt | Thấy khi gửi khách (S3) | Không | ? | Thấy giờ trong tin sale gửi |
| Cài đặt thông báo | Của mình | Của mình | Không | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. File xuất CSV (P8) có cột "Khách" và "SĐT", và file sao lưu (P7) lưu "48 booking". CLAUDE.md cấm lưu thông tin khách. Nếu app không lưu tên và số khách thì cột đó rỗng hoặc phải bỏ. Phương án: bỏ hai cột khỏi CSV và sao lưu; hoặc giữ nhưng chỉ khi chủ nhà tự nhập tên khách vào booking của mình và báo cáo rõ với Tùng đây là ngoại lệ cần một QD.
2. Thông báo (P3, P12) phải đi qua OA, cần Mini App được OA xác thực, người dùng đồng ý, có thể tốn phí. Hai loại "nhắc lúc 18:00 hôm trước" và "nhắc sao lưu ngày 1" là thông báo chủ động, khó làm (docs/external/zalo-rang-buoc.md, mục 2.7). Phương án: bỏ hai loại đó ở bản đầu; hoặc chỉ nhắc trong app khi mở; hoặc đợi OA xác thực xong.
3. "Tải file sao lưu" lưu file vào máy, nhưng docs/external chưa ghi Mini App Zalo có ghi được file vào máy không. Cần kiểm trước. Phương án: nếu không, chia sẻ file qua cửa sổ gửi của Zalo; hoặc bỏ sao lưu bằng file, vì dữ liệu nằm trên server nên đổi máy chỉ cần đăng nhập Zalo.
4. "Khôi phục từ file sao lưu" thay toàn bộ dữ liệu. Nguy cơ cao: ghi đè dữ liệu thật, qua mặt chặn trùng booking ở database, và người có file cũ làm mất booking mới. Phương án: bỏ chức năng, chỉ khôi phục qua hỗ trợ; hoặc chỉ cho xem trước và yêu cầu bấm hai lần; hoặc khôi phục kiểu thêm vào, không thay.
5. "Xóa tài khoản" chỉ có nút. Chưa rõ: xóa booking, quan hệ với sale hoặc chủ nhà, thời gian giữ lại, và theo Nghị định 13 người dùng phải xóa được dữ liệu cá nhân. Cần màn xác nhận và quy tắc hậu quả.
6. Dòng "3 loại đang bật" ở P1 nhưng P3 có 4 loại. Sửa dữ liệu minh họa.
7. Chưa có cách đổi vai trò (chủ nhà thành sale hoặc ngược lại) trong Cá nhân. Người vừa là chủ nhà vừa là sale thấy menu nào. Liên quan YC1.2.
8. P4 có "Hướng dẫn sử dụng" nhưng P9 chỉ có phần "CHỦ NHÀ". Sale chưa có hướng dẫn.
9. Đổi giờ nhận, trả mặc định có đổi booking đã ghi không, và sale đã gửi khách thì thế nào. Ngoài ra căn có giờ riêng không (P5 nói áp dụng cho tất cả căn).
10. "Đổi ảnh đại diện": ảnh lấy từ Zalo hay chọn từ máy. Quyền ảnh của máy và quyền tên, ảnh của Zalo khác nhau, chưa vẽ.
11. Ba tên cùng lúc: "Họ và tên", "Tên hiển thị" và "Zalo · Nguyễn Hoa". Chưa nói tên nào hiện ở đầu menu, trong tin gửi sale và trong thông báo.
12. Menu tài khoản chỉ có ở tab Cá nhân. Nếu cần lối tắt (ảnh đại diện góc trên mỗi tab), canvas chưa có.
13. Ranh giới nhóm. P1 và P4 là menu chung. Tôi để các dòng theo nhóm của chúng (bảng ở YC9.1). Cần Tùng xác nhận.

## Các màn hình trong nhóm YC9
| Mã | Tên màn |
|---|---|
| P1 | Cá nhân, chủ nhà |
| P4 | Cá nhân, sale |
| P2 | Thông tin cá nhân |
| P3 | Cài đặt thông báo, chủ nhà |
| P12 | Cài đặt thông báo, sale |
| P5 | Giờ nhận, trả phòng |
| P7 | Sao lưu dữ liệu |
| P8 | Xuất file Excel |
| P9 | Hướng dẫn sử dụng |

Các màn Cá nhân khác thuộc nhóm khác: P6 (YC3.8), P10 và P11 (YC5.6, YC5.7), P13 (YC1.10), S8-xx (YC8).
