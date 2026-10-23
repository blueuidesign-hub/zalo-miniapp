# Phần 3. Hiểu từng file và cấu trúc dự án

## Chương 7. Bản đồ các file và thư mục

Cấu trúc thư mục tốt phản ánh **cách bạn sẽ hỏi**. Khi có câu hỏi về giá, bạn và Claude Code đều biết mở đúng một chỗ, và chỉ cần đọc chỗ đó. Nó nối trực tiếp hai ý đã học: bảy tầng công việc (Chương 1) và cái bàn ngữ cảnh có giới hạn (Chương 5).

### Tình huống

Toàn bộ mô tả Home247 nằm trong một file 600 dòng. Giao Claude Code sửa màu chip ở S2, nó phải đọc cả 600 dòng, trong đó có quy tắc giá, quyền, đăng nhập. Bàn đầy nhanh, ý quan trọng bị loãng, và khi đổi một quy tắc, không ai chắc nó còn nằm ở chỗ nào khác trong file.

### Cấu trúc đề xuất cho Home247

```
home247/
├── CLAUDE.md              quy tắc làm việc, luôn được đọc
├── README.md              dự án là gì, cách chạy
├── docs/
│   ├── handoff.md         ghi chú bàn giao giữa các phiên
│   ├── decisions.md       danh sách quyết định
│   ├── product/           "đúng" nghĩa là gì
│   │   ├── brief.md
│   │   ├── glossary.md
│   │   ├── backlog.md
│   │   └── rules/         gia.md, lich.md, booking.md, can-tu-nhap.md
│   ├── design/            người dùng thao tác thế nào
│   │   ├── flows.md
│   │   └── screens/       mỗi màn một file: cn1.md, s2.md...
│   ├── architecture/      dữ liệu nằm đâu
│   │   ├── overview.md
│   │   └── data-model.md
│   └── security/          ai được đọc, ghi gì
│       └── permissions.md
├── src/                   code Mini App
├── supabase/              database và quy tắc quyền (nếu chọn Supabase)
└── tests/
```

**Logic chia.** Mỗi thư mục trong docs/ trả lời một loại câu hỏi ở Chương 1. Mỗi file đủ nhỏ để Claude Code chỉ đọc phần cần cho việc đang làm. Sửa màu chip S2 thì đọc screens/s2.md, không đụng rules/gia.md.

**Vì sao không gộp.** Ba lý do. File gộp chiếm bàn và làm loãng. Quy tắc dùng chung (giá dùng ở S2, S3, S5, CN4) mà nằm rải trong từng màn thì sớm thành mâu thuẫn. Và các phần thay đổi với tốc độ khác nhau: câu chữ màn hình đổi hàng tuần, quy tắc giá hiếm khi đổi.

> **Nguyên lý.** Mỗi thông tin nằm đúng một file. File khác cần nó thì trỏ tới, không chép lại. Ví dụ screens/s2.md ghi "giá hiển thị theo rules/gia.md", không tự mô tả lại cách tính.

### Tài liệu hiện có sẽ đi đâu

| Tài liệu trong Project | Chuyển thành |
| --- | --- |
| Bối cảnh dự án | Phần sản phẩm vào brief.md, phần quyết định vào decisions.md. Phần thị trường và pháp lý giữ ở Project |
| Mô tả thiết kế MVP | Tách thành screens/ (từng màn), flows.md, và rút quy tắc ra rules/ |
| Quy tắc căn tự nhập | rules/can-tu-nhap.md, gần như giữ nguyên |
| Nguyên lý lên kế hoạch, giáo trình | Giữ ở Project, code không dựa vào |

### Khi nào tạo thư mục mới

Tạo khi đã có nội dung thật cần chỗ ở. Không tạo trước cho "đủ bộ".

> **Chú ý.** Thư mục hoặc file rỗng không vô hại. Claude Code thấy docs/api/ rỗng có thể nghĩ cần viết API và tự điền vào. Đừng chép nguyên cấu trúc mẫu 20 thư mục trên mạng.

> **Chú ý.** Cấu trúc trên là đề xuất. Thư mục supabase/ phụ thuộc quyết định backend chưa chốt.

### Tóm tắt

- Thư mục chia theo loại câu hỏi: sản phẩm, thiết kế, kiến trúc, bảo mật. File chia nhỏ để AI chỉ đọc phần cần.
- Quy tắc dùng chung nằm riêng trong rules/, màn hình chỉ trỏ tới.
- **Nguyên lý:** mỗi thông tin một file, chỗ khác trỏ tới.
- **Chú ý:** không tạo thư mục rỗng. supabase/ chờ quyết định backend.
- **Bài tập:** quyết định "đêm cuối tuần là T6 và T7" nên nằm ở file nào? Những file nào khác cần trỏ tới nó?
- **Chương sau:** CLAUDE.md, file duy nhất luôn được đọc.


---

## Chương 8. CLAUDE.md

CLAUDE.md là file Claude Code tự đọc ở đầu mỗi phiên. Nó là **hướng dẫn làm việc**, không phải tài liệu sản phẩm. Nó chứa những gì AI cần biết ở mọi phiên, và chỉ đường tới phần còn lại.

### Vấn đề gốc

Nhân viên lễ tân mới cần biết vài điều trước khi làm ca đầu tiên: không đưa số chủ nhà cho khách, sổ lịch ở đâu, gặp chuyện lạ thì gọi ai. Không ai đưa họ cả chồng hồ sơ công ty. Phiên Claude Code nào cũng là "nhân viên mới", vì nó không nhớ phiên trước. CLAUDE.md là tờ dặn dò đầu ca.

Giới hạn của phép so sánh: nhân viên đọc tờ dặn một lần rồi nhớ. Claude Code đọc lại mỗi phiên, và mỗi dòng trong tờ dặn chiếm một phần bàn trong mọi phiên.

### Theo tài liệu chính thức

- CLAUDE.md ở gốc repository được nạp đầu mỗi phiên. CLAUDE.md trong thư mục con chỉ nạp khi Claude làm việc với file trong thư mục đó.
- Nên giữ dưới 200 dòng. File dài hơn tốn ngữ cảnh và làm giảm mức tuân thủ.
- Hai hướng dẫn mâu thuẫn thì Claude có thể chọn đại một bên.
- CLAUDE.md ở gốc được đọc lại sau khi phiên bị tóm tắt. Lời dặn chỉ nói trong chat thì có thể mất. Đây chính là lời giải cho tình huống số điện thoại ở Chương 5.
- Gõ /context trong phiên để xem CLAUDE.md nào đã được nạp.

> **Chú ý.** CLAUDE.md là lời dặn, không phải hàng rào. Tài liệu chính thức nói rõ Claude coi nó là ngữ cảnh, không phải cấu hình bắt buộc. Điều gì tuyệt đối không được xảy ra, như đẩy thẳng vào nhánh chính, thì phải chặn bằng hook hoặc quyền (Chương 17), còn quyền xem giá thì chặn bằng RLS và test.

### Nên và không nên đặt gì

| Nên đặt | Không nên đặt |
| --- | --- |
| Điều cần biết ở mọi phiên | Chi tiết chỉ dùng cho một phần, như toàn bộ quy tắc giá |
| Chỗ Home247 khác số đông | Điều AI tự suy ra được từ code |
| Quy tắc làm việc cụ thể, kiểm tra được | Câu chung chung như "code cho cẩn thận" |
| Đường dẫn tới tài liệu khác | Thứ hay đổi: việc đang làm, tiến độ (để ở handoff.md) |

Tài liệu chính thức gợi ý thêm một dòng vào CLAUDE.md khi Claude **mắc cùng một lỗi lần thứ hai**, hoặc khi bạn thấy mình gõ lại cùng một lời dặn ở phiên mới.

### Mẫu CLAUDE.md cho Home247

Mẫu đề xuất. Phần lệnh chạy để trống vì dự án chưa dựng.

```
## Home247 – Lịch phòng Hạ Long
Zalo Mini App cho chủ nhà homestay và sale ở Hạ Long.

### Trước khi làm
- Đọc docs/handoff.md để biết việc đang dở.
- Việc chạm vào giá: đọc docs/product/rules/gia.md.
- Việc chạm vào quyền: đọc docs/security/permissions.md.

### Home247 khác app đặt phòng thông thường
- Không đăng nhập bằng email. Chỉ Zalo hoặc số điện thoại.
- Khách không dùng app. Booking do chủ nhà tạo và gắn tên sale.
- Hai lớp giá: giá chủ nhà và giá sale bán. Khách không bao giờ thấy giá chủ nhà.
- Tính theo đêm. Đêm cuối tuần mặc định là đêm T6 và T7.
- Không lưu thông tin khách. Không hiện số điện thoại người dùng cho nhau.
- Căn tự nhập không có lịch. Không bao giờ hiển thị "trống" cho căn tự nhập.

### Quy tắc làm việc
- Quyền chặn ở database, không chỉ ẩn trên giao diện.
- Không sửa hoặc xóa test để cho qua.
- Chỉ sửa file trong phạm vi được giao. Cần sửa ngoài phạm vi thì dừng và hỏi.
- Tài liệu không rõ hoặc mâu thuẫn thì dừng và hỏi, không tự chọn.
- Làm trên nhánh riêng. Mỗi commit một ý, mô tả tiếng Việt.
- Cuối phiên cập nhật docs/handoff.md.

### Lệnh
- Chạy test: (điền khi đã dựng dự án)
- Chạy thử Mini App: (điền khi đã dựng dự án)
```

Vì sao có bốn phần. "Trước khi làm" chỉ đường, giữ file ngắn. "Home247 khác..." chặn chỗ sai số 1 của AI là lấp bằng mặc định phổ biến. "Quy tắc làm việc" chặn sửa lan và tự chấm bài. "Lệnh" giúp AI tự chạy test mà không phải đoán. Ba phần đầu là bắt buộc với Home247. Phần lệnh điền khi có.

> **Nguyên lý.** Mỗi dòng trong CLAUDE.md phải trả lời được câu hỏi: nếu bỏ dòng này, AI có làm sai không? Không thì bỏ.

### Kiểm tra CLAUDE.md có được tuân thủ không

- Đầu phiên hỏi: "nêu ba điều Home247 khác app đặt phòng thông thường". Trả lời sai thì file chưa được nạp.
- Nhìn pull request: có vi phạm dòng nào không. Vi phạm lặp lại thì viết dòng đó cụ thể hơn, hoặc chuyển sang cơ chế chặn thật.
- Định kỳ rà lại để bỏ dòng lỗi thời hoặc mâu thuẫn.

### Tóm tắt

- CLAUDE.md là tờ dặn đầu ca: được đọc mọi phiên, nên phải ngắn, cụ thể, không mâu thuẫn.
- Chứa: chỗ Home247 khác số đông, quy tắc làm việc, đường dẫn, lệnh. Không chứa chi tiết nghiệp vụ và tiến độ.
- **Nguyên lý:** dòng nào bỏ đi mà AI không làm sai thì bỏ. Thêm dòng khi AI sai cùng một lỗi lần thứ hai.
- **Chú ý:** CLAUDE.md là lời dặn, không phải hàng rào. Điều tuyệt đối cấm phải chặn bằng cơ chế khác.
- **Bài tập:** viết thêm hai dòng cho phần "Home247 khác...", mỗi dòng kèm lỗi AI sẽ mắc nếu thiếu nó.
- **Chương sau:** tài liệu nghiệp vụ, nơi CLAUDE.md trỏ tới.

Nguồn: [How Claude remembers your project](https://code.claude.com/docs/en/memory).


---

## Chương 9. Tài liệu nghiệp vụ và sản phẩm

Mỗi loại tài liệu nghiệp vụ trả lời một câu hỏi khác, được đọc bởi người khác, và thay đổi với tốc độ khác. Đó là lý do tách chúng ra. Với Home247 làm cùng AI, loại quan trọng nhất là **business rules** và **acceptance criteria**, vì đó là chỗ AI hay đoán sai nhất và là nguồn của test.

### Tình huống

Quy tắc "giá lễ ưu tiên hơn giá mùa" hiện nằm trong mô tả màn CN7. Màn S2, S5, CN4 cũng dùng giá. Phiên Claude Code làm S5 không đọc CN7, nên tự tính giá theo cách của nó. Hai màn hiện hai giá khác nhau cho cùng một đêm.

### Tám loại tài liệu

| Loại | Trả lời câu hỏi | Ví dụ Home247 | Bỏ thì hỏng gì |
| --- | --- | --- | --- |
| Product brief | Vì sao làm, cho ai, không làm gì | Sale phải gọi từng chủ nhà, mục tiêu là học | Thêm tính năng không ai cần |
| Personas, user journey | Người dùng là ai, họ làm việc ra sao | Chị Lan 45 tuổi, cầm máy một tay | Thiết kế cho người không tồn tại |
| PRD (đặc tả tính năng) | Tính năng này làm gì | Tìm phòng và gửi khách | Mỗi người hiểu phạm vi một kiểu |
| User story | Một mảnh nhỏ, ai muốn gì để làm gì | Sale muốn lọc theo số khách | Việc quá to, không giao AI được |
| Business rules | Quy tắc nghiệp vụ dùng chung | Thứ tự ưu tiên giá, căn tự nhập | AI đoán, mỗi màn một kiểu |
| Acceptance criteria | Thế nào là xong | Khi... thì... kèm số cụ thể | Không có gì để viết test |
| Glossary | Mỗi từ nghĩa chính xác là gì | "Đêm", "giá chủ nhà", "kết nối" | Người và AI hiểu cùng từ theo hai nghĩa |
| Roadmap, backlog | Làm gì trước, gì sau | MVP trước, yêu cầu giữ chỗ sau | Việc dễ được làm trước việc quan trọng |

### Chúng nối với nhau thế nào

Một chuỗi đi từ rộng đến hẹp: brief → personas → PRD → user story → acceptance criteria → test. Mỗi bước làm cụ thể hơn bước trước.

Business rules và glossary nằm ngoài chuỗi, được **mọi** tài liệu khác dùng chung. Đó là lý do chúng phải tách riêng. Backlog sắp thứ tự cho các user story.

> **Nguyên lý.** Tách tài liệu theo tốc độ thay đổi và theo người đọc. Quy tắc dùng chung không được nằm bên trong tài liệu của một tính năng.

### Cách viết hai loại quan trọng nhất

**Business rule:** mỗi quy tắc có mã, nội dung, ví dụ số, và nguồn quyết định.

```
GIA-02 · Thứ tự ưu tiên giá mỗi đêm
Quy tắc: ngày lễ > mùa > mặc định. Trong mùa và mặc định,
         đêm cuối tuần dùng giá cuối tuần.
Ví dụ:  đêm 02/09/2026 có giá lễ 1.500k, mùa hè 900k → 1.500k.
         đêm lễ không nhập giá, mùa hè 900k → 900k.
Nguồn:  chốt ngày .../..., người chốt ...
```

**User story kèm acceptance criteria:** viết theo dạng "Khi... thì...", mỗi dòng kiểm tra được.

```
Sale muốn tìm căn trống theo ngày và số khách để trả lời khách trong vài phút.
- Khi tìm 10/10 đến 12/10, căn có booking đêm 11/10 không hiện.
- Khi chủ nhà tắt hiện giá, căn vẫn hiện nhưng không có giá.
- Khi căn là căn tự nhập, hiện "?" chứ không hiện "trống".
- Khi lịch cập nhật hơn 7 ngày, căn xếp cuối và có cảnh báo đỏ.
```

Mỗi dòng "Khi... thì..." sẽ thành một test. Đây là cách tách phần quyết định (bạn viết) khỏi phần thực thi (AI viết test) như Chương 3.

### Home247 đang có gì, thiếu gì

| Đã có | Đóng vai trò |
| --- | --- |
| Bối cảnh dự án | Brief và một phần personas |
| Danh sách chức năng có mã | Backlog |
| Mô tả thiết kế MVP | Trộn PRD, đặc tả màn hình và quy tắc rải rác |
| Quy tắc căn tự nhập | Business rule, đúng dạng |

Thiếu: business rules tập trung, glossary, acceptance criteria.

> **Chú ý.** Không viết đủ tám loại ngay. Với nhóm hai người, bộ tối thiểu là brief, business rules, glossary, backlog, và acceptance criteria viết ngay trong từng user story. PRD riêng chỉ cần khi một tính năng lớn hơn vài story.

> **Chú ý.** Glossary nghe nhỏ nhưng chặn nhiều lỗi. "Giá gốc" trong tài liệu cũ và "giá chủ nhà" trong tài liệu mới nếu không được ghi là một, AI có thể hiểu thành hai thứ.

### Tóm tắt

- Tám loại tài liệu xếp thành chuỗi từ rộng đến hẹp, kết thúc ở test. Business rules và glossary dùng chung cho cả chuỗi.
- Business rule có mã, ví dụ số và nguồn. Acceptance criteria viết dạng "Khi... thì...", mỗi dòng thành một test.
- **Nguyên lý:** tách theo tốc độ thay đổi và người đọc. Quy tắc dùng chung nằm riêng. Tài liệu không có ai đọc để quyết hoặc kiểm tra thì không viết.
- **Chú ý:** bắt đầu với bộ tối thiểu. Thống nhất từ ngữ trong glossary.
- **Bài tập:** rút từ mô tả CN7 và viết lại thành ba business rule có mã GIA-01 đến GIA-03, mỗi quy tắc một ví dụ số.
- **Chương sau:** tài liệu thiết kế UX/UI, và cách để Claude hiểu thiết kế thay vì đoán từ ảnh chụp.


---

## Chương 10. Tài liệu thiết kế UX/UI

Một ảnh thiết kế cho thấy **một khoảnh khắc**: màn hình trông thế nào khi mọi thứ suôn sẻ. Code phải xử lý **mọi khoảnh khắc**: đang tải, mất mạng, không có quyền, dữ liệu quá dài. Phần chênh lệch đó AI sẽ tự đoán nếu không có đặc tả bằng chữ.

### Tình huống

Bạn đưa Claude Code ảnh màn S2 Kết quả tìm phòng. Nó dựng đúng từng pixel. Nhưng khi sale chưa có nguồn phòng, màn hình trắng trơn. Khi mất mạng, nó quay mãi. Khi tên căn dài 40 ký tự, chữ đè lên giá. Ảnh không nói gì về những lúc đó.

### Ba lớp của thiết kế

| Lớp | Trả lời | Nằm ở đâu |
| --- | --- | --- |
| Thiết kế hình ảnh | Trông như thế nào | Claude Design, Figma |
| Thiết kế hành vi | Bấm vào thì sao, lỗi thì sao | User flow, đặc tả trạng thái |
| Đặc tả để lập trình | Dữ liệu từ đâu, quy tắc nào, trạng thái nào | docs/design/screens/ |

### Các khái niệm

| Khái niệm | Nghĩa | Home247 |
| --- | --- | --- |
| User flow | Chuỗi màn người dùng đi qua để xong một việc | S1 → S2 → S5, sale tìm và gửi khách |
| Wireframe | Bản phác bố cục, chưa màu | Thử vị trí nút chính trong tầm ngón cái |
| Prototype | Bản bấm thử được | Đưa chủ nhà thật cầm thử CN4 |
| Design system | Bộ quy tắc và thành phần dùng chung | Chữ tối thiểu 14px, vùng bấm 44px, đỏ chỉ cho việc cần xử lý |
| Design token | Tên đặt cho một giá trị | "màu cảnh báo" thay vì mã màu cụ thể |
| Component | Một mảnh giao diện dùng lại | Chip độ mới lịch, dùng ở S2, S3, S7 |
| Interaction states | Các trạng thái của một màn | Rỗng, đang tải, lỗi, không có quyền |
| Responsive | Giao diện tự co theo màn hình | Khung 390×844, chừa 44px cho thanh Zalo. Thêm Web/PWA thì phải tính màn lớn |

Design token giải quyết vấn đề đổi một chỗ mà cả app đổi theo. Code dùng tên "màu cảnh báo", nên đổi mã màu một lần là xong.

### Đặc tả một màn cần gì

Bản mô tả MVP hiện tại đã có bố cục, tương tác và trạng thái rỗng. Mỗi file screens/ nên có thêm:

- **Dữ liệu lấy từ đâu** và trỏ tới quy tắc trong rules/, không chép lại quy tắc.
- **Đủ bốn trạng thái:** rỗng, đang tải, lỗi mạng, không có quyền.
- **Dữ liệu cực trị:** tên căn rất dài, 20 căn trên CN2, ngày có 15 booking.
- **Ai thấy gì:** cùng màn S3 nhưng sale có giá và sale bị tắt giá thấy khác nhau.

> **Nguyên lý.** Ảnh cho thấy một khoảnh khắc, đặc tả cho thấy mọi khoảnh khắc. Đưa Claude cả hai, đừng chỉ đưa ảnh.

### Quy trình từ thiết kế sang code

Thiết kế hình ảnh → cập nhật đặc tả màn → Claude Code đọc cả ảnh và đặc tả → code → bạn đối chiếu trên điện thoại thật trong Zalo.

Nếu vẽ bằng Figma, Claude Code có thể đọc trực tiếp cấu trúc thiết kế qua kết nối (Chương 18), thay vì nhìn ảnh chụp. Đây là lý do duy nhất đáng cân nhắc Figma lúc này. Nếu Claude Design đủ cho bạn thì chưa cần đổi.

> **Chú ý.** Khi thiết kế và đặc tả lệch nhau, cần biết bên nào là gốc. Đề xuất: hình dáng theo thiết kế, hành vi và quy tắc theo đặc tả. Ghi quy ước này vào CLAUDE.md.

> **Chú ý.** Đừng sửa giao diện thẳng trong code rồi bỏ thiết kế cũ. Lần sau AI đọc thiết kế cũ và sửa ngược lại.

### Tóm tắt

- Thiết kế có ba lớp: hình ảnh, hành vi, đặc tả để lập trình. Ảnh chỉ là lớp đầu.
- Mỗi đặc tả màn cần: nguồn dữ liệu, bốn trạng thái, dữ liệu cực trị, ai thấy gì.
- Design token và component giúp đổi một chỗ, cả app đổi theo.
- **Nguyên lý:** ảnh là một khoảnh khắc, đặc tả là mọi khoảnh khắc.
- **Chú ý:** quy ước rõ hình theo thiết kế, hành vi theo đặc tả. Không sửa giao diện trong code mà bỏ thiết kế.
- **Bài tập:** viết bốn trạng thái rỗng, đang tải, lỗi mạng, không có quyền cho màn S3 Chi tiết căn.
- **Chương sau:** tài liệu kiến trúc, nơi quyết định "ai thấy gì" được thực hiện.


---

## Chương 11. Tài liệu kiến trúc và kỹ thuật

Tài liệu nghiệp vụ nói **cái gì là đúng**. Tài liệu kỹ thuật nói **đúng bằng cách nào**. Quy tắc "khách không thấy giá chủ nhà" không đổi dù bạn dùng Supabase hay máy chủ riêng. Cách thực hiện quy tắc đó thì đổi hoàn toàn. Tách hai loại ra để đổi công nghệ không làm hỏng tài liệu nghiệp vụ.

### Tình huống

MVP chọn một vai trò lúc đăng ký. Claude Code thiết kế database với một cột "vai trò" cho mỗi người. Sáu tháng sau bạn muốn đại lý vừa có căn vừa bán phòng. Lúc này phải đổi cấu trúc database đang chứa dữ liệu thật, sửa mọi quy tắc quyền, sửa mọi màn. Nếu ngay từ đầu cấu trúc dữ liệu cho phép một người có cả căn lẫn nguồn phòng, MVP vẫn chỉ hiện một vai trò, và việc mở rộng sau chỉ là việc giao diện.

> **Nguyên lý.** Mô hình dữ liệu là quyết định có nhiều thứ dựa vào nhất trong dự án. Đây là chỗ áp dụng mạnh nhất nguyên lý "chốt sớm cái nhiều thứ phụ thuộc" ở Chương 1.

### Tám loại tài liệu

| Loại | Trả lời | Home247 |
| --- | --- | --- |
| System architecture | Các khối lớn và cách chúng nối | Mini App ↔ backend ↔ Zalo API |
| Data model | Có những đối tượng nào, liên hệ ra sao | Người dùng, căn, booking, mẫu giá, kết nối, bản sửa riêng, đội |
| Database schema | Dữ liệu lưu cụ thể thế nào | Bảng, cột, quy tắc RLS. Claude Code viết, bạn đọc phần quyền |
| API contract | Màn hình gửi gì, nhận gì | "Tìm căn trống" gửi khoảng ngày, nhận căn và giá đã lọc theo quyền người hỏi |
| ADR | Vì sao chọn cách này, đã bỏ cách nào | Chọn Zalo Mini App, chọn backend |
| Environment configuration | Môi trường thử và thật khác nhau ở đâu | Khóa bí mật Zalo chỉ nằm trên máy chủ |
| Technical specification | Một tính năng làm bằng kỹ thuật gì | Cách tính giá mỗi đêm chạy ở đâu |
| Migration | Thay đổi cấu trúc database theo từng bước có thứ tự | Thêm cột "hiện giá theo từng sale" vào bảng kết nối |

### ADR, loại bạn sẽ viết nhiều nhất

ADR (Architecture Decision Record) ghi một quyết định kỹ thuật quan trọng. Nó giữ lại **lý do**, thứ mà code không giữ được. Không có lý do, phiên AI sau dễ "cải thiện" ngược lại.

```
ADR-0002 · Có làm thêm Web/PWA bên cạnh Mini App không
Bối cảnh: người dùng chia sẻ qua Zalo. Zalo hay từ chối Mini App có link ra ngoài.
Phương án: (1) chỉ Mini App. (2) Mini App và Web/PWA dùng chung backend.
Quyết định: (chưa chốt)
Hệ quả: phương án 2 cần thêm cách đăng nhập ngoài Zalo, thêm giao diện màn lớn,
        và không được dẫn link từ Mini App sang web.
Ngày, người chốt: ...
```

> **Chú ý.** ADR không sửa lại. Quyết định đổi thì viết ADR mới, ghi "thay cho ADR-0002". Lịch sử quyết định là thứ giúp trả lời "vì sao hồi đó làm vậy".

### Bạn cần đọc tới đâu

Theo Chương 3, bạn không cần viết schema hay API. Bạn cần:

- Vẽ được system architecture năm hộp, và chỉ ra giá chủ nhà đi qua những hộp nào.
- Đọc được data model bằng lời để kiểm tra nó có khớp nghiệp vụ không. Ví dụ: một sale có nhiều chủ nhà, một chủ nhà có nhiều sale, mỗi cặp có trạng thái đồng ý và công tắc hiện giá.
- Duyệt mọi ADR.
- Biết migration chạy trên dữ liệu thật và không quay lại theo Git, nên phải thử trên bản sao trước.

> **Chú ý.** API contract phải trả về dữ liệu **đã lọc theo quyền người hỏi**. Nếu nó trả về giá chủ nhà rồi để màn hình tự ẩn, đó là cách A ở Chương 1, giá vẫn lộ.

### Tóm tắt

- Nghiệp vụ nói cái gì đúng, kỹ thuật nói đúng bằng cách nào. Đổi công nghệ không được làm đổi nghiệp vụ.
- Bạn đọc và duyệt: sơ đồ hệ thống, data model, ADR. Claude Code viết: schema, API, migration.
- **Nguyên lý:** data model là quyết định đắt nhất để đổi. Thiết kế nó cho hướng đi dài hạn, dù giao diện MVP hẹp hơn.
- **Chú ý:** ADR không sửa, chỉ thay bằng ADR mới. API trả dữ liệu đã lọc quyền. Migration thử trên bản sao trước.
- **Bài tập:** viết ADR-0001 cho quyết định đã chốt "chọn Zalo Mini App", gồm bối cảnh, phương án đã bỏ, hệ quả.
- **Chương sau:** tài liệu bảo mật và kiểm thử, nơi quyền được chứng minh.


---

## Chương 12. Tài liệu bảo mật và kiểm thử

Nói "hệ thống an toàn" là một lời khẳng định. Có test đăng nhập bằng tài khoản sale, cố tình đọc giá căn không được phép, và bị chặn, mới là bằng chứng. Nhóm tài liệu này biến lời khẳng định thành bằng chứng, và chỉ rõ phải làm gì khi bằng chứng sai.

### Tình huống

Claude Code báo: "Đã bật RLS cho mọi bảng, sale chỉ xem được dữ liệu của chủ nhà đã kết nối." Bạn thử bằng tài khoản của mình, thấy ổn. Nhưng bạn là chủ mọi dữ liệu thử, nên bạn luôn thấy đúng. Chưa ai thử bằng tài khoản sale B cố đọc dữ liệu của chủ nhà A.

### Ma trận quyền

Nền tảng của cả chương. Mỗi ô là một cam kết, và mỗi cam kết cần ít nhất một test. Bản nháp dưới đây dựa trên các quyết định trong tài liệu dự án, bạn cần duyệt lại từng ô.

| Dữ liệu | Chủ nhà (của mình) | Sale đã kết nối | Người mở link, chưa kết nối | Cộng tác viên | Khách |
| --- | --- | --- | --- | --- | --- |
| Có khách hay trống | Đọc, ghi | Đọc | Đọc | Đọc, căn được chia sẻ | Không |
| Giá chủ nhà | Đọc, ghi | Đọc nếu bật hiện giá | Theo công tắc hiện giá | Không | Không |
| Tên sale, tiền trên booking | Đọc, ghi | Chỉ booking của chính mình | Không | Không | Không |
| Ghi chú nội bộ của căn | Đọc, ghi | Không | Không | Không | Không |
| Bản sửa riêng của sale | Không | Chỉ sale đó | Không | Không | Không |
| Số điện thoại người dùng | Chỉ của mình | Chỉ của mình | Không | Không | Không |

> **Nguyên lý.** Một quyền chỉ có thật khi có test cố tình vi phạm nó và bị chặn. Chưa có test đó thì ô trong ma trận chỉ là mong muốn.

### Bảy loại tài liệu còn lại

| Loại | Trả lời | Home247 |
| --- | --- | --- |
| Threat model | Ai có thể làm hại, bằng cách nào | Sale tò mò gọi thẳng database. Link bị chuyển tiếp. Người dò số điện thoại. Cộng tác viên muốn biết giá gốc để vượt sale. Sale đã bị ngừng chia sẻ |
| Test plan | Kiểm tra gì, bằng cách nào, ở đâu | Test tự động cho giá và quyền, thử tay luồng chính trong Zalo |
| Test case | Một trường hợp cụ thể có kết quả mong đợi | Sale B đọc bảng giá căn của chủ A chưa kết nối → không nhận dòng nào |
| Definition of Done | Thế nào là một tính năng xong | Xem bên dưới |
| Release checklist | Trước khi phát hành phải kiểm gì | Build dưới 10MB, không có khóa bí mật trong code Mini App, migration đã thử trên bản sao, danh mục Zalo đúng |
| Runbook | Khi sự cố xảy ra thì làm gì, theo thứ tự nào | Giá bị lộ: tắt tính năng chia sẻ, vô hiệu link, kiểm tra phạm vi, báo người bị ảnh hưởng |
| Incident report | Sự cố gì, ảnh hưởng ai, vì sao lọt, sửa gì để không lặp | Đây là nơi phần trách nhiệm ở Chương 3 được ghi lại |

### Definition of Done đề xuất

Một tính năng chỉ "xong" khi:

1. Mọi dòng acceptance criteria có test và test chạy qua.
2. Mọi ô ma trận quyền mà tính năng chạm vào đều có test cố tình vi phạm.
3. Luồng chính đã chạy trong Zalo trên điện thoại thật.
4. Tài liệu liên quan đã cập nhật, ghi chú bàn giao đã viết.

Definition of Done chặn đúng rủi ro deadline số 1 trong tài liệu nguyên lý lên kế hoạch của bạn: đạt hạn bằng cách cắt thứ không ai thấy.

> **Chú ý.** Test quyền phải chạy bằng nhiều tài khoản thử khác nhau: chủ nhà A, chủ nhà B, sale đã kết nối, sale chưa kết nối, cộng tác viên. Không chạy bằng tài khoản quản trị, vì tài khoản quản trị thường vượt qua RLS và test luôn xanh.

> **Chú ý.** Test quyền được viết từ ma trận bạn đã duyệt, bởi một phiên khác với phiên viết RLS. Nếu cùng một phiên viết cả hai, nó kiểm tra đúng cái nó đã hiểu, kể cả khi hiểu sai.

Số điện thoại là dữ liệu cá nhân. Luật Bảo vệ dữ liệu cá nhân 2025 có hiệu lực từ 01/01/2026, nên dòng số điện thoại trong ma trận không chỉ là chuyện sản phẩm mà còn là nghĩa vụ pháp lý.

### Tóm tắt

- Ma trận quyền là gốc: mỗi ô là một cam kết, mỗi cam kết có test.
- Threat model nói ai tấn công thế nào. Test case biến nó thành trường hợp cụ thể. Runbook và incident report lo phần sau khi sự cố xảy ra.
- Definition of Done gồm: test nghiệp vụ, test quyền, chạy thật trong Zalo, tài liệu cập nhật.
- **Nguyên lý:** quyền chỉ có thật khi có test cố tình vi phạm và bị chặn.
- **Chú ý:** test bằng nhiều tài khoản thử, không dùng tài khoản quản trị. Người viết test khác người viết RLS.
- **Bài tập:** duyệt ma trận quyền trên. Thêm dòng cho "thống kê thu nhập của sale" và "booking trên căn tự nhập". Với mỗi ô "Không" của cột Cộng tác viên, viết một test case.
- **Chương sau:** quản lý quyết định và thay đổi, để tất cả tài liệu từ Chương 7 đến 12 không lệch nhau theo thời gian.


---

## Chương 13. Quản lý quyết định và sự thay đổi

Quyết định không được ghi lại thì sẽ bị ra lại, thường là bởi AI, và thường khác lần trước. Quyết định đã ghi mà thay đổi không lan hết các tài liệu thì sinh ra mâu thuẫn. Chương này là cơ chế giữ cho toàn bộ tài liệu từ Chương 7 đến 12 không lệch nhau theo thời gian.

### Tình huống có thật

Bản mô tả MVP (07/10) ghi ở A2: số điện thoại "chỉ hiện cho người bạn đã kết nối", và CN9 hiện số của từng sale. Sau đó bạn quyết định không hiện số điện thoại cho nhau. Quyết định mới nằm trong trí nhớ và trong chat, bản mô tả cũ vẫn nguyên. Claude Code đọc bản mô tả, sẽ hiện số.

### Ba loại nội dung phải ghi khác nhau

AI coi mọi thứ đã viết là sự thật, trừ khi được ghi rõ. Nên mỗi nội dung cần nhãn trạng thái:

| Nhãn | Nghĩa | Ví dụ Home247 |
| --- | --- | --- |
| Đã chốt | Làm theo, không tự đổi | Không đăng nhập bằng email |
| Đề xuất | Đang cân nhắc, không được code theo | Dùng Supabase |
| Giả định | Đang tin là đúng nhưng chưa kiểm chứng | Chủ nhà có động lực tự ghi lịch |

Tiêu chí này loại bỏ việc AI code theo một đề xuất chỉ vì nó nằm trong tài liệu, và việc bạn quên một giả định là chưa được kiểm chứng.

### Decision log và ADR

|  | Decision log | ADR (Chương 11) |
| --- | --- | --- |
| Ghi gì | Mọi quyết định sản phẩm, kể cả nhỏ | Quyết định kỹ thuật lớn |
| Độ dài | Một dòng mỗi quyết định | Một file, có phương án đã bỏ và hệ quả |
| Ví dụ | Không hiện số điện thoại cho nhau | Chọn backend |

Mỗi dòng decision log: mã, quyết định, lý do một câu, ngày, người chốt, và "thay cho" nếu có.

```
QD-014 · Không hiện số điện thoại người dùng cho nhau, kể cả khi đã kết nối.
  Lý do: sale sợ bị lấy liên hệ chủ nhà. Ngày: .../10. Người chốt: Tùng.
  Thay cho: mô tả A2, CN9 trong bản MVP 07/10.
```

> **Chú ý.** Quyết định cũ bị thay thì không xóa, ghi "đã thay bởi QD-xxx". Xóa đi thì mất câu trả lời cho "vì sao hồi đó làm vậy", và có người sẽ đề xuất lại đúng ý đã bị bỏ.

### Quy trình một thay đổi

1. **Ghi quyết định** vào decision log.
2. **Tìm mọi nơi bị ảnh hưởng.** Giao Claude rà tài liệu theo từ khóa. Với QD-014: A2, CN9, S3 nút "Gọi chủ nhà", S8.
3. **Sửa nguồn chính,** nơi khác trỏ tới nguồn chính.
4. **Code và test đi sau,** theo tài liệu đã sửa.

Bước 2 thường lộ ra chỗ cần nghĩ thêm. Nút "Gọi chủ nhà" trên căn của chủ nhà đã kết nối mâu thuẫn với QD-014. Nút "Gọi hỏi lịch" trên căn tự nhập thì không, vì số đó do chính sale tự nhập. Hai nút giống nhau trên màn hình nhưng khác nhau về quyền.

### Khi tài liệu, thiết kế và code mâu thuẫn

Thứ tự tham chiếu đề xuất: decision log, rồi business rules, rồi đặc tả màn, rồi thiết kế hình ảnh, rồi code. Code đứng cuối vì code là bản dịch của các thứ phía trên.

> **Nguyên lý.** Mâu thuẫn là triệu chứng của một thay đổi chưa lan hết. Chữa bằng cách ghi rõ quyết định rồi lan nó ra, không phải bằng cách âm thầm chọn một bên.

> **Chú ý.** Thứ tự trên không phải luật máy móc. Đôi khi code đúng hơn vì đã được sửa sau khi thử với người dùng thật, còn tài liệu chưa ai cập nhật. Khi thấy lệch, hỏi "bên nào phản ánh quyết định mới nhất", rồi ghi quyết định đó vào decision log.

### Tóm tắt

- Mọi nội dung có nhãn: đã chốt, đề xuất, giả định.
- Decision log ghi mọi quyết định sản phẩm, mỗi cái một dòng. ADR ghi quyết định kỹ thuật lớn.
- Một thay đổi đi bốn bước: ghi quyết định, tìm chỗ ảnh hưởng, sửa nguồn chính, rồi code và test.
- **Nguyên lý:** mâu thuẫn là thay đổi chưa lan hết. Ghi rõ quyết định, không chọn âm thầm.
- **Chú ý:** không xóa quyết định cũ, ghi "đã thay bởi". Thứ tự tham chiếu cần phán đoán, không áp máy móc.
- **Bài tập:** viết decision log cho năm quyết định đã chốt trong tài liệu bối cảnh. Sau đó chạy quy trình bốn bước cho QD-014 trên bản mô tả MVP.
- **Chương sau:** bước sang Phần 4, cách giao việc cho Claude Code dựa trên bộ tài liệu đã dựng.
