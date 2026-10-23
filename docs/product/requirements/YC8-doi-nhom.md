---
id: YC8
tieu_de: Đội nhóm, cộng tác viên
trang_thai: de-xuat
nguoi_chu: tung
nguon: 'canvas Design "Home247 · Lịch phòng Hạ Long", ngày 2026-10-23'
---
# YC8 · Đội nhóm, cộng tác viên

Nhóm này cho các sale bán chung theo nhóm. Một sale làm trưởng nhóm, tạo nhóm, chọn nguồn phòng chia sẻ và mời sale khác. Cả nhóm dùng chung nguồn phòng, thấy ai đang gửi yêu cầu căn nào để không gửi trùng khách. Trưởng nhóm thấy booking và tiền chênh của thành viên. Canvas không có màn riêng cho "cộng tác viên": trong nhóm này tôi hiểu cộng tác viên là thành viên nhóm (xem câu hỏi mở 9). Tất cả nội dung dưới đây ở trạng thái đề xuất.

## YC8.1 · Vào mục Đội nhóm khi chưa có nhóm
Mục đích: sale biết nhóm là gì, tạo nhóm hoặc biết cách vào nhóm của người khác.
Màn hình: S8-00
Khi nào xảy ra: sale vào Cá nhân > "Đội nhóm" khi chưa thuộc nhóm nào.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở "Đội nhóm" | "Bán theo nhóm": "Cả nhóm dùng chung nguồn phòng và thấy ai đang đặt căn nào, không gửi trùng khách." | ? | ? | ? |
| 2 | Bấm "Tạo nhóm" | Sang YC8.2 | ? | ? | ? |
| 3 | Đọc "Được mời vào nhóm?" | "Mở link trưởng nhóm gửi trong Zalo, nhóm sẽ hiện ở đây." | ? | ? | ? |

Theo quy tắc: Một sale một nhóm (đề xuất, xem câu hỏi mở 6).

Trạng thái màn:
- rỗng: chính màn này
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: xem YC8.4

Tiêu chí nghiệm thu:
- YC8.1-NT1 Khi sale chưa thuộc nhóm nào, thì "Đội nhóm" mở S8-00 với nút "Tạo nhóm".
- YC8.1-NT2 Khi sale đã thuộc một nhóm, thì "Đội nhóm" mở màn nhóm (YC8.5 hoặc YC8.7), không phải S8-00.

## YC8.2 · Tạo nhóm
Mục đích: sale đặt tên nhóm và chọn nguồn phòng nào chia sẻ cho cả nhóm.
Màn hình: S8-01
Khi nào xảy ra: sale bấm "Tạo nhóm".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | Ô "Tên nhóm *" kèm ghi chú "Thành viên thấy tên này khi nhận link mời." | ? | ? | ? |
| 2 | Chọn nguồn phòng chia sẻ | Danh sách chủ nhà: "Chị Hoa · 2 căn", "Anh Tuấn · 4 căn", "Chú Bình · tự nhập". Ghi chú "Thành viên tìm được các căn này. Chủ nhà được báo và có thể tắt chia sẻ." | ? | ? | ? |
| 3 | Bấm "Tạo nhóm" | Tạo nhóm, người tạo thành trưởng nhóm, sang màn nhóm (YC8.5) | ? | ? | Nhóm mới, danh sách nguồn chia sẻ |
| 4 | Chủ nhà được báo | Ghi chú nói "Chủ nhà được báo"; hình thức báo: chưa thiết kế | ? | ? | ? |

Theo quy tắc: Chia sẻ nguồn phòng cho nhóm (xem câu hỏi mở 1 và 2).

Trạng thái màn:
- rỗng: S8-01 lúc mới mở, chưa nhập tên
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC8.2-NT1 Khi sale chưa nhập tên nhóm, thì nút "Tạo nhóm" chưa dùng được.
- YC8.2-NT2 Khi sale tạo nhóm xong, thì sale là "Trưởng nhóm" và nhóm có đúng các nguồn đã chọn.
- YC8.2-NT3 Khi sale không có nguồn phòng nào, thì vẫn tạo được nhóm (chưa thiết kế, xem câu hỏi mở 10).

## YC8.3 · Mời thành viên
Mục đích: trưởng nhóm gửi link mời cho sale khác qua Zalo.
Màn hình: S8-02
Khi nào xảy ra: trưởng nhóm bấm "+ Mời" hoặc "Mời thành viên".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | "Mời vào nhóm": "Gửi link này cho sale qua Zalo. Sale mở link và đồng ý là vào nhóm." kèm link của nhóm | ? | ? | ? |
| 2 | Bấm "Gửi qua Zalo" | Mở cửa sổ gửi của Zalo với link | ? | Cửa sổ chia sẻ của Zalo | ? |
| 3 | Bấm "Sao chép link" | Sao chép link | ? | ? | ? |
| 4 | Đọc "THÀNH VIÊN SẼ" | "Tìm được căn trong nguồn phòng chung", "Thấy ai đang giữ căn nào", "Thấy tiền chênh của người khác" | ? | ? | ? |
| 5 | Xem "ĐÃ MỜI · CHƯA VÀO" | Số điện thoại che giữa, "Mời hôm qua", nút "Nhắc lại" | ? | Cửa sổ chia sẻ của Zalo (?) | ? |

Theo quy tắc: Mini App không tự gửi tin (YC1); Link mời của nhóm.

Trạng thái màn:
- rỗng: chưa có ai đã mời mà chưa vào (chưa thiết kế mục này khi trống)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế (thành viên thường có thấy nút mời không)
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC8.3-NT1 Khi trưởng nhóm bấm "Gửi qua Zalo", thì cửa sổ Zalo mở với link của đúng nhóm; Mini App không tự gửi tin.
- YC8.3-NT2 Khi trưởng nhóm bấm "Sao chép link", thì bộ nhớ tạm có link mời.
- YC8.3-NT3 Khi có người đã được mời mà chưa vào, thì họ nằm trong "ĐÃ MỜI · CHƯA VÀO" kèm "Nhắc lại".

## YC8.4 · Sale mở link mời vào nhóm
Mục đích: sale biết mình sắp vào nhóm nào, sẽ chia sẻ gì và thấy gì, rồi đồng ý hoặc từ chối.
Màn hình: S8-03
Khi nào xảy ra: sale mở link mời của nhóm trong Zalo.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở link | "Lời mời vào nhóm": tên nhóm, "Sale Hùng mời bạn vào nhóm", "4 thành viên · 3 chủ nhà · 7 căn" | ? | Mở Mini App từ link | ? |
| 2 | Đọc "KHI VÀO NHÓM" | "Bạn tìm được 7 căn chung của nhóm", "Trưởng nhóm thấy booking và tiền chênh của bạn", "Nguồn phòng riêng của bạn vẫn là của bạn" | ? | ? | ? |
| 3 | Bấm "Vào nhóm" | Vào nhóm, sang màn nhóm thành viên (YC8.7) | ? | ? | Thành viên mới của nhóm |
| 4 | Bấm "Từ chối" | Không vào nhóm (màn sau đó: chưa thiết kế) | ? | ? | ? |

Theo quy tắc: Chia sẻ nguồn phòng cho nhóm; Trưởng nhóm thấy booking và tiền chênh.

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: chưa thiết kế (link hết hạn, nhóm đã đầy)
- đã từ chối quyền Zalo: chưa thiết kế
- quay lại từ nền: chưa thiết kế
- mở từ link: chính màn này. Người chưa đăng nhập và chưa kết nối: chưa thiết kế (xem YC1.3)

Tiêu chí nghiệm thu:
- YC8.4-NT1 Khi sale mở link, thì thấy tên nhóm, tên người mời và số thành viên, chủ nhà, căn trước khi đồng ý.
- YC8.4-NT2 Khi sale bấm "Vào nhóm", thì sale thấy 7 căn chung của nhóm và nguồn phòng riêng của sale vẫn nguyên.
- YC8.4-NT3 Khi sale bấm "Từ chối", thì sale không thấy gì của nhóm.

## YC8.5 · Màn nhóm của trưởng nhóm
Mục đích: trưởng nhóm thấy cả nhóm bán được bao nhiêu, ai đang chờ chủ, và quản lý thành viên.
Màn hình: S8
Khi nào xảy ra: trưởng nhóm vào "Đội nhóm".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | Tên nhóm ở tiêu đề. Thẻ "BOOKING NHÓM THÁNG 10: 21", "TIỀN CHÊNH NHÓM: 12.6tr" | ? | ? | ? |
| 2 | Xem chờ chủ | "CHỜ CHỦ CHẤP NHẬN · 2": mỗi dòng gồm căn, ngày, tên sale gửi, nhãn "Chờ chủ" | ? | ? | ? |
| 3 | Xem thành viên | "THÀNH VIÊN · 4": tên, "Trưởng nhóm" hoặc số booking, tiền chênh ("6 booking · chênh 3.1tr") | ? | ? | ? |
| 4 | Bấm "+ Mời" hoặc "Mời thành viên" | Sang YC8.3 | ? | ? | ? |
| 5 | Chạm một thành viên | Sang YC8.6 | ? | ? | ? |
| 6 | Xem nguồn chung | "NGUỒN PHÒNG CHUNG: 3 chủ nhà · 7 căn" kèm tên các chủ nhà | ? | ? | ? |

Theo quy tắc: Trưởng nhóm thấy booking và tiền chênh; Tiền chênh của sale (YC6); Doanh thu tính theo tháng (YC7).

Trạng thái màn:
- rỗng: nhóm chỉ có trưởng nhóm (chưa thiết kế)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC8.5-NT1 Khi nhóm có 4 thành viên với 8, 6, 5, 2 booking, thì "BOOKING NHÓM" ghi 21.
- YC8.5-NT2 Khi có 2 yêu cầu chờ chủ trong nhóm, thì mục "CHỜ CHỦ CHẤP NHẬN · 2" liệt kê đúng 2 dòng và tên sale gửi.
- YC8.5-NT3 Khi trưởng nhóm chạm một thành viên, thì mở chi tiết thành viên đó.

## YC8.6 · Chi tiết thành viên và xóa khỏi nhóm
Mục đích: trưởng nhóm xem một thành viên đang làm gì và mời họ ra khỏi nhóm nếu cần.
Màn hình: S8-04
Khi nào xảy ra: trưởng nhóm chạm một thành viên.

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở chi tiết | Tên, số điện thoại che giữa, "vào nhóm 12/09/2026", nút "Gọi" | ? | Gọi mở ứng dụng gọi (?) | ? |
| 2 | Xem số liệu | "BOOKING THÁNG 10: 6", "TIỀN CHÊNH: 3.1tr" | ? | ? | ? |
| 3 | Xem việc đang làm | "ĐANG LÀM": mỗi dòng gồm căn, ngày, câu trạng thái, nhãn "Chờ chủ" hoặc "Đã chốt" | ? | ? | ? |
| 4 | Bấm "Xóa khỏi nhóm" | Xóa thành viên (có bấm xác nhận lần hai không: chưa thiết kế) | ? | ? | Thành viên rời nhóm |

Theo quy tắc: Xóa phải bấm hai lần (YC4); Trưởng nhóm thấy booking và tiền chênh.

Trạng thái màn:
- rỗng: thành viên chưa có booking (chưa thiết kế)
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC8.6-NT1 Khi trưởng nhóm bấm "Xóa khỏi nhóm" một lần, thì chưa xóa, chỉ hiện nút xác nhận.
- YC8.6-NT2 Khi trưởng nhóm xác nhận, thì thành viên không còn trong nhóm và không còn thấy nguồn chung.
- YC8.6-NT3 Khi thành viên bị xóa, thì booking họ đã làm vẫn còn trong lịch sử của chính họ.

## YC8.7 · Màn nhóm của thành viên thường và rời nhóm
Mục đích: thành viên thấy mình đóng góp bao nhiêu, ai đang chờ chủ để tránh gửi trùng, và rời nhóm khi muốn.
Màn hình: S8-05
Khi nào xảy ra: thành viên vào "Đội nhóm".

Hành vi:
| Bước | Người dùng | Mini App | Server | Zalo | Dữ liệu đổi |
|---|---|---|---|---|---|
| 1 | Mở màn | Tên nhóm, "Trưởng nhóm: Sale Hùng", số điện thoại, nút "Gọi" | ? | Gọi mở ứng dụng gọi (?) | ? |
| 2 | Xem số liệu của mình | "BOOKING CỦA BẠN: 6", "TIỀN CHÊNH CỦA BẠN: 3.1tr" | ? | ? | ? |
| 3 | Xem chờ chủ | "CHỜ CHỦ CHẤP NHẬN · 2", gồm yêu cầu của mình ("Bạn · chờ chủ chấp nhận") và của người khác ("Sale Hùng · chờ chủ trả lời") | ? | ? | ? |
| 4 | Xem thành viên | "THÀNH VIÊN · 4": tên, "Trưởng nhóm"; không hiện số booking hay tiền chênh của người khác | ? | ? | ? |
| 5 | Bấm "Rời nhóm" | Rời nhóm (có xác nhận lần hai không: chưa thiết kế) | ? | ? | Thành viên rời nhóm |

Theo quy tắc: Trưởng nhóm thấy booking và tiền chênh (thành viên không thấy của người khác); Xóa phải bấm hai lần (YC4).

Trạng thái màn:
- rỗng: không áp dụng
- đang tải: chưa thiết kế
- lỗi mạng: chưa thiết kế
- không có quyền: không áp dụng
- đã từ chối quyền Zalo: không áp dụng
- quay lại từ nền: chưa thiết kế
- mở từ link: không áp dụng

Tiêu chí nghiệm thu:
- YC8.7-NT1 Khi thành viên thường mở màn nhóm, thì chỉ thấy số booking và tiền chênh của chính mình.
- YC8.7-NT2 Khi thành viên bấm "Rời nhóm", thì mất quyền thấy nguồn chung của nhóm và vẫn giữ nguồn phòng riêng.
- YC8.7-NT3 Khi người khác trong nhóm có yêu cầu chờ chủ cho cùng căn và ngày, thì thành viên thấy dòng đó để không gửi trùng khách.

## Quy tắc nghiệp vụ phát hiện
| Tên ngắn | Nội dung quy tắc | Yêu cầu dùng | Ví dụ số |
|---|---|---|---|
| Chia sẻ nguồn phòng cho nhóm | Trưởng nhóm chọn nguồn phòng nào cả nhóm tìm được. Chủ nhà được báo và có thể tắt chia sẻ | YC8.2, YC8.4, YC8.5 | 3 chủ nhà, 7 căn |
| Trưởng nhóm thấy booking và tiền chênh | Trưởng nhóm thấy booking và tiền chênh của từng thành viên. Thành viên thường chỉ thấy của mình | YC8.4, YC8.5, YC8.6, YC8.7 | 6 booking · chênh 3.1tr |
| Thấy ai đang chờ chủ | Cả nhóm thấy yêu cầu đặt phòng đang chờ chủ của nhau, để không gửi trùng khách | YC8.5, YC8.7 | 2 yêu cầu chờ |
| Nguồn phòng riêng vẫn của riêng | Vào nhóm không làm mất hay lộ nguồn phòng riêng của sale | YC8.4, YC8.7 | "Nguồn phòng riêng của bạn vẫn là của bạn" |
| Link mời của nhóm | Link mời mở trong Zalo; sale đồng ý thì vào nhóm. Mini App không tự gửi tin | YC8.3, YC8.4 | Một link cho cả nhóm |

## Ai thấy gì
| Dữ liệu | Chủ nhà | Sale đã kết nối | Người mở link chưa kết nối | Cộng tác viên | Khách |
|---|---|---|---|---|---|
| Nhóm, thành viên | Không (xem câu hỏi mở 1) | Thành viên nhóm | Người nhận link thấy lời mời (S8-03) | ? | Không |
| Nguồn phòng chung | Được báo, tắt được | Thành viên nhóm thấy (S8-01 nói "tìm được") | Không | ? | Không |
| Booking và tiền chênh của thành viên | Không thấy phần chênh | Trưởng nhóm thấy của mọi người; thành viên thấy của mình | Không | ? | Không |
| Yêu cầu chờ chủ của người khác | Thấy yêu cầu trong YC4 | Thành viên nhóm thấy | Không | ? | Không |
| Căn tự nhập | Không | Chỉ sale tạo nó (xem câu hỏi mở 2) | Không | ? | Không |

## Câu hỏi còn mở
Xếp theo mức ảnh hưởng, nặng trước.

1. Chia sẻ nguồn phòng cho nhóm có bỏ qua quyền xem của chủ nhà không. YC1 quy định chủ nhà đồng ý từng sale mới cho xem lịch và giá. S8-01 cho trưởng nhóm chia sẻ, thành viên "tìm được các căn này". Một sale chưa được chủ nhà đồng ý thì xem lịch và giá của chủ đó qua nhóm sao? Phương án: chủ nhà phải bật chia sẻ cho nhóm trước khi thành viên thấy (thay vì chỉ "được báo"); hoặc thành viên chỉ thấy khi chính chủ nhà đã đồng ý cho họ; hoặc nhóm chỉ chia sẻ dữ liệu giữa các sale, không chia sẻ lịch chủ nhà.
2. Căn tự nhập (S8-01 liệt kê "Chú Bình · tự nhập") đang chia sẻ cho nhóm, trái quy tắc "Căn tự nhập chỉ sale đó thấy" ở YC6. Chủ căn cũng chưa biết mình bị chia sẻ cho người lạ. Phương án: không cho chia sẻ căn tự nhập; hoặc cho nhưng gỡ thông tin chủ căn.
3. Thành viên có thấy tiền chênh của người khác không. S8-02 ghi "Thấy tiền chênh của người khác", nhưng S8-05 (màn thành viên) không hiện, còn S8-03 chỉ nói trưởng nhóm thấy. Phương án: chỉ trưởng nhóm thấy (theo S8-03, S8-05); sửa chữ ở S8-02.
4. Số liệu không khớp: S8 ghi Sale Hùng 8 booking, S7 (thống kê của Hùng) ghi 6 booking và tiền chênh 1.6tr, trong khi tổng nhóm 12.6tr trừ ba thành viên còn lại ra khoảng 5.8tr cho Hùng. CN7 ghi Hùng 3 booking, CN7-03 ghi 8. Phương án: sửa dữ liệu minh họa cho khớp.
5. "Thấy ai đang giữ căn nào": nhóm thấy yêu cầu chờ chủ, nhưng luồng đặt phòng đã bỏ bước giữ phòng (YC4). Cần nói rõ nhóm thấy yêu cầu chờ chủ, và hai sale gửi cho cùng căn cùng ngày thì sao (YC4.8 chỉ xử lý ở phía chủ nhà).
6. Một sale ở nhiều nhóm được không. Chưa thiết kế. Phương án: một nhóm một sale để đơn giản; hoặc nhiều nhóm nhưng nguồn chung nào cũng cộng vào Nguồn phòng.
7. Link mời ghi "home247.vn/nhom/…". CLAUDE.md cấm link ra ngoài Zalo. Cần link mở được trong Zalo (link Mini App), chưa rõ dạng link.
8. Chưa có màn: giải tán nhóm, đổi trưởng nhóm, trưởng nhóm rời nhóm, đổi tên nhóm, thêm hoặc bớt nguồn chung sau khi tạo, link hết hạn hoặc nhóm đầy, số thành viên tối đa.
9. Cộng tác viên: canvas không có vai trò này. Phương án: coi cộng tác viên là thành viên nhóm; hoặc là vai trò riêng (không có quyền xem giá, chỉ gửi khách) cần đặc tả thêm; hoặc bỏ khỏi tên nhóm YC8.
10. Tạo nhóm khi sale chưa có nguồn phòng nào. S8-01 không nói. Phương án: cho tạo nhóm trống; hoặc báo cần có ít nhất một nguồn.
11. Tab "Sale" trong thanh dưới của sale (S8, S8-05, S6-xx) mở màn nào. Tab đó đang trùng tên với danh sách sale của chủ nhà (CN7, S9). Cần chốt tên tab và nội dung.
12. Xóa khỏi nhóm (S8-04) và Rời nhóm (S8-05) chưa vẽ bước xác nhận lần hai, trong khi quy tắc chung là bấm hai lần.

## Các màn hình trong nhóm YC8
| Mã | Tên màn |
|---|---|
| S8-00 | Đội nhóm, chưa có nhóm |
| S8-01 | Tạo nhóm |
| S8 | Nhóm của tôi, trưởng nhóm |
| S8-02 | Mời thành viên |
| S8-03 | Sale mở link mời vào nhóm |
| S8-04 | Chi tiết thành viên |
| S8-05 | Nhóm, thành viên thường |
