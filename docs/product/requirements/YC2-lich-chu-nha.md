---
id: YC2
tieu_de: Lịch chủ nhà
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC2 · Lịch chủ nhà

Nhóm này cho chủ nhà xem lịch các căn của mình: theo tháng, theo tuần, và chi tiết từng ngày. Chủ nhà thấy căn nào có khách, căn nào trống, booking nào chưa cọc, và doanh thu tóm tắt trong tháng. Việc thêm, sửa, xóa booking thuộc YC4. Việc gửi lịch cho sale thuộc YC1.8. Tất cả nội dung dưới đây ở trạng thái đề xuất.

## YC2.1 · Lịch tháng và lọc theo căn
Mục đích: chủ nhà xem một tháng các căn của mình trên một lịch để biết ngày nào có khách.
Màn hình: CN1, CN1-02, CN1-00
Khi nào xảy ra: chủ nhà mở tab Lịch.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Lịch | Tiêu đề "Lịch", nút "Đặt phòng", thanh tháng (T09, "Tháng 10/2026", T11), hàng chip lọc, lưới T2 đến CN | ? | ? | ? |
| 2 | Xem lưới | Ngày có khách tô màu theo căn. Chú thích bên dưới ghi "1509 đã đặt", "3402 đã đặt" | ? | ? | ? |
| 3 | Chạm một chip | Lọc lịch theo căn. Chip đầu là "Cả 2 phòng" (CN1) hoặc "Tất cả" (CN1-02) | ? | ? | ? |
| 4 | Bấm T09 hoặc T11 | Chuyển tháng. Kết quả chưa vẽ (?) | ? | ? | ? |
| 5 | Bấm "Đặt phòng" | Mở form thêm booking (CN4, thuộc YC4) | ? | ? | ? |
| 6 | Bấm "Gửi lịch cho sale" (nút có dòng "Lịch chung các căn") | Mở CN10 (thuộc YC1.8) | ? | ? | ? |
| 7 | Chạm một ngày | Hiện chi tiết ngày, xem YC2.4 | ? | ? | ? |

Theo quy tắc: Đêm có khách; Màu theo căn; Tuần bắt đầu thứ hai.

Trạng thái màn:
- rỗng: CN1-00 "Chưa có booking nào / Bấm "Đặt phòng" để thêm khách đầu tiên. Ngày có khách sẽ tô màu theo phòng", nút "Đặt phòng" và gợi ý "Mời sale xem lịch để sale tự biết ngày trống, không phải gọi hỏi. Vào tab Sale."
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC2.1-NT1 Khi chủ nhà có 2 căn và mở tab Lịch, thì thấy chip "Cả 2 phòng" cùng một chip cho mỗi căn.
- YC2.1-NT2 Khi chủ nhà có 3 căn và mở tab Lịch, thì thấy chip "Tất cả" cùng một chip cho mỗi căn.
- YC2.1-NT3 Khi chủ nhà chạm chip của một căn, thì lịch chỉ còn hiện các ngày có khách của căn đó.
- YC2.1-NT4 Khi một booking nhận 09/10 và trả 12/10, thì các ngày 09/10, 10/10 và 11/10 được tô, ngày 12/10 không được tô. Theo quy tắc: Đêm có khách.
- YC2.1-NT5 Khi chủ nhà chưa có booking nào, thì thấy CN1-00 thay cho lịch có booking.

## YC2.2 · Tóm tắt tháng
Mục đích: chủ nhà thấy nhanh tháng này thu được bao nhiêu và có bao nhiêu đêm có khách.
Màn hình: CN1, CN1-02
Khi nào xảy ra: chủ nhà ở tab Lịch, dưới lưới tháng.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Xem dưới lưới | Khối "DOANH THU THÁNG 10": số tiền lớn, dòng nhỏ "13 đêm có khách · tháng 9: 9.600.000đ" (CN1, 2 căn). CN1-02 (3 căn) ghi "20 đêm có khách · 3 căn" và không có số tháng trước | ? | ? | ? |
| 2 | Đổi chip lọc hoặc đổi tháng | Số tiền và số đêm đổi theo hay không: chưa vẽ (?) | ? | ? | ? |

Theo quy tắc: Đêm có khách.

Trạng thái màn:
- rỗng: CN1-00 không hiện khối này
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC2.2-NT1 Khi chủ nhà có booking trong tháng, thì khối "DOANH THU THÁNG" hiện số tiền và số đêm có khách.
- YC2.2-NT2 Khi chủ nhà chưa có booking nào, thì khối này không hiện.

## YC2.3 · Booking sắp tới
Mục đích: chủ nhà thấy các booking gần nhất và cái nào chưa cọc mà không phải chạm từng ngày.
Màn hình: CN1, CN1-02
Khi nào xảy ra: chủ nhà ở tab Lịch, dưới khối tóm tắt.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Kéo xuống | Danh sách "BOOKING SẮP TỚI", mỗi dòng: tên khách hoặc sale, "Phòng <mã> · <nhận> → <trả> (<n> đêm)", số tiền, trạng thái tiền | ? | ? | ? |
| 2 | Chạm một dòng | Mở chi tiết booking (CN3-02, thuộc YC4). Chưa nối trong canvas (?) | ? | ? | ? |

Theo quy tắc: Trạng thái tiền booking.

Trạng thái màn:
- rỗng: chưa thiết kế (CN1-00 không hiện danh sách)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC2.3-NT1 Khi chủ nhà có booking, thì mỗi dòng hiện đủ: tên, phòng, ngày nhận, ngày trả, số đêm, số tiền, trạng thái tiền.
- YC2.3-NT2 Khi booking chưa cọc, thì dòng đó ghi "Chưa cọc".

## YC2.4 · Chi tiết một ngày
Mục đích: chủ nhà chạm một ngày để biết từng căn hôm đó có khách hay trống.
Màn hình: CN3
Khi nào xảy ra: chủ nhà chạm một ngày trên lưới tháng.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Chạm ngày 09/10 | Dưới lưới hiện "Ngày 09/10/2026". Mỗi căn một khối | ? | ? | ? |
| 2 | Xem căn có khách | Tên phòng, tên sale, số điện thoại sale, "09/10 → 12/10 (3 đêm)", "2.700.000đ · Cọc: 1.000.000đ", ghi chú nếu có | ? | ? | ? |
| 3 | Xem căn trống | "Phòng 3402 · Trống ✓" và nút "Thêm khách" | ? | ? | ? |
| 4 | Bấm "Thêm khách" | Mở form thêm booking (thuộc YC4). Chưa nối trong canvas (?) | ? | ? | ? |

Theo quy tắc: Đêm có khách; Trạng thái tiền booking.

Trạng thái màn:
- rỗng: không áp dụng (ngày không có khách thì mọi căn ghi "Trống")
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC2.4-NT1 Khi chủ nhà chạm một ngày, thì phần chi tiết hiện ngay dưới lịch và ghi đúng ngày đã chạm.
- YC2.4-NT2 Khi một căn không có khách trong ngày đó, thì căn đó ghi "Trống" và có nút "Thêm khách".
- YC2.4-NT3 Khi một căn có khách trong ngày đó, thì hiện tên người đặt, ngày nhận, ngày trả, số đêm và số tiền.

## YC2.5 · Lịch tuần khi có nhiều căn
Mục đích: chủ nhà nhiều căn xem cả tuần của mọi căn trên một bảng, kèm giá từng đêm.
Màn hình: CN2
Khi nào xảy ra: chủ nhà ở chế độ bảng tuần. Cách vào chế độ này chưa vẽ (?).

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở lịch tuần | Tiêu đề "Lịch tuần", thanh tuần ("Trước", "05 – 11/10/2026", "Sau"), chip lọc (Tất cả, Tòa A, Tòa B, 3 phòng ngủ) | ? | ? | ? |
| 2 | Xem ba ô tóm tắt | "Có khách hôm nay 1/6", "Trống tối T7 3 căn", "Chưa cọc 1 booking" | ? | ? | ? |
| 3 | Xem bảng | Mỗi hàng một căn: mã, số phòng ngủ, tòa. Mỗi cột một ngày T2 đến CN. Ô trống hiện giá đêm rút gọn (900k, 1,1tr). Ô có khách là thanh nối nhiều ngày, ghi tên người đặt và nhãn tiền | ? | ? | ? |
| 4 | Xem chú thích | "Đã cọc / đã thanh toán", "Chưa cọc", "800k: trống, giá đêm" | ? | ? | ? |
| 5 | Chạm chip lọc | Lọc theo tòa hoặc số phòng ngủ | ? | ? | ? |
| 6 | Bấm "Gửi lịch cho sale" | Mở CN10 (thuộc YC1.8) | ? | ? | ? |

Theo quy tắc: Đêm có khách; Trạng thái tiền booking; Tuần bắt đầu thứ hai.

Trạng thái màn:
- rỗng: chưa thiết kế
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC2.5-NT1 Khi chủ nhà mở lịch tuần, thì mỗi căn có một hàng và mỗi ngày trong tuần có một cột, bắt đầu từ T2.
- YC2.5-NT2 Khi một ô không có khách, thì ô đó hiện giá đêm của căn trong ngày đó.
- YC2.5-NT3 Khi chủ nhà chạm chip "Tòa A", thì bảng chỉ còn các căn của Tòa A.
- YC2.5-NT4 Khi có booking chưa cọc, thì ô tóm tắt "Chưa cọc" ghi đúng số booking chưa cọc.

## Quy tắc nghiệp vụ phát hiện
| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Đêm có khách | Booking chiếm các đêm từ ngày nhận tới trước ngày trả. Ngày trả không tính là đêm có khách | YC2.1, YC2.2, YC2.4, YC2.5 | 09/10 → 12/10 là 3 đêm: 09, 10, 11 |
| Màu theo căn | Mỗi căn một màu trên lịch. Từ 4 căn trở lên, tên căn trong danh sách căn (CN5) không tô màu | YC2.1 | Không |
| Trạng thái tiền booking | Mỗi booking mang một nhãn: "Chưa cọc", "Cọc <số tiền>", "Đã cọc · còn thu" hoặc "Đã thanh toán" | YC2.3, YC2.4, YC2.5 | "Cọc 1.000.000đ" |
| Tuần bắt đầu thứ hai | Lưới tháng và bảng tuần đều bắt đầu từ T2 và kết thúc ở CN | YC2.1, YC2.5 | Không |
| Giá rút gọn | Giá trên bảng tuần hiện rút gọn: dưới một triệu ghi "k", từ một triệu ghi "tr" kèm dấu phẩy | YC2.5 | 900k, 1,1tr, 1,15tr |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Lịch có khách / trống của căn | Thấy mọi căn của mình | Thấy trống hoặc kín theo quyền (xem YC1, quy tắc Quyền sale được xem) | ? | ? | Không |
| Tên người đặt, số điện thoại sale trên booking | Thấy | Chỉ booking của mình | ? | ? | Không |
| Số tiền, tiền cọc, trạng thái tiền | Thấy | Chỉ booking của mình, nếu quyền cọc bật | ? | ? | Không |
| Doanh thu tháng, số đêm | Thấy | Không | Không | ? | Không |
| Giá từng đêm trên lịch tuần | Thấy | Theo quyền "Giá từng đêm" | ? | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. Số liệu doanh thu tháng tính thế nào? CN1 ghi 11.800.000đ cho 13 đêm có khách, nhưng bốn booking trong danh sách cộng lại chỉ 8.600.000đ. Chưa rõ tính theo ngày trả, theo ngày nhận hay chia theo đêm, và booking nằm giữa hai tháng thuộc tháng nào. Phương án:
   - a) Chia theo đêm: mỗi đêm thuộc tháng của đêm đó.
   - b) Tính cả booking vào tháng của ngày nhận.
   - c) Tính theo ngày trả.
2. Doanh thu tháng thuộc YC2 hay YC7 Thống kê? CN8 (Thống kê tháng) cũng có doanh thu 6 tháng. Phương án: giữ tóm tắt ở Lịch và để chi tiết ở YC7; hoặc bỏ khỏi Lịch.
3. Một booking cho ra hai bộ số khác nhau. CN3 ghi Sale Hùng, phòng 1509, 09/10 → 12/10 (3 đêm), 2.700.000đ, cọc 1.000.000đ. CN3-02 ghi cùng sale và phòng nhưng 10/10 → 12/10 (2 đêm), 2.400.000đ. Phương án: đây là một booking, sửa dữ liệu minh họa; hoặc là hai booking khác nhau.
4. Chuyển giữa lịch tháng (CN1) và lịch tuần (CN2) bằng gì? Mô tả canvas nói CN2 dành cho "nhiều căn", nhưng CN1-02 có 3 căn vẫn là lịch tháng. Phương án: có nút đổi chế độ; chuyển tự động theo số căn (cần ngưỡng); hoặc chủ nhà chọn trong Cài đặt.
5. "Có khách hôm nay 1/6" và "Trống tối T7 3 căn" ở CN2 tính cho hôm nay thật hay cho tuần đang xem? Khi chủ nhà xem tuần khác thì hai ô này đổi không?
6. Các nút chưa nối: chạm một dòng "Booking sắp tới" (CN1) mở gì; "Thêm khách" ở CN3 mở form với căn và ngày điền sẵn không; chạm một thanh booking ở CN2 mở gì.
7. Ô lịch tháng khi một căn có người trả phòng và người nhận phòng cùng ngày: tô thế nào, và chi tiết ngày (CN3) hiện hai booking ra sao. Chưa thiết kế.
8. YC2 và YC4 chia ranh giới thế nào? Các màn CN3-02 (chi tiết booking), CN4 (thêm), CN4-02 (sửa), CN4-03 (đã lưu) mình xếp vào YC4. Nút "Gửi lịch cho sale" và CN10 xếp vào YC1.8. Cần Tùng xác nhận.
9. Lịch cập nhật khi sale đặt phòng hoặc sale gửi yêu cầu đặt phòng: tự cập nhật, hay phải kéo làm mới? Chưa thiết kế (liên quan YC4).
10. Chủ nhà chưa có căn nào mà vào tab Lịch thấy màn nào: CN1-00 hay A4 (YC1.4)? Phương án: A4 khi chưa có căn, CN1-00 khi có căn nhưng chưa có booking.

## Các màn hình trong nhóm YC2
| Mã | Tên màn |
|---|---|
| CN1 | Lịch tháng, 2 căn |
| CN1-02 | Lịch tháng, 3 căn |
| CN1-00 | Lịch · chưa có booking |
| CN2 | Lịch tuần, nhiều căn |
| CN3 | Chi tiết một ngày |
