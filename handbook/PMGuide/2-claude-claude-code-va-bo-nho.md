# Phần 2. Hiểu Claude, Claude Code và bộ nhớ dự án

## Chương 4. Claude và Claude Code khác nhau như thế nào?

Hai công cụ dùng chung một mô hình AI, khác nhau ở **nơi công việc sống**. Claude làm việc trong cuộc trò chuyện và Project. Claude Code làm việc ngay trong repository: đọc code, sửa file, chạy lệnh, chạy test, ghi lịch sử Git. Quy tắc: **nghĩ và quyết ở Claude, làm ra và chứng minh ở Claude Code, nối hai bên bằng tài liệu.**

### Tình huống

Tối qua bạn và Claude chốt năm điểm về hiện giá theo từng sale. Sáng nay Đức bảo Claude Code "làm như anh Tùng đã bàn". Claude Code không thấy cuộc trò chuyện đó, đọc tài liệu cũ trong repository, rồi làm theo phỏng đoán.

### Khác nhau ở đâu

|  | Claude | Claude Code |
| --- | --- | --- |
| Nhìn thấy | Cuộc trò chuyện, tài liệu Project, file đính kèm | Toàn bộ repository, CLAUDE.md, kết quả lệnh |
| Chạm vào | Tài liệu, artifact | File thật, test, commit, nhánh |
| Mạnh ở | Khám phá, so sánh, viết và rà tài liệu | Biến đặc tả thành code kèm test |
| Yếu ở | Nói về code là đang đoán | Dễ lao vào sửa khi ý còn mơ hồ |

Phép so sánh: Claude là phòng họp, Claude Code là xưởng. Giới hạn: ranh giới đang mờ dần, khác biệt bền vững chỉ còn là có làm việc trực tiếp trên repository hay không.

### Khi nào dùng cái nào

Hỏi: **kết quả của bước này nằm ở đâu?** Quyết định hay tài liệu thì dùng Claude. Thay đổi trong repository thì dùng Claude Code. Cần biết code hiện tại để quyết thì Claude Code phân tích, chưa sửa gì, bạn quyết.

Ví dụ: bàn ngưỡng cảnh báo lịch cũ dùng Claude. Code màn CN4 dùng Claude Code. Hỏi "phần tính giá xong chưa" thì hỏi Claude Code hoặc xem Git, vì Claude app không thấy code.

### Cuộc trò chuyện không phải nơi giữ kiến thức

Claude Code không đọc chat. Chat lẫn ý đã bỏ với ý đã chốt, không có bản hiện hành, và người kia không đọc được. Chat giống băng ghi âm cuộc họp. Tài liệu giống biên bản, là thứ dùng làm căn cứ.

**Đề xuất, chưa chốt:** thứ gì code dựa vào (quy tắc nghiệp vụ, ma trận quyền, đặc tả, quyết định) thì nằm trong repository. Thứ phục vụ suy nghĩ và học thì ở Project. Mỗi tài liệu chỉ có một nơi được sửa. Chưa có repository thì cứ giữ ở Project.

### Luồng mẫu: hiện giá theo từng sale

| Bước | Ai | Đầu ra |
| --- | --- | --- |
| 1. Khám phá câu hỏi và hệ quả | Claude | Danh sách câu hỏi |
| 2. Chốt | Bạn | Quyết định |
| 3. Cập nhật tài liệu và ví dụ nghiệm thu | Claude | Tài liệu mới |
| 4. Lập kế hoạch, chưa sửa gì | Claude Code | Kế hoạch cho bạn duyệt |
| 5. Làm, viết test, commit | Claude Code | Code và test |
| 6. Kiểm tra độc lập | Phiên khác, test, bạn thử trong Zalo | Bằng chứng |

Bước 3 là bước hay bị bỏ nhất, và cũng là thứ duy nhất đi được từ phòng họp sang xưởng.

### Sai lầm phổ biến

- Dán nguyên đoạn chat vào Claude Code. Nó nhận cả ý đã bỏ.
- Brainstorm trong Claude Code mà không nói "chưa sửa file nào".
- Hai bản tài liệu cùng được sửa, sớm muộn lệch nhau.

### Kết thúc chương

**Bài tập.** Xếp vào Claude, Claude Code, hay cả hai: so sánh Supabase và VPS; xem vì sao bản build vượt 10MB; kiểm tra code có gửi giá gốc về điện thoại sale không; quyết định sale có được sửa ảnh không.

**Áp dụng ngay.** Đánh dấu tài liệu nào trong Project code sẽ dựa vào. Bắt đầu file "Danh sách quyết định": quyết định, lý do, ngày, người chốt.

**Chương sau.** Chương 5 giải thích cơ chế nhớ của Claude: ngữ cảnh chứa được bao nhiêu, vì sao phiên dài hay quên, và vì sao tài liệu dài hoặc mâu thuẫn cũng gây hại.

Nguồn: [Claude Code overview](https://code.claude.com/docs/en/overview).


---

## Chương 5. Claude nhớ thông tin bằng cách nào?

Claude không có trí nhớ theo nghĩa của người. Mỗi lần trả lời, nó chỉ dựa vào những gì đang nằm trong **ngữ cảnh** của phiên đó. Cái gọi là "nhớ" giữa các phiên thực chất là đọc lại file. Nên quản lý kiến thức dự án là quyết định **cái gì được đưa vào ngữ cảnh, và vào lúc nào**.

### Tình huống

Phiên Claude Code kéo dài ba tiếng. Đầu phiên bạn dặn "không hiện số điện thoại cho nhau". Cuối phiên nó thêm số điện thoại vào danh sách sale ở CN9. Nó không cố ý làm sai. Lời dặn đó đã bị đẩy ra khỏi chỗ nó đang nhìn.

### Cơ chế: cái bàn làm việc có kích thước giới hạn

Ngữ cảnh (context window) giống một cái bàn. Mọi thứ phải nằm trên bàn thì AI mới dùng được: câu bạn gõ, file nó đọc, kết quả lệnh nó chạy. Bàn có kích thước giới hạn, nên có hai chuyện xảy ra:

- **Bàn đầy thì phải dọn.** Claude Code tóm tắt phần cũ để có chỗ. Tóm tắt thì mất chi tiết, và có thể mất đúng chi tiết bạn cần.
- **Bàn chưa đầy nhưng quá bừa thì ý quan trọng bị loãng.** Một dòng quy tắc nằm giữa mười trang tài liệu dễ bị bỏ qua hơn một dòng nằm trong file ngắn.

Giới hạn của phép so sánh: người dọn bàn biết cái gì quan trọng với mình. AI khi tóm tắt chỉ đoán cái gì quan trọng.

### Những đường đưa thông tin lên bàn

| Nguồn | Khi nào lên bàn | Hợp với |
| --- | --- | --- |
| Câu bạn gõ | Chỉ trong phiên đó | Phần riêng của việc hôm nay |
| CLAUDE.md | Tự đọc đầu mỗi phiên Claude Code | Quy tắc chung, điều cấm, chỉ đường tới tài liệu khác |
| Tài liệu trong repository | Khi được trỏ tới hoặc tự tìm thấy | Quy tắc giá, ma trận quyền, đặc tả từng màn |
| Lịch sử Git | Khi được hỏi | Trả lời "đổi lúc nào, vì sao" |
| Tài liệu và bộ nhớ Project | Trong Claude app | Bối cảnh, suy nghĩ, học |
| Bộ nhớ tự động | AI tự ghi và tự đọc | Thói quen nhỏ, không phải quyết định |

Bộ nhớ tự động tiện nhưng không dùng làm căn cứ được. AI tự chọn ghi gì, có thể ghi cả ý chưa chốt, và khi dùng chung tài khoản thì lẫn hai người. Quyết định phải nằm trong file bạn kiểm soát.

### Vì sao tài liệu dài, trùng, mâu thuẫn cũng gây hại

Xếp theo mức nguy hiểm:

1. **Mâu thuẫn.** AI gặp hai quy tắc ngược nhau thì chọn một, và bạn không biết nó chọn bên nào. Ví dụ thật của Home247: tài liệu quy tắc căn tự nhập (19/10) nói sale không đánh dấu lịch, nhưng bản mô tả MVP cũ vẫn còn phần S9. Nếu cả hai cùng được đọc, AI có thể làm lại ô "đánh dấu kín".
2. **Trùng lặp.** Cùng một quy tắc ghi ở ba chỗ. Khi đổi, quên sửa một chỗ, và trùng lặp thành mâu thuẫn.
3. **Quá dài.** Chiếm bàn, làm loãng phần quan trọng, và đẩy nhanh lúc phải dọn bàn.

Cách phòng chung: **mỗi thông tin nằm đúng một chỗ, chỗ khác chỉ trỏ tới.** Tài liệu cũ đã bị thay thì ghi rõ "đã thay bởi..." hoặc bỏ ra khỏi nơi AI đọc.

### Thiết kế hệ thống kiến thức cho Home247

Ba lớp, theo mức AI cần thường xuyên:

- **Luôn đọc:** CLAUDE.md ngắn. Quy tắc làm việc, danh sách "Home247 khác số đông ở đâu", và chỉ đường tới tài liệu khác.
- **Đọc khi cần:** tài liệu theo chủ đề. Làm phần giá thì đọc quy tắc giá, không đọc đặc tả màn đăng nhập.
- **Tra khi hỏi:** lịch sử Git, danh sách quyết định cũ, cuộc trò chuyện gốc.

Giữa các phiên: kết thúc phiên bằng ghi chú bàn giao ba dòng. Phiên mới bắt đầu bằng việc đọc ghi chú đó. Phiên đã quá dài thì dừng, viết bàn giao, mở phiên mới, thay vì cố kéo tiếp.

### Sai lầm phổ biến

- Kéo một phiên cả ngày cho nhiều việc khác nhau.
- Dặn quy tắc quan trọng bằng lời trong chat thay vì ghi vào file.
- Để tài liệu cũ nằm cạnh tài liệu mới mà không đánh dấu.

### Kết thúc chương

**Bài tập.** Phiên Claude Code đang làm CN4 thì nó tạo trường "tên khách" trong form booking. Nêu hai nguyên nhân có thể có theo cơ chế ngữ cảnh, và cách sửa cho từng nguyên nhân.

**Áp dụng ngay.** Ở bản mô tả MVP, ghi vào đầu phần S2, S7, S9 một dòng: "Phần căn tự nhập đã thay bởi quy-tac-can-tu-nhap.md".

**Chương sau.** Chương 6 nói về Git, nguồn ghi nhớ duy nhất không bao giờ tóm tắt hay quên: mọi thay đổi đều được giữ nguyên và quay lại được.

Nguồn: [Claude Code overview](https://code.claude.com/docs/en/overview), mục CLAUDE.md và auto memory.


---

## Chương 6. Repository, Git và GitHub

Git ghi lại mọi thay đổi của dự án thành các mốc có tên, xem lại được và quay lại được. GitHub là nơi lưu bản Git đó trên mạng để hai người và Claude Code cùng làm. Với bạn, Git không phải công cụ lập trình. Nó là **công cụ kiểm soát**: thấy AI đã đổi gì, và quay lại khi sai.

### Tình huống

Claude Code sửa cách tính giá bán của sale. Hai ngày sau sale báo khách đặt 3 đêm bị báo thiếu 400k. Không có Git: không biết đổi lúc nào, đổi những gì, phải mò sửa tay. Có Git: mở lịch sử, thấy mốc "sửa giá bán", xem đúng những dòng đã đổi, quay lại.

### Các khái niệm

| Từ | Nghĩa | So với xây nhà |
| --- | --- | --- |
| Repository | Thư mục dự án kèm toàn bộ lịch sử thay đổi | Hồ sơ công trình |
| Git | Phần mềm ghi lịch sử đó | Người giữ sổ nhật ký công trình |
| GitHub | Dịch vụ lưu repository trên mạng, có phân quyền và duyệt thay đổi | Văn phòng chung giữ hồ sơ |
| Commit | Một mốc lưu, có mô tả đã đổi gì | Biên bản nghiệm thu một hạng mục, kèm ảnh |
| Branch (nhánh) | Bản làm thử song song, không ảnh hưởng bản chính | Làm mẫu ở góc riêng trước khi làm thật |
| Merge | Gộp nhánh vào bản chính | Đưa mẫu đã duyệt vào công trình |
| Pull request | Đề nghị gộp, kèm danh sách thay đổi để xem trước | Trình hồ sơ cho chủ đầu tư ký |

Giới hạn của phép so sánh, và đây là chỗ quan trọng: Git chỉ giữ code và file. **Dữ liệu thật của người dùng nằm trong database, không quay lại theo Git.** Quay code về bản cũ không sửa được những báo giá sai đã lưu. Phần đó cần sao lưu riêng (Chương 24).

### Xử lý tình huống giá bán sai

1. Xem lịch sử của file tính giá, tìm mốc đổi gần nhất.
2. Xem những dòng đã đổi. Không cần hiểu code, chỉ cần Claude Code giải thích bằng lời.
3. **Revert**: tạo mốc mới đảo ngược mốc sai. Lịch sử không bị xóa, nên vẫn biết đã từng sai gì.
4. Thêm test ví dụ 3 đêm để lỗi này không quay lại. Nếu tài liệu ghi mơ hồ "cộng thêm" mà không nói theo đêm, sửa tài liệu.

### Quy ước đề xuất cho Home247

- Mỗi việc một nhánh. Không cho Claude Code đẩy thẳng vào nhánh chính.
- Mỗi commit một ý, mô tả bằng tiếng Việt. Nhiều thay đổi dồn vào một commit thì khi lỗi không tách được cái nào gây ra.
- Vào nhánh chính qua pull request bạn đã xem.
- Mỗi người một tài khoản GitHub, để biết ai đổi gì.

Nếu repository đang được đồng bộ giữa hai máy bằng script tự động commit và đẩy lên, cách đó phá cả hai quy ước đầu. Mỗi commit lúc đó là một thời điểm ngẫu nhiên chứ không phải một ý, nên không revert được đúng một thay đổi. Nên chuyển sang commit có chủ đích trước khi bắt đầu code Home247.

### Quan sát Claude Code khi không đọc được code

Trong mỗi pull request, nhìn ba thứ:

- **Mô tả:** có khớp việc bạn giao không.
- **Danh sách file đổi:** có file nằm ngoài phạm vi không. Sửa màu chip mà có file tính giá là dấu hiệu sửa lan.
- **Số dòng đổi và kết quả test:** việc nhỏ mà đổi vài trăm dòng thì hỏi lại.

Hai người sửa cùng một chỗ trên hai nhánh thì Git dừng lại và báo **xung đột** (conflict), không tự ghi đè. Claude Code giải quyết được, nhưng người chủ việc phải xem kết quả.

### Sai lầm phổ biến

- Nghiệm thu bằng lời báo cáo của Claude Code thay vì danh sách file đổi.
- Nghĩ quay lại code là quay lại được dữ liệu.
- Để một commit chứa cả ngày làm việc.

### Kết thúc chương

**Bài tập.** Một pull request có mô tả "Sửa câu chữ màn A1", đổi 3 file: file giao diện A1, file quy tắc RLS, file cấu hình đăng nhập. Bạn có duyệt không? Hỏi lại điều gì?

**Áp dụng ngay.** Kiểm tra repository hiện có đang commit thủ công hay tự động. Nếu tự động, quyết định cách đồng bộ mới trước khi code Home247.

**Chương sau.** Chương 7 đề xuất cấu trúc thư mục cho repository Home247: tài liệu nào nằm đâu, và vì sao chia như vậy.
