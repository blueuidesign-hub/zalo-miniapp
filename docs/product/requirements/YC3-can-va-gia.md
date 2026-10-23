---
id: YC3
tieu_de: Căn và giá
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC3 · Căn và giá

Nhóm này cho chủ nhà thêm căn, sửa thông tin và ảnh căn, rồi đặt giá cho từng căn hoặc nhiều căn cùng lúc. Giá đặt theo tháng, có giá riêng cho ngày lễ và dịp đặc biệt, và có thể sao chép từ căn này sang căn khác. Đây là giá chủ nhà. Sale chỉ thấy giá sau khi chủ nhà đặt. Tất cả nội dung dưới đây ở trạng thái đề xuất.

## YC3.1 · Danh sách căn
Mục đích: chủ nhà thấy mọi căn của mình, căn nào thiếu ảnh hoặc chưa có giá, và vào sửa hoặc đặt giá nhanh.
Màn hình: CN5, CN5-A4, CN5-A4b
Khi nào xảy ra: chủ nhà mở tab Căn.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Căn | Tiêu đề "Căn của tôi", số căn ("4 căn"), nút "Đặt giá nhiều căn", nút "Thêm căn" | ? | ? | ? |
| 2 | Xem một thẻ căn | Số ảnh, "Phòng 1509", dòng "2PN · 4 khách · view biển · ICON40", "Giá tuần này 900.000đ – 1.200.000đ", trạng thái ("Có khách đến 12/10" hoặc "Trống hôm nay ✓") | ? | ? | ? |
| 3 | Xem căn thiếu ảnh | Thẻ ghi "Chưa có ảnh", có gợi ý "Nên thêm ảnh: sale cần ít nhất 6 ảnh" | ? | ? | ? |
| 4 | Xem căn chưa có giá | Thẻ ghi "Chưa đặt giá" và nút "Đặt giá cho căn này"; căn vừa thêm có nhãn "Mới thêm" | ? | ? | ? |
| 5 | Chạm một thẻ căn | Mở sửa căn (CN5-02, xem YC3.3). Chưa nối trong canvas (?) | ? | ? | ? |
| 6 | Bấm "Đặt giá nhiều căn" | Mở CN6-05, xem YC3.6 | ? | ? | ? |
| 7 | Bấm "Thêm căn" | Mở CN5-A1, xem YC3.2 | ? | ? | ? |

Theo quy tắc: Giá tuần này; Ảnh căn.

Trạng thái màn:
- rỗng: chủ nhà chưa có căn thì thấy A4 (thuộc YC1.4)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.1-NT1 Khi chủ nhà có 4 căn, thì tiêu đề ghi "4 căn" và có đúng 4 thẻ.
- YC3.1-NT2 Khi căn có ít hơn 6 ảnh, thì thẻ hiện gợi ý thêm ảnh.
- YC3.1-NT3 Khi căn chưa đặt giá, thì thẻ ghi "Chưa đặt giá" và có nút "Đặt giá cho căn này".
- YC3.1-NT4 Khi căn đã đặt giá, thì thẻ ghi khoảng giá thấp nhất đến cao nhất của tuần này. Theo quy tắc: Giá tuần này.

## YC3.2 · Thêm căn
Mục đích: chủ nhà thêm một căn mới chỉ với mã căn và số phòng ngủ, phần còn lại thêm sau cũng được.
Màn hình: CN5-A1, CN5-A1b, CN5-A2, CN5-A3, CN5-A4, CN5-A4b
Khi nào xảy ra: chủ nhà bấm "Thêm căn" ở CN5, hoặc bấm "Thêm căn đầu tiên" ở A4 (YC1.4).

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở form | CN5-A1: ô "Mã căn (tên căn hộ) *", hàng chip "Số phòng ngủ *" (Studio, 1PN, 2PN, 3PN, 4PN+), mục Ảnh ("Bạn có thể thêm sau"), dòng "Thêm tòa nhà, mô tả gửi khách, view..." đang thu gọn | ? | ? | ? |
| 2 | Chưa điền đủ | Nút "Thêm căn" ở trạng thái chưa dùng được, kèm dòng "Còn thiếu: mã căn, số phòng ngủ" | ? | ? | ? |
| 3 | Điền mã căn và chọn số phòng ngủ | Hiện "Đủ thông tin. Ảnh, giá thêm sau cũng được." | ? | ? | ? |
| 4 | Bấm "Thêm căn" | Lưu căn, về CN5-A4 (một căn) hoặc CN5-A4b (nhiều căn): toast "Đã thêm phòng 2105", nút "Thêm căn khác", thẻ căn mới có nhãn "Mới thêm" và nút đặt giá | ? | ? | Thêm một căn vào tài khoản chủ nhà |
| 5 | Lưu lỗi | CN5-A3: dòng đầu "Chưa thêm được căn. Sửa 3 chỗ bên dưới." và lỗi ngay dưới từng ô: "Đã có căn 1509. Kiểm tra lại mã căn.", "Chọn số phòng ngủ", "1 ảnh chưa tải được. Bấm Thử lại hoặc xóa ảnh đó rồi thêm căn." | ? | ? | Không thêm căn |

Theo quy tắc: Căn tối thiểu; Mã căn không trùng.

Trạng thái màn:
- rỗng: CN5-A1 là form trống
- đang tải: CN5-A2, xem YC3.2.1
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế (liên quan chọn ảnh, xem câu hỏi mở 11)
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.2-NT1 Khi chưa có mã căn hoặc chưa chọn số phòng ngủ, thì nút "Thêm căn" không dùng được và có dòng liệt kê phần còn thiếu.
- YC3.2-NT2 Khi đã có mã căn và số phòng ngủ nhưng chưa có ảnh, giá, tòa nhà, thì vẫn thêm căn được.
- YC3.2-NT3 Khi mã căn trùng với một căn đã có của chủ nhà, thì hiện lỗi "Đã có căn <mã>" dưới ô mã căn và không thêm căn. Theo quy tắc: Mã căn không trùng.
- YC3.2-NT4 Khi thêm căn xong, thì thấy toast "Đã thêm phòng <mã>" và căn mới nằm trong danh sách với nhãn "Mới thêm".

### YC3.2.1 · Ảnh khi thêm căn
Màn hình: CN5-A1, CN5-A2, CN5-A3

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Bấm "Thêm ảnh" | Chọn nhiều ảnh cùng lúc ("Thêm ảnh · chọn nhiều ảnh cùng lúc") | ? | ? | ? |
| 2 | Đang tải | CN5-A2: tiêu đề "ẢNH (5)", dòng "Đang tải 1 ảnh…", ảnh đang tải ghi "Đang tải 60%", dòng "Đang tải 1 ảnh. Chờ tải xong mới thêm được căn." | ? | ? | Ảnh lưu lên server (?) |
| 3 | Ảnh đầu tiên | Có nhãn "Ảnh đại diện". Dòng ghi "Ảnh đầu tiên là ảnh đại diện · Tối đa 12 ảnh" | ? | ? | ? |
| 4 | Ảnh tải lỗi | CN5-A3: ảnh ghi "Tải lỗi" kèm nút "Thử lại"; có thể bấm ✕ để xóa ảnh đó | ? | ? | ? |

Theo quy tắc: Ảnh căn.

Trạng thái màn:
- rỗng: "Bạn có thể thêm sau"
- đang tải: CN5-A2
- lỗi mạng: chưa thiết kế (CN5-A3 chỉ vẽ ảnh tải lỗi)
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.2.1-NT1 Khi còn ảnh đang tải, thì nút "Thêm căn" không dùng được và có dòng báo chờ tải xong.
- YC3.2.1-NT2 Khi một ảnh tải lỗi, thì ảnh đó có nút "Thử lại" và nút xóa, và căn không được thêm cho tới khi ảnh được thử lại hoặc xóa.
- YC3.2.1-NT3 Khi đã có 12 ảnh, thì không thêm được ảnh nữa. Theo quy tắc: Ảnh căn.

### YC3.2.2 · Tòa nhà, loại view, mô tả
Màn hình: CN5-A1, CN5-A1b

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Bấm "Thêm tòa nhà, mô tả gửi khách, view..." | Mở rộng thêm: hàng chip "Tòa nhà" (ICON40, À La Carte, Sapphire, "+ Tòa khác"), hàng chip "Loại view" (Biển, Núi/Thành phố), ô "Mô tả gửi khách" ("Sale dùng đoạn này khi gửi thông tin căn cho khách."), nút "Thu gọn" | ? | ? | ? |
| 2 | Chọn "+ Tòa khác" | CN5-A1b: ô "Tên tòa nhà", danh sách tòa có sẵn (tên và khu vực), dòng "+ Thêm tòa mới <chữ đã gõ>", ghi chú "Chọn tòa có sẵn để sale lọc đúng tòa. Không thấy thì thêm tòa mới." | ? | ? | ? |
| 3 | Chọn một tòa trong danh sách hoặc thêm tòa mới | Tòa được chọn gắn vào căn | ? | ? | Gắn tòa vào căn; có thể tạo tòa mới (?) |

Trạng thái màn:
- rỗng: phần này thu gọn mặc định và không bắt buộc
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.2.2-NT1 Khi chủ nhà không mở phần này, thì vẫn thêm được căn.
- YC3.2.2-NT2 Khi chủ nhà gõ "Green" vào ô tên tòa, thì thấy các tòa có tên chứa "Green" và dòng thêm tòa mới.

## YC3.3 · Sửa thông tin căn
Mục đích: chủ nhà đổi thông tin, ảnh, thứ tự ảnh của một căn đã có.
Màn hình: CN5-02
Khi nào xảy ra: chủ nhà chạm một căn trong danh sách (cách vào chưa nối trong canvas, ?).

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở sửa căn | Tiêu đề "Sửa phòng 1509", hai tab "Thông tin" và "Giá". Tab Thông tin điền sẵn: mã căn, số phòng ngủ, ảnh, tòa nhà, loại view, mô tả gửi khách | ? | ? | ? |
| 2 | Bấm "Đổi thứ tự" ở mục ảnh | Chuyển chế độ đổi thứ tự ảnh. Ảnh số 1 là ảnh đại diện | ? | ? | ? |
| 3 | Bấm ✕ trên một ảnh | Xóa ảnh đó (có hỏi lại hay không: chưa vẽ, ?) | ? | ? | ? |
| 4 | Bấm "Thêm ảnh" | Như YC3.2.1 | ? | ? | ? |
| 5 | Bấm "Lưu thay đổi" | Lưu và quay lại. Kết quả chưa vẽ (?) | ? | ? | Cập nhật thông tin căn |
| 6 | Bấm tab "Giá" | Mở tab Giá của căn, xem YC3.4 | ? | ? | ? |

Theo quy tắc: Căn tối thiểu; Mã căn không trùng; Ảnh căn.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.3-NT1 Khi chủ nhà mở sửa một căn, thì các ô hiện đúng giá trị hiện có của căn.
- YC3.3-NT2 Khi chủ nhà đổi thứ tự ảnh và lưu, thì ảnh số 1 trở thành ảnh đại diện.
- YC3.3-NT3 Khi chủ nhà đổi mã căn thành mã của căn khác đã có, thì hiện lỗi trùng mã và không lưu.

## YC3.4 · Đặt giá theo tháng
Mục đích: chủ nhà đặt giá đêm cho một căn theo từng tháng, tách giá ngày thường và giá cuối tuần.
Màn hình: CN6, CN6-00, CN6-04, CN6-09
Khi nào xảy ra: chủ nhà mở tab Giá của một căn, hoặc bấm "Đặt giá cho căn này" ở thẻ căn.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Giá | Tiêu đề "Phòng 3402", tab "Thông tin" / "Giá". Mục "GIÁ THEO THÁNG" với "Năm 2026", 12 ô tháng; mỗi ô ghi khoảng giá (vd "800k–2,5tr") hoặc "Chưa đặt" | ? | ? | ? |
| 2 | Chạm một hoặc nhiều tháng | Dòng "Đang chọn: Tháng 11 – 12 (2 tháng)" | ? | ? | ? |
| 3 | Nhập giá | Hai ô: "Ngày thường (CN–T5)" và "Cuối tuần (T6, T7)" | ? | ? | ? |
| 4 | Bấm nút "Áp dụng cho Tháng 11 – 12" | Lưu giá cho các tháng đã chọn, toast "Đã áp dụng giá cho Tháng 11 – 12" (CN6-04) | ? | ? | Giá ngày thường và cuối tuần của các tháng đã chọn |
| 5 | Bấm "Năm 2026" | CN6-09: chọn "Đặt giá cho năm" gồm "Năm 2026 · Năm nay" và "Năm 2027 · Năm sau" | ? | ? | ? |
| 6 | Xem "Lịch giá tháng 10" | Lưới tháng, mỗi ngày ghi giá đêm (800k, 1,1tr, 1,3tr). Chú thích: Dịp đặc biệt, Ngày lễ, Có khách. Chuyển tháng bằng T09 / T11 | ? | ? | ? |
| 7 | Chạm một ngày trên lịch giá | Gợi ý "Chạm một ngày để đặt giá ngày lễ, dịp đặc biệt" mở YC3.5 | ? | ? | ? |
| 8 | Bấm "Sao chép giá sang căn khác" | Mở CN6-07, xem YC3.7 | ? | ? | ? |

Theo quy tắc: Giá hai loại đêm; Giá theo tháng và năm; Giá dịp thay giá tháng; Sale chỉ thấy giá sau khi đặt.

Trạng thái màn:
- rỗng: CN6-00 (căn chưa có giá): "Căn này chưa có giá. Chọn tháng, nhập giá ngày thường và cuối tuần rồi bấm Áp dụng. Sale chỉ thấy giá sau khi bạn đặt." Cả 12 tháng ghi "Chưa đặt"; mục giá ngày lễ ghi "Chưa có giá ngày lễ. Bấm "Đặt giá ngày lễ, dịp đặc biệt" để thêm, VD: Lễ 30/4 – 1/5."; mục dịp đặc biệt ghi "Chưa có dịp đặc biệt."
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.4-NT1 Khi chủ nhà chọn Tháng 11 và Tháng 12, nhập 800.000đ ngày thường và 1.100.000đ cuối tuần rồi bấm Áp dụng, thì cả hai tháng có giá đó cho các đêm tương ứng.
- YC3.4-NT2 Khi chưa chọn tháng nào, thì dòng ghi "Chưa chọn tháng nào. Chọn một tháng bên trên sau đó nhập giá." và không áp dụng được.
- YC3.4-NT3 Khi căn chưa đặt giá nào, thì thấy CN6-00 và 12 tháng đều ghi "Chưa đặt".
- YC3.4-NT4 Khi một đêm thuộc thứ 6 hoặc thứ 7, thì lịch giá hiện giá cuối tuần; các đêm còn lại hiện giá ngày thường. Theo quy tắc: Giá hai loại đêm.
- YC3.4-NT5 Khi chủ nhà đổi sang "Năm 2027", thì 12 ô tháng hiện giá của năm 2027.

## YC3.5 · Giá ngày lễ và dịp đặc biệt
Mục đích: chủ nhà đặt giá riêng cho một dải ngày, như Lễ 30/4 – 1/5 hay một lễ hội địa phương.
Màn hình: CN6-02, CN6-03
Khi nào xảy ra: chủ nhà bấm "Đặt giá ngày lễ, dịp đặc biệt" ở tab Giá, hoặc chạm một ngày trên lịch giá.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | Tiêu đề "Giá ngày lễ, dịp đặc biệt", tên phòng, hàng "Chọn nhanh ngày lễ" (Lễ 30/4 – 1/5, Quốc khánh 2/9, Tết Dương lịch, Tết Âm lịch). Ghi chú "Home247 đặt sẵn dải ngày nghỉ của từng dịp mỗi năm, gồm nghỉ bù và nối cuối tuần. Chọn xong vẫn sửa được ngày." | ? | Dải ngày lễ do Home247 giữ (?) | ? |
| 2 | Chạm một dịp lễ chọn nhanh | Điền sẵn "Từ ngày", "Đến ngày", tên dịp, dòng "4 ngày · T5 30/4 → CN 3/5" | ? | ? | ? |
| 3 | Sửa dải ngày | Lưới tuần tròn từ T2 đến CN hiện các ngày đã chọn; chạm một ô để nới dải ngày. Cuối tuần có màu riêng | ? | ? | ? |
| 4 | Nhập tên dịp và "Giá mỗi đêm (đ)" | Hai ô nhập | ? | ? | ? |
| 5 | Bật hoặc tắt "Là ngày lễ (hiện trong mục Giá ngày lễ)" | Bật thì dải này nằm trong mục "GIÁ NGÀY LỄ"; tắt thì nằm trong "DỊP ĐẶC BIỆT" | ? | ? | ? |
| 6 | Chọn quá 10 ngày | CN6-03: cảnh báo "Tối đa 10 ngày. Đang chọn 13 ngày, hãy rút ngắn ngày kết thúc." | ? | ? | ? |
| 7 | Bấm "Lưu giá" | Lưu dải ngày và giá. Kết quả chưa vẽ (?) | ? | ? | Thêm một mục giá ngày lễ hoặc dịp đặc biệt |

Theo quy tắc: Giá dịp thay giá tháng; Dải ngày lễ do Home247 đặt.

Trạng thái màn:
- rỗng: chưa thiết kế ô tên khi bỏ trống; CN6-03 ghi "Tên (không bắt buộc)"
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.5-NT1 Khi chủ nhà chạm "Lễ 30/4 – 1/5", thì các ô ngày điền sẵn dải do Home247 đặt cho năm đang chọn.
- YC3.5-NT2 Khi dải ngày dài hơn 10 ngày, thì hiện cảnh báo và không lưu được.
- YC3.5-NT3 Khi chủ nhà lưu một dải 24/10 – 25/10 giá 1.300.000đ với tắt "Là ngày lễ", thì dải đó hiện trong mục "DỊP ĐẶC BIỆT" và lịch giá hiện 1,3tr ở hai ngày đó.
- YC3.5-NT4 Khi chủ nhà lưu một dải với bật "Là ngày lễ", thì dải đó hiện trong mục "GIÁ NGÀY LỄ".

## YC3.6 · Đặt giá nhiều căn
Mục đích: chủ nhà đặt cùng một giá cho nhiều căn một lần, thay vì đặt từng căn.
Màn hình: CN6-05, CN6-06
Khi nào xảy ra: chủ nhà bấm "Đặt giá nhiều căn" ở CN5.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn chọn căn | CN6-05: "CHỌN CĂN · ĐÃ CHỌN 2/4", nút "Chọn tất cả", danh sách căn | ? | ? | ? |
| 2 | Chọn các căn | Nút dưới đáy "Đặt giá cho 2 căn" | ? | ? | ? |
| 3 | Bấm "Đặt giá cho 2 căn" | CN6-06: tiêu đề "Đặt giá · 2 căn", khối "CĂN ÁP DỤNG" kèm nút "Đổi căn", rồi đặt giá như YC3.4 (12 tháng, ngày thường, cuối tuần, Áp dụng) | ? | ? | Giá của mọi căn đã chọn |
| 4 | Bấm "Đặt giá ngày lễ, dịp đặc biệt" | Chưa vẽ cách đặt cho nhiều căn (?) | ? | ? | ? |

Theo quy tắc: Giá hai loại đêm; Giá theo tháng và năm.

Trạng thái màn:
- rỗng: chưa chọn căn nào chưa thiết kế
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.6-NT1 Khi chủ nhà chọn 2 trong 4 căn, thì nút dưới đáy ghi "Đặt giá cho 2 căn" và dòng đếm ghi "2/4".
- YC3.6-NT2 Khi chủ nhà bấm "Chọn tất cả", thì cả 4 căn được chọn.
- YC3.6-NT3 Khi chủ nhà áp dụng giá ở CN6-06, thì mọi căn đã chọn đều nhận giá đó cho các tháng đã chọn.

## YC3.7 · Sao chép giá sang căn khác
Mục đích: chủ nhà có nhiều căn giống nhau dùng lại giá đã đặt của một căn.
Màn hình: CN6-07, CN6-08
Khi nào xảy ra: chủ nhà bấm "Sao chép giá sang căn khác" ở cuối tab Giá.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | CN6-07: "TỪ CĂN" Phòng 3402, tóm tắt "Giá 7 tháng · 2 ngày lễ · 2 dịp đặc biệt" | ? | ? | ? |
| 2 | Chọn "SAO CHÉP GÌ" | Ba lựa chọn: Giá theo tháng, Giá ngày lễ, Dịp đặc biệt | ? | ? | ? |
| 3 | Chọn "SANG CĂN" | Danh sách căn khác, nút "Chọn tất cả", đếm "ĐÃ CHỌN 0" | ? | ? | ? |
| 4 | Chưa chọn căn | Cảnh báo "Giá đang có của căn được chọn sẽ được thay bằng giá của Phòng 3402."; nút ghi "Chọn căn để sao chép" và chưa dùng được | ? | ? | ? |
| 5 | Chọn căn và bấm sao chép | Về tab Giá, toast "Đã sao chép giá sang 2 căn" (CN6-08) | ? | ? | Giá đã chọn của căn đích bị thay bằng giá căn nguồn |

Theo quy tắc: Sao chép giá thay giá có sẵn.

Trạng thái màn:
- rỗng: chưa chọn căn đích, nút chưa dùng được
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.7-NT1 Khi chưa chọn căn đích, thì nút sao chép không dùng được và ghi "Chọn căn để sao chép".
- YC3.7-NT2 Khi chủ nhà chỉ chọn "Giá theo tháng", thì giá ngày lễ và dịp đặc biệt của căn đích không đổi.
- YC3.7-NT3 Khi sao chép xong sang 2 căn, thì thấy toast "Đã sao chép giá sang 2 căn".

## YC3.8 · Ngày tính giá cuối tuần
Mục đích: chủ nhà chọn những đêm nào tính giá cuối tuần, áp dụng cho mọi căn.
Màn hình: P6
Khi nào xảy ra: chủ nhà vào Cá nhân > "Ngày tính giá cuối tuần".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | "Chọn những đêm tính giá cuối tuần. Các đêm còn lại tính giá ngày thường." và hàng chip "Đêm cuối tuần" theo thứ | ? | ? | ? |
| 2 | Chọn các thứ | Ghi chú "Tính theo đêm ở. VD: nhận phòng T6, trả phòng CN là 2 đêm cuối tuần." | ? | ? | ? |
| 3 | Xem mẫu | Mục "Một tuần của phòng 1509" hiện giá từng ngày; ô xanh là giá cuối tuần. Ghi chú "Tên ô giá ở mục Giá của căn đổi theo lựa chọn này." | ? | ? | ? |
| 4 | Bấm "Lưu thay đổi" | Lưu. Kết quả chưa vẽ (?) | ? | ? | Tập các thứ tính giá cuối tuần của tài khoản |

Theo quy tắc: Giá hai loại đêm.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC3.8-NT1 Khi chủ nhà chọn T6 và T7 rồi lưu, thì ô giá ở tab Giá ghi "Cuối tuần (T6, T7)".
- YC3.8-NT2 Khi chủ nhà chọn T7 và CN rồi lưu, thì ô giá ở tab Giá ghi tên theo hai thứ đó và ô "Ngày thường" ghi các thứ còn lại.
- YC3.8-NT3 Khi khách nhận phòng T6 và trả phòng CN, thì hai đêm đều tính giá cuối tuần với lựa chọn T6, T7.

## Quy tắc nghiệp vụ phát hiện
| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Căn tối thiểu | Một căn chỉ cần mã căn và số phòng ngủ. Ảnh, giá, tòa nhà, loại view, mô tả thêm sau cũng được. Tên nhà mặt đất đặt tự do | YC3.2, YC3.3 | "Greenbay", "Phòng 1509" |
| Mã căn không trùng | Không thêm hai căn cùng mã. Chưa rõ phạm vi (trong tài khoản hay toàn hệ thống) | YC3.2, YC3.3 | "Đã có căn 1509" |
| Ảnh căn | Tối đa 12 ảnh. Ảnh đầu tiên là ảnh đại diện. Nên có ít nhất 6 ảnh vì sale cần. Còn ảnh đang tải hoặc tải lỗi thì chưa thêm căn được | YC3.1, YC3.2.1, YC3.3 | 12 ảnh, 6 ảnh |
| Giá tuần này | Thẻ căn ghi khoảng từ giá đêm thấp nhất đến cao nhất trong tuần này | YC3.1 | 900.000đ – 1.200.000đ |
| Giá hai loại đêm | Mỗi tháng có hai giá: ngày thường (CN đến T5) và cuối tuần (T6, T7). Các thứ tính cuối tuần chọn ở Cá nhân và áp dụng cho mọi căn. Tính theo đêm ở: đêm nhận phòng T6 là đêm cuối tuần | YC3.4, YC3.6, YC3.8 | Nhận T6, trả CN là 2 đêm cuối tuần |
| Giá theo tháng và năm | Giá đặt theo tháng, chọn được nhiều tháng một lần, cho năm nay hoặc năm sau | YC3.4, YC3.6 | Tháng 11 – 12 cùng 800k / 1,1tr |
| Giá dịp thay giá tháng | Đêm nằm trong dải ngày lễ hoặc dịp đặc biệt dùng giá của dải đó, không dùng giá tháng | YC3.4, YC3.5 | 24/10 – 25/10 giá 1.300.000đ, lịch giá hiện 1,3tr |
| Dải ngày lễ do Home247 đặt | Home247 đặt sẵn dải nghỉ của từng dịp mỗi năm (gồm nghỉ bù, nối cuối tuần). Chủ nhà sửa được dải. Một dải tối đa 10 ngày | YC3.5 | 30/4 → 3/5 là 4 ngày; 13 ngày là quá |
| Ngày lễ khác dịp đặc biệt | Công tắc "Là ngày lễ" quyết định dải nằm ở mục "GIÁ NGÀY LỄ" hay "DỊP ĐẶC BIỆT" | YC3.5 | Lễ 30/4 – 1/5 là ngày lễ; Lễ hội Carnaval là dịp đặc biệt |
| Sao chép giá thay giá có sẵn | Sao chép thay phần giá đang có của căn đích bằng giá căn nguồn. Chủ nhà chọn sao chép những phần nào | YC3.7 | Không |
| Sale chỉ thấy giá sau khi đặt | Căn chưa đặt giá thì sale chưa thấy giá. Sale thấy giá hay không còn theo quyền "Giá từng đêm" (xem YC1, quy tắc Quyền sale được xem) | YC3.4 | Không |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Danh sách căn, mã căn, số phòng ngủ | Thấy và sửa | Thấy căn của chủ nhà đã đồng ý | ? | ? | Thông tin căn sale gửi (YC5) |
| Ảnh, mô tả gửi khách, tòa nhà, loại view | Thấy và sửa | Thấy, dùng khi gửi khách | ? | ? | Phần sale chọn gửi |
| Giá đêm (tháng, ngày lễ, dịp đặc biệt) | Thấy và sửa | Thấy theo quyền "Giá từng đêm" và chỉ sau khi chủ nhà đặt giá | ? | ? | Không thấy giá chủ nhà |
| Ngày tính giá cuối tuần | Thấy và sửa | ? | ? | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. Đổi giá khi căn đã có booking: booking cũ giữ giá lúc đặt hay đổi theo giá mới? Thiết kế không nói. Phương án:
   - a) Booking cũ giữ nguyên số tiền đã ghi.
   - b) Booking cũ đổi theo giá mới.
   - c) Hỏi chủ nhà mỗi lần.
2. Ghi đè giá đang có. CN6-07 báo "Giá đang có … sẽ được thay", nhưng "Áp dụng" ở CN6 và CN6-06 không nói gì khi tháng đã có giá. Phương án: ghi đè và báo bằng dòng chữ; hoặc hỏi xác nhận khi có tháng đã đặt.
3. Toast "Đã áp dụng giá cho Tháng 11 – 12" (CN6-04, CN6-08) nhưng cùng màn Tháng 11 và Tháng 12 còn ghi "Chưa đặt", và CN6-07 ghi "Giá 7 tháng". Phương án: sửa dữ liệu minh họa của CN6-04 và CN6-08; hoặc toast ghi sai.
4. Thứ tự ưu tiên khi ngày lễ, dịp đặc biệt và giá tháng chồng nhau, hoặc hai dịp trùng ngày. Chỉ vẽ trường hợp dịp thay giá tháng. Phương án: dịp ghi sau cùng thắng; ngày lễ thắng dịp đặc biệt; hoặc báo lỗi khi chồng nhau.
5. Ngày tính giá cuối tuần (P6) là cài đặt chung cho mọi căn, nằm trong Cá nhân. Đổi lại thì giá đã nhập đổi nghĩa (giá cuối tuần đang áp cho T6, T7 sẽ áp cho thứ khác). Phương án: cài đặt chung nhưng cảnh báo khi đổi; hoặc cho đặt riêng từng căn.
6. Số khách tối đa. Thẻ CN5 ghi "4 khách" và "2 khách", nhưng form thêm và sửa căn không có ô nhập. Phương án: thêm ô số khách; hoặc suy ra từ số phòng ngủ; hoặc bỏ khỏi thẻ.
7. Xóa hoặc ẩn một căn chưa có màn. Căn đang có booking thì xử lý ra sao. Phương án: cho xóa khi không còn booking; chỉ cho ẩn; hoặc không cho xóa.
8. Danh sách tòa nhà. CN5-A1b có danh sách sẵn (tên và khu vực) và "Thêm tòa mới". Chưa rõ danh sách chung cho mọi chủ nhà hay riêng từng chủ nhà, ai duyệt tòa mới, khu vực nhập thế nào. Liên quan lọc theo tòa của sale (YC5). Phương án: danh sách chung do Home247 giữ; danh sách riêng từng chủ nhà; hoặc chung có duyệt.
9. Mã căn trùng trong phạm vi nào: trong tài khoản chủ nhà hay toàn hệ thống. Hai chủ nhà khác nhau có cùng mã "1509" ở hai tòa khác nhau thì sao.
10. Nhãn trạng thái thẻ căn chưa rõ nghĩa: "Có khách đến 12/10" (đang ở, ngày trả 12/10) khác "Có khách 14/10" (ngày bắt đầu?). Căn chưa đặt giá vẫn ghi "Trống hôm nay ✓". Cần quy tắc ghi nhãn.
11. Ảnh: định dạng, kích thước tối đa, nén, nguồn chọn (thư viện máy hay ảnh Zalo), và nơi lưu ảnh. Quyền truy cập ảnh có hiện hộp thoại Zalo không. Thiết kế chỉ vẽ trạng thái đang tải và lỗi.
12. Loại view chỉ vẽ "Biển" và "Núi/Thành phố". Chọn được nhiều loại không, danh sách đầy đủ gồm gì.
13. Các nút chưa nối: chạm thẻ căn ở CN5 mở gì; "Lưu thay đổi" ở CN5-02 và "Lưu giá" ở CN6-02 đi đâu; "Đặt giá ngày lễ, dịp đặc biệt" ở CN6-06 (nhiều căn) mở gì.
14. P6 (Ngày tính giá cuối tuần) thuộc YC3 hay YC9 Quản trị? Mình xếp vào YC3.8. Cần Tùng xác nhận.

## Các màn hình trong nhóm YC3
| Mã | Tên màn |
|---|---|
| CN5 | Danh sách căn |
| CN5-02 | Sửa thông tin căn |
| CN5-A1 | Thêm căn · trống |
| CN5-A1b | Thêm căn · chọn tòa khác |
| CN5-A2 | Thêm căn · đang nhập |
| CN5-A3 | Thêm căn · lỗi khi lưu |
| CN5-A4 | Đã thêm căn đầu tiên |
| CN5-A4b | Đã thêm căn · có nhiều căn |
| CN6 | Tab Giá |
| CN6-00 | Chưa đặt giá |
| CN6-02 | Giá ngày lễ, dịp đặc biệt |
| CN6-03 | Chọn quá 10 ngày |
| CN6-04 | Áp dụng giá xong |
| CN6-05 | Đặt giá nhiều căn: chọn căn |
| CN6-06 | Đặt giá nhiều căn |
| CN6-07 | Sao chép giá sang căn khác |
| CN6-08 | Sao chép giá xong |
| CN6-09 | Chọn năm |
| P6 | Ngày tính giá cuối tuần |
