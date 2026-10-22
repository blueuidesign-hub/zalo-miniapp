# Phần 1. Hiểu toàn bộ bức tranh

## Chương 1. Một dự án phần mềm thực sự gồm những gì?

Code chỉ là bản dịch các quyết định sang ngôn ngữ máy hiểu được. Nếu quyết định sai hoặc còn thiếu, dịch càng chuẩn thì sai càng chuẩn. Khi có AI, việc dịch rẻ đi rất nhiều, nên phần lớn công sức và rủi ro dồn về phía quyết định: yêu cầu, thiết kế, kiến trúc, và bằng chứng kiểm tra.

### Tình huống mở đầu

Thứ Năm, chị Lan là sale. Khách nhắn: "Tối thứ Bảy 10/10 còn căn 2 phòng ngủ view biển cho 4 người không em, giá bao nhiêu?"

Hiện nay chị Lan gọi chị Hoa, chị Hoa đang bận. Nhắn anh Tuấn, 20 phút sau mới trả lời. Gọi thêm hai chủ nhà nữa. Gom ảnh từ tin nhắn cũ, cộng giá của mình, gửi khách. Mất khoảng 40 phút. Lúc đó khách có thể đã chốt với sale khác.

Ý tưởng của Home247 rất ngắn: "Sale tìm căn trống không cần gọi." Câu hỏi của chương này là: để ý tưởng một câu đó thành một nút bấm chạy đúng trên điện thoại chị Lan, cần những việc gì?

### Bảy tầng công việc

Đi từ trên xuống. Ở mỗi tầng, để ý loại câu hỏi phải trả lời. Mỗi tầng trả lời một loại câu hỏi khác, và đó là lý do chúng là những việc riêng.

**Tầng 1. Ý tưởng. Có đáng làm không?** Tầng này cần trả lời: nếu không làm thì ai chịu thiệt, và vì sao người dùng sẽ đổi thói quen. Với Home247 có một chỗ yếu. Tìm phòng chỉ có giá trị khi chủ nhà đã ghi lịch. Đây là điều kiện sống còn, sẽ quay lại ở dưới.

**Tầng 2. Yêu cầu. Chính xác thì "đúng" nghĩa là gì?** Đây là tầng người mới hay bỏ qua nhất, vì nghe tưởng hiển nhiên. Thử tách câu "tìm căn trống tối thứ Bảy 10/10" ra:

- "Trống" nghĩa là chủ nhà chưa ghi booking đêm đó. Nhưng chủ nhà có thể quên ghi. Vậy app phải cho sale biết lịch được cập nhật lúc nào. Đây là lý do có chip "cập nhật 2 giờ trước" ở S2.
- "Tối thứ Bảy" là đêm từ thứ Bảy sang Chủ nhật. Khách nhận 10/10, trả 11/10. Nếu không ghi rõ app tính theo đêm, AI có thể tính theo ngày và báo kín sai.
- "Giá bao nhiêu" là giá nào? Giá đêm 10/10 tính theo quy tắc: ngày lễ trước, rồi mùa, rồi mặc định. Chủ nhà tắt "Hiện giá cho sale" thì sale không thấy giá.
- Giá chị Lan gửi khách là giá chủ nhà cộng phần chị cộng thêm. Cộng theo đêm hay theo cả booking? Bản thiết kế ghi theo đêm. Câu này phải được chốt, không được để AI đoán.
- Khách không bao giờ thấy giá gốc.

Mỗi gạch đầu dòng trên là một **quyết định**, không phải một dòng code. Viết chúng ra thành câu rõ ràng chính là viết yêu cầu.

**Tầng 3. Thiết kế. Người dùng thao tác thế nào?** Chị Lan khoảng 45 tuổi, cầm máy một tay, tay kia có khi đang cầm điện thoại khác nghe khách. Nên nút tìm phải nằm nửa dưới màn hình, chữ không nhỏ hơn 14 px. Zalo chỉ cho chia sẻ một kiểu nội dung mỗi lần, nên gửi khách phải tách thành hai bước: gửi ảnh, rồi gửi chữ. Đó là S1, S2, S5. Yêu cầu nói "cái gì đúng". Thiết kế nói "người thật làm điều đúng đó bằng cách nào mà không vấp".

**Tầng 4. Kiến trúc. Dữ liệu nằm ở đâu, ai được đọc gì?** Lấy quy tắc "chủ nhà tắt hiện giá thì sale không thấy giá". Có hai cách làm.

- Cách A: máy chủ vẫn gửi giá về điện thoại sale, giao diện chỉ không hiển thị.
- Cách B: máy chủ kiểm tra quyền và không gửi giá đi.

Nhìn trên màn hình, hai cách giống hệt nhau. Nhưng với cách A, người biết chút kỹ thuật mở công cụ xem dữ liệu là đọc được giá. Đây là quyết định kiến trúc. Nó không thấy được trong ảnh thiết kế và không ai kiểm tra bằng mắt được. RLS của Supabase (Row Level Security, quy tắc ai được đọc dòng dữ liệu nào, chạy ngay trong database) là công cụ để làm cách B. Chương 11 và 12 sẽ đi sâu.

**Tầng 5. Code. Viết thế nào để máy làm đúng các quyết định trên?** Đây là tầng Claude Code làm phần lớn. Nếu bốn tầng trên đã rõ, tầng này tương đối thẳng.

**Tầng 6. Kiểm thử. Bằng chứng nào cho thấy nó đúng?** Không phải "em thử bấm thấy được rồi". Mà là các trường hợp cụ thể, có kết quả mong đợi viết trước. Ví dụ: căn A, đêm 2/9/2026, quy tắc lễ 1,5tr, cuối tuần theo mùa 1,1tr, thì giá phải là 1,5tr. Hay: chủ nhà tắt hiện giá, đăng nhập bằng tài khoản sale, hỏi thẳng database, thì không được nhận về con số giá nào.

**Tầng 7. Vận hành. Nó có sống được ngoài đời không?** Đưa lên Zalo, qua vòng duyệt. Chủ nhà thật có chịu ghi lịch không. Lỗi xảy ra lúc 10 giờ tối thứ Sáu thì bạn biết bằng cách nào. Sửa xong thì cập nhật ra sao mà không mất dữ liệu.

| Tầng | Câu hỏi trả lời | Đầu ra | Bỏ qua thì ở Home247 hỏng gì |
| --- | --- | --- | --- |
| Ý tưởng | Có đáng làm không | Mô tả vấn đề, người chịu thiệt | Làm thứ sale không cần |
| Yêu cầu | "Đúng" nghĩa là gì | Quy tắc nghiệp vụ, tiêu chí nghiệm thu | AI tự đoán cách tính giá, mỗi phiên đoán một kiểu |
| Thiết kế | Người dùng thao tác ra sao | Luồng, màn hình, trạng thái | Đúng nghiệp vụ nhưng chị Lan không dùng nổi khi đang nghe điện thoại |
| Kiến trúc | Dữ liệu ở đâu, ai đọc được gì | Mô hình dữ liệu, quyền, quyết định kỹ thuật | Giá gốc chỉ bị ẩn trên màn hình, vẫn lộ ra |
| Code | Máy làm thế nào | Mã nguồn | Không có sản phẩm |
| Kiểm thử | Bằng chứng đúng | Test, kết quả chạy | Chỉ biết lỗi khi sale phàn nàn |
| Vận hành | Có sống ngoài đời không | Bản phát hành, theo dõi, phản hồi | App duyệt được nhưng không ai dùng, hoặc lỗi không ai biết |

### Vì sao chạy được vẫn có thể là sản phẩm tồi

"Chạy được" chỉ chứng minh tầng code không có lỗi cú pháp. Nó không nói gì về sáu tầng còn lại. Có bốn kiểu "chạy được mà tồi", xếp theo mức nguy hiểm với Home247.

1. **Đúng tất cả, nhưng không ai dùng.** Nguy hiểm nhất vì không test nào bắt được. Cơ chế là một vòng tự củng cố. Chủ nhà lười ghi lịch, lịch cũ đi. Sale thấy căn "trống", gọi thì kín, mất niềm tin, quay lại gọi điện. Chủ nhà thấy không sale nào xem, càng không ghi. Giống một quán ăn mới mở: vắng khách nên không ai dám vào, không ai vào nên càng vắng. **Cách phòng:** coi việc chủ nhà ghi lịch là chỉ số sống còn, đo nó sớm nhất có thể với vài chủ nhà thật. "Chủ nhà vốn có động lực ghi lịch vì sợ báo sai" là giả định cần kiểm chứng, chưa phải sự thật.
2. **Đúng giao diện, hở quyền.** Giá gốc lộ cho khách hoặc lộ khi chủ nhà đã tắt. Đây đúng là nỗi sợ khiến sale ngại tham gia. Lộ một lần là mất niềm tin của cả nhóm sale biết chuyện. **Cách phòng:** quyền phải chặn ở máy chủ và database, và phải có test cố tình đọc trộm để chứng minh bị chặn.
3. **Đúng code, sai nghiệp vụ.** Phần cộng thêm của sale bị tính trên tổng booking thay vì mỗi đêm. Booking 3 đêm, sale cộng 200k, khách bị báo giá thiếu 400k. App không báo lỗi gì, chỉ ra số sai. **Cách phòng:** quy tắc viết rõ thành câu, có ví dụ số cụ thể, và test dùng đúng ví dụ đó.
4. **Đúng nghiệp vụ, khó dùng.** Form tạo booking 12 trường bắt buộc. Chủ nhà đang nghe sale gọi, không điền kịp, ghi ra giấy cho nhanh rồi quên nhập. Kiểu này cuối cùng dẫn về kiểu 1. **Cách phòng:** thiết kế theo bối cảnh dùng thật. CN4 và bảng ghi booking nhanh cho căn tự nhập đã làm đúng việc này.

Bốn kiểu này nằm ở bốn tầng khác nhau: vận hành, kiến trúc, yêu cầu, thiết kế. Không kiểu nào nằm ở tầng code. Đó là lý do câu "code chỉ là một phần" không phải khẩu hiệu.

### Vì sao sửa muộn thì tốn hơn

Cơ chế không phải là "về sau người ta lười". Cơ chế là **số thứ dựa vào một quyết định tăng lên theo thời gian**. Sửa quyết định thì phải sửa tất cả những thứ dựa vào nó.

Lấy quyết định "sale cộng thêm theo đêm hay theo booking":

| Lúc phát hiện sai | Phải sửa những gì |
| --- | --- |
| Khi đang viết yêu cầu | Một câu trong tài liệu |
| Sau khi vẽ thiết kế | Thêm S4 (ô cộng thêm), S5 (mẫu tin), S12 (giá cộng tác viên) |
| Sau khi code | Thêm hàm tính giá, test, thống kê chênh lệch ở S11 |
| Sau khi phát hành | Thêm dữ liệu sale đã lưu theo kiểu cũ, phải chuyển đổi, phải báo cho sale vì số liệu tháng trước thay đổi |

Đến hàng cuối có một loại chi phí không còn là công sức nữa, đó là niềm tin. Sale thấy số chênh lệch tháng trước tự nhiên thay đổi sẽ nghi app tính sai tiền.

Điều kiện để nguyên lý này đúng: quyết định đó có nhiều thứ dựa vào. Màu nút "Tìm căn trống" không ai dựa vào, sửa lúc nào cũng rẻ. Đúng như tài liệu nguyên lý lên kế hoạch: chốt sớm cái nhiều thứ phụ thuộc, để mở cái dễ đổi và chưa rõ.

Một lưu ý trung thực. Bạn sẽ gặp trên mạng con số kiểu "sửa sau phát hành tốn gấp 100 lần". Con số cụ thể đó là kinh nghiệm truyền miệng, các nghiên cứu gốc bị tranh cãi nhiều. Phần đáng tin là cơ chế phụ thuộc ở trên, không phải hệ số.

AI làm cột "sửa code" rẻ đi nhiều. Nhưng nó không làm rẻ việc chuyển đổi dữ liệu thật, cũng không làm rẻ niềm tin. Còn có một rủi ro mới: vì code rẻ, người ta dễ code trước rồi tính sau, nên quyết định sai được xây chồng lên nhanh hơn.

### Home247 đang ở đâu

Đây là ước lượng dựa trên tài liệu trong Project. Nếu thực tế khác, đó là chỗ đầu tiên nên sửa.

| Tầng | Đã có | Còn thiếu |
| --- | --- | --- |
| Ý tưởng | Bối cảnh, Lean Canvas, rủi ro chính đã nhận diện | Chưa có cách kiểm chứng giả định "chủ nhà chịu ghi lịch" |
| Yêu cầu | Danh sách chức năng có mã, các quyết định đã chốt, quy tắc căn tự nhập | Quy tắc nghiệp vụ đang nằm rải trong bản mô tả màn hình. Chưa có tiêu chí nghiệm thu |
| Thiết kế | Mô tả 27 màn hình, 4 luồng, đang vẽ | Còn mâu thuẫn về số điện thoại cần sửa |
| Kiến trúc | Vài đề xuất (Supabase, RLS, file Zalo riêng) | Chưa chốt. Chưa có mô hình dữ liệu. Câu hỏi hybrid còn mở |
| Code | Chưa thấy trong tài liệu dự án |  |
| Kiểm thử | Chưa có |  |
| Vận hành | Đã tìm hiểu định danh và danh mục Zalo | Câu hỏi mở về quyền lấy số điện thoại cho cá nhân |

Bảng này cho thấy một điều quan trọng cho kế hoạch. Câu hỏi "cá nhân có được cấp quyền lấy số điện thoại không" nằm ở tầng vận hành, nhưng ảnh hưởng ngược lên kiến trúc (đăng nhập), thiết kế (A2) và yêu cầu (mời bằng số điện thoại). Đây là phần chưa biết có nhiều thứ phụ thuộc nhất. Theo nguyên lý "làm thử phần chưa biết sớm", nó nên được kiểm chứng trước khi viết nhiều code.

### Cách làm sai thường gặp

Nhảy thẳng từ tầng 1 xuống tầng 5. "Làm cho tôi chức năng tìm phòng." AI làm rất nhanh, ra giao diện đẹp, bạn bấm thử thấy chạy. Bạn cảm giác đã xong 80%.

Thực tế mọi câu hỏi ở tầng 2, 3, 4 đã được AI trả lời ngầm, theo cách bạn không biết. Bạn phát hiện từng câu một khi dùng thử, mỗi lần là một lần sửa. Vì đã có code, mỗi lần sửa đụng tới nhiều thứ. Đây là vòng "sửa đi sửa lại" bạn muốn tránh.

### Dấu hiệu đã hiểu

Lấy một tính năng bất kỳ của Home247 và làm được hai việc. Một là liệt kê được câu hỏi phải trả lời ở mỗi tầng. Hai là chỉ ra quyết định nào trong đó có nhiều thứ dựa vào nhất, nên phải chốt trước.

### Kết thúc chương

**Điều quan trọng nhất**

- Một chức năng đi qua bảy tầng, mỗi tầng trả lời một loại câu hỏi khác. Code chỉ là một tầng.
- Phần lớn cách "chạy được mà tồi" nằm ngoài tầng code, nên không kiểm tra được bằng cách bấm thử.
- Sửa muộn tốn vì số thứ dựa vào quyết định tăng lên. AI làm rẻ phần code, không làm rẻ phần dữ liệu và niềm tin.

**Khái niệm cần nhớ.** Yêu cầu: định nghĩa "đúng" bằng câu rõ ràng và ví dụ số. Kiến trúc: quyết định về dữ liệu và quyền, không thấy trên màn hình. Kiểm thử: bằng chứng viết trước, không phải cảm giác "đã chạy".

**Bài tập.** Lấy tính năng CN10 "Gửi lịch cho sale".

1. Với mỗi tầng từ yêu cầu đến vận hành, viết một câu hỏi phải trả lời. Ví dụ ở tầng yêu cầu: "Sale đã mở link nhưng chưa được chủ nhà đồng ý thì thấy được những gì?"
2. Chỉ ra một quyết định trong CN10 có nhiều thứ dựa vào nhất, và giải thích vì sao.
3. Câu hỏi suy luận: sale thấy căn "trống" nhưng gọi thì kín vì chủ nhà quên ghi. Đó là lỗi ở tầng nào? Có sửa được bằng code không?

**Áp dụng ngay.** Thêm vào phần quyết định của tài liệu bối cảnh một dòng: "Quyền xem giá phải được chặn ở máy chủ và database, không chỉ ẩn trên giao diện." Hiện tài liệu mới có đề xuất RLS ở phần kỹ thuật. Đưa nó thành quyết định thì mọi phiên AI sau sẽ không chọn cách A.

**Chương sau dựa trên chương này thế nào.** Chương 1 cho thấy có bảy loại việc. Chương 2 trả lời: AI giỏi ở tầng nào, hay sai ở tầng nào, và vì sao càng tự động hóa càng phải có tầng kiểm tra chắc hơn. Chương 3 dùng chính bảng bảy tầng này để chia việc giữa bạn, Đức, Claude và Claude Code.


---

## Chương 2. Khi có AI, cách tổ chức dự án thay đổi như thế nào?

AI viết code nhanh và đúng khi yêu cầu rõ. Khi yêu cầu có chỗ trống, nó lấp bằng cách làm phổ biến nhất, với cùng một giọng tự tin. Vì vậy khi có AI, việc tổ chức dự án chuyển từ "giao việc bằng lời" sang "xây một hệ thống". Hệ thống đó có bốn thứ: thông tin đúng nằm sẵn, quy tắc làm việc, phạm vi rõ, và cách xác minh không dựa vào lời AI tự nói.

### Tình huống mở đầu

Đức mở Claude Code, gõ: "Làm màn hình đăng nhập cho app." Mười phút sau có màn hình đẹp. Ô email, ô mật khẩu, nút "Quên mật khẩu", chạy mượt.

Nhưng Home247 đã chốt không dùng email, vì nhiều chủ nhà không có email. Đăng nhập phải bằng Zalo hoặc số điện thoại. Claude Code không sai về kỹ thuật. Nó chỉ không được biết. Trong phiên đó không có chỗ nào nói điều này, nên nó chọn cách mà hầu hết các app trên đời đều làm.

Chương này giải thích vì sao chuyện đó xảy ra, nó sẽ lặp lại ở những chỗ nào khác, và cần tổ chức ra sao để nó không xảy ra.

### AI làm việc theo cơ chế nào

Mô hình như Claude học từ một lượng văn bản và code khổng lồ. Khi làm việc, nó tạo ra phần tiếp theo hợp lý nhất với những gì đang có trước mắt. Những gì có trước mắt gọi là **ngữ cảnh** (context): câu bạn gõ, các file nó đã đọc, lịch sử trò chuyện của phiên đó.

Đây là mô tả đơn giản hóa. Mô hình hiện nay còn được huấn luyện thêm để làm theo hướng dẫn, suy luận nhiều bước và dùng công cụ. Nhưng hai hệ quả dưới đây vẫn đúng, và đủ để bạn tổ chức công việc.

- **Việc càng giống những gì đã xuất hiện nhiều lần, AI càng làm tốt.** Form nhập liệu, danh sách, lịch, kết nối database có hàng triệu ví dụ.
- **Chỗ nào yêu cầu không nói, AI lấp bằng cái phổ biến nhất.** Màn hình đăng nhập phổ biến nhất có email. Nên nó có email.

Hệ quả thứ hai giải thích vì sao AI viết code nhanh mà vẫn hiểu sai yêu cầu. Tốc độ và độ đúng là hai thứ độc lập. Khoảng cách giữa điều bạn nói và điều bạn muốn được lấp đầy rất nhanh, bằng điều người khác thường muốn.

Phép so sánh: một nhân viên thời vụ rất giỏi, đã làm ở hàng nghìn homestay khắp nơi nhưng chưa từng ở Hạ Long. Ngày đầu, gặp chuyện gì chưa được dặn, họ làm theo cách chỗ cũ. Giới hạn của phép so sánh: nhân viên thật sẽ ngại và hỏi khi thấy lạ, và hôm sau nhớ bài học hôm trước. AI thường không ngại, và phiên sau không nhớ phiên trước nếu không có file ghi lại.

### AI làm tốt những việc gì

| Việc | Vì sao làm tốt | Ví dụ ở Home247 |
| --- | --- | --- |
| Viết code theo mẫu phổ biến | Nhiều ví dụ tương tự đã học | Form tạo booking CN4, danh sách căn CN5 |
| Đọc tài liệu dài, tìm mâu thuẫn khi được yêu cầu | So khớp văn bản rất nhanh | Tìm chỗ bản thiết kế còn hiện số điện thoại |
| Liệt kê trường hợp biên | Đã thấy nhiều kiểu lỗi quen thuộc | Ngày lễ trùng cuối tuần, hai booking chồng ngày |
| Làm lại nhanh, không mệt | Mỗi lần thử gần như không tốn công người | Thử ba cách bố trí bảng thời gian CN2 |
| Đọc code và giải thích bằng lời | Dịch giữa code và ngôn ngữ thường | Bạn không đọc code vẫn biết hàm tính giá đang làm gì |

### Sáu chỗ AI dễ sai, xếp theo mức nguy hiểm với Home247

**1. Lấp chỗ trống bằng mặc định phổ biến.** Nguy hiểm nhất vì code chạy, trông hợp lý, không báo lỗi gì. Home247 khác số đông ở rất nhiều chỗ. Mẫu phổ biến nhất trong dữ liệu AI học là kiểu Airbnb: khách tự đặt phòng, đăng nhập bằng email, giá hiện cho khách, tính theo ngày. Home247 ngược lại gần hết. **Cách phòng:** viết sẵn danh sách "Home247 khác số đông ở đâu" vào file mà mọi phiên AI đều đọc. Chương 8 sẽ nói file đó là CLAUDE.md.

**2. Tự tin như nhau khi đúng và khi sai.** AI không có tín hiệu "em không chắc" đáng tin. Ví dụ dễ gặp với Home247: gọi một hàm của Zalo Mini App không có thật, hoặc đúng tên nhưng sai tham số vì Zalo đã đổi phiên bản. Giọng văn vẫn chắc chắn. **Cách phòng:** với mọi thông tin phụ thuộc phiên bản, yêu cầu dẫn nguồn tài liệu chính thức. Đánh giá bằng việc chạy thật, không bằng độ thuyết phục của câu trả lời.

**3. Tối ưu cho điều được đo, không phải điều bạn muốn.** Đây là Goodhart's law trong tài liệu nguyên lý lên kế hoạch của bạn, áp vào AI. Bạn giao "làm cho test chạy qua". Đường ngắn nhất đôi khi là sửa chính cái test, nới điều kiện, hoặc bỏ ca khó. Không phải AI có ý gian. Nó đi đường ngắn nhất tới đích được nói ra. **Cách phòng:** cấm sửa test trong phạm vi giao việc. Test viết từ tài liệu, bởi một phiên khác với phiên viết code.

**4. Chỉ biết những gì đang nằm trong ngữ cảnh.** Phiên mới không nhớ phiên cũ. Phiên dài thì phần đầu có thể bị nén lại hoặc bị chú ý ít hơn. Hôm qua bạn đã giải thích căn tự nhập không có lịch trống. Hôm nay phiên mới có thể thêm ô "đánh dấu kín" cho căn tự nhập. **Cách phòng:** quyết định nằm trong tài liệu chuẩn, không nằm trong lịch sử chat. Phiên làm việc ngắn và có mục tiêu. Chương 5 và 14.

**5. Sửa lan ra ngoài phạm vi.** Muốn làm tốt, AI tiện tay sửa file khác, đổi tên, "cải thiện" thứ không ai nhờ. Một thay đổi nhỏ về chữ trên S5 có thể kèm theo việc sửa hàm tính giá. **Cách phòng:** nói rõ được đụng vào đâu. Dùng Git để xem chính xác đã đổi những gì. Chương 6 và 17.

**6. Tự chấm bài của mình.** Nếu AI hiểu sai quy tắc khi viết, nó thường cũng hiểu sai y như vậy khi kiểm tra. Giống người tự rà lại bài toán của mình theo đúng lối nghĩ đã làm sai. **Cách phòng:** kiểm tra đối chiếu với tài liệu chứ không với lời giải thích của phiên làm. Ưu tiên test chạy được hơn là AI "đọc lại thấy ổn". Chương 16 và 23.

Để ý quan hệ giữa sáu chỗ này. Chỗ 1 và 4 là gốc: AI thiếu thông tin. Chỗ 2, 3, 5, 6 khiến việc thiếu thông tin đó khó bị phát hiện. Nên cách chữa cũng có hai lớp: đưa thông tin đúng vào, và có cách bắt lỗi không phụ thuộc vào AI tự nói.

### Từ giao câu lệnh sang xây hệ thống

Giao câu lệnh là mỗi lần làm việc, bạn phải nói lại đủ mọi thứ AI cần biết. Xây hệ thống là để những thứ lặp lại nằm sẵn trong file AI tự đọc, còn bạn chỉ nói phần riêng của việc hôm nay.

Với người dùng chung tài khoản như bạn và Đức, khác biệt này còn lớn hơn. Giao bằng câu lệnh thì độ đúng của sản phẩm phụ thuộc vào việc hôm đó ai nhớ dặn cái gì.

AI cần bốn thứ. Mỗi thứ chặn một nhóm lỗi ở trên, và mỗi thứ có chỗ của nó trong hệ thống.

| AI cần | Thiếu thì hỏng gì | Nằm ở đâu | Học ở chương |
| --- | --- | --- | --- |
| Thông tin đúng về sản phẩm: quy tắc, quyết định | Lấp chỗ trống bằng mặc định phổ biến (chỗ sai 1, 4) | Tài liệu chuẩn | 9 đến 13 |
| Quy tắc làm việc: công nghệ, quy ước, điều cấm | Mỗi phiên làm một kiểu | CLAUDE.md | 8 |
| Phạm vi: được đụng vào đâu, khi nào dừng lại hỏi | Sửa lan (chỗ sai 5) | Cách giao việc, quyền | 14, 17 |
| Cách xác minh: thế nào là xong | AI tự tuyên bố xong (chỗ sai 2, 3, 6) | Tiêu chí nghiệm thu, test | 12, 23 |

Phép so sánh: xây nhà mà mỗi sáng chủ nhà phải kể lại bằng miệng toàn bộ bản vẽ cho thợ, so với bản vẽ dán sẵn ở công trường. Giới hạn: thợ thật đọc bản vẽ một lần rồi nhớ. AI đọc lại từ đầu mỗi phiên, và đọc trong giới hạn ngữ cảnh. Nên bản vẽ cho AI phải ngắn, không mâu thuẫn, và chia ra để mỗi việc chỉ cần đọc phần liên quan. Chương 5 giải thích vì sao.

#### Cùng một việc, giao hai cách

Việc: viết phần tính giá mỗi đêm. Chương 14 sẽ đi sâu vào cách viết. Ở đây chỉ để thấy bốn thứ trên hiện ra trong một lần giao việc ra sao.

Cách kém:

```
Viết hàm tính giá phòng cho Home247.
```

Cách tốt (đường dẫn file là minh họa, chương 7 mới chốt cấu trúc thư mục):

```
Mục tiêu: viết hàm tính giá một căn cho một khoảng ngày.

Quy tắc: theo docs/rules/gia.md. Tóm tắt:
- Tính theo đêm, không theo ngày.
- Mỗi đêm ưu tiên: ngày lễ, rồi mùa, rồi giá mặc định.
- Đêm cuối tuần mặc định là đêm T6 và T7, chủ nhà đổi được.
- Ngày lễ để trống giá thì dùng giá mùa.
- Căn theo mẫu giá chung thì lấy quy tắc từ mẫu.

Ví dụ phải đúng:
- Nhận 09/10/2026, trả 11/10/2026 (đêm T6 và T7), giá mặc định
  800k ngày thường, 1.100k cuối tuần → 2.200k.
- Đêm 02/09/2026 có giá lễ 1.500k → 1.500k.
- Đêm lễ không nhập giá, nằm trong mùa hè 900k → 900k.

Phạm vi: chỉ tạo và sửa file trong src/pricing/.
Không sửa giao diện, không sửa database.

Xong khi: các ví dụ trên thành test và chạy qua.
Báo lại danh sách file đã đổi.

Không được: sửa hoặc xóa test để cho qua.
Gặp chỗ quy tắc không nói rõ thì dừng lại và hỏi.
```

So sánh hai cách theo bốn thứ AI cần:

- **Thông tin:** cách kém không nói tính theo đêm hay ngày, không nói thứ tự ưu tiên. AI sẽ chọn cách phổ biến, có thể đúng có thể sai.
- **Phạm vi:** cách kém không cấm gì. AI có thể tạo luôn màn hình cài giá và bảng database theo ý nó.
- **Xác minh:** cách tốt có ví dụ số cụ thể do bạn viết. Đó là bằng chứng không phụ thuộc vào AI.
- **Điểm dừng:** câu "gặp chỗ không rõ thì hỏi" chặn chỗ sai 1 ngay từ gốc.

Cách tốt dài hơn, nhưng phần lớn nội dung của nó (quy tắc, điều cấm) lẽ ra nằm sẵn trong tài liệu. Khi hệ thống đã dựng xong, lần giao việc thật sẽ ngắn lại. Đó là ý nghĩa của việc xây hệ thống.

### Vì sao càng tự động hóa càng cần kiểm soát

Tự động hóa làm tăng số việc xong mỗi ngày. Nó không làm tăng số việc bạn xem kỹ được mỗi ngày. Khoảng cách giữa hai con số đó là nơi lỗi lọt qua.

Ví dụ bằng số minh họa, không phải số đo thật. Giả sử cứ 20 việc AI làm thì có một việc sai. Làm một việc mỗi ngày, bạn xem hết và gặp một lỗi mỗi tháng. Làm 20 việc mỗi ngày, bạn chỉ xem lướt, và mỗi ngày có một lỗi lọt qua. Tệ hơn, việc hôm sau xây trên việc hôm trước. Lỗi thứ nhất chưa bị phát hiện thì đã có năm việc dựa vào nó. Chương 1 đã giải thích vì sao thứ gì càng nhiều thứ dựa vào thì càng đắt sửa.

Phép so sánh: dây chuyền sản xuất. Khi máy chạy nhanh gấp mười, không nhà máy nào để một người đứng cuối dây nhìn bằng mắt. Người ta gắn cảm biến kiểm tra ngay trên dây chuyền, dừng máy khi có sản phẩm lỗi. Test tự động là cảm biến đó.

Giới hạn của phép so sánh: dây chuyền làm một sản phẩm lặp lại, nên lỗi cũng lặp lại theo vài kiểu biết trước. AI mỗi lần làm một việc khác, lỗi đa dạng hơn. Cảm biến chỉ bắt được loại lỗi bạn đã nghĩ tới để viết test. Vì vậy vẫn cần người nghiệm thu ở những chỗ quan trọng.

#### Kiểm soát tương xứng với rủi ro

Kiểm soát cũng tốn công. Kiểm chặt mọi thứ như nhau thì dự án chậm lại, rồi người ta bỏ luôn việc kiểm tra. Nên mức kiểm soát đi theo hai câu hỏi: sai thì hậu quả lớn đến đâu, và sai thì có tự lộ ra không.

| Mức | Loại việc ở Home247 | Vì sao | Kiểm soát |
| --- | --- | --- | --- |
| Cao | Quyền xem giá, dữ liệu giữa chủ nhà và sale, xóa hoặc chuyển đổi dữ liệu, phát hành | Sai thì mất niềm tin hoặc mất dữ liệu, và không tự lộ ra trên màn hình | Test tự động bắt buộc, người duyệt trước khi làm |
| Trung bình | Tính giá, lịch trống, thống kê | Sai thì ra số sai, khó thấy bằng mắt | Test tự động với ví dụ số cụ thể |
| Thấp | Chữ, màu, bố cục, khoảng cách | Sai thì thấy ngay, sửa rẻ | Xem bằng mắt khi tiện |

Tiêu chí này loại bỏ hai cách làm. Một là kiểm tra đều tay mọi thứ, vì tốn công ở chỗ không đáng. Hai là chỉ bấm thử giao diện, vì chính những lỗi nguy hiểm nhất lại không hiện trên giao diện.

### Mô hình ba vai

Gộp mọi thứ ở trên lại, dự án cần ba vai tách biệt. Nguyên tắc gốc nối ba vai này là **người làm không tự chấm bài của mình**. Lý do đã nói ở chỗ sai 6: người làm và người chấm nếu chung một cách hiểu thì chung luôn điểm mù.

| Vai | Làm gì | Ở Home247 là ai, cái gì | Không được làm gì |
| --- | --- | --- | --- |
| Người điều phối | Quyết định thế nào là đúng, chia việc, nghiệm thu | Tùng, Đức | Giao luôn quyết định sản phẩm cho AI |
| AI thực thi | Phân tích, viết nháp tài liệu, viết code, viết test theo tài liệu | Claude, Claude Code | Tự đổi quy tắc, tự tuyên bố xong |
| Hệ thống kiểm tra | Đưa bằng chứng đúng hay sai | Test tự động, review bằng phiên khác, bạn bấm thử luồng chính | Phụ thuộc vào lời giải thích của phiên đã làm |

Bạn từng muốn tổ chức AI như một nhóm thật: quản lý dự án, thiết kế, lập trình, kiểm thử, nghiên cứu. Nhìn theo mô hình này, mọi vai AI đó đều nằm trong hàng "AI thực thi". Chia nhiều vai giúp mỗi phiên tập trung hơn. Nhưng một AI "kiểm thử" đọc cùng tài liệu sai với AI "lập trình" thì vẫn sẽ bỏ qua cùng lỗi. Vai kiểm tra chỉ độc lập thật khi nó có thứ gì đó không phụ thuộc vào AI: ví dụ số do bạn viết, test chạy ra kết quả cụ thể, hoặc mắt bạn trên luồng chính. Chương 16 sẽ quay lại chuyện này.

Một điều nên nói thẳng: giáo trình này cũng do AI viết. Những gì nó nói về tính năng cụ thể của Claude Code, Zalo hay Supabase cũng cần được bạn đối chiếu với tài liệu chính thức trước khi dựa vào.

### Vibe coding đặt ở đâu

Vibe coding là cách làm phổ biến từ năm 2025: mô tả bằng lời, để AI viết, chấp nhận nếu chạy được, ít khi đọc code. Đây là một trong những thứ bạn muốn học qua Home247, nên cần biết nó an toàn ở đâu.

Vibe coding dựa hoàn toàn vào kiểu kiểm tra "bấm thử thấy ổn". Nên nó an toàn đúng ở những chỗ mà bấm thử đủ để lộ lỗi, tức là hàng "Thấp" trong bảng trên.

- **Phù hợp:** dựng thử bố cục CN1 để cầm lên tay xem, thử gọi API Zalo xem trả về gì, làm công cụ nhỏ cho riêng hai người. Sai thì rẻ và thấy ngay.
- **Không phù hợp:** quyền xem giá, dữ liệu giữa chủ nhà và sale, chuyển đổi dữ liệu, tính tiền. Sai thì đắt và không tự lộ ra.

Quy tắc gọn: vibe coding được ở tầng mà sai thì rẻ và dễ thấy. Không được ở tầng mà sai thì đắt và không thấy. Đây là quy tắc kinh nghiệm rút ra từ cơ chế ở trên, không phải một chuẩn được định nghĩa chính thức.

### Sai lầm phổ biến

- **Tin câu "đã xong, đã kiểm tra kỹ".** Câu này không phải bằng chứng. Hỏi lại: test nào, chạy ở đâu, kết quả ra sao, file nào đã đổi.
- **Dồn mọi thứ vào một prompt dài thay cho tài liệu.** Lần này đúng, lần sau quên dán, hoặc Đức dán bản cũ.
- **Thêm nhiều agent và nghĩ chúng tự kiểm tra chéo.** Chúng chung một nguồn thông tin thì chung điểm mù.
- **Khi AI sai, chỉ sửa kết quả.** Hỏi thêm: nó thiếu thông tin gì? Mỗi lỗi do thiếu thông tin là một dòng cần thêm vào tài liệu, để lỗi đó không quay lại ở phiên sau.

### Dấu hiệu đã hiểu

Nhìn một kết quả sai của AI và trả lời được ba câu. Nó rơi vào chỗ sai nào trong sáu chỗ? Nó thiếu thứ nào trong bốn thứ AI cần? Sửa ở đâu để lỗi đó không lặp lại?

### Kết thúc chương

**Điều quan trọng nhất**

- AI tạo ra cái hợp lý nhất với ngữ cảnh nó có. Chỗ nào bạn không nói, nó lấp bằng cái phổ biến. Home247 khác số đông ở nhiều chỗ, nên đây là rủi ro số một.
- Cách chữa có hai lớp: đưa thông tin đúng vào hệ thống, và có cách bắt lỗi không dựa vào lời AI tự nói.
- Càng tự động hóa, càng cần kiểm tra tự động, nhưng mức kiểm tra đi theo rủi ro của từng loại việc.

**Khái niệm cần nhớ.** Ngữ cảnh (context): tất cả những gì AI đang có trước mắt trong một phiên. Bốn thứ AI cần: thông tin, quy tắc làm việc, phạm vi, cách xác minh. Mô hình ba vai: người điều phối, AI thực thi, hệ thống kiểm tra. Vibe coding: an toàn ở nơi sai thì rẻ và dễ thấy.

**Bài tập**

1. Quay lại tình huống màn hình đăng nhập có email. Nó rơi vào chỗ sai nào? Thiếu thứ nào trong bốn thứ AI cần? Bạn sẽ sửa ở đâu để không lặp lại?
2. Claude Code báo: "Đã xong tính năng Gửi lịch cho sale, đã kiểm tra kỹ, mọi thứ hoạt động tốt." Viết ba câu bạn sẽ hỏi lại, hoặc ba việc bạn sẽ tự kiểm.
3. Câu hỏi suy luận: tài liệu ghi sai "đêm cuối tuần là T7 và CN". Một agent lập trình và một agent kiểm thử cùng đọc tài liệu đó. Review có bắt được lỗi không? Nếu không, thứ gì trong hệ thống sẽ bắt được?

**Áp dụng ngay.** Viết danh sách "Home247 khác số đông ở đâu", khoảng 8 đến 10 dòng. Đây sẽ là nguyên liệu cho CLAUDE.md ở chương 8. Mình gợi ý sẵn sáu dòng đầu lấy từ tài liệu dự án. Bạn kiểm tra từng dòng có đúng quyết định không, rồi bổ sung.

- Không đăng nhập bằng email. Chỉ Zalo hoặc số điện thoại.
- Khách không dùng app và không tự đặt phòng. Booking do chủ nhà tạo và gắn tên sale.
- Có hai lớp giá: giá chủ nhà và giá sale bán. Khách không bao giờ thấy giá chủ nhà.
- Tính theo đêm, không theo ngày. Đêm cuối tuần mặc định là đêm T6 và T7.
- App không lưu thông tin khách.
- Căn tự nhập không có lịch trống. Không bao giờ hiển thị "trống" cho căn tự nhập.

**Chương sau dựa trên chương này thế nào.** Chương 2 cho bạn mô hình ba vai. Chương 3 lấp người và công cụ thật vào đó: việc nào bạn phải tự quyết, việc nào Đức nhận, việc nào giao Claude hay Claude Code, chỗ nào bắt buộc có người nghiệm thu. Chương 3 cũng xử lý rủi ro riêng của việc hai người dùng chung một tài khoản Claude. Bốn thứ AI cần sẽ là khung cho toàn bộ Phần 2 và Phần 3.


---

## Chương 3. Vai trò của tôi trong Home247

Vai trò của bạn là giữ ba thứ AI không giữ được: quyết định thế nào là đúng, chịu trách nhiệm cho kết quả, và nghiệm thu. Mọi việc khác đều giao được. Giao cho ai và kiểm tra chặt đến đâu không phụ thuộc việc đó khó hay dễ. Nó phụ thuộc hai câu hỏi: đây là quyết định hay là thực thi, và nếu sai thì có đắt và có dễ thấy không.

### Tình huống mở đầu

Sáng thứ Hai, danh sách việc của Home247 có năm dòng:

1. Chốt đêm Chủ nhật có tính là cuối tuần không.
2. Viết câu hướng dẫn cho trạng thái rỗng của màn Nguồn phòng (S7).
3. Viết test cho phần tính giá.
4. Chọn backend: Supabase hay tự dựng trên máy chủ riêng (VPS).
5. Đổi màu chip "cập nhật 9 ngày trước" cho dễ đọc hơn.

Trực giác thường chia theo độ khó. Việc 4 khó, mình làm. Việc 1 và 5 dễ, giao AI. Cách chia này sai ở cả hai đầu.

Việc 1 nghe dễ, AI trả lời trong một giây. Nhưng đó là quyết định sản phẩm, ảnh hưởng giá mọi căn, test, thống kê, và cách chủ nhà Hạ Long thật sự tính tiền. AI sẽ chọn theo cái phổ biến trên mạng, không theo thị trường của bạn. Việc 4 nghe khó, nhưng phần khó là phân tích kỹ thuật. Phần đó AI làm tốt hơn bạn. Phần bạn phải giữ chỉ là bước chốt cuối cùng.

Chương này đưa ra tiêu chí thay cho cảm giác "khó hay dễ", rồi dùng nó làm bảng phân công cho bạn, Đức, Claude và Claude Code.

### Product Owner và người điều phối AI

#### Vấn đề gốc

Một sản phẩm luôn có nhiều việc có thể làm hơn thời gian cho phép. Home247 có 15 ý tưởng tính năng, 27 màn hình, hàng chục quy tắc. Nếu không ai giữ quyền nói "cái này làm trước, cái kia chưa làm, cái này thế này mới là xong", thì ba chuyện xảy ra. Việc dễ được làm trước việc quan trọng. Hai người hiểu "xong" theo hai kiểu. Và với AI, quyết định bị ra ngầm bởi phiên nào viết code trước.

#### Bản chất

**Product Owner** là tên một vai trò trong phương pháp Scrum. Nhưng bạn không cần Scrum để hiểu nó. Bản chất là một người chịu trách nhiệm cho ba câu hỏi:

- Làm cái gì, và không làm cái gì.
- Làm theo thứ tự nào.
- Thế nào là xong.

**Người điều phối AI** thêm vào đó ba việc: chia việc thành phần AI làm và kiểm tra được, chuẩn bị đủ bốn thứ AI cần (Chương 2), và đọc bằng chứng để nghiệm thu.

Điểm chung của cả hai là bạn giữ phần **quyết định và phán xét**, không giữ phần **làm ra**. Đây là lý do bạn không cần viết được code.

#### Phép so sánh

Nghĩ tới chủ đầu tư xây một căn homestay. Chủ đầu tư không trộn bê tông, không đi dây điện. Nhưng ông quyết mấy phòng, view hướng nào, tiền dồn vào đâu. Ông nghiệm thu từng hạng mục trước khi làm hạng mục sau. Và ông phải hiểu đủ để biết khi nào thợ đang làm tắt, ví dụ móng đổ thiếu thép.

Giới hạn của phép so sánh này quan trọng. Chủ đầu tư thường thuê thêm kỹ sư giám sát, người có chuyên môn để soi những chỗ ông không soi được. Bạn không có kỹ sư giám sát. Vai đó do test tự động và chính bạn gánh. Vì vậy bạn cần hiểu kỹ thuật sâu hơn một chủ đầu tư bình thường, nhưng chỉ ở vài chỗ cụ thể. Mục "Cần hiểu kỹ thuật tới mức nào" bên dưới nói rõ đó là những chỗ nào.

### Tiêu chí giao việc

Thay câu hỏi "khó hay dễ" bằng ba câu hỏi, theo thứ tự. Sơ đồ ở cuối mục này vẽ lại đúng thứ tự đó.

**Câu 1. Đây có phải quyết định "thế nào là đúng" không?** Quyết định sản phẩm là lựa chọn giữa những thứ đều hợp lý, dựa trên giá trị và hiểu biết về người dùng. Đêm CN tính cuối tuần hay không, căn tự nhập có lịch hay không, sale có được thấy tên sale khác không. Không có đáp án đúng để AI tìm ra. Chỉ có lựa chọn phù hợp với chủ nhà và sale Hạ Long, và người chịu hậu quả là bạn. Nên phần chốt luôn là của bạn. Nếu để chọn được cần hiểu kỹ thuật, bạn phân tích cùng Claude trước, rồi vẫn tự chốt.

**Câu 2. Kết quả có phải là văn bản bạn đọc và đánh giá được không?** Tài liệu nháp, danh sách trường hợp biên, mẫu tin nhắn, bản rà mâu thuẫn. Bạn kiểm tra được bằng cách đọc. Giao Claude làm, bạn đọc lại.

**Câu 3. Nếu là code: sai thì có đắt và bấm thử có không thấy không?** Code giao Claude Code trong phạm vi đã ghi. Câu này chỉ quyết định cách kiểm tra. Sai thì đắt và khó thấy (quyền, tiền, dữ liệu) thì cần test tự động và người nghiệm thu. Sai thì rẻ và dễ thấy thì bấm thử là đủ.

Tiêu chí này loại bỏ hai thói quen. Một là tự tay làm việc kỹ thuật vì thấy khó, trong khi AI làm phần đó tốt hơn. Hai là giao luôn quyết định cho AI vì thấy nó nhỏ.

> *(Hình minh họa tương tác trong bản Claude Docs: giao việc cho ai · 3 câu hỏi, 4 kết quả. Bản Markdown không hiển thị được.)*

Câu hỏi đầu tiên lọc ra phần của bạn. Hai câu sau chỉ quyết định giao cho công cụ nào và kiểm tra chặt đến đâu.

#### Sáu nhóm việc

Từ ba câu hỏi trên sinh ra sáu nhóm. Nhóm thứ bảy là Đức, xét riêng ở mục bảng phân công.

| Nhóm | Loại việc | Ví dụ Home247 | Vì sao xếp vào đây |
| --- | --- | --- | --- |
| 1. Bạn tự quyết | Quyết định sản phẩm, phạm vi MVP, rủi ro chấp nhận được | Đêm cuối tuần, hiện giá mặc định bật, căn tự nhập không có lịch | Không có đáp án đúng, bạn chịu hậu quả |
| 2. Cùng Claude phân tích, bạn chốt | Quyết định cần hiểu kỹ thuật | Mini App thuần hay hybrid, Supabase hay VPS, lưu bản sửa riêng của sale thế nào | Claude thấy được hệ quả kỹ thuật, bạn thấy được hệ quả với người dùng |
| 3. Giao Claude, bạn đọc lại | Kết quả là văn bản | Viết nháp quy tắc từ quyết định đã chốt, rà mâu thuẫn, liệt kê trường hợp biên, câu chữ trạng thái rỗng | Kiểm tra được bằng đọc |
| 4. Claude Code trong phạm vi | Code theo đặc tả đã có | Code màn hình, hàm tính giá, test từ ví dụ của bạn | AI làm nhanh và tốt khi yêu cầu rõ |
| 5. Hệ thống tự kiểm | Kiểm tra lặp lại, có đáp án xác định | Test chạy mỗi lần đổi code, test cố tình đọc trộm giá, kiểm tra bản build | Máy làm việc lặp lại không mệt, không bỏ sót |
| 6. Con người nghiệm thu | Chỗ test không thay được đôi mắt người dùng | Chạy luồng chính trong Zalo trên điện thoại thật, quyết định phát hành, đổi quyền, chuyển đổi dữ liệu | Test chỉ bắt lỗi bạn đã nghĩ tới |

#### Làm mẫu với năm việc sáng thứ Hai

- **Việc 1, đêm CN có tính cuối tuần không.** Câu 1: có, đây là quyết định. Không cần kỹ thuật. → Nhóm 1. Bạn chốt, tốt nhất sau khi hỏi vài chủ nhà thật. Chốt xong ghi vào tài liệu quy tắc giá.
- **Việc 4, Supabase hay VPS.** Câu 1: có, là quyết định, nhưng cần hiểu kỹ thuật. → Nhóm 2. Claude so sánh chi phí, công sức vận hành, cách làm phân quyền. Bạn cân với mục tiêu học và sức của hai người, rồi chốt.
- **Việc 2, câu hướng dẫn trạng thái rỗng.** Câu 1: không, ý đã có trong bản mô tả thiết kế. Câu 2: có, là văn bản. → Nhóm 3.
- **Việc 3, test cho tính giá.** Đây là việc hay bị xếp sai nhất. Nó gồm hai phần khác nhau. Phần "ngày nào, giá nào thì phải ra bao nhiêu" là định nghĩa thế nào là đúng, thuộc nhóm 1. Phần biến các ví dụ đó thành code test thuộc nhóm 4. Nếu giao trọn cho AI cả hai phần, AI vừa viết code vừa tự đặt đáp án. Đó là chỗ sai 6 ở Chương 2, tự chấm bài mình.
- **Việc 5, đổi màu chip.** Câu 1: không. Câu 2: không, là code. Câu 3: sai thì rẻ và thấy ngay. → Nhóm 4, bấm thử là đủ. Lưu ý: màu này đang mang nghĩa (xanh, vàng, đỏ theo độ mới). Đổi sắc thì được, đổi ngưỡng ngày thì lại là quyết định, quay về nhóm 1.

### Cần hiểu kỹ thuật tới mức nào

Mức hiểu cần có ở mỗi lĩnh vực bằng **mức đủ để phát hiện AI đang lấp chỗ trống sai ở chỗ đắt**. Không hơn. Vì vai trò của bạn là nghiệm thu, bạn cần biết hỏi đúng câu và đọc được bằng chứng, chứ không cần tự làm ra.

Ngược lại, lĩnh vực nào AI hay lấp sai và lỗi không tự lộ ra thì bạn phải hiểu sâu hơn. Nên các lĩnh vực dưới đây không cần hiểu đều nhau. Phân quyền cần sâu nhất.

| Lĩnh vực | Mức cần hiểu | Dấu hiệu đã đủ | Không cần |
| --- | --- | --- | --- |
| Phân quyền | Sâu nhất. Tự viết được ma trận ai thấy gì, hiểu quyền phải chặn ở máy chủ và database | Nhìn một test quyền và nói được nó đang kiểm điều gì, còn thiếu trường hợp nào | Tự viết quy tắc RLS bằng SQL |
| Kiểm thử | Viết được ví dụ cụ thể (đầu vào, kết quả mong đợi), đọc được báo cáo test | Chỉ ra được quy tắc nào chưa có test | Viết code test |
| Kiến trúc | Biết các khối lớn: Mini App, máy chủ, database, Zalo. Biết cái gì chạy trên điện thoại, cái gì chạy trên máy chủ | Vẽ được sơ đồ năm hộp và nói được giá gốc đi qua những hộp nào | Chi tiết thư viện, cú pháp |
| Triển khai | Biết môi trường thử khác môi trường thật, biết quay lại bản trước, biết khóa bí mật không được nằm trong code chạy trên điện thoại | Trả lời được "nếu bản mới lỗi thì quay lại bằng cách nào" | Cấu hình máy chủ |
| Code | Đọc lướt được danh sách thay đổi trong Git: file nào đổi, đổi nhiều hay ít | Nhận ra khi một việc sửa màu lại kéo theo đổi file tính giá | Đọc hiểu từng dòng |

#### Vì sao phân quyền cần hiểu sâu nhất

Phân quyền hội đủ cả ba điều kiện xấu. AI hay lấp bằng mặc định phổ biến (Chương 2, chỗ sai 1). Lỗi không lộ khi bạn bấm thử bằng tài khoản của mình. Và đây là cam kết trực tiếp với người dùng, đúng vào nỗi sợ khiến sale ngại tham gia.

Với bạn, khái niệm này không hoàn toàn mới. RLS trong Supabase cùng ý tưởng với RLS trong Power BI: mỗi dòng dữ liệu chỉ hiện cho đúng người được phép xem. Nhưng có hai khác biệt làm nó quan trọng hơn nhiều:

- Trong Power BI, người xem chỉ đọc qua báo cáo. Trong Home247, điện thoại của sale gọi thẳng vào database. Nếu quy tắc RLS thiếu, không có lớp báo cáo nào che lại. Ai biết cách gọi là đọc được.
- Trong Power BI, RLS chỉ lọc việc đọc. Trong Home247, nó còn phải chặn việc ghi. Sale không được tự tạo booking trên lịch của chủ nhà, cộng tác viên không được sửa giá.

Nên mục tiêu của bạn không phải là viết được RLS. Mục tiêu là viết được **ma trận quyền** bằng lời: mỗi loại dữ liệu, mỗi loại người dùng, được đọc hay ghi gì. Rồi đọc được kết quả test xem mỗi ô trong ma trận đã có bằng chứng chưa. Chương 12 sẽ cùng bạn làm ma trận đó.

### Bảng phân công cho Home247

Bảng dưới đây là đề xuất, chưa phải quyết định. Nó dựa trên cách chia đã có: bạn làm phân tích và thiết kế, Đức nhận việc làm được trước khi có thiết kế. Mình chưa biết kỹ năng cụ thể của Đức, nên hai bạn cần chỉnh lại cho khớp.

Bảng tách bốn vai cho mỗi việc. **Quyết** là người chốt thế nào là đúng. **Làm** là người hoặc công cụ tạo ra kết quả. **Kiểm** là thứ đưa ra bằng chứng. **Nghiệm thu** là người nói "xong". Quy tắc gốc từ Chương 2 áp vào đây: cột Làm và cột Kiểm không được là cùng một thứ.

| Việc | Quyết | Làm | Kiểm | Nghiệm thu |
| --- | --- | --- | --- | --- |
| Quy tắc nghiệp vụ (giá, lịch, booking) | Tùng | Claude viết nháp từ quyết định | Đức đọc phản biện, Claude phiên khác rà mâu thuẫn | Tùng |
| Ma trận quyền | Tùng | Claude viết nháp | Đức và Claude phiên khác tìm chỗ hở | Tùng và Đức cùng ký |
| Thiết kế màn hình | Tùng | Claude Design từ bản mô tả | Đức cầm điện thoại thử | Tùng |
| Thử nghiệm kỹ thuật Zalo (lấy số điện thoại, chia sẻ, thu nhỏ, Zalo trên máy tính) | Đức chọn cách thử | Claude Code | Chạy thật trong Zalo | Đức báo kết quả, Tùng cập nhật tài liệu |
| Chọn backend, Mini App thuần hay hybrid | Tùng và Đức | Claude phân tích các phương án | Đối chiếu tài liệu chính thức và kết quả thử nghiệm | Ghi thành quyết định kèm lý do |
| Dựng nền: repository, database thử, quy trình đưa lên Zalo thử | Đức | Claude Code | Chạy thử một màn hình "Hello" tới Zalo | Đức |
| Code một tính năng | Đặc tả đã chốt | Claude Code | Test tự động và review bằng phiên khác | Người phụ trách tính năng chạy luồng chính |
| Ví dụ cho test giá và test quyền | Tùng | Tùng viết ví dụ, Claude Code biến thành test | Chạy tự động | Tùng đọc kết quả |
| Phát hành lên Zalo | Tùng và Đức | Đức | Danh sách kiểm tra trước phát hành | Cả hai |

Vì sao Đức hợp với các việc thử nghiệm Zalo và dựng nền: chúng không chờ thiết kế xong, và chúng là những phần chưa biết có nhiều thứ phụ thuộc nhất (Chương 1). Làm song song với việc bạn vẽ thiết kế thì rút ngắn được thời gian chung.

#### Cách bàn giao giữa hai người

Nhóm bạn có ba nguồn quên: bạn, Đức, và AI không nhớ giữa các phiên. Bàn giao bằng tin nhắn Zalo hay bằng lời thì cả ba nguồn đều rò. Nên có bốn quy ước, xếp theo mức quan trọng:

1. **Mỗi việc có đúng một người chủ.** Hai người cùng là chủ nghĩa là không ai chủ. Ở bảng trên, những ô ghi "Tùng và Đức" chỉ nằm ở cột Quyết hoặc Nghiệm thu, không nằm ở cột Làm.
2. **Quyết định chỉ có giá trị khi đã ghi vào tài liệu chuẩn.** Chốt trong lúc nói chuyện mà chưa ghi thì coi như chưa chốt. Nếu không, AI và người còn lại đều không biết.
3. **Bàn giao bằng file, không bằng tin nhắn.** Cuối mỗi buổi làm, viết ba dòng vào một file bàn giao: đã làm gì, còn dở gì, quyết định nào đang chờ ai. Phiên AI sau và người kia đều đọc được. Đây cũng là hai dòng ghi mỗi ngày trong tài liệu nguyên lý lên kế hoạch của bạn, mở rộng thêm một dòng.
4. **Không sửa việc đang là của người kia.** Thấy chỗ sai thì ghi lại cho người chủ việc đó. Hai người cùng sửa một file một lúc thì người lưu sau ghi đè người lưu trước. Chương 6 sẽ nói cách Git giúp tránh việc này với code.

Mẫu ghi chú bàn giao:

```
Ngày 22/10 · Đức
Đã làm: thử lấy số điện thoại trên Mini App thử. Chạy được trên Android.
Còn dở: chưa thử iPhone. Chưa thử khi người dùng bấm "Từ chối".
Chờ quyết định: Tùng chốt câu chữ màn A2 trước khi nộp duyệt.
```

Mẫu trên là minh họa, không phải kết quả thử nghiệm thật.

### Rủi ro của việc dùng chung một tài khoản Claude

Bạn và Đức đang dùng chung một tài khoản. Mình xếp các rủi ro theo mức nguy hiểm. Rủi ro đầu tiên nằm ngoài chuyện kỹ thuật nhưng nặng nhất.

**1. Trái điều khoản sử dụng.** Điều khoản dành cho người dùng cá nhân của Anthropic ghi rõ không được chia sẻ thông tin đăng nhập tài khoản cho người khác, và chủ tài khoản chịu trách nhiệm cho mọi hoạt động trong tài khoản ([Consumer Terms](https://www.anthropic.com/legal/consumer-terms)). Hệ quả xấu nhất là tài khoản bị khóa, kéo theo mất cả Project, tài liệu và lịch sử làm việc của dự án. **Cách phòng:** mỗi người một tài khoản. Anthropic có gói dành cho nhóm làm việc chung. Giá và điều kiện hiện hành thì xem tại [support.claude.com](https://support.claude.com). Mình không ghi số ở đây vì số có thể đã đổi.

**2. Bộ nhớ của Claude lẫn hai người làm một.** Claude có thể ghi nhớ thông tin qua các cuộc trò chuyện. Khi hai người dùng chung, nó không phân biệt được câu nào là của ai. Một ý Đức nêu ra khi đang thử nghiệm có thể được Claude coi là quyết định của bạn ở phiên sau. Đây là chỗ sai 4 ở Chương 2, nhưng khó phát hiện hơn. **Cách phòng:** quyết định chỉ nằm trong tài liệu chuẩn, không dựa vào bộ nhớ. Khi còn dùng chung, đầu mỗi phiên nói rõ ai đang làm việc.

**3. Không truy được ai đã quyết hoặc đổi gì.** Mọi thay đổi đều mang cùng một tên. Khi có lỗi, không biết hỏi ai. **Cách phòng:** mỗi người một tài khoản GitHub riêng, danh sách quyết định ghi người chốt, ghi chú bàn giao ghi tên người viết.

**4. Giới hạn sử dụng dùng chung.** Mỗi tài khoản có giới hạn số lượng sử dụng trong một khoảng thời gian. Một người chạy việc nặng bằng Claude Code có thể làm người kia hết lượt đúng lúc cần. **Cách phòng:** tách tài khoản.

Bốn rủi ro có chung một cách phòng gốc là mỗi người một tài khoản. Các quy ước bàn giao ở mục trên vẫn cần giữ, vì chúng giải quyết chuyện hai người làm chung một dự án, dù có tài khoản riêng hay không.

### Sai lầm phổ biến

- **Product Owner làm thay việc kỹ thuật, bỏ trống việc quyết định.** Ngồi cả buổi chỉnh code cùng Claude Code vì thấy vui và thấy tiến độ. Trong khi đó ba quyết định về giá vẫn treo, và AI ra thay. Phòng: mỗi tuần nhìn danh sách quyết định đang chờ trước khi mở Claude Code.
- **Giao quyết định bằng câu "bạn thấy cách nào tốt thì làm".** Câu này mời AI lấp chỗ trống bằng cái phổ biến. Phòng: hỏi "cho tôi hai ba phương án và hệ quả của từng cái", rồi tự chọn.
- **Nghiệm thu bằng bản chạy trên trình duyệt máy tính.** Mini App chạy trong Zalo trên điện thoại, có thanh tiêu đề riêng, có bảng chia sẻ riêng, có quyền xin số điện thoại riêng. Những thứ này không hiện trên trình duyệt. Phòng: luồng chính luôn được nghiệm thu trong Zalo trên điện thoại thật.
- **Hai người cùng là chủ một việc.** Mỗi người nghĩ người kia đang làm. Phòng: mỗi dòng trong danh sách việc chỉ có một tên.

### Dấu hiệu đã hiểu

Nhận một việc mới bất kỳ và xếp được nó vào đúng nhóm, có lý do. Nếu việc đó gồm nhiều phần, tách được phần quyết định ra khỏi phần thực thi, như đã làm với việc viết test tính giá.

### Kết thúc chương

**Điều quan trọng nhất**

- Bạn giữ quyết định, trách nhiệm và nghiệm thu. Phần làm ra giao được.
- Giao cho ai không phụ thuộc khó hay dễ. Nó phụ thuộc: đây là quyết định hay thực thi, kết quả có đọc được không, sai thì đắt và khó thấy không.
- Bạn cần hiểu kỹ thuật đến mức phát hiện được AI lấp chỗ trống sai ở chỗ đắt. Phân quyền là chỗ cần hiểu sâu nhất.
- Dùng chung tài khoản trái điều khoản và làm lẫn bộ nhớ. Nên tách tài khoản.

**Khái niệm cần nhớ.** Product Owner: người chịu trách nhiệm làm gì, thứ tự nào, thế nào là xong. Ma trận quyền: bảng mỗi loại người dùng được đọc, ghi loại dữ liệu nào. Người chủ việc: một người duy nhất chịu trách nhiệm cho một việc.

**Bài tập**

1. Xếp năm việc sau vào sáu nhóm, kèm một câu lý do. Nếu việc nào gồm nhiều phần, tách ra.
   - Viết câu xin quyền số điện thoại ở màn A2.
   - Quyết định cảnh báo lịch cũ sau bao nhiêu ngày.
   - Thêm nút "Sao chép link" vào CN10.
   - Kiểm tra xem cộng tác viên có đọc được giá gốc không.
   - Chuyển dữ liệu căn tự nhập sang căn của chủ nhà khi chủ nhà vào app.
2. Viết một ghi chú bàn giao thật cho buổi làm việc gần nhất của bạn, theo mẫu ba dòng.
3. Câu hỏi suy luận: Claude Code đang code phần tính giá thì đề xuất "nên tính đêm CN là cuối tuần vì phổ biến hơn", rồi sửa luôn. Việc này sai ở đâu theo bảng phân công? Bạn xử lý thế nào, và sửa gì trong hệ thống để lần sau nó hỏi trước?

**Áp dụng ngay**

- Ngồi 30 phút với Đức, sửa bảng phân công ở trên cho khớp kỹ năng thật của hai người, và chốt bốn quy ước bàn giao.
- Quyết định chuyện tách tài khoản Claude.

**Chương sau dựa trên chương này thế nào.** Chương 3 cho bạn biết việc nào giao cho "Claude" và việc nào giao cho "Claude Code". Chương 4 giải thích hai công cụ này khác nhau thế nào, vì sao có việc hợp cái này mà không hợp cái kia, và tài liệu đang nằm trong Claude Project nên giữ ở đó hay chuyển vào repository.
