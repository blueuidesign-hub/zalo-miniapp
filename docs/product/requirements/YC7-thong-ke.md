---
id: YC7
tieu_de: Thống kê
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC7 · Thống kê

Nhóm này cho hai người xem số liệu theo tháng. Chủ nhà xem doanh thu, công suất phòng, doanh thu theo người bán và khoản chưa thu. Sale xem tiền chênh, số booking, doanh số theo chủ nhà và các booking đang chờ chủ. Số liệu lấy từ booking ở YC4 và booking sale tự ghi ở YC6. Tất cả nội dung dưới đây ở trạng thái đề xuất. Số liệu trong ví dụ là dữ liệu minh họa của canvas.

## YC7.1 · Thống kê tháng của chủ nhà
Mục đích: chủ nhà thấy tháng này kiếm được bao nhiêu, phòng nào kiếm nhiều, phòng kín bao nhiêu đêm.
Màn hình: CN8, CN8-00
Khi nào xảy ra: chủ nhà mở tab Thống kê.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Thống kê | Tiêu đề "Thống kê", hàng chọn tháng: nút ‹ ›, "T09 · Tháng 10/2026 · T11" | ? | ? | ? |
| 2 | Xem doanh thu tháng | Thẻ "DOANH THU THÁNG 10": 11.800.000đ, "+22.9% so với tháng 9" | ? | ? | ? |
| 3 | Xem từng phòng | Thẻ "PHÒNG 1509: 7.100.000đ", "PHÒNG 3402: 4.700.000đ" | ? | ? | ? |
| 4 | Xem độ kín phòng | Thẻ "ĐÊM CÓ KHÁCH: 14/62", thẻ "CÔNG SUẤT: 22.6%" | ? | ? | ? |
| 5 | Chạm T09 hoặc T11, hoặc bấm ‹ ›  | Đổi sang tháng đó, mọi số trên màn đổi theo | ? | ? | ? |
| 6 | Xem tháng chưa có booking | CN8-00: doanh thu 0đ ghi "Chưa có booking"; hai phòng 0đ; đêm có khách 0; công suất 0% | ? | ? | ? |

Theo quy tắc: Doanh thu tính theo tháng; Công suất; Chủ nhà thấy một giá (YC4).

Trạng thái màn:
- rỗng: CN8-00 (tháng chưa có booking)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng (chỉ chủ nhà có tab này)
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC7.1-NT1 Khi tháng 10 có hai phòng 7.100.000đ và 4.700.000đ, thì doanh thu tháng ghi 11.800.000đ.
- YC7.1-NT2 Khi tháng 10 có 14 đêm có khách trên 2 phòng × 31 đêm, thì công suất ghi 22.6% (14 chia 62).
- YC7.1-NT3 Khi doanh thu tháng 9 là 9.600.000đ và tháng 10 là 11.800.000đ, thì dòng so sánh ghi +22.9%.
- YC7.1-NT4 Khi chủ nhà chạm T11, thì tiêu đề thành "Tháng 11/2026" và các thẻ đổi theo tháng 11.
- YC7.1-NT5 Khi tháng chưa có booking, thì mọi số ghi 0 và không có dòng phần trăm so sánh.

## YC7.2 · Doanh thu 6 tháng
Mục đích: chủ nhà thấy tháng này cao hay thấp hơn các tháng trước.
Màn hình: CN8, CN8-00
Khi nào xảy ra: chủ nhà xem tiếp xuống dưới trên màn Thống kê.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Xem biểu đồ | "DOANH THU 6 THÁNG": 6 cột, mỗi cột ghi số rút gọn trên đầu ("7.2tr", "13.4tr") và nhãn tháng ("T5" đến "T10") | ? | ? | ? |
| 2 | Xem tháng đang chọn | Cột tháng đang xem tô màu đậm, các tháng khác nhạt | ? | ? | ? |
| 3 | Đổi tháng ở YC7.1 | Biểu đồ dời cửa sổ 6 tháng theo tháng đang xem (CN8-00 cho tháng 12 hiện T7 đến T12, cột T12 trống) | ? | ? | ? |

Theo quy tắc: Giá rút gọn (YC2); Doanh thu tính theo tháng.

Trạng thái màn:
- rỗng: cột của tháng chưa có booking không có thanh, không có số
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC7.2-NT1 Khi doanh thu một tháng là 13.400.000đ, thì cột ghi "13.4tr".
- YC7.2-NT2 Khi chủ nhà xem tháng 10, thì cột T10 là cột đậm duy nhất.
- YC7.2-NT3 Khi chủ nhà xem tháng 12, thì biểu đồ gồm T7 đến T12.

## YC7.3 · Doanh thu theo người bán
Mục đích: chủ nhà thấy ai bán được bao nhiêu trong tháng, gồm cả khách lẻ chủ nhà tự ghi.
Màn hình: CN8, CN8-00
Khi nào xảy ra: chủ nhà xem tiếp xuống dưới trên màn Thống kê.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Xem danh sách | "DOANH THU THEO NGƯỜI BÁN": mỗi dòng tên và số tiền ("Sale Hùng 4.300.000đ", "Khách lẻ 2.300.000đ") | ? | ? | ? |
| 2 | Xem thứ tự | Xếp theo số tiền giảm dần (Hùng, Lan, Khách lẻ, Minh) | ? | ? | ? |
| 3 | Tháng chưa có booking | Dòng "Chưa có booking trong tháng." | ? | ? | ? |

Theo quy tắc: Doanh thu tính theo tháng; Chủ nhà thấy một giá (YC4); Khách lẻ là booking không qua sale.

Trạng thái màn:
- rỗng: "Chưa có booking trong tháng."
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC7.3-NT1 Khi tháng có 4 người bán với 4.300.000đ, 3.500.000đ, 2.300.000đ, 1.700.000đ, thì tổng các dòng bằng doanh thu tháng 11.800.000đ.
- YC7.3-NT2 Khi chủ nhà tự ghi booking không qua sale, thì số tiền vào dòng "Khách lẻ".
- YC7.3-NT3 Khi chủ nhà xem màn này, thì không dòng nào hiện giá bán của sale hay phần chênh.

## YC7.4 · Chưa thu tiền
Mục đích: chủ nhà thấy booking nào chưa cọc để đòi hoặc nhắc.
Màn hình: CN8, CN8-00
Khi nào xảy ra: chủ nhà xem cuối màn Thống kê.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Xem tổng | "CHƯA THU TIỀN": 3.500.000đ | ? | ? | ? |
| 2 | Xem từng khoản | Mỗi dòng: người bán và ngày ("Sale Lan · 10/10 → 12/10"), tình trạng ("Chưa cọc · nhận phòng sau 3 ngày"), số tiền | ? | ? | ? |
| 3 | Không có khoản nào | CN8-00: tổng 0đ, dòng "Không có khoản nào chưa thu." | ? | ? | ? |

Theo quy tắc: Tiền còn lại (YC4); Booking chưa cọc.

Trạng thái màn:
- rỗng: "Không có khoản nào chưa thu."
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC7.4-NT1 Khi có hai booking chưa cọc 1.800.000đ và 1.700.000đ, thì tổng ghi 3.500.000đ.
- YC7.4-NT2 Khi booking nhận phòng trong 3 ngày nữa mà chưa cọc, thì dòng ghi "nhận phòng sau 3 ngày".
- YC7.4-NT3 Khi chủ nhà đánh dấu đã thu đủ ở YC4.2, thì khoản đó biến khỏi danh sách.

## YC7.5 · Thống kê của sale
Mục đích: sale thấy tháng này mình lời bao nhiêu, bán qua chủ nhà nào, và còn gì đang chờ.
Màn hình: S7, S7-00
Khi nào xảy ra: sale mở tab Thống kê.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Thống kê | Tiêu đề "Thống kê", nhãn "Tháng 10/2026" | ? | ? | ? |
| 2 | Xem tiền chênh | Thẻ "TIỀN CHÊNH THÁNG 10: 1.600.000đ", "+33.3% so với tháng 9" | ? | ? | ? |
| 3 | Xem booking và doanh số | Thẻ "BOOKING: 6 · Tháng 9: 4"; thẻ "DOANH SỐ: 13.400.000đ · Tháng 9: 9.800.000đ" | ? | ? | ? |
| 4 | Xem theo chủ nhà | "DOANH SỐ THEO CHỦ NHÀ", ghi chú "Tiền chênh là giá bán trừ giá chủ nhà". Mỗi dòng: tên chủ, doanh số, tiền chênh; có cả chủ căn tự nhập | ? | ? | ? |
| 5 | Xem chờ chủ | "CHỜ CHỦ NHÀ CHẤP NHẬN: 1", dòng "ICON40 1509 · 10/10 → 12/10", "Gửi 14:20 · Chị Hoa chưa trả lời" | ? | ? | ? |
| 6 | Chạm mục chờ chủ | Sang YC7.6 (chưa có mũi tên trên canvas) | ? | ? | ? |
| 7 | Tháng chưa chốt booking nào | S7-00: tiền chênh 0đ, dòng "Tháng này chưa chốt booking nào", gợi ý "Tìm phòng trống, gửi khách và đặt phòng với chủ nhà. Booking đã chốt tính ở đây." và nút "Tìm phòng" | ? | ? | ? |
| 8 | Bấm "Tìm phòng" | Sang tìm phòng (YC5.2) | ? | ? | ? |

Theo quy tắc: Tiền chênh của sale (YC6); Doanh thu tính theo tháng; Booking chờ chủ chưa tính vào số liệu.

Trạng thái màn:
- rỗng: S7-00
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC7.5-NT1 Khi doanh số theo ba chủ nhà là 8.600.000đ, 3.200.000đ, 1.600.000đ, thì doanh số tháng ghi 13.400.000đ.
- YC7.5-NT2 Khi tiền chênh theo ba chủ nhà là 1.000.000đ, 400.000đ, 200.000đ, thì tiền chênh tháng ghi 1.600.000đ.
- YC7.5-NT3 Khi booking còn chờ chủ, thì không cộng vào Booking, Doanh số hay Tiền chênh.
- YC7.5-NT4 Khi tháng chưa chốt booking nào, thì thấy S7-00 và nút "Tìm phòng" mở tìm phòng.

## YC7.6 · Trạng thái booking của sale
Mục đích: sale biết từng booking mình đã gửi đang ở bước nào: chờ chủ, đã chốt hay đã hủy.
Màn hình: S7-03
Khi nào xảy ra: sale mở danh sách booking của mình từ màn Thống kê.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở danh sách | "BOOKING CỦA TÔI": mỗi dòng gồm căn và ngày ở, câu trạng thái, nhãn trạng thái | ? | ? | ? |
| 2 | Xem "Chờ chủ" | "Đã gửi yêu cầu, chờ chủ chấp nhận" (có giờ gửi nếu có) | ? | ? | ? |
| 3 | Xem "Đã chốt" | "Chủ đã chấp nhận · chênh 300.000đ" | ? | ? | ? |
| 4 | Xem "Đã hủy" | "Chủ đã nhận đặt phòng khác cùng ngày" | ? | ? | ? |
| 5 | Xem thứ tự trạng thái | Ghi chú "Chờ chủ → Đã chốt. Chủ từ chối, hoặc nhận đặt phòng khác cùng ngày trước khi chấp nhận, thì thành Đã hủy." | ? | ? | ? |

Theo quy tắc: Yêu cầu chưa phải booking (YC4); Trùng ngày thì tự hủy (YC4); Tiền chênh của sale (YC6).

Trạng thái màn:
- rỗng: chưa thiết kế
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng (thông báo P13 mở đúng dòng liên quan, thuộc YC1.10)

Tiêu chí nghiệm thu:
- YC7.6-NT1 Khi yêu cầu còn chờ chủ, thì nhãn là "Chờ chủ" và không có số tiền chênh.
- YC7.6-NT2 Khi chủ chấp nhận, thì nhãn là "Đã chốt" và dòng ghi số tiền chênh.
- YC7.6-NT3 Khi chủ từ chối hoặc nhận đặt phòng khác cùng ngày, thì nhãn là "Đã hủy" và dòng ghi lý do.

## Quy tắc nghiệp vụ phát hiện
| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Doanh thu tính theo tháng | Mỗi số trên màn Thống kê thuộc một tháng lịch. Cách tính booking nằm giữa hai tháng chưa chốt (xem câu hỏi mở 1) | YC7.1, YC7.2, YC7.3, YC7.5 | Tháng 10 gồm 31 đêm |
| Công suất | Công suất = số đêm có khách chia cho (số căn × số đêm trong tháng) | YC7.1 | 14 chia (2 × 31) = 22.6% |
| So với tháng trước | Phần trăm = (tháng này trừ tháng trước) chia tháng trước, làm tròn một số lẻ | YC7.1, YC7.5 | (11.800.000 trừ 9.600.000) chia 9.600.000 = +22.9% |
| Khách lẻ là booking không qua sale | Booking chủ nhà tự ghi, không gắn sale, vào dòng "Khách lẻ" | YC7.3 | 2.300.000đ |
| Tiền chênh | Tiền chênh = giá sale thu khách trừ giá chủ nhà, cộng theo booking đã chốt | YC7.5, YC7.6 | 3.400.000đ trừ 2.800.000đ = 600.000đ |
| Chưa thu tiền | Booking chưa đủ cọc theo cách tính ở YC4 | YC7.4 | 1.800.000đ + 1.700.000đ = 3.500.000đ |
| Booking chờ chủ chưa tính | Yêu cầu của sale chưa được chấp nhận chưa vào Booking, Doanh số, Tiền chênh | YC7.5, YC7.6 | 1 yêu cầu chờ |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Doanh thu, công suất, doanh thu từng phòng | Thấy | Không | Không | ? | Không |
| Doanh thu theo người bán | Thấy (chỉ một giá) | Không | Không | ? | Không |
| Chưa thu tiền | Thấy | Không | Không | ? | Không |
| Tiền chênh, doanh số của sale | Không thấy phần chênh | Chỉ sale đó | Không | ? | Không |
| Booking của tôi và trạng thái | Thấy trong YC4 | Chỉ sale đó | Không | ? | Không |
| Số liệu của sale khác trong nhóm | Không | ? (xem YC8) | Không | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. Booking nằm giữa hai tháng tính vào tháng nào. Công suất tính theo đêm (14/62) nhưng chưa nói doanh thu. S6-06 ghi booking nhận 08/10 "tính vào thống kê tháng 10". Phương án: chia doanh thu theo đêm (khớp công suất); hoặc tính cả booking vào tháng nhận phòng (dễ hiểu hơn nhưng công suất và doanh thu lệch nhau); hoặc tính theo tháng chốt.
2. Số liệu S7 và S7-03 không khớp: S7 ghi "Booking 6" nhưng S7-03 chỉ có 2 đã chốt; S7 ghi "Chờ chủ nhà chấp nhận: 1" (ICON40 1509 · 10/10 → 12/10) còn S7-03 có 2 yêu cầu chờ và dòng 10/10 → 12/10 là À La Carte 2208. Phương án: sửa dữ liệu minh họa cho khớp một bộ số.
3. "Doanh thu theo người bán" của chủ nhà là giá chủ nhà hay giá khách trả. CLAUDE.md và YC4 quy định chủ nhà chỉ thấy một giá, nhưng chưa ghi rõ là giá nào.
4. Phần trăm so với tháng trước khi tháng trước bằng 0 (chia cho 0). Chưa thiết kế. Phương án: ẩn dòng phần trăm; hoặc ghi "Tháng đầu tiên".
5. Booking đã hủy hoặc bị xóa (YC4.4) có bị trừ khỏi doanh thu, đêm có khách và chưa thu không. Phương án: trừ hết ngay khi hủy.
6. Tháng tương lai (T12) chỉ có booking đặt trước. Nhãn "Doanh thu tháng 12" dễ bị hiểu là tiền đã thu. Phương án: đổi nhãn thành "Đã đặt" cho tháng chưa tới; hoặc giữ nhãn và thêm dòng "Chưa phát sinh".
7. Công suất khi giữa tháng thêm hoặc xóa căn (YC3). Mẫu số tính theo số căn có đủ cả tháng hay theo số đêm căn tồn tại.
8. Thống kê của sale có chọn tháng khác không. S7 chỉ có nhãn "Tháng 10/2026", không có nút đổi tháng.
9. Tiền chênh của sale gộp booking qua app (YC4) và booking sale tự ghi cho căn tự nhập (YC6). S7 gộp cả hai (dòng chủ căn tự nhập). Cần Tùng xác nhận có gộp không.
10. Xếp thứ tự người bán có "Khách lẻ" lẫn với sale. Cần cố định "Khách lẻ" luôn đứng cuối không.
11. Ranh giới nhóm. S7-03 (trạng thái booking của sale) xếp ở YC7 theo thiết kế, nhưng nội dung gần với YC4.7. Cần Tùng xác nhận.
12. Mã S9 trùng CN7 và nằm cùng file với S7 (đã ghi ở YC1). Thống kê của sale ở S7 và danh sách sale ở S9 cùng một file nhưng khác nhóm.

## Các màn hình trong nhóm YC7
| Mã | Tên màn |
|---|---|
| CN8 | Thống kê tháng (chủ nhà) |
| CN8-00 | Thống kê, tháng chưa có booking |
| S7 | Thống kê của sale |
| S7-00 | Thống kê, chưa có booking |
| S7-03 | Các trạng thái booking của sale |
