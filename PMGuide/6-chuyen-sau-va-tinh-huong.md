# Phần 6. Nguyên tắc chuyên sâu và xử lý tình huống

## Chương 26. Vì sao hệ thống AI vẫn thất bại

Có đủ tài liệu, skill, agent, hook mà vẫn hỏng thì gần như luôn quy về một trong ba gốc: **thông tin sai hoặc thiếu**, **kiểm tra không độc lập**, và **hệ thống phức tạp hơn sức bảo trì**. Thêm công cụ không chữa được gốc thứ nhất, và còn làm gốc thứ ba nặng thêm.

### Chín trường hợp thất bại

| Trường hợp | Gốc | Dấu hiệu | Cách phòng |
| --- | --- | --- | --- |
| Tài liệu mâu thuẫn | Thông tin | AI lúc làm kiểu này lúc kiểu kia | Mỗi thông tin một chỗ, decision log (Ch.13) |
| Giao việc không rõ | Thông tin | Kết quả "đúng nhưng không phải cái tôi muốn" | Mẫu sáu phần, điểm dừng hỏi (Ch.14) |
| Agent làm với thông tin thiếu | Thông tin | Subagent báo "ổn" cho thứ nó không được xem | Lời giao trỏ tới tài liệu (Ch.16) |
| Tài liệu không cập nhật sau khi code đổi | Thông tin | Phiên sau sửa ngược lại | Sửa tài liệu trước, nằm trong Definition of Done |
| AI tự xác nhận chất lượng | Kiểm tra | "Đã kiểm tra kỹ" nhưng lỗi vẫn lọt | Test chạy được, ví dụ số do bạn viết |
| Test chỉ kiểm trường hợp dễ | Kiểm tra | Nhiều test xanh, vẫn có lỗi quyền | Test từ ma trận quyền, cố tình vi phạm (Ch.12) |
| Nhiều agent sửa cùng file | Phức tạp | Thay đổi biến mất, xung đột Git | Một vùng file một người ghi |
| Tự động hóa quá sớm | Phức tạp | Skill, hook không ai nhớ làm gì | Chạy tay hai ba lần trước khi đóng gói |
| Cấu hình phức tạp hơn nhu cầu | Phức tạp | Mất nhiều thời gian lo hệ thống hơn lo sản phẩm | Chương 28 |

### Vì sao ba gốc này

**Thông tin** là gốc lớn nhất vì AI lấp chỗ trống bằng mặc định phổ biến (Chương 2). Thêm agent không giúp, vì mọi agent đọc cùng thông tin sai.

**Kiểm tra không độc lập** vì người làm và người chấm chung cách hiểu. Độc lập thật cần thứ gì đó không đến từ AI: số bạn viết, test chạy ra kết quả, người dùng thật.

**Phức tạp vượt sức bảo trì** vì mỗi thành phần thêm là một thứ có thể cũ, có thể mâu thuẫn với thứ khác. Nhóm hai người có ít sức bảo trì, nên ngưỡng này đến sớm.

> **Nguyên lý.** Thêm công cụ không chữa được thông tin sai. Khi hệ thống hỏng, hỏi trước: thông tin đúng chưa, kiểm tra có độc lập không, rồi mới hỏi có cần thêm gì.

> **Chú ý.** Cảm giác "hệ thống có nhiều tầng kiểm tra nên an toàn" là cảm giác nguy hiểm nhất. Đếm xem bao nhiêu tầng thật sự không phụ thuộc vào AI.

### Tóm tắt

- Chín trường hợp thất bại quy về ba gốc: thông tin, kiểm tra, phức tạp.
- Thông tin sai là gốc lớn nhất và không chữa được bằng thêm agent.
- **Nguyên lý:** thêm công cụ không chữa được thông tin sai.
- **Chú ý:** đếm số tầng kiểm tra không phụ thuộc AI.
- **Bài tập:** lấy một lỗi AI từng làm sai trong dự án của bạn, xếp vào một trong ba gốc, và chỉ ra thay đổi nào trong hệ thống sẽ chặn được nó.
- **Chương sau:** khi đã hỏng thì xử lý thế nào.


---

## Chương 27. Xử lý khi mọi thứ đi sai hướng

Khi có sự cố, làm theo sáu bước cố định: **dừng, thu bằng chứng, khoanh vùng, khôi phục an toàn, sửa gốc, cải tiến quy trình**. Thứ tự quan trọng nhất là khôi phục trước, tìm nguyên nhân sau. Người dùng đang chịu thiệt không chờ bạn hiểu ra lỗi.

### Sáu bước

1. **Dừng.** Không giao thêm việc cho AI trên vùng đang hỏng. Mỗi lần sửa vội là một lần có thể hỏng thêm.
2. **Thu bằng chứng.** Thông báo lỗi, bước tái hiện, ai bị ảnh hưởng, bắt đầu từ lúc nào, commit gần nhất trước thời điểm đó.
3. **Khoanh vùng.** Lỗi nằm ở tầng nào trong bảy tầng (Chương 1): yêu cầu, thiết kế, kiến trúc, code, dữ liệu, hay vận hành.
4. **Khôi phục an toàn.** Quay code về bản trước bằng Git, tắt tính năng, hoặc khôi phục dữ liệu từ bản sao lưu.
5. **Sửa gốc.** Test đỏ, sửa, test xanh (Chương 22). Sửa tài liệu nếu gốc là thông tin.
6. **Cải tiến quy trình.** Thêm một test, quy tắc, hook hoặc dòng CLAUDE.md để lỗi cùng kiểu bị chặn lần sau (Chương 25).

> **Nguyên lý.** Khôi phục an toàn trước, tìm nguyên nhân sau.

### Chín tình huống

| Tình huống | Việc đầu tiên | Thay đổi lâu dài |
| --- | --- | --- |
| Claude Code sửa quá nhiều file ngoài phạm vi | Không gộp pull request. Yêu cầu tách, hoặc bỏ và giao lại hẹp hơn | Phạm vi file rõ trong lời giao việc, hook chặn vùng nhạy cảm |
| Code chạy nhưng sai nghiệp vụ | Tìm quy tắc liên quan trong docs/. Không có thì đó là lỗi thông tin | Thêm business rule có ví dụ số và test |
| Đặc tả và giao diện mâu thuẫn | Dừng code phần đó | Ghi quyết định, lan theo bốn bước (Ch.13) |
| Tính năng mới làm hỏng tính năng cũ | Revert commit mới | Thêm regression test cho tính năng cũ |
| Agent bảo mật phát hiện lỗ hổng | Kiểm chứng bằng test cố tình vi phạm. Đúng thì tắt tính năng trên production | Thêm ô ma trận quyền và test tương ứng |
| Migration gây lỗi dữ liệu | Dừng ghi dữ liệu, khôi phục từ bản sao lưu | Migration luôn thử trên bản sao dữ liệu trước |
| Deploy lỗi | Quay về bản trước | Bổ sung danh sách kiểm tra phát hành |
| Chi phí AI tăng cao | Xem phiên nào, agent nào tốn nhất | Phiên ngắn hơn, bớt agent, trỏ tài liệu hẹp hơn |
| Không còn hiểu hệ thống đang ở đâu | Ngừng thêm tính năng | Xem bên dưới |

### Khi không còn hiểu hệ thống đang ở đâu

Đây là tình huống dễ xảy ra nhất khi làm cùng AI, vì code tăng nhanh hơn hiểu biết của bạn.

1. Ngừng mọi việc mới.
2. Nhờ một phiên Claude Code chỉ đọc vẽ lại bản đồ hiện trạng từ repository: có những màn nào, bảng dữ liệu nào, test nào đang có.
3. So bản đồ đó với docs/ và decision log, ghi lại mọi chỗ lệch.
4. Cập nhật handoff.md và backlog theo hiện trạng thật.
5. Giảm số việc đang làm dở xuống còn một đến hai.

> **Chú ý.** Không để AI vừa chẩn đoán vừa sửa trên production trong cùng một lượt. Chẩn đoán ở chế độ chỉ đọc, bạn duyệt, rồi mới sửa.

> **Chú ý.** Ghi incident report cả khi sự cố nhỏ. Nhiều sự cố nhỏ cùng một gốc là tín hiệu của một sự cố lớn sắp tới.

### Tóm tắt

- Sáu bước: dừng, bằng chứng, khoanh vùng, khôi phục, sửa gốc, cải tiến.
- Mỗi tình huống có một việc đầu tiên để cắt thiệt hại và một thay đổi lâu dài để không lặp lại.
- Mất kiểm soát hiểu biết thì dừng, vẽ lại bản đồ, so với tài liệu, giảm việc dở.
- **Nguyên lý:** khôi phục an toàn trước, tìm nguyên nhân sau.
- **Chú ý:** chẩn đoán chỉ đọc trước khi sửa production. Ghi cả sự cố nhỏ.
- **Bài tập:** mô phỏng sự cố "sau bản cập nhật, CN1 hiện sai ngày kín". Đi qua sáu bước, ghi bạn sẽ làm gì ở mỗi bước.
- **Chương sau:** tối ưu hệ thống theo thời gian, thêm hay bớt công cụ dựa trên bằng chứng.


---

## Chương 28. Tối ưu hệ thống theo thời gian

Hệ thống làm việc với AI cũng là một sản phẩm cần bảo trì. Thêm một thành phần khi có **bằng chứng lặp lại** rằng thiếu nó gây tốn công hoặc gây lỗi. Bỏ một thành phần khi không còn bằng chứng nó được dùng. Đây là cái vòng đo, so, chỉnh trong tài liệu nguyên lý lên kế hoạch của bạn, áp vào chính hệ thống.

### Khi nào thêm

| Thêm gì | Tín hiệu | Chương |
| --- | --- | --- |
| Một dòng CLAUDE.md | AI mắc cùng một lỗi lần thứ hai | 8 |
| Một skill | Dán cùng một chuỗi chỉ dẫn lần thứ ba, quy trình đã ổn định | 15 |
| Một subagent | Một loại việc cần ngữ cảnh tách biệt hoặc quyền hẹp, lặp lại hàng tuần | 16 |
| Một hook hoặc quy tắc quyền | Một dòng CLAUDE.md bị vi phạm lần thứ hai | 17 |
| Một kết nối MCP | Chuyển tin tay cho cùng một hệ thống nhiều lần mỗi tuần | 18 |
| Tách một tài liệu | AI phải đọc phần không liên quan để làm một việc, hoặc hai người hay sửa cùng một file | 7 |
| Đổi kiến trúc | Một giới hạn kỹ thuật chặn tính năng quan trọng và không vá được, có ADR ghi lý do | 11 |

Các con số "lần thứ hai", "lần thứ ba" là kinh nghiệm để có mốc, không phải quy luật. Ý gốc là: đợi đến khi một việc lặp lại đủ để biết hình dạng thật của nó, rồi mới đóng gói.

### Khi nào bỏ

- Skill, agent, hook không được dùng trong một tháng.
- Dòng CLAUDE.md mà bỏ đi AI vẫn làm đúng.
- Thành phần gây nhiễu: hai skill mô tả gần nhau, hook chặn nhầm việc hợp lệ.
- Quy trình mà bạn phải tốn công duy trì nhiều hơn công nó tiết kiệm.

### Đo xem hệ thống có đang giúp không

Ba con số đơn giản, ghi mỗi tuần trong lần xem lại 15 phút:

1. **Thời gian từ lúc chốt yêu cầu đến lúc đạt Definition of Done** cho một việc vừa cỡ.
2. **Số lần phải sửa lại** sau khi đã báo xong.
3. **Số lỗi lọt tới người dùng.**

Thêm một thành phần mà ba con số không đổi thì thành phần đó chưa giúp gì.

> **Chú ý.** Goodhart's law trong tài liệu nguyên lý của bạn áp vào đây. Đừng biến "số skill" hay "số agent" thành thước đo tiến bộ. Ba con số trên cũng có thể bị làm đẹp, ví dụ báo xong muộn hơn để bớt số lần sửa lại. Nên xem cả ba cùng lúc vì chúng kéo ngược nhau.

> **Nguyên lý.** Thêm thành phần khi có bằng chứng lặp lại, bỏ khi không còn bằng chứng được dùng. Hệ thống tốt nhất cho nhóm hai người là hệ thống nhỏ nhất vẫn chặn được những lỗi đã từng xảy ra.

### Kết thúc giáo trình

Toàn bộ 28 chương quy về một vòng lặp ở Bản đồ tổng thể: bạn quyết định, AI thực thi, hệ thống kiểm tra, tài liệu nối ba việc với nhau. Mọi công cụ từ Chương 8 đến 18 chỉ là cách làm cho vòng lặp đó chắc hơn.

Việc tiếp theo hợp lý nhất là bắt đầu M0 ở Chương 20: dựng repository với CLAUDE.md tối thiểu, thử các phần chưa biết của Zalo, và ghi ước lượng trước khi làm.

### Tóm tắt

- Mỗi loại thành phần có một tín hiệu để thêm và một tín hiệu để bỏ.
- Đo bằng ba con số: thời gian đến xong, số lần sửa lại, số lỗi lọt.
- **Nguyên lý:** thêm khi có bằng chứng lặp lại, bỏ khi hết bằng chứng dùng. Hệ thống nhỏ nhất đủ chặn lỗi đã gặp.
- **Chú ý:** không đo tiến bộ bằng số công cụ. Xem ba con số cùng lúc.
- **Bài tập:** sau bốn tuần làm Home247, liệt kê mọi skill, agent, hook đang có. Với mỗi thứ, ghi lần cuối nó được dùng và lỗi nào nó đã chặn. Thứ gì không trả lời được thì cân nhắc bỏ.
