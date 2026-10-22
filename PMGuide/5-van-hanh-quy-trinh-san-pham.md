# Phần 5. Vận hành quy trình sản phẩm

## Chương 19. Từ ý tưởng đến yêu cầu rõ ràng

Một ý tưởng đi qua sáu bước trước khi thành yêu cầu: tách mong muốn khỏi nhu cầu, lộ ra giả định, tìm mâu thuẫn, so phương án, chốt phạm vi, viết yêu cầu. Claude giỏi ở việc đặt câu hỏi và lật giả định. Bạn giữ phần chốt. Kết quả cuối cùng là yêu cầu có ví dụ số và một danh sách "cần Tùng chốt".

### Mong muốn và nhu cầu

Người dùng nói ra giải pháp họ tưởng tượng, không phải vấn đề họ gặp. Chủ nhà nói "tôi muốn khóa phòng một chạm". Hỏi vì sao hai lần: vì đang nghe sale gọi, vì sợ quên ghi. Nhu cầu là **ghi được booking ngay trong lúc đang nghe điện thoại**. Khóa một chạm là một cách, form ngắn với mặc định tốt như CN4 là cách khác.

Bám vào mong muốn thì làm đúng thứ người dùng nói mà vẫn không giải quyết được vấn đề của họ.

### Giả định

Mỗi tính năng đứng trên vài điều bạn tin mà chưa kiểm chứng. Xếp chúng theo hai câu: sai thì hỏng gì, và đã có bằng chứng chưa.

| Giả định của Home247 | Sai thì hỏng gì | Bằng chứng |
| --- | --- | --- |
| Chủ nhà chịu ghi lịch đều | Cả sản phẩm vô dụng | Chưa có |
| Sale chịu dùng app dù sợ bị lấy liên hệ | Không có người xem lịch | Chưa có |
| Cá nhân được cấp quyền lấy số điện thoại | Phải đổi cách đăng nhập và mời | Chưa có |

Giả định nằm ô "sai thì hỏng cả" và "chưa có bằng chứng" phải được kiểm trước khi làm nhiều.

### Kiểm chứng khi chưa có mạng lưới phỏng vấn

- **Quan sát:** vào các nhóm Zalo rao phòng, đếm mỗi ngày bao nhiêu tin hỏi phòng, sale hỏi những gì, chủ nhà trả lời bao lâu.
- **Người quen:** vài người có phòng cho thuê hoặc từng làm sale. Một cuộc trò chuyện 20 phút có giá trị hơn một tuần tự nghĩ.
- **Dùng thử mỏng:** đưa bản bấm thử hoặc một luồng tối thiểu cho 2 đến 3 người dùng thật trong một tuần, xem họ có quay lại không.

> **Nguyên lý.** AI đóng vai người dùng chỉ tạo ra giả thuyết, không tạo ra bằng chứng. Claude đóng vai chị Lan sẽ nói điều phổ biến trên mạng, không phải điều sale Hạ Long thật làm.

### Quy trình với Claude

1. Mô tả ý tưởng bằng lời của bạn, kèm ai đã nói ra nó.
2. Chạy /discover-feature (Chương 15): câu hỏi, phương án, mâu thuẫn với quyết định cũ, màn hình bị ảnh hưởng.
3. Nhờ Claude chỉ ra giả định ẩn trong ý tưởng.
4. Bạn chốt phạm vi, kèm dòng "không làm gì".
5. Claude viết user story và acceptance criteria. Bạn sửa ví dụ số cho đúng.
6. Ghi quyết định vào decision log (Chương 13).

Không để Claude vừa nghe ý mơ hồ vừa code, vì mọi câu hỏi ở bước 2 đến 5 sẽ được AI trả lời ngầm bằng mặc định phổ biến (Chương 2).

> **Chú ý.** Chốt phạm vi luôn kèm câu "không làm gì". Không có câu đó, AI và cả bạn sẽ làm thêm "cho đủ".

### Tóm tắt

- Tách mong muốn khỏi nhu cầu bằng cách hỏi vì sao hai ba lần.
- Xếp giả định theo mức hậu quả và mức bằng chứng. Kiểm giả định nguy hiểm nhất trước.
- Không có mạng lưới phỏng vấn thì quan sát, hỏi người quen, cho dùng thử mỏng.
- **Nguyên lý:** AI đóng vai người dùng tạo giả thuyết, không tạo bằng chứng.
- **Chú ý:** phạm vi luôn có dòng "không làm gì".
- **Bài tập:** vào một nhóm Zalo rao phòng Hạ Long trong ba ngày, ghi lại số tin hỏi phòng và các câu sale hay hỏi. So với giả định của bạn.
- **Chương sau:** biến các yêu cầu đã chốt thành kế hoạch.


---

## Chương 20. Lập kế hoạch dự án

Kế hoạch tốt cho Home247 đặt hai loại việc lên đầu: **phần chưa biết có nhiều thứ phụ thuộc**, và **việc kiểm chứng giả định nguy hiểm nhất**. Tiến độ đo bằng số việc đạt Definition of Done, không đo bằng lời báo cáo. Chương này áp trực tiếp tài liệu nguyên lý lên kế hoạch bạn đang dùng.

### Các tầng kế hoạch

| Tầng | Nghĩa | Ví dụ Home247 |
| --- | --- | --- |
| Roadmap | Thứ tự các giai đoạn lớn | MVP, rồi yêu cầu giữ chỗ, rồi quản gia |
| Milestone | Mốc kiểm tra được, có kết quả thật | Chủ nhà gửi link, sale mở trong Zalo thấy lịch |
| Epic | Nhóm tính năng | Tìm phòng cho sale |
| Feature | Một tính năng | Màn S2 Kết quả tìm phòng |
| Task, subtask | Việc vừa cỡ giao AI được | Lọc căn trống theo ngày và quyền (Chương 14) |

Milestone phải là một kết quả người dùng thấy được, không phải "xong 60% database". Phần trăm không kiểm tra được.

### Phụ thuộc và critical path

Chuỗi phụ thuộc dài nhất của Home247, theo hiểu biết hiện tại: nền Zalo và đăng nhập, rồi data model và quyền, rồi tính giá, rồi tìm phòng, rồi gửi khách. Giao diện từng màn có thể song song. Đẩy nhanh giao diện không làm MVP xong sớm hơn nếu chuỗi chính còn kẹt.

### Ước lượng khi làm cùng AI

AI viết code nhanh, nên phần lớn thời gian nằm ở việc làm rõ yêu cầu, kiểm tra và sửa lại. Ước lượng theo số vòng "giao việc, kiểm, sửa" thường sát hơn ước lượng giờ code. Đây là kinh nghiệm, chưa phải quy luật đã đo. Cách duy nhất để biết với nhóm bạn là ghi ước lượng trước và so với thực tế, đúng mẫu một trang trong tài liệu nguyên lý.

### Kế hoạch MVP đề xuất

Đây là đề xuất, chưa phải quyết định. Thứ tự từ M2 trở đi sẽ đổi theo kết quả của M0.

| Mốc | Kết quả kiểm tra được | Vì sao đứng ở vị trí này |
| --- | --- | --- |
| M0 · Nền và phần chưa biết | Mini App trống chạy trong Zalo. Đã thử lấy số điện thoại, chia sẻ, Zalo trên máy tính. Đã chọn backend | Phần chưa biết có nhiều thứ phụ thuộc nhất |
| M1 · Lõi dữ liệu và quyền | Data model, ma trận quyền đã duyệt, test quyền chạy qua | Quyết định đắt nhất để đổi |
| M2 · Lát mỏng | Chủ nhà tạo căn, ghi booking đơn giản, gửi link. Sale mở link thấy lịch. 2 đến 3 người thật dùng thử một tuần | Kiểm giả định "chủ nhà chịu ghi lịch" càng sớm càng tốt |
| M3 · Giá và lịch đầy đủ | Quy tắc giá, mẫu giá, CN1, CN2, CN4 đạt Definition of Done | Chỉ làm sâu sau khi lát mỏng có người dùng |
| M4 · Sale | Tìm phòng, bản riêng, gửi khách, căn tự nhập | Dựa vào giá và quyền đã có |
| M5 · Hoàn thiện và phát hành | Thống kê, đội nhóm, danh sách kiểm tra phát hành, nộp duyệt Zalo | Phần giá trị thêm, không chặn luồng chính |

> **Nguyên lý.** Kế hoạch đặt phần chưa biết và việc kiểm chứng giả định lên đầu. Làm đẹp một sản phẩm chưa ai chứng minh là cần là rủi ro lớn nhất.

### Theo dõi tiến độ

Tiến độ là số việc đạt Definition of Done (Chương 12). "Gần xong" tính là chưa xong. Mỗi tuần xem lại 15 phút theo tài liệu nguyên lý: ước lượng lệch bao nhiêu, lệch vì sao, lần sau làm khác gì.

> **Chú ý.** Đừng để AI báo cáo tiến độ thay bạn. Nó sẽ nói "đã xong phần lớn" với cùng giọng tự tin dù còn thiếu test hay chưa chạy trong Zalo.

### Tóm tắt

- Milestone là kết quả người dùng thấy được. Task là việc vừa cỡ giao AI.
- Critical path của Home247: nền Zalo, dữ liệu và quyền, giá, tìm phòng, gửi khách.
- Kế hoạch đề xuất sáu mốc, có lát mỏng M2 để kiểm giả định sớm.
- **Nguyên lý:** phần chưa biết và kiểm chứng giả định lên đầu.
- **Chú ý:** tiến độ đo bằng Definition of Done, không bằng lời báo cáo.
- **Bài tập:** điền mẫu kế hoạch một trang cho M0, ghi ước lượng trước, chia việc giữa bạn và Đức.
- **Chương sau:** thiết kế sản phẩm cùng Claude.


---

## Chương 21. Thiết kế sản phẩm với Claude

Thiết kế đi từ hành trình người dùng xuống đặc tả màn hình. Claude giúp nhanh ở việc liệt kê bước, trạng thái, phản biện và viết đặc tả. Nhưng một thiết kế chỉ được kiểm đúng khi **người thật cầm điện thoại thật**, một tay, trong Zalo.

### Từ hành trình đến đặc tả

| Bước | Claude giúp gì | Bạn làm gì |
| --- | --- | --- |
| Hành trình | Viết lại chuyện chị Lan trả lời khách thành các bước | Sửa cho đúng thực tế Hạ Long |
| User flow | Liệt kê màn và đường đi, kể cả đường lỗi | Chọn luồng chính |
| Wireframe, prototype | Vẽ bằng Claude Design | Bấm thử trên điện thoại |
| Design system | Gom quy tắc chữ, màu, vùng bấm thành token | Duyệt |
| Đặc tả màn | Viết đủ bốn trạng thái, dữ liệu cực trị, ai thấy gì (Chương 10) | Kiểm khớp quy tắc |

### Ví dụ xuyên suốt: sale tìm phòng và gửi khách

Luồng S1 → S2 → S3 → S4 → S5. Những câu nên hỏi khi xem thiết kế:

- **Bao nhiêu chạm** từ lúc mở app đến lúc khách nhận ảnh? Mỗi chạm thừa là một lý do quay về gọi điện.
- **Chỗ nào phải gõ?** Đang nghe điện thoại thì gõ là chỗ bỏ cuộc.
- **Chỗ nào dễ nhầm giá chủ nhà với giá bán?** Nhầm ở S5 là gửi giá gốc cho khách.
- **Giới hạn Zalo thể hiện ra sao?** Chia sẻ mỗi lần một kiểu, nên ảnh và chữ là hai bước có đánh số.

> **Chú ý.** Trên mọi màn của sale, giá chủ nhà và giá bán phải phân biệt bằng chữ và vị trí, không chỉ bằng màu. Nhầm hai con số này là lỗi đắt nhất của phía sale.

### Kiểm UX trước khi code

- **Bấm thử trên điện thoại thật, một tay**, không xem trên màn máy tính.
- **Đi qua từng bước và hỏi:** người dùng có biết bước tiếp theo là gì không, có thấy nút cần bấm không, bấm xong có biết đã thành công không.
- **Đưa 2 đến 3 người thật** làm một việc cụ thể, bạn chỉ quan sát, không giải thích. Chỗ họ dừng lại là chỗ cần sửa.

Claude có thể đóng vai người dùng để phản biện trước, giúp lọc lỗi hiển nhiên. Nhưng như Chương 19, đó là giả thuyết, không thay người thật.

> **Nguyên lý.** Kiểm thiết kế bằng tay người thật trên điện thoại thật. Mắt nhìn trên màn lớn không thấy được tầm ngón cái và áp lực đang nghe điện thoại.

### Quản lý thay đổi thiết kế

Đổi thiết kế → cập nhật đặc tả màn → nếu đổi hành vi thì ghi decision log → tạo việc code. Bỏ bước giữa thì code và thiết kế lệch nhau, và phiên AI sau "sửa" ngược lại theo bản cũ (Chương 13).

### Tóm tắt

- Thiết kế đi từ hành trình, flow, prototype, design system đến đặc tả màn. Claude làm nhanh mọi bước, bạn sửa cho đúng thực tế.
- Xem thiết kế bằng bốn câu: số chạm, chỗ gõ, chỗ nhầm giá, giới hạn Zalo.
- **Nguyên lý:** kiểm bằng tay người thật trên điện thoại thật.
- **Chú ý:** giá chủ nhà và giá bán phân biệt bằng chữ và vị trí. Thay đổi thiết kế đi qua đặc tả trước khi tới code.
- **Bài tập:** đếm số chạm của luồng S1 đến S5 trên thiết kế hiện tại. Đề xuất một cách bớt hai chạm mà không làm tăng nguy cơ nhầm giá.
- **Chương sau:** biến đặc tả thành code bằng Claude Code.


---

## Chương 22. Lập trình bằng Claude Code

Một việc code đi qua bảy bước: đọc, lập kế hoạch, làm từng phần, chạy test, review, commit và pull request, bàn giao. Bạn không cần viết code. Bạn cần biết ở mỗi bước mình nhìn vào đâu và hỏi câu gì.

### Bảy bước và việc của bạn ở mỗi bước

| Bước | Claude Code làm | Bạn làm |
| --- | --- | --- |
| 1. Đọc | Đọc CLAUDE.md, tài liệu được trỏ tới, code liên quan | Giao việc theo mẫu sáu phần (Chương 14) |
| 2. Kế hoạch | Liệt kê file sẽ đổi, thứ tự, rủi ro, chưa sửa gì | Duyệt. Kế hoạch chạm ngoài phạm vi thì dừng |
| 3. Làm từng phần | Code theo kế hoạch | Không chen vào giữa chừng trừ khi nó hỏi |
| 4. Test | Biến acceptance criteria thành test, chạy | Xem kết quả test, không xem lời tóm tắt |
| 5. Review | spec-reviewer đối chiếu tài liệu (Chương 16) | Đọc mục "không có quy tắc nào nói" |
| 6. Pull request | Mô tả, danh sách file, kết quả test | Nhìn ba thứ ở Chương 6, chạy luồng chính trong Zalo |
| 7. Bàn giao | Cập nhật handoff.md | Kiểm ba dòng có đúng không |

Claude Code có chế độ lập kế hoạch chỉ đọc (plan mode). Đây là cách gọn nhất để có bước 2 mà không sợ nó sửa trước khi bạn duyệt.

### Xử lý lỗi

Khi có lỗi, đưa cho Claude Code ba thứ: thông báo lỗi nguyên văn, các bước làm lỗi hiện ra, và kết quả đúng lẽ ra phải là gì. Rồi yêu cầu nó **viết một test tái hiện lỗi trước**, chạy thấy test đỏ, rồi mới sửa cho test xanh.

Vì sao làm thứ tự này: test đỏ chứng minh nó đã bắt đúng lỗi, test xanh chứng minh lỗi đã hết, và test ở lại trong dự án để lỗi không quay lại. Sửa trước rồi viết test sau thì test thường chỉ kiểm đúng cái vừa sửa, không chứng minh được nó từng bắt lỗi.

> **Nguyên lý.** Một lỗi chỉ được coi là đã sửa khi có một test từng đỏ vì nó và giờ xanh.

### Chạy thử Mini App

Zalo có công cụ để chạy thử Mini App trên trình duyệt và trên điện thoại. Trình duyệt đủ để xem bố cục. Nhưng xin quyền số điện thoại, bảng chia sẻ, thanh tiêu đề Zalo chỉ có trong Zalo thật. Nên mọi luồng có chạm vào các thứ đó phải được thử trên điện thoại trong Zalo trước khi tính là xong. Cách cài và dùng công cụ cụ thể thì xem tài liệu Zalo Mini App hiện hành.

### Vài thuật ngữ sẽ gặp

- **Build:** đóng gói code thành bản chạy được. Mini App phải dưới 10MB sau khi build.
- **Dependency:** thư viện người khác viết mà dự án dùng. Thêm dependency là thêm dung lượng và thêm thứ phải cập nhật.
- **Lỗi biên dịch và lỗi lúc chạy:** loại đầu hiện khi build, loại sau chỉ hiện khi ai đó bấm tới đúng chỗ. Loại sau nguy hiểm hơn vì qua được build.

> **Chú ý.** Một pull request một ý. Nếu Claude Code đề nghị "tiện sửa luôn" thứ khác, ghi vào backlog thành việc riêng.

> **Chú ý.** Claude Code đề nghị thêm thư viện mới thì hỏi lại: có cách làm không cần thêm không, nó làm bản build nặng thêm bao nhiêu.

### Tóm tắt

- Bảy bước từ đọc đến bàn giao. Bạn giữ bước duyệt kế hoạch và bước nghiệm thu.
- Sửa lỗi theo thứ tự: test tái hiện đỏ, sửa, test xanh.
- Luồng có xin quyền hoặc chia sẻ phải thử trong Zalo thật.
- **Nguyên lý:** lỗi đã sửa là lỗi có test từng đỏ và giờ xanh.
- **Chú ý:** một pull request một ý. Hỏi lại trước khi thêm thư viện.
- **Bài tập:** viết lời giao việc sửa lỗi cho tình huống "đặt 3 đêm bị báo thiếu 400k" ở Chương 6, theo thứ tự test đỏ rồi sửa.
- **Chương sau:** kiểm thử, từng loại test chứng minh được gì.


---

## Chương 23. Kiểm thử và kiểm soát chất lượng

Mỗi loại test chứng minh một thứ và bỏ qua những thứ khác. Không loại nào đủ một mình. Chiến lược kiểm thử là chọn đúng loại cho đúng rủi ro, và nhớ rằng test xanh chỉ nói về đúng những gì nó kiểm.

### Bảy loại test

| Loại | Kiểm gì | Không chứng minh được gì |
| --- | --- | --- |
| Unit | Một hàm nhỏ, ví dụ tính giá một đêm | Các phần ghép lại có chạy đúng không |
| Integration | Nhiều phần cùng nhau, ví dụ API có trả đúng dữ liệu đã lọc quyền từ database không | Giao diện có dùng được không |
| End-to-end | Cả luồng từ màn hình xuống database | Người thật có hiểu không. Thường chậm và dễ hỏng |
| Regression | Lỗi cũ không quay lại | Lỗi mới |
| Security | Quyền bị chặn khi cố tình vi phạm | Lỗ hổng chưa ai nghĩ tới |
| Acceptance | Acceptance criteria được thỏa | Criteria viết có đúng nhu cầu không |
| Manual | Người bấm thử trên điện thoại | Lặp lại đều đặn mỗi lần đổi code |

Cách phân bổ hay dùng: nhiều unit test vì nhanh và rẻ, vừa đủ integration cho quyền và dữ liệu, ít end-to-end, và thử tay luồng chính trước mỗi lần phát hành.

### Chiến lược cho Home247

| Tình huống | Loại test | Cách làm |
| --- | --- | --- |
| Quyền xem giá khi công tắc bật và tắt | Security, integration | Nhiều tài khoản thử, gọi thẳng database thử |
| Sale đọc dữ liệu chủ nhà khác hoặc chưa đồng ý | Security | Sale B đọc căn chủ A → không nhận dòng nào |
| Sale bị ngừng chia sẻ, link cũ sau khi tạo link mới | Security | Thử truy cập sau khi thu hồi |
| Tính giá khi lễ, mùa, cuối tuần chồng nhau | Unit | Dùng đúng ví dụ số trong business rules |
| Hai booking trùng ngày một căn, kể cả hai máy cùng lúc | Integration | Gửi hai yêu cầu song song. Chỉ một được lưu. Chặn ở database, không chỉ ở giao diện |
| Chủ nhà đổi trường sale đã sửa trong bản riêng | Integration | Bản riêng giữ nguyên, có cảnh báo "chủ nhà vừa cập nhật" |
| Nội dung gửi khách không chứa giá chủ nhà | Unit, end-to-end | Kiểm văn bản sinh ra từ mẫu tin nhắn |
| Lời mời không lộ số đã dùng app chưa | Integration | So phản hồi cho số có và số không có tài khoản, phải giống hệt |
| Mạng chập chờn, bấm Lưu hai lần | Integration, manual | Bấm hai lần chỉ tạo một booking. Thử tay khi tắt mạng giữa chừng |

> **Nguyên lý.** Mỗi loại test chứng minh một thứ. Chọn loại test theo rủi ro, không theo thói quen.

> **Chú ý.** Test xanh chỉ nói về đúng những gì nó kiểm. 200 test xanh mà không có test nào đăng nhập bằng tài khoản sale thì vẫn chưa biết gì về quyền.

> **Chú ý.** Chặn trùng booking phải nằm ở database. Kiểm tra ở giao diện không chặn được hai máy gửi cùng một lúc.

### Tóm tắt

- Bảy loại test, mỗi loại chứng minh một thứ và bỏ qua thứ khác.
- Nhiều unit, đủ integration cho quyền và dữ liệu, ít end-to-end, thử tay luồng chính.
- Chiến lược Home247 gắn mỗi tình huống rủi ro với một loại test cụ thể.
- **Nguyên lý:** chọn loại test theo rủi ro.
- **Chú ý:** test xanh chỉ nói về điều nó kiểm. Chặn trùng ở database.
- **Bài tập:** với mỗi dòng của bảng chiến lược, viết một câu "Khi... thì..." có số hoặc tài khoản cụ thể.
- **Chương sau:** đưa sản phẩm đã kiểm thử tới người dùng.


---

## Chương 24. Deploy và vận hành sản phẩm

Deploy là đưa code đã kiểm tới nơi người dùng chạm vào. Nó an toàn khi có ba thứ: môi trường thử tách khỏi môi trường thật, cách quay lại khi sai, và cách biết khi có lỗi. Deploy thành công chỉ có nghĩa code đã lên, chưa có nghĩa sản phẩm sẵn sàng.

### Các môi trường

| Môi trường | Dùng để | Home247 |
| --- | --- | --- |
| Local | Người làm thử trên máy mình hoặc phiên Claude Code | Database giả |
| Development | Ghép việc của hai người | Database thử, Mini App bản phát triển |
| Staging | Bản giống thật nhất để thử lần cuối | Database thử có cấu trúc giống thật, dữ liệu giả |
| Production | Người dùng thật | Database thật, Mini App đã duyệt |

Với nhóm hai người, có thể gộp development và staging làm một. Không gộp được staging với production.

### Các khái niệm

- **Build, release, deploy:** build là đóng gói, release là đặt tên một phiên bản sẽ phát hành, deploy là đưa nó lên môi trường.
- **Biến môi trường và secrets:** giá trị khác nhau giữa các môi trường, như địa chỉ database. Khóa bí mật của Zalo chỉ nằm trên máy chủ, không bao giờ trong code Mini App và không commit lên Git.
- **CI/CD:** test tự chạy mỗi khi có pull request, bản đã gộp tự lên staging. Production nên là bước có người bấm.
- **Migration, backup, rollback:** quay code về bản trước làm bằng Git. Quay dữ liệu phải có bản sao lưu riêng (Chương 6).
- **Logging, monitoring:** ghi lại lỗi và cảnh báo khi lỗi tăng. Ngoài lỗi kỹ thuật, theo dõi cả chỉ số sống còn: số chủ nhà cập nhật lịch trong tuần.

> **Nguyên lý.** Production chỉ nhận thứ đã chạy qua staging. Mỗi lần bỏ qua staging "vì gấp" là một lần thử trên người dùng thật.

> **Chú ý.** Sao lưu dữ liệu trước mỗi migration trên production, và đã thử khôi phục từ bản sao lưu ít nhất một lần. Bản sao lưu chưa từng khôi phục thử là bản sao lưu chưa biết có dùng được không.

### Đưa bản cập nhật lên Zalo

Quy trình cụ thể của Zalo có thể đổi, nên kiểm tra tài liệu Zalo Mini App hiện hành trước mỗi lần phát hành lớn. Những gì đã biết từ tài liệu dự án:

- Bản build dưới 10MB.
- Chủ sở hữu đã định danh Zalo. Không chọn danh mục Du lịch vì cần giấy phép lữ hành.
- Xin quyền số điện thoại có màn giải thích trước.
- Không có liên kết dẫn ra ngoài Zalo.
- Duyệt cần thời gian và có thể bị từ chối, nên để dư thời gian trong kế hoạch.

Nếu chọn thêm Web/PWA: hai đường phát hành dùng chung một backend. Thay đổi backend phải chạy được với cả bản Mini App cũ đang chờ duyệt lẫn bản web mới.

### Deploy thành công chưa có nghĩa là sẵn sàng

Trước khi mời người dùng thật: Zalo đã duyệt, danh sách kiểm tra phát hành đã qua (Chương 12), có nơi thấy lỗi, có runbook cho sự cố nặng nhất, và có người trực trong tuần đầu.

### Tóm tắt

- Bốn môi trường. Nhóm nhỏ gộp được dev và staging, không gộp staging với production.
- Khóa bí mật chỉ trên máy chủ. Code quay lại bằng Git, dữ liệu quay lại bằng bản sao lưu.
- Phát hành Zalo: dưới 10MB, đúng danh mục, xin quyền có giải thích, không link ra ngoài, để dư thời gian duyệt.
- **Nguyên lý:** production chỉ nhận thứ đã qua staging.
- **Chú ý:** sao lưu trước migration và đã thử khôi phục. Quy trình Zalo kiểm lại trước mỗi lần phát hành lớn.
- **Bài tập:** viết runbook năm bước cho sự cố "sale báo thấy giá chủ nhà của người không kết nối".
- **Chương sau:** bảo trì sau khi đã có người dùng.


---

## Chương 25. Bảo trì và phát triển liên tục

Sau phát hành, việc không ít đi mà đổi loại: lỗi thật, phản hồi thật, thay đổi nghiệp vụ, nợ kỹ thuật, tài liệu cũ đi. Nguyên tắc xuyên suốt: **mỗi sự cố phải để lại một thay đổi trong hệ thống**, để lần sau lỗi cùng kiểu bị chặn sớm hơn.

### Lỗi sau phát hành

Xếp theo mức nghiêm trọng, xử lý theo thứ tự này:

1. Lộ dữ liệu hoặc sai quyền.
2. Sai tiền: giá, doanh thu, chênh lệch.
3. Chặn luồng chính: không ghi được booking, không mở được link.
4. Khó chịu: chữ lệch, chậm.

Với mức 1 và 2: khôi phục an toàn trước (Chương 27), rồi test đỏ, sửa, test xanh (Chương 22), rồi viết incident report (Chương 12).

### Phản hồi và thay đổi nghiệp vụ

Phản hồi ghi lại nguyên lời, kèm ai nói. Gom theo chủ đề, tách mong muốn khỏi nhu cầu (Chương 19), rồi đưa vào backlog. Một người nói một lần chưa phải lý do đổi sản phẩm. Ba người nói cùng một vấn đề thì đáng xem. Thay đổi nghiệp vụ đi theo quy trình bốn bước ở Chương 13.

### Nợ kỹ thuật

Nợ kỹ thuật là những cách làm tạm để kịp việc, khiến thay đổi về sau chậm và dễ lỗi hơn. Giống vay tiền: không xấu nếu biết mình đang vay và có kế hoạch trả. Giới hạn so sánh: nợ tiền có số dư rõ, nợ kỹ thuật thì không ai thấy nếu không ghi.

Ghi mỗi khoản nợ vào backlog ngay khi tạo ra. Dành một phần thời gian cố định để trả, ví dụ một trong năm việc. Tỉ lệ này là kinh nghiệm, không phải quy tắc có cơ sở đo đạc.

### Dependency, tài liệu, chi phí AI

- **Dependency:** cập nhật định kỳ, mỗi lần một nhóm nhỏ, có bộ test bảo vệ. Để lâu rồi cập nhật một lúc thì không biết cái nào gây lỗi.
- **Tài liệu lỗi thời:** dấu hiệu rõ nhất là AI làm theo cách cũ. Rà định kỳ CLAUDE.md và docs/. Claude Code có lệnh rà các file hướng dẫn để tìm chỗ lỗi thời hoặc mâu thuẫn.
- **Chi phí AI:** tốn nhiều thường do phiên dài, nhiều subagent, hoặc bắt AI đọc lại toàn bộ repository. Giảm bằng phiên ngắn, trỏ đúng tài liệu, ít agent.

### Chuyển giao

Hệ thống tài liệu tốt thì người mới cùng AI đọc vào là làm được. Cách thử: mở một phiên Claude Code mới, không giải thích gì, hỏi năm câu về dự án. Trả lời sai câu nào là tài liệu thiếu ở chỗ đó.

> **Nguyên lý.** Mỗi sự cố phải để lại một thay đổi trong hệ thống: một test, một quy tắc, một dòng CLAUDE.md, một hook. Sửa xong mà hệ thống không đổi thì lỗi cùng kiểu sẽ quay lại.

> **Chú ý.** Nợ kỹ thuật không ghi thì không bao giờ được trả.

### Tóm tắt

- Lỗi xử lý theo mức: lộ dữ liệu, sai tiền, chặn luồng, khó chịu.
- Phản hồi gom theo chủ đề, lặp lại mới đáng đổi sản phẩm.
- Nợ kỹ thuật, dependency, tài liệu cũ đều cần lịch trả định kỳ.
- **Nguyên lý:** mỗi sự cố để lại một thay đổi trong hệ thống.
- **Chú ý:** nợ không ghi thì không trả.
- **Bài tập:** viết năm câu hỏi để thử một phiên Claude Code mới có hiểu Home247 không, kèm đáp án đúng.
- **Chương sau:** bước sang Phần 6, vì sao hệ thống AI vẫn thất bại dù có đủ tài liệu và agent.
