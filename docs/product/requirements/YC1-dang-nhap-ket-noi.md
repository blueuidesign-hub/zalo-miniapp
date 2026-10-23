---
id: YC1
tieu_de: Đăng nhập, vai trò, kết nối chủ nhà và sale
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC1 · Đăng nhập, vai trò, kết nối chủ nhà và sale

Nhóm này cho người dùng vào app bằng Zalo, chọn vai trò chủ nhà hoặc sale, rồi nối chủ nhà với sale để sale xem được lịch phòng. Kết nối đi qua tin nhắn Zalo và link, không có hộp thư riêng trong app. Số điện thoại chỉ được xin ở lúc bắt đầu kết nối. Tất cả nội dung dưới đây ở trạng thái đề xuất.

## YC1.1 · Đăng nhập bằng Zalo
Mục đích: người dùng mới cần vào app bằng tài khoản Zalo, không phải tạo tài khoản riêng.
Màn hình: A1
Khi nào xảy ra: người dùng mở app lần đầu, đang ở màn chào mừng.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở app | Hiện A1: tên app, 3 dòng giá trị, nút "Bắt đầu với Zalo", dòng "Bằng việc tiếp tục, bạn đồng ý với Điều khoản và Chính sách quyền riêng tư" | ? | ? | ? |
| 2 | Bấm "Bắt đầu với Zalo" | Chuyển sang A3, không hỏi số điện thoại | ? | ? | ? |

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: xem YC1.3

Tiêu chí nghiệm thu:
- YC1.1-NT1 Khi người dùng bấm "Bắt đầu với Zalo" ở A1, thì app chuyển sang A3 và không hiện popup hay hộp thoại xin số điện thoại.
- YC1.1-NT2 Khi A1 hiện ra, thì thấy dòng điều khoản có hai link "Điều khoản" và "Chính sách quyền riêng tư". Theo quy tắc: Điều khoản khi tiếp tục.

## YC1.2 · Chọn vai trò
Mục đích: người dùng chọn mình là chủ nhà hay sale để app đưa đúng màn đầu tiên.
Màn hình: A3
Khi nào xảy ra: ngay sau A1, trước khi có dữ liệu nào.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Xem hai thẻ | "Tôi là chủ nhà: Ghi lịch phòng, đặt giá, mời sale xem lịch." và "Tôi là sale: Tìm phòng trống, gửi ảnh và giá cho khách." | ? | ? | ? |
| 2 | Chạm một thẻ | Thẻ được chọn đổi màu nền, viền và hiện dấu tích | ? | ? | ? |
| 3 | Bấm "Tiếp tục" | Chủ nhà sang A4, sale sang A5 | ? | ? | Vai trò của tài khoản (?) |

Trạng thái màn:
- rỗng: chưa thiết kế nút "Tiếp tục" khi chưa chọn thẻ nào
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: bỏ qua màn này, xem YC1.3

Tiêu chí nghiệm thu:
- YC1.2-NT1 Khi người dùng chọn "Tôi là chủ nhà" rồi bấm "Tiếp tục", thì app mở A4.
- YC1.2-NT2 Khi người dùng chọn "Tôi là sale" rồi bấm "Tiếp tục", thì app mở A5.
- YC1.2-NT3 Khi người dùng chạm một thẻ, thì thẻ đó hiện trạng thái đã chọn và thẻ còn lại không được chọn.

## YC1.3 · Mở app từ link mời của chủ nhà
Mục đích: người nhận link từ chủ nhà vào thẳng việc xem lịch, không phải chọn vai trò.
Màn hình: A1-link, A9
Khi nào xảy ra: người dùng bấm link mời trong tin nhắn Zalo của chủ nhà.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Bấm link trong tin Zalo | Hiện A1-link: như A1, thêm thẻ "Anh Tuấn mời bạn xem lịch 6 căn / Đăng nhập để xem lịch và giá mới nhất" | ? | Mở Mini App từ link | ? |
| 2 | Bấm "Bắt đầu với Zalo" | Bỏ qua A3, chuyển sang A9 | ? | ? | ? |

Trạng thái màn:
- rỗng: chưa thiết kế
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: đây chính là trạng thái này; link hết hạn hoặc sai chưa thiết kế

Tiêu chí nghiệm thu:
- YC1.3-NT1 Khi mở app từ link mời, thì A1-link hiện tên chủ nhà và số căn được mời.
- YC1.3-NT2 Khi bấm "Bắt đầu với Zalo" ở A1-link, thì app không hiện A3.

## YC1.4 · Màn đầu tiên khi chưa có dữ liệu
Mục đích: chủ nhà mới và sale mới biết bước tiếp theo để có dữ liệu.
Màn hình: A4, A5
Khi nào xảy ra: ngay sau YC1.2, khi tài khoản chưa có căn hoặc chưa có nguồn phòng.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Chủ nhà vào A4 | "Chưa có căn nào", nút "Thêm căn đầu tiên", danh sách 3 bước (Thêm căn và ảnh, Đặt giá, Mời sale xem lịch) và mẹo sổ lịch cũ | ? | ? | ? |
| 2 | Chủ nhà bấm "Thêm căn đầu tiên" hoặc dòng "Thêm căn và ảnh" | Mở CN5-A1 | ? | ? | ? |
| 3 | Sale vào A5 | "Chưa có nguồn phòng", nút "Gửi tin nhắn xin lịch đến chủ nhà", nút "Thêm căn thủ công", ghi chú "Căn của chủ nhà chưa dùng app, hoặc căn của chính bạn", dòng "Chủ nhà đã gửi link? Mở link trong tin nhắn Zalo của chủ nhà, lịch sẽ hiện ở đây" | ? | ? | ? |
| 4 | Sale bấm "Gửi tin nhắn xin lịch đến chủ nhà" | Mở A6, xem YC1.6 | ? | ? | ? |
| 5 | Sale bấm "Thêm căn thủ công" | Mở S6-02 (thuộc YC6) | ? | ? | ? |

Trạng thái màn:
- rỗng: đây là trạng thái rỗng của hai tab
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: chưa thiết kế

Tiêu chí nghiệm thu:
- YC1.4-NT1 Khi chủ nhà chưa có căn và vào tab Lịch, thì thấy A4 với nút "Thêm căn đầu tiên".
- YC1.4-NT2 Khi sale chưa có nguồn phòng và vào tab Tìm phòng, thì thấy A5 với hai nút "Gửi tin nhắn xin lịch đến chủ nhà" và "Thêm căn thủ công".
- YC1.4-NT3 Khi sale bấm "Gửi tin nhắn xin lịch đến chủ nhà", thì app mở A6.

## YC1.5 · Xin số điện thoại khi bắt đầu kết nối
Mục đích: app lấy số điện thoại từ Zalo để chủ nhà và sale nhận ra nhau, mà không ép người dùng cấp quyền ngay lúc vào app.
Màn hình: A6-P1, A6-P2, A8-P1, A8-P2, CN10-P1, CN10-P2, P2
Khi nào xảy ra: sale bấm "Gửi qua Zalo" ở A6; chủ nhà bấm "Đồng ý cho xem lịch" ở A8; chủ nhà bấm "Gửi lịch qua Zalo" ở CN10. Theo quy tắc: Xin số điện thoại đúng lúc.

### YC1.5.1 · Popup giải thích của app
Màn hình: A6-P1 (sale), A8-P1 (chủ nhà), CN10-P1 (chủ nhà)

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Bấm nút ở màn gốc | Hiện popup dưới đáy: biểu tượng điện thoại, tiêu đề "Chia sẻ số điện thoại với chủ nhà" (sale) hoặc "với sale" (chủ nhà), 1 đoạn lý do, khung "Zalo sẽ hiện hộp thoại. Bật Số điện thoại rồi bấm Cho phép." | ? | ? | ? |
| 2 | Bấm "Đồng ý, tiếp tục" | Sang hộp thoại Zalo (YC1.5.2) | ? | ? | ? |
| 3 | Bấm "Để sau" | Làm tiếp việc gốc mà không có số: A6 sang A7, A8 sang A9, CN10 sang CN10-02. Dòng ghi chú: bên kia chỉ thấy tên Zalo | ? | ? | ? |

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: xem YC1.5.2
- quay lại từ nền: chưa thiết kế
- mở từ link: A8-P1 mở từ link xin lịch của sale; các màn khác không áp dụng

Tiêu chí nghiệm thu:
- YC1.5.1-NT1 Khi hồ sơ chưa có số điện thoại và người dùng bấm nút ở A6, A8 hoặc CN10, thì popup giải thích hiện trước hộp thoại của Zalo.
- YC1.5.1-NT2 Khi hồ sơ đã có số điện thoại, thì popup không hiện và việc gốc chạy tiếp.
- YC1.5.1-NT3 Khi người dùng bấm "Để sau", thì việc gốc vẫn hoàn tất và hồ sơ vẫn chưa có số.

### YC1.5.2 · Hộp thoại cấp quyền của Zalo
Màn hình: A6-P2, A8-P2, CN10-P2 (cả ba đều là hình minh họa, có nhãn "Hộp thoại do Zalo hiển thị, app không tự vẽ")

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Bấm "Đồng ý, tiếp tục" ở popup | Chờ | ? | Hiện hộp thoại: "Lịch phòng Hạ Long muốn sử dụng thông tin của bạn", dòng Số điện thoại kèm công tắc, nút "Cho phép" | ? |
| 2 | Bật công tắc, bấm "Cho phép" | Nhận số, làm tiếp việc gốc: A6-P2 sang A7, A8-P2 sang A9, CN10-P2 sang CN10-02 | ? | Trả số cho app | Số điện thoại lưu vào hồ sơ |

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: chưa thiết kế (không có nút từ chối trong hình minh họa)
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC1.5.2-NT1 Khi người dùng bật Số điện thoại và bấm "Cho phép", thì app làm tiếp việc gốc và số xuất hiện ở P2.
- YC1.5.2-NT2 Khi người dùng đã cho phép một lần, thì các lần sau không hiện lại popup (A6-P2 ghi "Lần sau không hỏi lại").

### YC1.5.3 · Số điện thoại hiện trong hồ sơ
Màn hình: P2

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở Cá nhân > Thông tin cá nhân | Ô Số điện thoại chỉ xem, có nhãn "Từ Zalo ✓" | ? | ? | ? |
| 2 | Chưa có số | Ô ghi "Chưa có · Zalo sẽ hỏi khi bạn kết nối lần đầu" | ? | ? | ? |

Trạng thái màn:
- rỗng: ô ghi "Chưa có · Zalo sẽ hỏi khi bạn kết nối lần đầu"
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: dùng chung dòng "Chưa có"; chưa có nút xin lại
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC1.5.3-NT1 Khi hồ sơ có số lấy từ Zalo, thì P2 hiện số đó ở dạng chỉ xem. Theo quy tắc: Số điện thoại từ Zalo, chỉ xem.
- YC1.5.3-NT2 Khi hồ sơ chưa có số, thì P2 hiện dòng "Chưa có · Zalo sẽ hỏi khi bạn kết nối lần đầu".

## YC1.6 · Sale xin chủ nhà cho xem lịch
Mục đích: sale gửi tin Zalo cho chủ nhà kèm link, để chủ nhà cho xem lịch phòng.
Màn hình: A6, A7
Khi nào xảy ra: sale ở A5 bấm "Gửi tin nhắn xin lịch đến chủ nhà", hoặc bấm "Gửi link cho chủ nhà khác" ở A7.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Vào A6 | Hiện nội dung tin sẵn ("Chào anh/chị, em là Hùng, sale phòng ở Hạ Long…"), link xin lịch của sale, 3 bước "Sau khi gửi" | ? | ? | ? |
| 2 | Bấm "Gửi qua Zalo" | Chạy YC1.5 nếu hồ sơ chưa có số, rồi mở cửa sổ gửi của Zalo | ? | Cửa sổ gửi tin của Zalo mở ra | Số lần gửi tăng (?) |
| 3 | Gửi xong, về app | Hiện A7: "Đang chờ chủ nhà đồng ý", lần gửi gần nhất, hai số "3 lần đã gửi qua Zalo" và "0 chủ nhà đã đồng ý" | ? | ? | ? |
| 4 | Bấm "Sao chép tin nhắn" | Chưa vẽ kết quả (?) | ? | ? | ? |
| 5 | Ở A7, bấm "Gửi link cho chủ nhà khác" hoặc "Thêm căn tự nhập" | Chưa vẽ màn đích | ? | ? | ? |

Theo quy tắc: Xin lịch chỉ qua tin Zalo; Không biết gửi cho ai; Một link xin lịch nhiều chủ nhà.

Trạng thái màn:
- rỗng: A7 chưa có lần gửi nào chưa thiết kế
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: sang A7 không có số, xem YC1.5.1
- quay lại từ nền: A7 là màn hiện khi quay lại từ cửa sổ Zalo; việc cập nhật số đếm khi quay lại chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC1.6-NT1 Khi sale bấm "Gửi qua Zalo" ở A6, thì Zalo mở cửa sổ gửi tin có sẵn nội dung và link.
- YC1.6-NT2 Khi sale ở A7, thì chỉ thấy hai con số (lần đã gửi, chủ nhà đã đồng ý) và không có danh sách tên chủ nhà.
- YC1.6-NT3 Khi một chủ nhà đồng ý, thì số "chủ nhà đã đồng ý" ở A7 tăng thêm 1.

## YC1.7 · Chủ nhà duyệt lời mời xem lịch
Mục đích: chủ nhà quyết định cho một sale xem lịch, và chọn sale được thấy những gì.
Màn hình: CN7-03, A8, A8-P1, A8-P2
Khi nào xảy ra: chủ nhà nhận tin Zalo xin xem lịch từ sale và bấm vào thẻ trong tin.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tin Zalo của sale | (chưa vào app) | ? | Khung chat Zalo hiện tin và thẻ "Sale Lan xin xem lịch phòng" với nút "Mở và trả lời" (CN7-03) | ? |
| 2 | Bấm thẻ | Hiện A8: tên và số điện thoại sale, 3 quyền có công tắc (Giá từng đêm, Tình trạng cọc, Booking của sale khác), dòng "Không bao giờ thấy tên, số điện thoại khách và doanh thu", ghi chú "Chưa có tài khoản? Bấm Đồng ý để đăng nhập bằng Zalo, sau đó thêm căn" | ? | Mở Mini App từ thẻ | ? |
| 3 | Bấm "Đồng ý cho xem lịch" | Chạy YC1.5 nếu hồ sơ chưa có số; kết nối hoàn tất | ? | ? | Sale được xem lịch theo quyền đã chọn (?) |
| 4 | Bấm "Từ chối" | Chưa vẽ màn đích | ? | ? | ? |
| 5 | Sau khi đồng ý | Sale nhận thông báo (YC1.10); chủ nhà thấy sale mới trong CN7 | ? | ? | Sale chuyển sang nhóm Đã kết nối (?) |

Theo quy tắc: Quyền sale được xem; Xin lịch chỉ qua tin Zalo; Nhận ra nhau bằng số điện thoại.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: xem YC1.5.1
- quay lại từ nền: chưa thiết kế
- mở từ link: A8 chính là trạng thái mở từ link; link hết hạn hoặc sale đã bị ngừng chưa thiết kế

Tiêu chí nghiệm thu:
- YC1.7-NT1 Khi chủ nhà bấm thẻ trong tin Zalo của sale, thì app mở A8 với đúng tên và số điện thoại của sale đó.
- YC1.7-NT2 Khi chủ nhà tắt một quyền ở A8 rồi bấm "Đồng ý cho xem lịch", thì sale không thấy dữ liệu của quyền đó.
- YC1.7-NT3 Khi chủ nhà bấm "Đồng ý cho xem lịch", thì sale xuất hiện ở CN7.

## YC1.8 · Chủ nhà chủ động gửi lịch cho sale
Mục đích: chủ nhà gửi link xem lịch của các căn đã chọn cho sale, không chờ sale xin.
Màn hình: CN10, CN10-P1, CN10-P2, CN10-02
Khi nào xảy ra: chủ nhà ở màn Lịch, bấm nút "Gửi lịch cho sale".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Vào CN10 | Mô tả "Sale nhận link xem lịch trống/kín và giá của các căn đã chọn. Không thấy tên khách và tiền cọc" | ? | ? | ? |
| 2 | Chọn căn | "Bước 1: Chọn căn" với các lựa chọn và nút chọn tất cả | ? | ? | ? |
| 3 | Chọn sale | "Bước 2: Chọn sale để chia sẻ lịch", chọn từ sale đã lưu trong tab Sale | ? | ? | ? |
| 4 | Bấm "Gửi lịch qua Zalo" | Chạy YC1.5 nếu hồ sơ chưa có số; mở Zalo | ? | Mở sẵn tin kèm link cho từng sale đã chọn; nếu không chọn ai thì mở cửa sổ chia sẻ để chọn người nhận | ? |
| 5 | Về app | Hiện CN10-02: trang Lịch với toast "Đã gửi lịch thành công" | ? | ? | ? |

Theo quy tắc: Quyền sale được xem; Không biết gửi cho ai.

Trạng thái màn:
- rỗng: chưa có sale đã lưu chưa thiết kế
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: xem YC1.5.1
- quay lại từ nền: CN10-02 hiện khi về app; trường hợp người dùng đóng cửa sổ Zalo mà không gửi chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC1.8-NT1 Khi chủ nhà chọn 2 sale và bấm "Gửi lịch qua Zalo", thì Zalo mở tin có sẵn link cho từng sale đã chọn.
- YC1.8-NT2 Khi chủ nhà không chọn sale nào và bấm gửi, thì Zalo mở cửa sổ chia sẻ để chọn người nhận.
- YC1.8-NT3 Khi chủ nhà về app sau khi gửi, thì thấy CN10-02 với toast ở vị trí toast chuẩn.

## YC1.9 · Chủ nhà quản lý danh sách sale
Mục đích: chủ nhà thấy ai đã kết nối, nhắc người chưa mở link, thêm sale chưa dùng app, và ngừng cho một sale xem lịch.
Màn hình: CN7, CN7-00, CN7-04, CN7-05, S9
Khi nào xảy ra: chủ nhà mở tab Sale.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở tab Sale | CN7: nút "Gửi link mời qua Zalo", nút "Sao chép link", nhóm "Đã kết nối · 3" (tên, trạng thái, số tiền), nhóm "Chưa kết nối · 1" | ? | ? | ? |
| 2 | Chưa có sale nào | CN7-00: "Chưa có sale nào xem lịch", cùng hai nút gửi link, khung "Sale sẽ thấy: Phòng trống hay đã đặt; Giá từng đêm (bạn tắt được); Không thấy tên, số điện thoại khách và doanh thu" | ? | ? | ? |
| 3 | Bấm "Nhắc lại" ở sale chưa kết nối | Chưa vẽ kết quả (?) | ? | ? | ? |
| 4 | Bấm nút "Thêm sale" | CN7-05: ô Tên sale *, Số điện thoại *, nút "Lưu sale" | ? | ? | Thêm sale vào nhóm Chưa kết nối |
| 5 | Bấm một sale đã kết nối | CN7-04: tên, số điện thoại, ngày kết nối, nút "Gọi", danh sách booking của sale (trạng thái, số tiền) | ? | Gọi mở ứng dụng gọi (?) | ? |
| 6 | Bấm "Ngừng cho xem lịch" | Hỏi xác nhận "Xác nhận ngừng cho Sale Hùng xem? Booking cũ vẫn giữ. Sale không thấy lịch của bạn nữa." | ? | ? | Sale mất quyền xem lịch |

Theo quy tắc: Nhóm kết nối; Ngừng cho xem; Quyền sale được xem.

Trạng thái màn:
- rỗng: CN7-00
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC1.9-NT1 Khi chủ nhà thêm sale ở CN7-05 với tên và số điện thoại, thì sale đó hiện trong nhóm "Chưa kết nối" của CN7.
- YC1.9-NT2 Khi chủ nhà xác nhận "Ngừng cho xem lịch", thì sale đó không còn thấy lịch và các booking cũ của sale vẫn còn.
- YC1.9-NT3 Khi chủ nhà chưa có sale nào, thì tab Sale hiện CN7-00.

## YC1.10 · Thông báo kết quả kết nối cho sale
Mục đích: sale biết ngay khi chủ nhà đồng ý, mà không có hộp thư xin lịch riêng.
Màn hình: A9, A9-02, P13
Khi nào xảy ra: chủ nhà bấm "Đồng ý cho xem lịch" khi sale đang mở app, hoặc sale mở lại thông báo sau đó.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Sale đang dùng app | Hiện toast đầu màn: "Chị Hoa đã đồng ý cho bạn xem lịch / ICON40 1509 và Sapphire 1103 đã vào Nguồn phòng", nút "Xem" (A9) | ? | ? | Lịch của chủ nhà vào Nguồn phòng |
| 2 | Nhiều chủ nhà đồng ý gần nhau | Gom một toast: "3 chủ nhà đã đồng ý cho bạn xem lịch / Chị Hoa, Anh Tuấn và Chú Bình · 7 căn mới trong Nguồn phòng", nút "Xem" (A9-02) | ? | ? | ? |
| 3 | Sale mở Cá nhân > Thông báo | P13: "2 chưa đọc", nút "Đánh dấu đã đọc", nhóm Hôm nay và Trước đó, mỗi sự kiện một dòng (dòng đồng ý nằm trong nhóm này) | ? | ? | Trạng thái đã đọc |

Theo quy tắc: Gom thông báo.

Trạng thái màn:
- rỗng: P13 chưa có thông báo nào chưa thiết kế
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: sale không mở app lúc chủ nhà đồng ý thì thông báo ra sao chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC1.10-NT1 Khi một chủ nhà đồng ý lúc sale đang mở app, thì toast hiện đầu màn với tên chủ nhà và số căn mới.
- YC1.10-NT2 Khi nhiều chủ nhà đồng ý gần nhau, thì chỉ hiện một toast và P13 có một dòng gom.
- YC1.10-NT3 Khi sale mở P13, thì số chưa đọc ở nhãn "2 chưa đọc" khớp với số dòng chưa đọc.

## YC1.11 · Liên kết Zalo và đăng xuất
Mục đích: người dùng thấy tài khoản Zalo đang liên kết và thoát khỏi app khi cần.
Màn hình: P1, P2, P4 (chỉ các dòng liên quan)
Khi nào xảy ra: người dùng mở tab Cá nhân.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở Cá nhân | Dòng "Đăng nhập bằng Zalo · Đã liên kết" trong mục Tài khoản | ? | ? | ? |
| 2 | Mở Thông tin cá nhân | P2: dòng "Đăng nhập Zalo · Nguyễn Hoa / Dùng để đăng nhập trên máy khác / Đã liên kết ✓" | ? | ? | ? |
| 3 | Bấm "Đăng xuất" | Hỏi lại "Xác nhận đăng xuất? Dữ liệu vẫn giữ nguyên. Lần sau đăng nhập lại bằng Zalo." Bấm lần hai mới đăng xuất | ? | ? | Phiên đăng nhập kết thúc (?) |

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC1.11-NT1 Khi người dùng bấm "Đăng xuất" lần đầu, thì app hỏi xác nhận và chưa đăng xuất.
- YC1.11-NT2 Khi người dùng xác nhận đăng xuất, thì app thoát phiên và dữ liệu của tài khoản vẫn còn khi đăng nhập lại bằng Zalo.

## Quy tắc nghiệp vụ phát hiện
| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Điều khoản khi tiếp tục | Bấm "Bắt đầu với Zalo" nghĩa là đồng ý Điều khoản và Chính sách quyền riêng tư | YC1.1, YC1.3 | Không |
| Xin số điện thoại đúng lúc | Không xin số lúc đăng nhập. Chỉ xin khi sale gửi tin xin lịch, khi chủ nhà đồng ý cho sale xem lịch, hoặc khi chủ nhà gửi lịch. Có popup giải thích rồi mới tới hộp thoại Zalo. Có nút "Để sau" và việc gốc vẫn làm tiếp. Đã có số thì bỏ qua | YC1.1, YC1.5, YC1.6, YC1.7, YC1.8 | Không |
| Số điện thoại từ Zalo, chỉ xem | Số lấy từ Zalo, lưu vào hồ sơ, không sửa trong app. Đổi số trong Zalo thì app tự cập nhật lần sau | YC1.5.3 | Không |
| Nhận ra nhau bằng số điện thoại | Chủ nhà và sale nhận ra nhau qua số điện thoại trong Nguồn phòng và trong danh sách sale | YC1.5.1, YC1.7, YC1.9 | Không |
| Xin lịch chỉ qua tin Zalo | Việc xin xem lịch chỉ đi qua tin nhắn Zalo. App không có hộp thư xin lịch riêng. Chủ nhà bấm thẻ trong tin để mở màn cấp quyền | YC1.6, YC1.7 | Không |
| Không biết gửi cho ai | Cửa sổ gửi là của Zalo nên app không biết người nhận. App chỉ đếm số lần gửi và số chủ nhà đã đồng ý | YC1.6, YC1.8 | "3 lần đã gửi qua Zalo", "0 chủ nhà đã đồng ý" |
| Một link xin lịch nhiều chủ nhà | Mỗi sale có một link xin lịch dùng được cho nhiều chủ nhà | YC1.6 | Không |
| Quyền sale được xem | Chủ nhà bật tắt 3 quyền: Giá từng đêm (mặc định bật), Tình trạng cọc (mặc định bật, chỉ cho booking của chính sale), Booking của sale khác (mặc định tắt, chỉ hiện là đã đặt, không hiện tên sale). Sale không bao giờ thấy tên, số điện thoại khách và doanh thu | YC1.7, YC1.8, YC1.9 | Không |
| Nhóm kết nối | Sale ở nhóm "Đã kết nối" khi đã mở link và được đồng ý. Sale được chủ nhà thêm tay hoặc mới được mời nằm ở "Chưa kết nối" cho tới khi mở link | YC1.9 | "Chưa kết nối · 1" |
| Ngừng cho xem | Ngừng cho xem thì sale mất quyền xem lịch, booking cũ vẫn giữ | YC1.9 | Không |
| Gom thông báo | Nhiều chủ nhà đồng ý gần nhau thì gom một toast và một dòng ở Thông báo | YC1.10 | "3 chủ nhà … 7 căn mới" |
| Vị trí toast | Toast luôn nằm đầu màn, dưới thanh tiêu đề | YC1.8, YC1.10 | Không |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Tên Zalo của người kia | Thấy tên Zalo của sale | Thấy tên chủ nhà (A9) | Chủ nhà thấy tên sale ở A8; sale thấy tên chủ nhà ở A1-link | ? | Không dùng app |
| Số điện thoại của người dùng | Thấy số sale ở A8 và CN7 nếu sale đã cho phép; số của mình sửa không được | ? | ? | ? | Không bao giờ thấy |
| Lịch trống/kín và giá từng đêm | Xem, sửa lịch của mình | Xem theo quyền chủ nhà bật | Chưa thấy gì trước khi đồng ý | ? | Không |
| Tình trạng cọc | Thấy tất cả | Chỉ booking của mình, nếu quyền bật | ? | ? | Không |
| Booking của sale khác | Thấy | Chỉ hiện "đã đặt", không tên sale, nếu quyền bật (mặc định tắt) | ? | ? | Không |
| Tên, số điện thoại khách, doanh thu | Thấy | Không bao giờ | Không | ? | Không |
| Danh sách sale và booking của từng sale | Xem, thêm tay, ngừng cho xem | Không | Không | ? | Không |
| Số lần đã gửi, số chủ nhà đã đồng ý | Không | Sale tự xem ở A7 | Không | ? | Không |
| Thông báo kết nối | Thông báo của chủ nhà: chưa thiết kế trong YC1 | Toast và P13 | Không | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. Sale thủ công và tài khoản thật ghép nhau thế nào? CN7-05 cho chủ nhà thêm sale bằng tên và số điện thoại. A6-P1 nói chủ nhà chỉ thấy tên Zalo nếu sale chọn "Để sau". Thiết kế không nói hai bản ghi gộp lại khi nào.
   - a) Ghép khi số điện thoại trùng; sale "Để sau" thì không ghép được.
   - b) Ghép bằng link mời riêng cho từng sale, không cần số.
   - c) Chủ nhà tự gộp tay trong CN7-04.
2. A8-P2 và A8-P1 "Để sau" nối tới A9, mà A9 là màn của sale (Lịch phòng). Chủ nhà sau khi đồng ý thấy màn nào? Mô tả nói "thấy sale mới trong CN7" nhưng chưa có mũi tên. Phương án: về CN7 với toast; về Lịch; hoặc vẽ màn riêng.
3. CN10-02 hiện "Đã gửi lịch thành công", nhưng A7 nói app không biết đã gửi. Hai câu mâu thuẫn. Phương án: đổi chữ thành "Đã mở Zalo để gửi"; bỏ toast; hoặc dựa vào sự kiện quay lại app và nói rõ giới hạn.
4. Quyền cọc mâu thuẫn. CN10 ghi "Không thấy tên khách và tiền cọc". A8 có quyền "Tình trạng cọc" mặc định bật. Phương án: bỏ chữ "tiền cọc" ở CN10; bỏ quyền cọc ở A8; hoặc phân biệt "thấy đã cọc/chưa" với "thấy số tiền cọc".
5. Chủ nhà đổi quyền cho sale ở đâu? A8 ghi "Đổi được trong mục Sale", nhưng CN7-04 không có công tắc quyền. Phương án: thêm khối quyền vào CN7-04; hoặc sửa chữ ở A8.
6. Hai mã cho một nội dung. S9 (trong nhóm Sale) có nội dung y hệt CN7 (danh sách sale của chủ nhà). Phương án: S9 là bản trùng, bỏ; hoặc S9 là màn khác của sale và phải vẽ lại.
7. A9 và S1 đều là màn Lịch phòng của sale. A9 chỉ thêm toast. Phương án: A9 là trạng thái của S1, đổi mã thành S1-xx; hoặc giữ A9 là màn riêng.
8. A1-link không có mã artboard riêng (nằm trong A3 dưới nhãn "Trạng thái khác"). Phương án: đặt mã riêng trong canvas; hoặc đăng ký là trạng thái của A1.
9. A1-link đi thẳng sang A9. A9 đang hiện toast "Chị Hoa đã đồng ý", sai ngữ cảnh với người vừa nhận lời mời. Phương án: vẽ màn riêng "Anh Tuấn đã chia sẻ lịch 6 căn"; hoặc dùng A9 không toast. Chưa rõ người mở link có mặc định là sale không.
10. Từ chối quyền số điện thoại trong hộp thoại Zalo (A6-P2, A8-P2, CN10-P2) chưa thiết kế. Phương án: coi như "Để sau" và làm tiếp; hiện thông báo kèm cách bật lại; hỏi lại lần sau hay không.
11. Bấm "Từ chối" ở A8 chưa có màn đích, và chưa rõ sale có được báo không. Phương án: sale không nhận báo gì; sale nhận một dòng ở Thông báo; sale nhận tin riêng.
12. Chưa có cách đổi vai trò, hoặc dùng cả hai vai. A5 cho sale tự nhập "căn của chính bạn", và P1 và P4 chỉ có một vai mỗi tài khoản. Phương án: một tài khoản một vai cố định; đổi vai trong Cá nhân; hoặc cho dùng cả hai vai.
13. Người đã có tài khoản bấm link A8 hay link mời có qua A1 và A3 không? A8 chỉ ghi "Chưa có tài khoản? Bấm Đồng ý để đăng nhập bằng Zalo, sau đó thêm căn". Thứ tự đăng nhập, xin số, thêm căn chưa vẽ.
14. Chưa nói "Nhắc lại" (CN7), "Sao chép tin nhắn" (A6), "Gửi link cho chủ nhà khác" và "Thêm căn tự nhập" (A7) làm gì. Phương án cho "Nhắc lại": mở cửa sổ gửi Zalo có sẵn tin nhắc; hoặc app tự gửi thông báo.
15. Gửi cho nhiều sale ở CN10: Zalo mở sẵn tin cho từng sale (CN10 ghi vậy) nhưng chưa nói chủ nhà gửi lần lượt hay một lần. Chưa có thiết kế chọn sale từ danh sách bạn bè Zalo khi sale chưa lưu.
16. "Gần nhau" của quy tắc Gom thông báo chưa có ngưỡng thời gian. Phương án: theo phút; theo mỗi lần mở app; theo ngày.
17. Hiệu lực link: link xin lịch dùng nhiều lần (A6), link mời của chủ nhà (A1-link) có hết hạn, thu hồi được không? Chưa thiết kế.
18. Trạng thái màn chung chưa thiết kế: lỗi mạng, đang tải, quay lại từ nền, không có quyền. Cần quyết định một mẫu dùng chung hay từng màn.
19. Điều khoản và Chính sách quyền riêng tư: có link ở A1 nhưng chưa có màn nội dung.
20. P13 Thông báo nằm nhóm nào? Màn dùng chung cho chủ nhà và sale, chứa cả thông báo booking (YC4). YC1 chỉ lấy dòng thông báo kết nối. P2 có "Xóa tài khoản" (xóa căn, booking và kết nối sale), có thể thuộc YC9. Cần chốt màn nào thuộc nhóm nào.
21. A4 (mở CN5-A1) và A5 (mở S6-02) dẫn sang YC3 và YC6. Giữ A4 và A5 ở YC1 như cổng vào, hay chuyển hẳn sang nhóm đích?

## Các màn hình trong nhóm YC1
| Mã | Tên màn |
|---|---|
| A1 | Chào mừng và đăng nhập |
| A1-link | Mở từ link mời (chưa có mã artboard riêng) |
| A3 | Chọn vai trò |
| A4 | Chủ nhà mới, chưa có căn |
| A5 | Sale mới, chưa có nguồn phòng |
| A6 | Soạn tin xin link |
| A6-P1 | Popup giải thích · sale |
| A6-P2 | Hộp thoại của Zalo (minh họa) · sale |
| A7 | Đã gửi, chờ chủ nhà |
| A8 | Chủ nhà mở link của sale (tiêu đề "Lời mời xem lịch") |
| A8-P1 | Popup giải thích · chủ nhà |
| A8-P2 | Hộp thoại của Zalo (minh họa) · chủ nhà |
| A9 | Chủ nhà đã đồng ý · toast |
| A9-02 | Nhiều chủ nhà cùng đồng ý · gom một toast |
| CN7 | Sale của tôi |
| CN7-00 | Sale · chưa có sale nào |
| CN7-03 | Sale xin xem lịch · tin nhắn Zalo |
| CN7-04 | Chi tiết một sale |
| CN7-05 | Thêm sale thủ công |
| CN10 | Gửi lịch cho sale |
| CN10-P1 | Popup giải thích · gửi lịch |
| CN10-P2 | Hộp thoại của Zalo (minh họa) · gửi lịch |
| CN10-02 | Gửi xong: thông báo trên lịch |
| S9 | Sale của tôi (trùng nội dung với CN7, xem câu hỏi 6) |
| P2 | Thông tin cá nhân (phần số điện thoại và liên kết Zalo) |
| P13 | Thông báo (phần thông báo kết nối) |
| P1, P4 | Cá nhân · chủ nhà, Cá nhân · sale (chỉ dòng Đăng nhập bằng Zalo và Đăng xuất) |
