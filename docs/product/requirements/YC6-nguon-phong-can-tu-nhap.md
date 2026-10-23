---
id: YC6
tieu_de: Nguồn phòng và căn tự nhập
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC6 · Nguồn phòng và căn tự nhập

Nhóm này cho sale quản lý các căn mình bán: căn của chính sale, căn của chủ nhà đã kết nối (nguồn phòng), và căn của chủ chưa dùng app (căn tự nhập). Căn tự nhập không có lịch trống, nên sale phải gọi chủ hỏi. Sale chỉ lưu ảnh, giá và ghi lại booking đã chốt để tính thống kê. Việc tìm phòng và gửi khách thuộc YC5. Việc kết nối với chủ nhà thuộc YC1. Tất cả nội dung dưới đây ở trạng thái đề xuất.

## YC6.1 · Danh sách căn và nguồn phòng
Mục đích: sale thấy một chỗ gồm căn của mình, chủ nhà đã kết nối và căn tự nhập.
Màn hình: S6
Khi nào xảy ra: sale mở tab Căn.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Căn | Hai tab "Nguồn phòng" và "Căn". Nhóm "CĂN CỦA TÔI · 2" kèm nút "+ Thêm căn". Mỗi căn: tên, "2PN · view vịnh", tình trạng ("Trống hôm nay ✓", "Có khách 12/10") | ? | ? | ? |
| 2 | Xem nguồn phòng | Nhóm "CHỦ NHÀ ĐÃ KẾT NỐI · 2". Mỗi chủ nhà: chữ cái đầu, tên, "✓ Cập nhật 2 giờ trước", danh sách căn ("ICON40 1509 · 2PN", "4 khách · view biển") | ? | ? | ? |
| 3 | Xem căn tự nhập | Nhóm "CĂN TỰ NHẬP · 1": "Villa Tuần Châu", "Chú Bình · chưa dùng app · gọi hỏi lịch" | ? | ? | ? |
| 4 | Xem gợi ý mời | "Mời chú Bình dùng app để lịch tự cập nhật, không cần gọi hỏi." và nút "Gửi lời mời qua Zalo" | ? | Cửa sổ chia sẻ của Zalo (?) | ? |
| 5 | Bấm "+ Thêm căn" | Luồng thêm căn của chủ nhà (YC3.2) | ? | ? | ? |
| 6 | Bấm "Thêm căn tự nhập" | Sang YC6.3 | ? | ? | ? |
| 7 | Chạm một chủ nhà | Sang YC6.2 | ? | ? | ? |
| 8 | Chạm căn tự nhập | Sang YC6.4 | ? | ? | ? |

Theo quy tắc: Ba loại căn của sale; Căn tự nhập không có lịch (YC5); Độ tươi lịch (YC5).

Trạng thái màn:
- rỗng: chưa thiết kế (màn đầu khi chưa có nguồn phòng là A5, thuộc YC1.4)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC6.1-NT1 Khi sale có 2 căn của mình, 2 chủ nhà đã kết nối và 1 căn tự nhập, thì thấy ba nhóm với số đếm 2, 2 và 1.
- YC6.1-NT2 Khi căn là căn tự nhập, thì thẻ ghi "chưa dùng app" và không hiện "Trống hôm nay".
- YC6.1-NT3 Khi sale bấm "Gửi lời mời qua Zalo", thì mở cửa sổ gửi của Zalo; Mini App không tự gửi tin.

## YC6.2 · Chi tiết chủ nhà và bỏ nguồn phòng
Mục đích: sale xem một chủ nhà đã kết nối cho mình xem gì, mình đã bán được bao nhiêu, và bỏ nguồn nếu cần.
Màn hình: S6-04
Khi nào xảy ra: sale chạm một chủ nhà trong "Nguồn phòng".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở chi tiết | Tên chủ nhà, số điện thoại, "kết nối từ 02/08/2026", nút "Gọi", dòng "✓ Lịch tự cập nhật · lần cuối 2 giờ trước" | ? | Gọi mở ứng dụng gọi (?) | ? |
| 2 | Xem quyền | "CHỊ HOA CHO BẠN XEM": Phòng trống hay đã đặt, Giá từng đêm, Tình trạng cọc | ? | ? | ? |
| 3 | Xem căn | "CĂN · 2": tên căn, "view biển · 1.800.000đ/đêm" | ? | ? | ? |
| 4 | Xem kết quả bán | Ô "BẠN ĐÃ BÁN: 12 booking", "TIỀN CHÊNH: 6.4tr" | ? | ? | ? |
| 5 | Bấm "Bỏ nguồn phòng này" | Nút đổi thành "Xác nhận bỏ Chị Hoa?" kèm lời nhắc "Bạn không thấy lịch của Chị Hoa nữa. Muốn xem lại phải xin link mới." | ? | ? | ? |
| 6 | Bấm xác nhận | Bỏ nguồn phòng (màn sau đó: chưa thiết kế) | ? | ? | Quan hệ sale và chủ nhà (?) |

Theo quy tắc: Bỏ nguồn phải bấm hai lần; Sale chỉ thấy giá khi chủ nhà cho phép (YC1).

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế (xem câu hỏi mở 4)
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC6.2-NT1 Khi chủ nhà tắt quyền "Giá từng đêm", thì S6-04 không hiện giá mỗi đêm của các căn (server không gửi giá).
- YC6.2-NT2 Khi sale bấm "Bỏ nguồn phòng này" một lần, thì chưa bỏ gì cả, chỉ hiện nút xác nhận.
- YC6.2-NT3 Khi sale bấm xác nhận, thì chủ nhà đó biến khỏi "Nguồn phòng" và sale không còn thấy lịch của họ.

## YC6.3 · Thêm căn tự nhập
Mục đích: sale lưu thông tin một căn của chủ chưa dùng app, để gửi khách và ghi booking.
Màn hình: S6-02
Khi nào xảy ra: sale bấm "Thêm căn tự nhập".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | Lời giải thích: căn này không có lịch trống, mỗi lần khách hỏi sale gọi chủ; app lưu ảnh, giá và booking đã chốt | ? | ? | ? |
| 2 | Nhập chủ nhà | "Tên chủ nhà *", "Số điện thoại *" | ? | ? | ? |
| 3 | Nhập căn | "Mã căn *"; "Tòa nhà" (ICON40, À La Carte, Sapphire, + Tòa khác); "Số phòng ngủ *" (Studio, 1PN, 2PN, 3PN, 4PN+); "Loại view" (Biển, Núi/Thành phố) | ? | ? | ? |
| 4 | Nhập giá chủ | "Ngày thường", "Cuối tuần". Ghi chú: "Giá chủ báo qua điện thoại. Không bắt buộc. Dùng để điền sẵn khi ghi booking." | ? | ? | ? |
| 5 | Thêm ảnh | "ẢNH (0)", "Tối đa 12 ảnh", nút "Thêm ảnh" | ? | Chọn ảnh qua Zalo (?) | ? |
| 6 | Thiếu ô bắt buộc | Dòng "Còn thiếu: tên chủ nhà, số điện thoại, mã căn, số phòng ngủ"; nút "Thêm căn" chưa dùng được (?) | ? | ? | ? |
| 7 | Bấm "Thêm căn" | Căn xuất hiện trong "CĂN TỰ NHẬP" | ? | ? | Căn tự nhập của sale |

Theo quy tắc: Căn tự nhập không có lịch (YC5); Căn tự nhập chỉ sale đó thấy.

Trạng thái màn:
- rỗng: S6-02 lúc mới mở
- đang tải: chưa thiết kế (lúc tải ảnh)
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế (quyền chọn ảnh)
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC6.3-NT1 Khi còn thiếu một trong bốn ô bắt buộc, thì dòng "Còn thiếu" liệt kê đúng ô thiếu.
- YC6.3-NT2 Khi sale không nhập giá chủ, thì vẫn thêm được căn.
- YC6.3-NT3 Khi sale thêm căn xong, thì căn nằm trong nhóm "CĂN TỰ NHẬP" và không có lịch trống.
- YC6.3-NT4 Khi sale chọn 12 ảnh, thì không chọn thêm được ảnh thứ 13.

## YC6.4 · Chi tiết căn tự nhập
Mục đích: sale xem một căn tự nhập, gọi chủ hỏi lịch, và dùng các việc liên quan đến căn này.
Màn hình: S6-03
Khi nào xảy ra: sale chạm căn tự nhập trong danh sách.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở chi tiết | Tên căn, tên chủ, số điện thoại che giữa, "chưa dùng app", nút "Gọi hỏi lịch", lời nhắc "Căn này không có lịch trống. Khách hỏi ngày nào, bạn gọi chú Bình hỏi ngày đó." | ? | Gọi mở ứng dụng gọi (?) | ? |
| 2 | Xem booking đã ghi | "BOOKING BẠN ĐÃ GHI · 1", "Chỉ bạn thấy", ngày, "Trả chủ 2.800.000đ · Thu khách 3.400.000đ", "+600.000đ". Ghi chú: "Đây là booking của bạn, không phải lịch của căn. Ngày không có booking chưa chắc còn trống." | ? | ? | ? |
| 3 | Bấm "Gửi cho khách" | Sang gửi khách (YC5.5) với căn này | ? | ? | ? |
| 4 | Bấm "Sửa thông tin căn" | Sửa ảnh, giá chủ, số phòng ngủ (màn sửa: chưa thiết kế) | ? | ? | ? |
| 5 | Bấm "Mời chú Bình dùng app" | Mời chủ dùng app để thấy lịch thật | ? | Cửa sổ chia sẻ của Zalo (?) | ? |
| 6 | Bấm "Xóa căn tự nhập" | Nút đổi thành "Xác nhận xóa Villa Tuần Châu?" kèm "Chỉ xóa khỏi Nguồn phòng của bạn." | ? | ? | ? |
| 7 | Bấm xác nhận xóa | Xóa căn (màn sau đó: chưa thiết kế) | ? | ? | Căn tự nhập và booking đã ghi của nó (?) |
| 8 | Bấm "Ghi booking đã chốt" | Sang YC6.5 | ? | ? | ? |

Theo quy tắc: Căn tự nhập không có lịch (YC5); Booking sale tự ghi chỉ sale đó thấy; Xóa phải bấm hai lần (YC4).

Trạng thái màn:
- rỗng: chưa có booking đã ghi (chưa thiết kế mục này khi bằng 0)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC6.4-NT1 Khi căn có 1 booking sale đã ghi, thì mục "BOOKING BẠN ĐÃ GHI · 1" hiện đúng ngày, tiền trả chủ, tiền thu khách và phần chênh.
- YC6.4-NT2 Khi ngày nào không có booking, thì màn không ghi "trống" cho ngày đó.
- YC6.4-NT3 Khi sale bấm "Xóa căn tự nhập" một lần, thì chưa xóa, chỉ hiện nút xác nhận.
- YC6.4-NT4 Khi phần chênh hiện ra, thì bằng tiền thu khách trừ tiền trả chủ (2.800.000đ và 3.400.000đ cho +600.000đ).

## YC6.5 · Ghi booking đã chốt cho căn tự nhập
Mục đích: sale ghi nhanh một booking đã chốt với chủ nhà qua điện thoại, trong một màn, để tính vào thống kê.
Màn hình: S6-05, S6-06
Khi nào xảy ra: sale bấm "Ghi booking đã chốt" ở chi tiết căn tự nhập.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | S6-05: "Villa Tuần Châu · đã chốt với chú Bình", ngày nhận, số đêm, hai ô tiền | ? | ? | ? |
| 2 | Chọn ngày nhận | Chip "Hôm nay 07/10", "Mai 08/10", "Ngày khác" | ? | ? | ? |
| 3 | Chọn số đêm | Nút − và +, dòng khoảng ngày ("08/10 → 09/10 (1 đêm)") | ? | ? | ? |
| 4 | Xem tiền điền sẵn | "Trả chủ (đ)", "Thu khách (đ)", dòng "Bạn lời 200.000đ". Ghi chú: "Giá điền sẵn từ giá chủ đã lưu và giá bán của bạn. Sửa nếu chú Bình báo giá khác." | ? | ? | ? |
| 5 | Bấm "Lưu booking" | Sang S6-06, danh sách booking có thêm dòng mới, thông báo "Đã ghi booking 08/10 → 09/10. Tính vào thống kê tháng 10." | ? | ? | Booking của sale cho căn tự nhập |
| 6 | Muốn thêm cọc, số khách, ghi chú | Ghi chú dưới nút: "thêm sau trong booking nếu cần" (màn sửa: chưa thiết kế) | ? | ? | ? |

Theo quy tắc: Booking sale tự ghi chỉ sale đó thấy; Phần chênh của sale; Tiền là số nguyên đồng (CLAUDE.md); Đêm tính từ ngày nhận tới trước ngày trả (CLAUDE.md).

Trạng thái màn:
- rỗng: S6-05 lúc mới mở
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC6.5-NT1 Khi sale chọn ngày nhận 08/10 và 1 đêm, thì khoảng ngày ghi "08/10 → 09/10 (1 đêm)".
- YC6.5-NT2 Khi trả chủ 1.400.000đ và thu khách 1.600.000đ, thì dòng ghi "Bạn lời 200.000đ".
- YC6.5-NT3 Khi sale bấm "Lưu booking", thì S6-06 hiện booking mới trong danh sách và thông báo ghi tháng 10.
- YC6.5-NT4 Khi sale ghi xong, thì ngày đó vẫn không được coi là "kín" hay "trống" trên lưới lịch (S1); chỉ ô "Bạn" xuất hiện (YC5.1).

## Quy tắc nghiệp vụ phát hiện
| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Ba loại căn của sale | Căn của tôi (sale thuê lại để kinh doanh), căn của chủ nhà đã kết nối (nguồn phòng), căn tự nhập (chủ chưa dùng app) | YC6.1 | 2, 2 và 1 căn |
| Căn tự nhập chỉ sale đó thấy | Căn tự nhập và booking sale ghi cho nó chỉ sale đó thấy. Chủ nhà thật không thấy | YC6.3, YC6.4, YC6.5 | "Chỉ bạn thấy" |
| Booking sale tự ghi không phải lịch | Booking sale ghi cho căn tự nhập là ghi chép của sale để tính thống kê. Nó không làm ngày khác thành trống | YC6.4, YC6.5 | Ngày không có booking hiện "chưa chắc còn trống" |
| Phần chênh của sale | Chênh = thu khách trừ trả chủ, tính trên tổng booking | YC6.4, YC6.5 | 3.400.000đ trừ 2.800.000đ bằng 600.000đ |
| Bỏ nguồn phải bấm hai lần | Bỏ nguồn phòng và xóa căn tự nhập đều cần bấm xác nhận lần hai | YC6.2, YC6.4 | "Xác nhận bỏ Chị Hoa?" |
| Giá điền sẵn từ giá chủ đã lưu | Khi ghi booking, tiền điền sẵn từ giá chủ sale đã lưu và giá bán của sale, sửa được | YC6.3, YC6.5 | Trả chủ 1.400.000đ |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Căn của tôi (sale thuê lại) | Không | Chỉ sale đó | Không | ? | Phần sale gửi |
| Căn tự nhập và thông tin chủ căn | Không (chủ căn chưa dùng app) | Chỉ sale đó | Không | ? | Phần sale gửi |
| Booking sale ghi cho căn tự nhập | Không | Chỉ sale đó | Không | ? | Không |
| Phần chênh, "Bạn đã bán", "Tiền chênh" | Chủ nhà chỉ thấy một giá | Chỉ sale đó | Không | ? | Không |
| Quyền chủ nhà cho sale xem (S6-04) | Chủ nhà đặt | Sale thấy phần được cho | ? | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. Sale ghi booking cho căn tự nhập trùng ngày với booking đã ghi trước. CLAUDE.md yêu cầu chặn trùng booking ở database, nhưng S6-05 chưa nói gì. Phương án: chặn trùng với booking sale đã ghi; hoặc chỉ cảnh báo; hoặc cho trùng vì đây chỉ là ghi chép.
2. Ghép với chủ nhà thật. Khi chú Bình sau này dùng app, căn tự nhập và các booking cũ làm gì. Phương án: ghép thành một căn của chủ nhà; hoặc giữ riêng; hoặc xóa. Màn "Mời chú Bình dùng app" chưa nói điều này.
3. Số điện thoại chủ căn tự nhập hiện đầy đủ ở S6-04 (chủ nhà đã kết nối) nhưng che giữa ở S6-03 và S6-06 (căn tự nhập). Muốn che hay không. Chủ căn là người ngoài hệ thống, nên cần xem có phải thông tin cá nhân cần che, và lưu ở Việt Nam theo CLAUDE.md.
4. Chủ nhà tắt quyền "Giá từng đêm" thì S6-04 hiện gì. Giá "1.800.000đ/đêm" đang hiện cứng. Chưa có màn cho trường hợp này.
5. "BẠN ĐÃ BÁN: 12 booking" và "TIỀN CHÊNH" tính từ đâu: booking đã chấp nhận (YC4), booking sale tự ghi, hay cả hai. Và tính theo tháng nào. Cần thống nhất với YC7.
6. Căn của tôi (Green Bay 0812, Mường Thanh 1605): chạm vào thì mở màn nào. Thiết kế không có chi tiết căn của tôi trong S6. "Trống hôm nay ✓" lấy lịch từ đâu: sale tự cập nhật hay chủ ghi (YC2). Chưa rõ.
7. Chip "Loại view" ở S6-02 là Biển và Núi/Thành phố, còn YC5 và YC3 dùng Biển, Vịnh, Thành phố. Cần dùng chung một bộ.
8. S6-02 không có ô số khách tối đa, trong khi chi tiết căn S3 ghi "4 khách". Căn tự nhập không có số khách thì gửi khách thiếu dòng này.
9. Sửa thông tin căn tự nhập và sửa booking đã ghi chưa có màn. Xóa booking sale đã ghi cũng chưa có màn.
10. "Gửi lời mời qua Zalo": nội dung tin mời và link mời lấy theo quy tắc nào (YC1.3). Hiện chỉ vẽ nút.
11. Ranh giới nhóm. S6-04 vừa là quản lý nguồn, vừa có số liệu bán (liên quan YC7). S6-05/06 là ghi booking nhưng xếp ở đây thay vì YC4. Cần Tùng xác nhận.
12. Mã S9 trùng CN7 và S9 nằm cùng file với S7 (đã ghi ở YC1) có thể ảnh hưởng nhóm này nếu "Quản lý sale" của chủ nhà đổi.

## Các màn hình trong nhóm YC6
| Mã | Tên màn |
|---|---|
| S6 | Nguồn phòng / Căn |
| S6-02 | Thêm căn tự nhập |
| S6-03 | Chi tiết căn tự nhập |
| S6-04 | Chi tiết chủ nhà |
| S6-05 | Ghi booking nhanh |
| S6-06 | Đã ghi, tính vào thống kê |
