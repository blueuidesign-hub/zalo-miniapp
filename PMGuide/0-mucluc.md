# Giáo trình Home247: tổ chức dự án với Claude và Claude Code

Xuất nguyên văn từ Claude Docs "Giáo trình Home247". Mỗi phần là một file, gồm các chương của phần đó.

## Danh sách chương và ý nghĩa

Ý nghĩa mỗi chương là đoạn mở đầu của chính chương đó trong tài liệu gốc.

### [Phần 1. Hiểu toàn bộ bức tranh](1-hieu-buc-tranh.md)

**Chương 1. Một dự án phần mềm thực sự gồm những gì?**

Code chỉ là bản dịch các quyết định sang ngôn ngữ máy hiểu được. Nếu quyết định sai hoặc còn thiếu, dịch càng chuẩn thì sai càng chuẩn. Khi có AI, việc dịch rẻ đi rất nhiều, nên phần lớn công sức và rủi ro dồn về phía quyết định: yêu cầu, thiết kế, kiến trúc, và bằng chứng kiểm tra.

**Chương 2. Khi có AI, cách tổ chức dự án thay đổi như thế nào?**

AI viết code nhanh và đúng khi yêu cầu rõ. Khi yêu cầu có chỗ trống, nó lấp bằng cách làm phổ biến nhất, với cùng một giọng tự tin. Vì vậy khi có AI, việc tổ chức dự án chuyển từ "giao việc bằng lời" sang "xây một hệ thống". Hệ thống đó có bốn thứ: thông tin đúng nằm sẵn, quy tắc làm việc, phạm vi rõ, và cách xác minh không dựa vào lời AI tự nói.

**Chương 3. Vai trò của tôi trong Home247**

Vai trò của bạn là giữ ba thứ AI không giữ được: quyết định thế nào là đúng, chịu trách nhiệm cho kết quả, và nghiệm thu. Mọi việc khác đều giao được. Giao cho ai và kiểm tra chặt đến đâu không phụ thuộc việc đó khó hay dễ. Nó phụ thuộc hai câu hỏi: đây là quyết định hay là thực thi, và nếu sai thì có đắt và có dễ thấy không.

### [Phần 2. Hiểu Claude, Claude Code và bộ nhớ dự án](2-claude-claude-code-va-bo-nho.md)

**Chương 4. Claude và Claude Code khác nhau như thế nào?**

Hai công cụ dùng chung một mô hình AI, khác nhau ở **nơi công việc sống**. Claude làm việc trong cuộc trò chuyện và Project. Claude Code làm việc ngay trong repository: đọc code, sửa file, chạy lệnh, chạy test, ghi lịch sử Git. Quy tắc: **nghĩ và quyết ở Claude, làm ra và chứng minh ở Claude Code, nối hai bên bằng tài liệu.**

**Chương 5. Claude nhớ thông tin bằng cách nào?**

Claude không có trí nhớ theo nghĩa của người. Mỗi lần trả lời, nó chỉ dựa vào những gì đang nằm trong **ngữ cảnh** của phiên đó. Cái gọi là "nhớ" giữa các phiên thực chất là đọc lại file. Nên quản lý kiến thức dự án là quyết định **cái gì được đưa vào ngữ cảnh, và vào lúc nào**.

**Chương 6. Repository, Git và GitHub**

Git ghi lại mọi thay đổi của dự án thành các mốc có tên, xem lại được và quay lại được. GitHub là nơi lưu bản Git đó trên mạng để hai người và Claude Code cùng làm. Với bạn, Git không phải công cụ lập trình. Nó là **công cụ kiểm soát**: thấy AI đã đổi gì, và quay lại khi sai.

### [Phần 3. Hiểu từng file và cấu trúc dự án](3-file-va-cau-truc-du-an.md)

**Chương 7. Bản đồ các file và thư mục**

Cấu trúc thư mục tốt phản ánh **cách bạn sẽ hỏi**. Khi có câu hỏi về giá, bạn và Claude Code đều biết mở đúng một chỗ, và chỉ cần đọc chỗ đó. Nó nối trực tiếp hai ý đã học: bảy tầng công việc (Chương 1) và cái bàn ngữ cảnh có giới hạn (Chương 5).

**Chương 8. CLAUDE.md**

CLAUDE.md là file Claude Code tự đọc ở đầu mỗi phiên. Nó là **hướng dẫn làm việc**, không phải tài liệu sản phẩm. Nó chứa những gì AI cần biết ở mọi phiên, và chỉ đường tới phần còn lại.

**Chương 9. Tài liệu nghiệp vụ và sản phẩm**

Mỗi loại tài liệu nghiệp vụ trả lời một câu hỏi khác, được đọc bởi người khác, và thay đổi với tốc độ khác. Đó là lý do tách chúng ra. Với Home247 làm cùng AI, loại quan trọng nhất là **business rules** và **acceptance criteria**, vì đó là chỗ AI hay đoán sai nhất và là nguồn của test.

**Chương 10. Tài liệu thiết kế UX/UI**

Một ảnh thiết kế cho thấy **một khoảnh khắc**: màn hình trông thế nào khi mọi thứ suôn sẻ. Code phải xử lý **mọi khoảnh khắc**: đang tải, mất mạng, không có quyền, dữ liệu quá dài. Phần chênh lệch đó AI sẽ tự đoán nếu không có đặc tả bằng chữ.

**Chương 11. Tài liệu kiến trúc và kỹ thuật**

Tài liệu nghiệp vụ nói **cái gì là đúng**. Tài liệu kỹ thuật nói **đúng bằng cách nào**. Quy tắc "khách không thấy giá chủ nhà" không đổi dù bạn dùng Supabase hay máy chủ riêng. Cách thực hiện quy tắc đó thì đổi hoàn toàn. Tách hai loại ra để đổi công nghệ không làm hỏng tài liệu nghiệp vụ.

**Chương 12. Tài liệu bảo mật và kiểm thử**

Nói "hệ thống an toàn" là một lời khẳng định. Có test đăng nhập bằng tài khoản sale, cố tình đọc giá căn không được phép, và bị chặn, mới là bằng chứng. Nhóm tài liệu này biến lời khẳng định thành bằng chứng, và chỉ rõ phải làm gì khi bằng chứng sai.

**Chương 13. Quản lý quyết định và sự thay đổi**

Quyết định không được ghi lại thì sẽ bị ra lại, thường là bởi AI, và thường khác lần trước. Quyết định đã ghi mà thay đổi không lan hết các tài liệu thì sinh ra mâu thuẫn. Chương này là cơ chế giữ cho toàn bộ tài liệu từ Chương 7 đến 12 không lệch nhau theo thời gian.

### [Phần 4. Tổ chức Claude Code](4-to-chuc-claude-code.md)

**Chương 14. Context và cách giao việc**

Một lần giao việc tốt có sáu phần: mục tiêu, đầu vào, phạm vi, điều kiện xong, điều cấm, và điểm dừng lại hỏi. Khi hệ thống tài liệu đã có, phần lớn nội dung đó chỉ là đường dẫn, nên lần giao việc ngắn. Ngắn nhưng đủ sáu phần thì tốt hơn dài mà thiếu.

**Chương 15. Skills**

Skill là một **quy trình làm việc chuẩn được đóng gói thành file**, gọi lại bằng /tên. Nó giải quyết việc bạn phải dán đi dán lại cùng một chuỗi chỉ dẫn, và mỗi lần dán lại hơi khác.

**Chương 16. Subagents**

Subagent là một phiên Claude chạy riêng, có **cái bàn ngữ cảnh riêng**, chỉ dẫn riêng và bộ công cụ riêng. Phiên chính giao việc, subagent làm, rồi trả về một bản tóm tắt. Giá trị thật của nó là giữ bàn phiên chính sạch và giới hạn quyền. Nó **không** phải là cách để nhiều AI tự kiểm tra chéo nhau.

**Chương 17. Hooks, permissions và automation**

CLAUDE.md, skill và chỉ dẫn của subagent đều là **lời dặn**: AI đọc và cố làm theo, nhưng có thể không. Hook và quy tắc quyền là **cơ chế**: chạy mọi lần, chặn thật, không phụ thuộc AI quyết định gì. Dùng cơ chế cho điều phải đúng 100%, dùng lời dặn cho điều cần phán đoán.

**Chương 18. MCP và công cụ kết nối bên ngoài**

MCP giúp Claude vươn tới hệ thống ngoài repository: GitHub, Figma, database, Google Drive. Mỗi kết nối bớt cho bạn một việc chuyển tin bằng tay, và thêm một cánh cửa AI đi qua được. Chỉ mở cửa khi việc chuyển tin tay đã thành gánh nặng, và mở hẹp nhất có thể.

### [Phần 5. Vận hành quy trình sản phẩm](5-van-hanh-quy-trinh-san-pham.md)

**Chương 19. Từ ý tưởng đến yêu cầu rõ ràng**

Một ý tưởng đi qua sáu bước trước khi thành yêu cầu: tách mong muốn khỏi nhu cầu, lộ ra giả định, tìm mâu thuẫn, so phương án, chốt phạm vi, viết yêu cầu. Claude giỏi ở việc đặt câu hỏi và lật giả định. Bạn giữ phần chốt. Kết quả cuối cùng là yêu cầu có ví dụ số và một danh sách "cần Tùng chốt".

**Chương 20. Lập kế hoạch dự án**

Kế hoạch tốt cho Home247 đặt hai loại việc lên đầu: **phần chưa biết có nhiều thứ phụ thuộc**, và **việc kiểm chứng giả định nguy hiểm nhất**. Tiến độ đo bằng số việc đạt Definition of Done, không đo bằng lời báo cáo. Chương này áp trực tiếp tài liệu nguyên lý lên kế hoạch bạn đang dùng.

**Chương 21. Thiết kế sản phẩm với Claude**

Thiết kế đi từ hành trình người dùng xuống đặc tả màn hình. Claude giúp nhanh ở việc liệt kê bước, trạng thái, phản biện và viết đặc tả. Nhưng một thiết kế chỉ được kiểm đúng khi **người thật cầm điện thoại thật**, một tay, trong Zalo.

**Chương 22. Lập trình bằng Claude Code**

Một việc code đi qua bảy bước: đọc, lập kế hoạch, làm từng phần, chạy test, review, commit và pull request, bàn giao. Bạn không cần viết code. Bạn cần biết ở mỗi bước mình nhìn vào đâu và hỏi câu gì.

**Chương 23. Kiểm thử và kiểm soát chất lượng**

Mỗi loại test chứng minh một thứ và bỏ qua những thứ khác. Không loại nào đủ một mình. Chiến lược kiểm thử là chọn đúng loại cho đúng rủi ro, và nhớ rằng test xanh chỉ nói về đúng những gì nó kiểm.

**Chương 24. Deploy và vận hành sản phẩm**

Deploy là đưa code đã kiểm tới nơi người dùng chạm vào. Nó an toàn khi có ba thứ: môi trường thử tách khỏi môi trường thật, cách quay lại khi sai, và cách biết khi có lỗi. Deploy thành công chỉ có nghĩa code đã lên, chưa có nghĩa sản phẩm sẵn sàng.

**Chương 25. Bảo trì và phát triển liên tục**

Sau phát hành, việc không ít đi mà đổi loại: lỗi thật, phản hồi thật, thay đổi nghiệp vụ, nợ kỹ thuật, tài liệu cũ đi. Nguyên tắc xuyên suốt: **mỗi sự cố phải để lại một thay đổi trong hệ thống**, để lần sau lỗi cùng kiểu bị chặn sớm hơn.

### [Phần 6. Nguyên tắc chuyên sâu và xử lý tình huống](6-chuyen-sau-va-tinh-huong.md)

**Chương 26. Vì sao hệ thống AI vẫn thất bại**

Có đủ tài liệu, skill, agent, hook mà vẫn hỏng thì gần như luôn quy về một trong ba gốc: **thông tin sai hoặc thiếu**, **kiểm tra không độc lập**, và **hệ thống phức tạp hơn sức bảo trì**. Thêm công cụ không chữa được gốc thứ nhất, và còn làm gốc thứ ba nặng thêm.

**Chương 27. Xử lý khi mọi thứ đi sai hướng**

Khi có sự cố, làm theo sáu bước cố định: **dừng, thu bằng chứng, khoanh vùng, khôi phục an toàn, sửa gốc, cải tiến quy trình**. Thứ tự quan trọng nhất là khôi phục trước, tìm nguyên nhân sau. Người dùng đang chịu thiệt không chờ bạn hiểu ra lỗi.

**Chương 28. Tối ưu hệ thống theo thời gian**

Hệ thống làm việc với AI cũng là một sản phẩm cần bảo trì. Thêm một thành phần khi có **bằng chứng lặp lại** rằng thiếu nó gây tốn công hoặc gây lỗi. Bỏ một thành phần khi không còn bằng chứng nó được dùng. Đây là cái vòng đo, so, chỉnh trong tài liệu nguyên lý lên kế hoạch của bạn, áp vào chính hệ thống.

---

## Chương 0. Bản đồ tổng thể

Một dự án làm cùng AI là một vòng lặp gồm ba việc. **Người quyết định** làm gì và thế nào là đúng. **AI thực thi** theo quyết định đó. **Hệ thống kiểm tra** đưa ra bằng chứng kết quả đúng hay sai. Tài liệu là sợi dây nối ba việc này. Thiếu tài liệu thì AI làm theo trí nhớ, mà trí nhớ của AI không mang được từ phiên này sang phiên khác.

### Vấn đề gốc

Giả sử hôm nay bạn mở Claude Code và gõ: "Làm cho tôi app Home247 theo 27 màn hình". Claude Code sẽ làm ra một thứ chạy được. Nhưng nó phải tự đoán hàng trăm chỗ bạn chưa nói. Ví dụ đêm thứ Sáu tính là cuối tuần hay ngày thường. Giá ngày 2/9 rơi vào thứ Bảy thì lấy giá lễ hay giá cuối tuần. Sale bị ngừng chia sẻ thì bản sửa riêng của sale còn hay mất.

Mỗi chỗ đoán là một quyết định sản phẩm bị AI ra thay bạn. Hôm sau mở phiên mới, nó có thể đoán khác. Đức mở một phiên khác, lại đoán khác nữa. Đây đúng là điều tài liệu nguyên lý lên kế hoạch gọi là "hoàn cảnh quyết thay". Chỉ khác là ở đây "hoàn cảnh" là một cỗ máy đoán rất nhanh và rất tự tin.

Toàn bộ hệ thống bên dưới sinh ra để chặn chuyện đó.

### Sáu thành phần và lý do mỗi thứ tồn tại

Mỗi thành phần tồn tại vì một hạn chế cụ thể. Sơ đồ vòng lặp nằm ở cuối mục này.

| Thành phần | Hạn chế nó bù vào | Nếu thiếu thì hỏng gì |
| --- | --- | --- |
| Tùng và Đức | AI không biết điều gì quan trọng với người dùng Hạ Long, và không chịu trách nhiệm cho kết quả | AI chọn theo cái phổ biến trên mạng, không theo thị trường của bạn |
| Claude (chat, Project) | Ý tưởng trong đầu còn mơ hồ, cần chỗ để mổ xẻ trước khi chốt | Mang ý tưởng mơ hồ đi code, sửa nhiều lần |
| Tài liệu chuẩn | AI không nhớ giữa các phiên, hai người không nhớ giống nhau | Mỗi phiên, mỗi người làm theo một phiên bản quy tắc khác nhau |
| Repository | Code thay đổi liên tục, cần biết ai đổi gì, khi nào, quay lại được không | AI sửa hỏng mà không biết hỏng từ lúc nào |
| Kiểm thử | AI nói "đã xong" với cùng độ tự tin dù đúng hay sai | Bạn chỉ biết lỗi khi sale báo |
| Triển khai | Mọi thứ trên chỉ là giả định cho đến khi người thật dùng | Làm đúng thứ không ai cần |

Quan hệ giữa chúng không ngang hàng. **Tài liệu chuẩn là gốc.** Code được sinh ra từ tài liệu. Test kiểm tra code có khớp tài liệu không. Khi phản hồi thực tế cho thấy tài liệu sai, bạn sửa tài liệu trước, rồi code và test chạy theo.

Nếu bạn sửa code mà không sửa tài liệu, phiên AI tiếp theo đọc tài liệu cũ và sửa ngược lại. Đây là lỗi bạn sẽ gặp nhiều nhất khi làm với AI.

> *(Hình minh họa tương tác trong bản Claude Docs: vòng lặp làm dự án với AI · 6 thành phần. Bản Markdown không hiển thị được.)*

Phản hồi từ người dùng thật quay về người quyết định, không quay thẳng về code. Thay đổi luôn đi qua tài liệu trước.

### Phép so sánh với homestay

Hãy nghĩ tới một homestay có chủ và vài nhân viên lễ tân làm theo ca. Chủ quyết định giá và quy tắc. Sổ lịch phòng ở quầy là nguồn sự thật. Nhân viên ca nào cũng nhìn sổ để trả lời khách, không dựa vào trí nhớ. Trước khi khách đến, có người đi kiểm tra phòng thật chứ không tin lời "em dọn rồi".

Chỗ giống: chủ là bạn, sổ là tài liệu chuẩn, nhân viên là AI, kiểm tra phòng là test.

Chỗ khác cần nhớ, vì nó làm phép so sánh này yếu đi:

- Nhân viên thật nhớ được chuyện hôm qua. AI mỗi phiên mới gần như quên sạch, trừ những gì nằm trong file nó được đọc. Nên sổ với AI còn quan trọng hơn với người.
- Nhân viên thật làm sai thì sai một phòng. AI làm sai một quy tắc thì sai ở mọi chỗ dùng quy tắc đó, và sai rất nhanh.
- Nhân viên thật thấy quy tắc vô lý thì hỏi lại. AI thường không hỏi mà tự chọn cách hợp lý nhất theo nó.

### Lộ trình học

Bạn không cần học hết 28 chương rồi mới bắt đầu làm. Mỗi phần mở khóa một năng lực, và năng lực đó gắn với một giai đoạn thật của Home247.

| Phần | Năng lực sau khi học | Dùng cho Home247 lúc nào |
| --- | --- | --- |
| 1. Bức tranh (Ch.1-3) | Biết dự án gồm những việc gì, việc nào của mình | Ngay bây giờ, để thấy còn thiếu gì |
| 2. Claude, Claude Code, bộ nhớ (Ch.4-6) | Biết tài liệu nên nằm ở đâu, Git dùng để làm gì | Trước khi viết dòng code đầu tiên |
| 3. File và cấu trúc (Ch.7-13) | Dựng được bộ tài liệu chuẩn và cơ chế giữ nó nhất quán | Song song với lúc vẽ xong thiết kế |
| 4. Tổ chức Claude Code (Ch.14-18) | Giao việc cho AI đúng cách, biết khi nào cần Skill, agent, Hook | Khi bắt đầu code |
| 5. Vận hành quy trình (Ch.19-25) | Đi được từ ý tưởng tới tính năng đã phát hành | Suốt quá trình làm MVP |
| 6. Xử lý tình huống (Ch.26-28) | Biết suy nghĩ khi mọi thứ đi sai | Khi gặp sự cố thật, và đọc lại định kỳ |

Thứ tự này đi theo phụ thuộc. Không hiểu tài liệu chuẩn (Phần 3) thì không giao việc cho Claude Code tốt được (Phần 4). Không giao việc tốt thì quy trình (Phần 5) chỉ là danh sách bước trên giấy.
