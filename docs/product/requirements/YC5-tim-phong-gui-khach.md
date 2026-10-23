---
id: YC5
tieu_de: Tìm phòng và gửi khách
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC5 · Tìm phòng và gửi khách

Nhóm này cho sale xem lịch phòng của mọi căn mình bán, tìm căn trống theo ngày, xem giá, cộng giá của mình, rồi gửi thông tin và ảnh cho khách qua Zalo. Căn của chính sale luôn đứng đầu. Căn tự nhập không có lịch tự động nên ô ngày hiện "?". Việc đặt phòng với chủ nhà thuộc YC4, việc quản lý căn tự nhập thuộc YC6. Tất cả nội dung dưới đây ở trạng thái đề xuất.

## YC5.1 · Lịch phòng 7 ngày
Mục đích: sale thấy ngay căn nào trống, căn nào kín trong 7 ngày tới, kèm giá, để trả lời khách nhanh.
Màn hình: S1, S1-04, S1-05
Khi nào xảy ra: sale mở tab Lịch.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Lịch | Tiêu đề "Lịch phòng", ô tìm "Tìm phòng trống theo ngày", thanh "7 ngày tới · 07/10 → 13/10" kèm nút ‹ ›, nút sắp xếp ("Theo tên") | ? | ? | ? |
| 2 | Xem bảng | Cột CĂN và 7 cột ngày (Nay, T5, T6...). Hai nhóm: "CĂN CỦA TÔI · 2" ở đầu, rồi "NGUỒN PHÒNG · 5". Mỗi hàng: tên căn, chủ nhà, số phòng ngủ, rồi mỗi ngày là giá hoặc "Kín" | ? | ? | ? |
| 3 | Xem căn tự nhập | Hàng "Villa Tuần Châu · Chú Bình · tự nhập": ô ngày hiện "?", ô có booking mình ghi hiện "Bạn" | ? | ? | ? |
| 4 | Xem chú thích | "Hôm nay", "Kín", "?" (Căn tự nhập: gọi chủ hỏi), "Booking bạn đã ghi", "Số là giá đêm của bạn · chạm căn để xem" | ? | ? | ? |
| 5 | Bấm ‹ hoặc › | Chuyển 7 ngày | ? | ? | ? |
| 6 | Bấm nút sắp xếp | S1-04: chọn "Theo tên", "Giá tăng dần" hoặc "Bán nhiều nhất". Ghi chú "Căn của tôi luôn hiện đầu danh sách." | ? | ? | ? |
| 7 | Xoay ngang | S1-05: cột tên căn rộng hơn, ẩn thanh menu | ? | ? | ? |
| 8 | Chạm một căn | Mở chi tiết căn (S3, xem YC5.4) | ? | ? | ? |
| 9 | Chạm ô tìm | Mở tìm phòng (S1-02, xem YC5.2) | ? | ? | ? |

Theo quy tắc: Căn của tôi đứng đầu; Căn tự nhập không có lịch; Sale chỉ thấy căn chủ nhà đã đồng ý (YC1).

Trạng thái màn:
- rỗng: sale chưa có nguồn phòng thì thấy A5 (thuộc YC1.4)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế (xem câu hỏi mở 3 về chủ nhà tắt giá)
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: toast "đã đồng ý cho bạn xem lịch" (A9, thuộc YC1.10)

Tiêu chí nghiệm thu:
- YC5.1-NT1 Khi sale có 2 căn của mình và 5 căn trong nguồn phòng, thì nhóm "CĂN CỦA TÔI · 2" nằm trên nhóm "NGUỒN PHÒNG · 5".
- YC5.1-NT2 Khi một căn kín trong một ngày, thì ô ngày đó ghi "Kín"; khi trống thì ghi giá.
- YC5.1-NT3 Khi căn là căn tự nhập, thì mọi ô ngày ghi "?" ngoại trừ ngày sale đã ghi booking của mình ghi "Bạn". Không ô nào ghi "trống".
- YC5.1-NT4 Khi sale chọn "Giá tăng dần", thì thứ tự các căn đổi theo giá và nhóm "CĂN CỦA TÔI" vẫn ở trên cùng.

## YC5.2 · Tìm phòng trống theo ngày
Mục đích: sale nhập ngày khách muốn ở và các điều kiện, để chỉ thấy các căn còn trống.
Màn hình: S1-02, S1-03, S2-00
Khi nào xảy ra: sale chạm ô "Tìm phòng trống theo ngày" ở tab Lịch.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tìm phòng | S1-02: "Ngày nhận", "Ngày trả", "Số đêm:" kèm chip 1, 2, 3, 4, "Tùy chọn". Mục "TÌM GẦN ĐÂY" (ví dụ "10/10 → 12/10 · 2PN · ICON40"). Mục "LỌC THÊM · Không bắt buộc" | ? | ? | ? |
| 2 | Chọn ngày | S1-03 đã chọn. Nút "Tìm phòng trống" luôn dính đáy, mờ khi chưa có ngày ("Chọn ngày nhận để tìm phòng") | ? | ? | ? |
| 3 | Chọn lọc thêm | "Số phòng ngủ" (1PN, 2PN, 3PN, 4PN+), "Giá mỗi đêm" (khoảng, "Mọi mức giá" khi chưa chọn), "Tòa nhà" (ICON40, À La Carte, Sapphire, Khác), "Loại view" (Biển, Vịnh, Thành phố) | ? | ? | ? |
| 4 | Chạm một lần tìm gần đây | Điền sẵn điều kiện của lần đó | ? | ? | ? |
| 5 | Bấm "Tìm phòng trống" | Sang kết quả (YC5.3) | ? | ? | Lưu lần tìm vào "Tìm gần đây" (?) |
| 6 | Không có căn trống | S2-00: "Không có căn trống", giải thích điều kiện đã lọc, mục "GỢI Ý": "Đổi sang 11/10 → 13/10" (3 căn trống), "Bỏ lọc tòa nhà" (2 căn trống), "Thêm 2PN" (4 căn trống), nút "Sửa tìm kiếm". Ghi chú "Căn tự nhập không có lịch tự động. Gọi chủ nhà để hỏi." | ? | ? | ? |

Theo quy tắc: Căn tự nhập không có lịch.

Trạng thái màn:
- rỗng: S1-02 chưa chọn ngày, nút mờ
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC5.2-NT1 Khi sale chưa chọn ngày nhận, thì nút "Tìm phòng trống" mờ và ghi "Chọn ngày nhận để tìm phòng".
- YC5.2-NT2 Khi sale chọn 10/10 và "2 đêm", thì ngày trả là 12/10.
- YC5.2-NT3 Khi không có căn trống, thì thấy S2-00 với ít nhất một gợi ý kèm số căn trống nếu làm theo gợi ý đó.
- YC5.2-NT4 Khi sale chạm một dòng "Tìm gần đây", thì các điều kiện của lần tìm đó được điền sẵn.

## YC5.3 · Kết quả tìm phòng
Mục đích: sale xem các căn trống theo ngày khách hỏi, dạng danh sách hoặc dạng lịch tuần, rồi chọn căn để gửi.
Màn hình: S2, S4
Khi nào xảy ra: sale bấm "Tìm phòng trống".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Xem danh sách | S2: dòng điều kiện ("10/10 → 12/10 · 2PN, 3PN · 2 đêm") kèm "Sửa", "5 căn trống", hai chế độ "Danh sách" và "Lịch tuần", sắp xếp "Theo tên". Nhóm "CỦA TÔI · 1" ở đầu rồi "NGUỒN PHÒNG · 4". Mỗi thẻ: tên căn, số phòng ngủ, chủ nhà, view, giá tổng các đêm | ? | ? | ? |
| 2 | Xem giá trên thẻ căn của chủ nhà | Giá chủ nhà và "bạn bán" giá đã cộng, ví dụ "2.200.000đ · bạn bán 2.600.000đ" | ? | ? | ? |
| 3 | Xem độ tươi lịch | "Lịch cập nhật 2 giờ trước", hoặc "Lịch của bạn, luôn đúng" với căn của tôi; căn tự nhập ghi "Tự nhập · không có lịch, gọi chú Bình hỏi" | ? | ? | ? |
| 4 | Tích chọn căn | Dấu tích ở mỗi thẻ. Thanh đáy "Đã chọn 3 căn" và nút "Gửi cho khách" | ? | ? | ? |
| 5 | Chuyển sang "Lịch tuần" | S4: dòng "10/10 → 12/10 · 4 khách", "8 căn trống", bảng căn × 7 ngày giá hoặc "Kín" hoặc "?" ("Đêm khách hỏi" được tô) | ? | ? | ? |
| 6 | Chạm một căn | Mở chi tiết căn (S3) | ? | ? | ? |
| 7 | Bấm "Gửi cho khách" | Sang YC5.5 | ? | ? | ? |

Theo quy tắc: Căn của tôi đứng đầu; Căn tự nhập không có lịch; Giá bán gồm phần cộng thêm.

Trạng thái màn:
- rỗng: S2-00, xem YC5.2
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC5.3-NT1 Khi kết quả có căn của sale và căn trong nguồn phòng, thì nhóm "CỦA TÔI" nằm trên.
- YC5.3-NT2 Khi sale tích 3 căn, thì thanh đáy ghi "Đã chọn 3 căn" và nút "Gửi cho khách" dùng được.
- YC5.3-NT3 Khi sale chuyển giữa "Danh sách" và "Lịch tuần", thì tập căn trống và điều kiện tìm không đổi.
- YC5.3-NT4 Khi căn là căn tự nhập, thì thẻ ghi rõ không có lịch và gợi ý gọi chủ nhà.

## YC5.4 · Chi tiết căn và giá bán
Mục đích: sale xem một căn đủ thông tin để tư vấn, chỉnh mức cộng giá của mình cho căn này, và quyết định đặt hay gửi khách.
Màn hình: S3
Khi nào xảy ra: sale chạm một căn ở lịch phòng hoặc ở kết quả tìm.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở chi tiết | Bộ ảnh ("1/6"), tên "ICON40 1509 · 2PN", "2PN · 4 khách · view biển · Bãi Cháy", nhãn "Lịch cập nhật 2 giờ trước" | ? | ? | ? |
| 2 | Xem chủ nhà | Thẻ "Chị Hoa · Chủ nhà · 2 căn" kèm nút "Gọi" | ? | Gọi mở ứng dụng gọi (?) | ? |
| 3 | Xem giá | Ngày ở "10/10 → 12/10 (2 đêm)", "Giá chủ nhà 1.800.000đ" | ? | ? | ? |
| 4 | Chọn mức cộng | Mục "CỘNG THÊM CHO BẠN": chip +0, +200k, +400k, +600k. Cập nhật "Giá bán cho khách". Ghi chú "Chỉ bạn thấy giá này. Khách và chủ nhà không thấy phần cộng thêm." | ? | ? | Mức cộng riêng cho căn (?) |
| 5 | Xem lịch | "Lịch 2 tuần tới" Trống / Kín; "Ngày khách hỏi" được tô | ? | ? | ? |
| 6 | Xem tiện ích | Bếp, Máy giặt, Bể bơi tòa nhà, Chỗ đỗ ô tô; "Nhận phòng 14:00 · Trả phòng 12:00" | ? | ? | ? |
| 7 | Bấm "Đặt phòng" | Mở S3-02 (thuộc YC4.5) | ? | ? | ? |
| 8 | Bấm "Gửi cho khách" | Sang YC5.5 với căn này | ? | ? | ? |

Theo quy tắc: Giá bán gồm phần cộng thêm; Sale chỉ thấy giá khi chủ nhà cho phép (YC1, Quyền sale được xem).

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC5.4-NT1 Khi sale chọn chip +200k cho phòng 2 đêm, thì giá bán bằng giá chủ nhà cộng 200.000đ nhân số đêm.
- YC5.4-NT2 Khi sale xem chi tiết, thì thấy giá chủ nhà và giá bán cho khách; chủ nhà và khách không thấy phần cộng thêm.
- YC5.4-NT3 Khi sale bấm "Đặt phòng", thì app mở S3-02 với đúng căn và ngày đang xem.

## YC5.5 · Gửi thông tin cho khách qua Zalo
Mục đích: sale gửi cho khách mô tả, giá và ảnh của các căn đã chọn qua Zalo, trong vài chạm.
Màn hình: S5
Khi nào xảy ra: sale đã chọn căn và bấm "Gửi cho khách".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | Tiêu đề "Gửi cho khách". Dòng "3 căn · 10/10 → 12/10. Zalo không gửi chữ và ảnh chung một tin: mỗi căn gửi chữ một lần, ảnh một lần." | ? | ? | ? |
| 2 | Xem một căn | Số thứ tự, tên căn, số ảnh ("6 ảnh"), nội dung chữ ("ICON40 1509 · 2PN, view biển Bãi Cháy / 4 khách · bếp, máy giặt, bể bơi / 10/10 → 12/10 (2 đêm): 2.600.000đ") | ? | ? | ? |
| 3 | Bấm "Gửi chữ qua Zalo" | Mở cửa sổ gửi của Zalo với chữ có sẵn; sale chọn người nhận và bấm gửi | ? | Cửa sổ chia sẻ của Zalo | ? |
| 4 | Bấm "Gửi 6 ảnh qua Zalo" | Mở cửa sổ gửi của Zalo với ảnh | ? | Cửa sổ chia sẻ của Zalo | ? |
| 5 | Bấm "Sao chép chữ" | Sao chép chữ của căn đó | ? | ? | ? |
| 6 | Bấm "Sao chép chữ cả 3 căn" | Sao chép chữ cả 3 căn để dán vào tin nhắn bất kỳ ("Hoặc sao chép chữ rồi dán vào tin nhắn bất kỳ") | ? | ? | ? |

Theo quy tắc: Chữ và ảnh gửi riêng; Giá bán gồm phần cộng thêm; Mẫu tin gửi khách.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế (lúc chuẩn bị ảnh)
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế (sale gửi xong quay lại app; chưa vẽ nhãn "Đã gửi")
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC5.5-NT1 Khi sale chọn 3 căn, thì S5 có 3 khối, mỗi khối một nút gửi chữ và một nút gửi ảnh.
- YC5.5-NT2 Khi sale bấm "Gửi chữ qua Zalo", thì cửa sổ Zalo mở với chữ của đúng căn đó.
- YC5.5-NT3 Khi sale bấm "Sao chép chữ cả 3 căn", thì bộ nhớ tạm có chữ của cả 3 căn theo thứ tự trên màn.
- YC5.5-NT4 Khi chữ gửi khách hiện giá, thì đó là giá bán cho khách và không có giá chủ nhà.

## YC5.6 · Mức cộng giá mặc định
Mục đích: sale đặt một lần mức cộng thêm vào giá chủ nhà để mọi tin gửi khách đã có giá bán.
Màn hình: P10
Khi nào xảy ra: sale vào Cá nhân > "Mức cộng giá mặc định".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | "Cộng thêm vào giá chủ nhà mỗi đêm khi soạn tin gửi khách. Khách chỉ thấy giá đã cộng." | ? | ? | ? |
| 2 | Chọn mức | Chip "Không cộng", "+200k", "+300k", "+400k", "+500k", "Tùy chọn" | ? | ? | ? |
| 3 | Bật "Làm tròn lên 50.000đ" | Công tắc | ? | ? | ? |
| 4 | Xem ví dụ | "VÍ DỤ: PHÒNG 1509, 2 ĐÊM": Giá chủ nhà 1.800.000đ, Giá gửi khách 2.600.000đ, Bạn được 800.000đ | ? | ? | ? |
| 5 | Bấm "Lưu thay đổi" | Lưu. Ghi chú "Khi soạn tin (S3) vẫn sửa được mức cộng cho từng căn." | ? | ? | Mức cộng mặc định của sale |

Theo quy tắc: Giá bán gồm phần cộng thêm.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC5.6-NT1 Khi sale chọn "+400k", thì ví dụ 2 đêm ghi bạn được 800.000đ.
- YC5.6-NT2 Khi sale chọn "Không cộng", thì giá gửi khách bằng giá chủ nhà.
- YC5.6-NT3 Khi sale bật làm tròn lên 50.000đ, thì giá gửi khách làm tròn lên bội số 50.000đ gần nhất.

## YC5.7 · Mẫu tin gửi khách
Mục đích: sale tùy chỉnh câu chữ tin gửi khách bằng các ô điền sẵn, để mỗi lần gửi không phải gõ lại.
Màn hình: P11
Khi nào xảy ra: sale vào Cá nhân > "Mẫu tin gửi khách".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | Ô soạn "Mẫu tin" và hàng "Chạm để chèn": [Ngày], [Số đêm], [Số căn], [Danh sách căn], [Tên sale] | ? | ? | ? |
| 2 | Chạm một ô | Chèn ô đó vào mẫu | ? | ? | ? |
| 3 | Xem "KHÁCH SẼ NHẬN ĐƯỢC" | Bản xem trước với 3 căn trống 10/10 → 12/10 ("Em gửi anh chị 3 căn còn trống 10/10 → 12/10 (2 đêm): ...") | ? | ? | ? |
| 4 | Bấm "Dùng lại mẫu mặc định" | Về mẫu mặc định | ? | ? | ? |
| 5 | Bấm "Lưu thay đổi" | Lưu mẫu | ? | ? | Mẫu tin của sale |

Theo quy tắc: Mẫu tin gửi khách.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC5.7-NT1 Khi sale chạm "[Ngày]", thì mẫu có thêm ô [Ngày] và bản xem trước hiện ngày thật.
- YC5.7-NT2 Khi sale bấm "Dùng lại mẫu mặc định", thì mẫu về nội dung mặc định.
- YC5.7-NT3 Khi sale gửi khách ở S5, thì chữ gửi theo mẫu đã lưu.

## Quy tắc nghiệp vụ phát hiện
| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Căn của tôi đứng đầu | Căn sale tự nhập luôn đứng đầu danh sách và kết quả, dù sắp xếp thế nào | YC5.1, YC5.3 | "CĂN CỦA TÔI · 2" trên "NGUỒN PHÒNG · 5" |
| Căn tự nhập không có lịch | Căn tự nhập không có lịch trống. Ô ngày ghi "?", không bao giờ ghi "trống". Ô có booking sale tự ghi ghi "Bạn". Muốn biết còn trống phải gọi chủ nhà | YC5.1, YC5.2, YC5.3 | "?" và "Bạn" |
| Giá bán gồm phần cộng thêm | Giá bán cho khách bằng giá chủ nhà cộng mức cộng thêm mỗi đêm của sale, có thể làm tròn lên 50.000đ. Mức mặc định đặt ở Cá nhân, sửa riêng từng căn ở S3. Khách và chủ nhà không thấy phần cộng thêm | YC5.3, YC5.4, YC5.5, YC5.6 | 1.800.000đ cộng 400k × 2 đêm = 2.600.000đ |
| Chữ và ảnh gửi riêng | Zalo không gửi chữ và ảnh chung một tin. Mỗi căn gửi chữ một lần, ảnh một lần | YC5.5 | 6 ảnh, 4 ảnh |
| Mẫu tin gửi khách | Tin gửi khách tạo từ mẫu có các ô điền sẵn: Ngày, Số đêm, Số căn, Danh sách căn, Tên sale | YC5.5, YC5.7 | "Em gửi anh chị 3 căn còn trống 10/10 → 12/10 (2 đêm)" |
| Độ tươi lịch | Mỗi căn của chủ nhà ghi lần cập nhật lịch gần nhất | YC5.3, YC5.4 | "Lịch cập nhật 2 giờ trước" |
| Sắp xếp danh sách | Ba cách: Theo tên, Giá tăng dần, Bán nhiều nhất | YC5.1, YC5.3 | Không |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Lịch trống / kín của căn | Thấy mọi căn của mình | Thấy căn chủ nhà đã đồng ý | ? | ? | Không |
| Giá chủ nhà theo đêm | Thấy | Thấy theo quyền "Giá từng đêm" (YC1) | ? | ? | Không thấy |
| Giá bán, mức cộng thêm | Không thấy | Chỉ sale đó thấy | ? | ? | Thấy giá bán, không thấy phần cộng thêm |
| Ảnh, mô tả, tiện ích căn | Thấy, sửa | Thấy, chọn gửi khách | ? | ? | Phần sale gửi |
| Booking sale tự ghi cho căn tự nhập | Không | Chỉ sale đó | Không | ? | Không |
| Mẫu tin, mức cộng mặc định | Không | Chỉ sale đó | Không | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. Số liệu giá lệch giữa các màn cho cùng căn và cùng ngày, nên chưa kiểm được quy tắc giá bán:
   - S2 ghi ICON40 1509 giá "2.200.000đ · bạn bán 2.600.000đ" (cộng 400.000đ cho 2 đêm), còn S3 và S3-02 ghi giá chủ nhà 1.800.000đ. Hai giá chủ nhà khác nhau cho cùng căn và ngày.
   - S3 cho giá bán 2.200.000đ khi chọn +200k, S3-02 cho 2.600.000đ (cộng 800.000đ).
   - P11 ghi căn 2 và căn 3 là 1.400.000đ và 3.000.000đ (trùng giá chủ nhà ở S2) dù ghi "đã cộng giá", còn S5 ghi 1.600.000đ và 3.600.000đ.
   Phương án: sửa dữ liệu minh họa cho khớp một bộ số; hoặc chỉ ra bộ số nào là đúng.
2. "Số là giá đêm của bạn" trên lưới S1 (và S4) là giá bán đã cộng hay giá chủ nhà? Các số trên lưới (ví dụ 1,1tr, 1,3tr) không khớp giá chủ nhà ở S3 (900.000đ một đêm).
3. Chủ nhà tắt quyền "Giá từng đêm" cho sale thì S1, S2, S3 hiện gì? CLAUDE.md ghi server không gửi giá đi, nhưng chưa có màn cho trường hợp sale thấy lịch mà không thấy giá, và không biết "bạn bán" tính từ đâu.
4. Hai bộ chip mức cộng khác nhau: P10 có Không cộng, +200k, +300k, +400k, +500k, Tùy chọn; S3 có +0, +200k, +400k, +600k. Phương án: dùng chung một bộ; hoặc S3 hiển thị mức mặc định và nút "Tùy chọn".
5. Mẫu tin mặc định (P11) ghi "Anh chị ưng căn nào báo em giữ phòng nhé", trong khi luồng đặt phòng đã bỏ bước giữ phòng (YC4). Phương án: sửa câu chữ mẫu; hoặc giữ nếu sale vẫn hứa giữ ngoài app.
6. Số ảnh gửi mỗi lần. Căn có thể có tới 12 ảnh (YC3), còn S5 ghi "Gửi 6 ảnh qua Zalo". Cửa sổ chia sẻ của Zalo nhận tối đa 10 ảnh một lần. Căn có 12 ảnh thì sale gửi sao: chọn ảnh, chia hai lần, hay chỉ gửi 10 ảnh đầu. Thiết kế chưa vẽ chọn ảnh.
7. "Bán nhiều nhất" (sắp xếp) đếm theo gì: booking đã chấp nhận, doanh số hay số lần gửi khách.
8. Có giới hạn số căn chọn gửi khách không. Thiết kế chỉ vẽ 3 căn.
9. Độ tươi lịch: lịch cũ bao lâu thì cảnh báo hoặc ẩn "Trống" thành "?" Hiện chỉ có nhãn "cập nhật 2 giờ trước" và "hôm qua".
10. Sau khi sale gửi khách xong thì app có ghi nhận không (ví dụ nhãn "Đã gửi") và có đếm cho thống kê (YC7) không. Mini App không biết sale đã gửi thật hay chưa.
11. "Tìm gần đây" lưu ở đâu và tối đa bao nhiêu lần tìm. Bộ nhớ Native Storage tối đa 5 MB và có thể mất; lưu server hay máy?
12. Ranh giới nhóm. P10 và P11 nằm ở Cá nhân nhưng mình xếp vào YC5. Cần Tùng xác nhận.

## Các màn hình trong nhóm YC5
| Mã | Tên màn |
|---|---|
| S1 | Lịch phòng |
| S1-02 | Tìm phòng, ban đầu |
| S1-03 | Tìm phòng, đã chọn |
| S1-04 | Sắp xếp |
| S1-05 | Lịch phòng, xoay ngang |
| S2 | Kết quả, danh sách |
| S2-00 | Không có căn trống |
| S3 | Chi tiết căn |
| S4 | Kết quả, lịch tuần |
| S5 | Gửi cho khách |
| P10 | Mức cộng giá mặc định |
| P11 | Mẫu tin gửi khách |
