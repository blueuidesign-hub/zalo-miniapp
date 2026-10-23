---
id: YC4
tieu_de: Booking
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC4 · Booking

Nhóm này lo việc một đêm ở trở thành booking. Có hai đường: chủ nhà tự ghi booking vào lịch, hoặc sale gửi yêu cầu đặt phòng và chủ nhà chấp nhận. Chủ nhà chỉ làm việc với sale, không liên hệ khách. Booking chỉ vào lịch khi chủ nhà ghi hoặc chấp nhận, không có bước giữ phòng và báo cọc. Việc sale ghi booking của riêng mình cho căn tự nhập thuộc YC6. Tất cả nội dung dưới đây ở trạng thái đề xuất.

## YC4.1 · Chủ nhà ghi booking mới
Mục đích: chủ nhà ghi một booking vào lịch (khách của sale hoặc khách lẻ), để các sale khác thấy ngày đó kín.
Màn hình: CN4, CN4-03
Khi nào xảy ra: chủ nhà bấm "Đặt phòng" ở tab Lịch (CN1), hoặc bấm "Thêm khách" ở chi tiết ngày (CN3).

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở form | Tiêu đề "Thêm đặt phòng". Các phần: Phòng, ngày và số đêm, Khách / Sale, Tiền phòng, trạng thái tiền, Thêm chi tiết | ? | ? | ? |
| 2 | Điền căn, ngày, người đặt, tiền | Xem YC4.1.1 và YC4.1.2 | ? | ? | ? |
| 3 | Bấm "Thêm đặt phòng" | Lưu, về lịch (CN4-03): toast "Đã thêm booking Sale Hùng · 1509", ngày vừa ghi mở sẵn trong chi tiết ngày | ? | ? | Thêm một booking vào lịch của căn; các sale khác thấy các đêm đó là Kín |

Theo quy tắc: Chặn trùng lịch; Booking chiếm đêm (YC2, quy tắc Đêm có khách).

Trạng thái màn:
- rỗng: form mở ra điền sẵn một đêm đầu tiên còn trống (CN4 hiện "09/10 → 10/10 (1 đêm)")
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC4.1-NT1 Khi chủ nhà bấm "Thêm đặt phòng" với đủ căn, ngày và người đặt, thì booking hiện trong lịch của căn đó và toast "Đã thêm booking <người đặt> · <căn>" hiện đầu màn.
- YC4.1-NT2 Khi booking vừa lưu, thì các sale khác thấy các đêm đó là "Kín" (S3-04 ghi "hiện Kín với các sale khác").

### YC4.1.1 · Căn, ngày và kiểm tra trùng lịch
Màn hình: CN4, CN4-02

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Chọn căn | Hàng chip "Phòng" (1509, 3402, 2501) | ? | ? | ? |
| 2 | Chọn số đêm | Chip "1 đêm", "2 đêm", "3 đêm", "Tùy chọn" | ? | ? | ? |
| 3 | Chọn ngày | Ô "Ngày nhận phòng" và "Ngày trả phòng" | ? | ? | ? |
| 4 | Xem kết quả kiểm tra | Dòng "✓ 09/10 → 10/10 (1 đêm) · không trùng lịch", hoặc dòng báo trùng khi chọn ngày đã có khách (chủ nhà thử bằng 2 đêm ở 3402) | ? | ? | ? |

Theo quy tắc: Chặn trùng lịch.

Trạng thái màn:
- rỗng: ngày nhận điền sẵn, ngày trả theo số đêm
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC4.1.1-NT1 Khi các đêm đã chọn chưa có khách trong căn, thì thấy dòng "không trùng lịch".
- YC4.1.1-NT2 Khi các đêm đã chọn trùng với một booking của cùng căn, thì thấy dòng báo trùng và không lưu được.
- YC4.1.1-NT3 Khi chủ nhà chọn "2 đêm", thì ngày trả bằng ngày nhận cộng 2.

### YC4.1.2 · Người đặt, tiền phòng và tiền cọc
Màn hình: CN4, CN4-02

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Chọn "Khách / Sale" | Hàng chip: "+ Sale mới", "Khách lẻ", các sale đã kết nối (Sale Hùng, Sale Lan, Sale Nga, Sale Minh), và các tên khách lẻ đã dùng trước đó. Có dòng ghi chú theo lựa chọn | ? | ? | ? |
| 2 | Xem "Tiền phòng (đ)" | Ô số tiền, có dòng tách theo đêm ("09/10: 1.100.000đ") | ? | ? | ? |
| 3 | Chọn trạng thái tiền | Chip "Chưa cọc", "Đã cọc", "Đã th.toán" | ? | ? | ? |
| 4 | Chọn "Đã cọc" | Hiện ô "Số tiền cọc (đ)" | ? | ? | ? |
| 5 | Bấm "Thêm chi tiết" | Mở: số khách (nút − và +), giờ "14:00 → 12:00", ô "Ghi chú" | ? | ? | ? |

Theo quy tắc: Tiền còn lại; Giờ nhận trả mặc định; Trạng thái tiền booking (YC2).

Trạng thái màn:
- rỗng: chưa thiết kế ô tiền phòng bỏ trống
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC4.1.2-NT1 Khi chủ nhà chọn "Đã cọc", thì hiện ô "Số tiền cọc (đ)"; chọn "Chưa cọc" hoặc "Đã th.toán" thì ô này ẩn.
- YC4.1.2-NT2 Khi chủ nhà mở "Thêm chi tiết", thì thấy số khách, giờ nhận và trả (14:00, 12:00) và ô ghi chú.
- YC4.1.2-NT3 Khi chủ nhà chọn một sale đã kết nối làm người đặt, thì booking hiện tên sale đó trong lịch và trong danh sách booking của sale (CN7-04).

## YC4.2 · Chi tiết booking và đánh dấu đã thu đủ
Mục đích: chủ nhà xem đủ thông tin một booking và ghi nhận đã thu tiền.
Màn hình: CN3-02
Khi nào xảy ra: chủ nhà chạm "Sửa" trên thẻ phòng ở chi tiết ngày (CN3).

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở chi tiết | Tiêu đề "Booking · Sale Hùng", phòng, nhãn trạng thái ("Đã cọc · còn thu"), ngày "10/10 → 12/10 (2 đêm)", giờ "Nhận 14:00 thứ 7 · trả 12:00 thứ 2" | ? | ? | ? |
| 2 | Xem người đặt | Thẻ sale: tên, số điện thoại, số khách, nút "Gọi sale". Dòng ghi chú "Khách do sale Hùng bán. Tên và số điện thoại khách chỉ sale giữ; cần gì về khách thì gọi sale." | ? | Gọi mở ứng dụng gọi (?) | ? |
| 3 | Xem tiền | Mục "TIỀN": Tiền phòng 2.400.000đ, Đã cọc 1.000.000đ, Còn lại 1.400.000đ. Mục "GHI CHÚ" | ? | ? | ? |
| 4 | Bấm "Đã thu đủ 1.400.000đ" | Booking chuyển "Đã thanh toán". Nút đổi thành "Hoàn tác: chưa thu đủ" | ? | ? | Trạng thái tiền của booking |
| 5 | Bấm "Hoàn tác: chưa thu đủ" | Booking về "Đã cọc · còn thu" | ? | ? | Trạng thái tiền của booking |
| 6 | Bấm sửa / xóa | Xem YC4.3 và YC4.4 | ? | ? | ? |

Theo quy tắc: Tiền còn lại; Trạng thái tiền booking (YC2).

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC4.2-NT1 Khi tiền phòng 2.400.000đ và đã cọc 1.000.000đ, thì mục Tiền ghi còn lại 1.400.000đ.
- YC4.2-NT2 Khi chủ nhà bấm "Đã thu đủ", thì nhãn booking đổi thành "Đã thanh toán" và nút đổi thành "Hoàn tác: chưa thu đủ".
- YC4.2-NT3 Khi chủ nhà bấm "Hoàn tác: chưa thu đủ", thì booking về trạng thái trước khi thu đủ.

## YC4.3 · Sửa booking
Mục đích: chủ nhà sửa căn, ngày, người đặt hoặc tiền của một booking đã ghi.
Màn hình: CN4-02
Khi nào xảy ra: chủ nhà bấm sửa ở chi tiết booking (CN3-02).

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở sửa | Tiêu đề "Sửa đặt phòng · Sale Hùng". Cùng form với CN4, điền sẵn giá trị hiện có | ? | ? | ? |
| 2 | Đổi giá trị | Như YC4.1.1 và YC4.1.2; kiểm tra trùng không tính chính booking đang sửa (?) | ? | ? | ? |
| 3 | Bấm "Lưu thay đổi" | Lưu và quay lại. Kết quả chưa vẽ (?) | ? | ? | Cập nhật booking |

Theo quy tắc: Chặn trùng lịch.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC4.3-NT1 Khi chủ nhà mở sửa, thì mọi ô hiện đúng giá trị của booking.
- YC4.3-NT2 Khi chủ nhà đổi sang các đêm trùng với booking khác của cùng căn, thì hiện báo trùng và không lưu được.

## YC4.4 · Xóa booking
Mục đích: chủ nhà bỏ một booking khỏi lịch khi khách hủy hoặc ghi nhầm.
Màn hình: CN3-02
Khi nào xảy ra: chủ nhà bấm "Xóa booking" ở chi tiết booking.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Bấm "Xóa booking" lần đầu | Hỏi lại: "Xác nhận xóa booking? Ngày 10/10 → 12/10 của 1509 trống lại. Sale được báo." | ? | ? | ? |
| 2 | Bấm xác nhận | Xóa booking. Màn đích chưa vẽ (?) | ? | Báo sale bằng cách nào: chưa rõ (?) | Booking bị xóa; các đêm đó trống lại |

Theo quy tắc: Xóa phải bấm hai lần.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC4.4-NT1 Khi chủ nhà bấm "Xóa booking" lần đầu, thì app hỏi xác nhận và chưa xóa.
- YC4.4-NT2 Khi chủ nhà xác nhận, thì các đêm của booking trở thành trống trong lịch.
- YC4.4-NT3 Khi booking của một sale bị xóa, thì sale đó được báo.

## YC4.5 · Sale gửi yêu cầu đặt phòng
Mục đích: sale xin chủ nhà nhận một booking cho khách của mình, mà không cần gọi điện.
Màn hình: S3-02, S3-03
Khi nào xảy ra: sale ở chi tiết căn (S3) bấm "Đặt phòng".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Bấm "Đặt phòng" ở S3 | Mở S3-02 "Đặt phòng": thẻ căn, "Chị Hoa · 10/10 → 12/10 (2 đêm)", "Giá bán cho khách", "Giá chủ nhà", dòng "Chủ nhà: Chị Hoa · 1.800.000đ" | ? | ? | ? |
| 2 | Nhập tin nhắn | Ô "Nhắn chủ nhà (không bắt buộc)" | ? | ? | ? |
| 3 | Bấm "Gửi yêu cầu đặt phòng" | Sang S3-03. Ghi chú: "Chủ nhà nhận yêu cầu trong app và qua tin nhắn Zalo. Thành booking khi chủ nhà chấp nhận." | ? | Tin Zalo tới chủ nhà (xem câu hỏi mở 1) | Tạo một yêu cầu đặt phòng ở trạng thái chờ |
| 4 | Xem S3-03 | "Đang chờ Chị Hoa chấp nhận", "Đã gửi lúc 14:20 trong app. Nhắn thêm qua Zalo để chủ nhà thấy nhanh hơn. Bạn được báo khi chủ nhà chấp nhận hoặc từ chối." Ba nút: "Nhắn chủ nhà qua Zalo", "Gọi chủ nhà", "Hủy yêu cầu" | ? | Nhắn qua cửa sổ Zalo; Gọi mở ứng dụng gọi | ? |
| 5 | Bấm "Hủy yêu cầu" | Hủy yêu cầu. Kết quả chưa vẽ (?) | ? | ? | Yêu cầu chuyển sang hủy |

Theo quy tắc: Yêu cầu chưa phải booking; Sale thấy hai giá, chủ nhà thấy một giá.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: S3-03 là màn chờ khi quay lại
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC4.5-NT1 Khi sale bấm "Gửi yêu cầu đặt phòng", thì app chuyển sang S3-03 và ghi giờ đã gửi.
- YC4.5-NT2 Khi yêu cầu đang chờ, thì booking chưa vào lịch của chủ nhà và các sale khác vẫn thấy ngày đó là trống.
- YC4.5-NT3 Khi sale xem S3-02, thì thấy cả giá bán cho khách và giá chủ nhà. Theo quy tắc: Sale thấy hai giá, chủ nhà thấy một giá.

## YC4.6 · Chủ nhà nhận và trả lời yêu cầu
Mục đích: chủ nhà thấy yêu cầu từ sale, chấp nhận hoặc từ chối.
Màn hình: CN9-00, CN1-03, CN9, CN9-02
Khi nào xảy ra: chủ nhà mở tin Zalo về yêu cầu, hoặc mở tab Lịch thấy khối yêu cầu.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Nhận tin | CN9-00: tin từ "Home247" ghi "Sale Hùng đặt phòng 1509", ngày ở, "Giá của bạn", lời nhắn của sale, nút "Xem và chấp nhận" | ? | Tin Zalo tới chủ nhà (xem câu hỏi mở 1) | ? |
| 2 | Mở tab Lịch | CN1-03: khối "YÊU CẦU ĐẶT PHÒNG · 2", mỗi dòng: tên sale, phòng, ngày, "gửi 10 phút trước", nhãn "Chờ bạn", nút "Xem và trả lời". Dòng trùng ngày ghi "trùng ngày với Sale Hùng" | ? | ? | ? |
| 3 | Bấm "Xem và chấp nhận" hoặc "Xem và trả lời" | Cùng mở CN9: tên sale, "đã bán 12 booking của bạn", nút "Gọi", Phòng, Ngày ở, "Giá của bạn", mục "SALE NHẮN" | ? | ? | ? |
| 4 | Bấm "Chấp nhận đặt phòng" | CN9-02: "Đã nhận đặt phòng 1509", "Booking đã vào lịch. Sale Hùng được báo." Nút "Xem booking" và "Về lịch" | ? | Báo sale (xem câu hỏi mở 1) | Yêu cầu thành booking; các đêm vào lịch |
| 5 | Bấm "Từ chối" | Từ chối yêu cầu. Màn đích và ô lý do chưa vẽ (?) | ? | Báo sale | Yêu cầu chuyển sang từ chối |

Theo quy tắc: Yêu cầu chưa phải booking; Sale thấy hai giá, chủ nhà thấy một giá.

Trạng thái màn:
- rỗng: CN1-03 chỉ hiện khối khi có yêu cầu chờ
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: CN9-00 mở đúng yêu cầu đó trong app "giống khi mở từ thông báo"

Tiêu chí nghiệm thu:
- YC4.6-NT1 Khi chủ nhà bấm nút trong tin Zalo hoặc "Xem và trả lời" ở lịch, thì app mở đúng yêu cầu đó ở CN9.
- YC4.6-NT2 Khi chủ nhà ở CN9, thì chỉ thấy "Giá của bạn" và không thấy giá bán cho khách. Theo quy tắc: Sale thấy hai giá, chủ nhà thấy một giá.
- YC4.6-NT3 Khi chủ nhà bấm "Chấp nhận đặt phòng", thì booking vào lịch với các đêm của yêu cầu và sale được báo.

## YC4.7 · Sale nhận kết quả yêu cầu
Mục đích: sale biết yêu cầu đã được nhận, bị từ chối hay bị hủy, và có việc tiếp theo.
Màn hình: S3-04, S3-05, S3-06
Khi nào xảy ra: chủ nhà chấp nhận, từ chối, hoặc yêu cầu tự hủy.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Chủ nhà chấp nhận | S3-04: "Chị Hoa đã chấp nhận đặt phòng", "Booking đã vào lịch của chủ nhà. Ngày 10/10 → 12/10 hiện Kín với các sale khác." Nút "Về lịch phòng" | ? | ? | ? |
| 2 | Chủ nhà từ chối | S3-05: "Chị Hoa không nhận đặt phòng", "Lý do: Đã có khách đặt." và mục "CĂN TƯƠNG TỰ TRỐNG CÙNG NGÀY" (Sapphire 1103, À La Carte 2208) với nút "Xem tất cả căn trống" | ? | ? | ? |
| 3 | Yêu cầu tự hủy | S3-06: "Yêu cầu đặt phòng đã bị hủy", "Chị Hoa đã nhận đặt phòng khác cho 10/10 → 12/10 trước khi chấp nhận yêu cầu của bạn.", cùng mục căn tương tự | ? | ? | ? |

Theo quy tắc: Trùng ngày thì tự hủy.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: chưa thiết kế

Tiêu chí nghiệm thu:
- YC4.7-NT1 Khi chủ nhà chấp nhận, thì sale thấy S3-04 và ngày đó Kín với các sale khác.
- YC4.7-NT2 Khi chủ nhà từ chối, thì sale thấy S3-05 kèm danh sách căn tương tự còn trống cùng ngày.
- YC4.7-NT3 Khi yêu cầu bị hủy vì chủ nhà nhận đặt phòng khác, thì sale thấy S3-06 kèm danh sách căn tương tự.

## YC4.8 · Yêu cầu trùng ngày
Mục đích: tránh hai yêu cầu cho cùng căn, cùng đêm cùng được nhận.
Màn hình: CN1-03, CN9, CN9-02, S3-06
Khi nào xảy ra: hai sale gửi yêu cầu có đêm trùng nhau cho cùng một căn, hoặc chủ nhà ghi booking trùng với yêu cầu đang chờ.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Chủ nhà mở tab Lịch | CN1-03 đánh dấu yêu cầu trùng ngày ("18/10 → 19/10 · trùng ngày với Sale Hùng") | ? | ? | ? |
| 2 | Mở CN9 | Cảnh báo: "Trùng 18/10 với yêu cầu của Sale Lan. Chấp nhận yêu cầu này thì yêu cầu của Sale Lan tự hủy và Sale Lan được báo." | ? | ? | ? |
| 3 | Chấp nhận | CN9-02: "Yêu cầu của Sale Lan (18/10 → 19/10) đã tự hủy. Sale Lan được báo." | ? | Báo Sale Lan | Yêu cầu trùng chuyển sang hủy |
| 4 | Chủ nhà tự ghi booking (YC4.1) trùng ngày với yêu cầu đang chờ | Yêu cầu tự hủy, sale nhận S3-06 (theo mô tả canvas) | ? | Báo sale | Yêu cầu chuyển sang hủy |

Theo quy tắc: Trùng ngày thì tự hủy; Chặn trùng lịch.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC4.8-NT1 Khi hai yêu cầu có đêm trùng nhau, thì mỗi yêu cầu hiện nhãn trùng ngày ở CN1-03 và cảnh báo ở CN9.
- YC4.8-NT2 Khi chủ nhà chấp nhận một yêu cầu, thì mọi yêu cầu trùng đêm với nó tự hủy và sale của chúng được báo.
- YC4.8-NT3 Khi chủ nhà tự ghi booking trùng đêm với một yêu cầu đang chờ, thì yêu cầu đó tự hủy.

## Quy tắc nghiệp vụ phát hiện
Hai quy tắc Đêm có khách và Trạng thái tiền booking đã ghi ở YC2, YC4 dùng lại.

| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Chặn trùng lịch | Hai booking của cùng một căn không được có đêm trùng nhau. Form báo trùng ngay khi chọn ngày | YC4.1, YC4.1.1, YC4.3, YC4.8 | 18/10 trùng giữa 17/10 → 19/10 và 18/10 → 19/10 |
| Tiền còn lại | Còn lại bằng tiền phòng trừ tiền đã cọc. "Đã thu đủ" đưa booking về trạng thái đã thanh toán | YC4.1.2, YC4.2 | 2.400.000đ trừ 1.000.000đ còn 1.400.000đ |
| Giờ nhận trả mặc định | Giờ nhận và trả phòng mặc định là 14:00 và 12:00, áp dụng cho mọi căn (đặt ở Cá nhân) | YC4.1.2, YC4.2 | 14:00, 12:00 |
| Xóa phải bấm hai lần | Xóa booking bấm lần đầu để hỏi, bấm lần hai mới xóa | YC4.4 | Không |
| Yêu cầu chưa phải booking | Yêu cầu của sale chưa chiếm đêm nào. Chỉ khi chủ nhà chấp nhận mới thành booking. Không có bước giữ phòng và báo cọc | YC4.5, YC4.6 | Không |
| Sale thấy hai giá, chủ nhà thấy một giá | Sale thấy giá chủ nhà và giá bán cho khách. Chủ nhà chỉ thấy giá của mình. Phần cộng thêm của sale chỉ sale thấy | YC4.5, YC4.6 | Giá chủ nhà 1.800.000đ, giá bán 2.600.000đ |
| Trùng ngày thì tự hủy | Chấp nhận một yêu cầu thì các yêu cầu trùng đêm tự hủy; chủ nhà tự ghi booking trùng yêu cầu chờ thì yêu cầu đó tự hủy. Sale nào bị hủy cũng được báo | YC4.7, YC4.8 | Chấp nhận Sale Hùng thì yêu cầu Sale Lan tự hủy |
| Chủ nhà chỉ làm việc với sale | Chủ nhà không liên hệ khách. Tên và số điện thoại khách chỉ sale giữ | YC4.2, YC4.5, YC4.6 | Không |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Booking của căn | Thấy, thêm, sửa, xóa | Thấy ngày Kín; thấy chi tiết booking của mình | ? | ? | Không |
| Tên, số điện thoại khách | Không (chỉ sale giữ). Booking khách lẻ do chủ nhà tự nhập thì xem câu hỏi mở 4 | Thấy khách của mình | ? | ? | Không dùng app |
| Số tiền, tiền cọc, trạng thái thu | Thấy | Thấy của booking mình, theo quyền (YC1) | ? | ? | Không |
| Giá bán cho khách, phần cộng thêm | Không thấy | Chỉ sale tạo yêu cầu thấy | ? | ? | Chỉ thấy giá đã cộng |
| Yêu cầu đặt phòng | Thấy mọi yêu cầu gửi tới mình | Chỉ yêu cầu của mình | ? | ? | Không |
| Lý do từ chối | Nhập hay không: xem câu hỏi mở 3 | Thấy ở S3-05 | ? | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. Tin Zalo tới chủ nhà (CN9-00, "Home247 · Tin nhắn Zalo") do ai gửi? Mini App không tự gửi tin tới người khác, chỉ mở cửa sổ Zalo để người dùng tự bấm gửi. Cùng câu hỏi cho "Sale Hùng được báo" khi chủ nhà trả lời (S3-04/05/06), "Sale được báo" khi xóa booking, và thông báo khi app đang đóng. Phương án:
   - a) Đăng ký Zalo Official Account của Home247 để gửi tin (cần kiểm điều kiện và chi phí).
   - b) Chỉ thông báo trong app (toast, màn Thông báo); người dùng đóng app thì không biết, sale phải nhắn tay qua cửa sổ Zalo (nút "Nhắn chủ nhà qua Zalo").
   - c) Kết hợp: thông báo trong app và nút nhắn tay.
2. Thời hạn yêu cầu. Chủ nhà không trả lời thì yêu cầu chờ mãi hay tự hết hạn? Sale chỉ có nút "Hủy yêu cầu". Chưa thiết kế nhãn quá hạn.
3. Lý do từ chối. S3-05 ghi "Lý do: Đã có khách đặt." nhưng CN9 chỉ có nút "Từ chối", không chọn hay nhập lý do. Phương án: thêm chip lý do ở CN9; hoặc bỏ dòng lý do; hoặc lý do cố định.
4. Tên khách lẻ. Form CN4 có chip tên khách lẻ đã lưu, nhưng CN3-02 ghi "Tên và số điện thoại khách chỉ sale giữ" và CLAUDE.md ghi "Không lưu thông tin khách". Phương án: chỉ có chip "Khách lẻ" không tên; lưu tên nhưng không số điện thoại; hoặc chủ nhà gõ tên trong ghi chú.
5. Sửa booking có báo sale không? CN4-02 đổi ngày, đổi căn hay đổi tiền của booking một sale thì sale có được báo và có phải đồng ý không.
6. "Đã bán 12 booking của bạn" ở CN9 đếm booking nào: đã chấp nhận, đã thanh toán, hay mọi thời gian.
7. Đổi ngày của booking đã thành, và yêu cầu đổi/hủy từ phía sale sau khi chủ nhà chấp nhận: chưa thiết kế.
8. Sau khi xóa booking (CN3-02) về màn nào, và sau khi từ chối (CN9) về màn nào: chưa vẽ.
9. Tiền cọc lớn hơn tiền phòng, tiền phòng để trống: chưa có kiểm tra.
10. Ranh giới nhóm. Mình xếp S6-05 và S6-06 (ghi nhanh booking của sale cho căn tự nhập) vào YC6, và S7-03 (trạng thái booking của sale) vào YC7. Cần Tùng xác nhận.

## Các màn hình trong nhóm YC4
| Mã | Tên màn |
|---|---|
| CN3-02 | Chi tiết booking |
| CN4 | Thêm đặt phòng |
| CN4-02 | Sửa đặt phòng |
| CN4-03 | Đã lưu booking |
| CN1-03 | Lịch · có yêu cầu từ sale |
| CN9-00 | Tin nhắn Zalo gửi chủ nhà |
| CN9 | Yêu cầu đặt phòng · chờ trả lời |
| CN9-02 | Đã chấp nhận đặt phòng |
| S3-02 | Đặt phòng (sale gửi yêu cầu) |
| S3-03 | Chờ chủ nhà trả lời |
| S3-04 | Chủ nhà đã chấp nhận |
| S3-05 | Chủ nhà từ chối |
| S3-06 | Yêu cầu bị hủy |
