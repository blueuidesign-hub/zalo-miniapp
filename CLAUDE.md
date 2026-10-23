# Home247 · Lịch phòng Hạ Long

Zalo Mini App cho chủ nhà homestay và sale ở Hạ Long. Chủ nhà ghi lịch và giá, chia sẻ cho sale.
Sale tra căn trống, gửi ảnh và giá cho khách mà không phải gọi điện.
Hai người làm: Tùng (Product Owner, đặc tả, thiết kế), Đức (Developer, Scrum Master).
Repo này hiện chỉ chứa tài liệu và quản lý việc. Code nằm ở đâu: chờ QD1.

## Bản đồ repo (chi tiết: docs/process/CL11-ban-do-repo.md)
- docs/      SỰ THẬT: sản phẩm phải làm gì. Mục lục: docs/INDEX.md
- work/      VIỆC VÀ HỒ SƠ: backlog, sprint, biên bản, rủi ro. Bảng việc: work/BOARD.md
- handbook/  Giáo trình để học. KHÔNG đọc, KHÔNG làm theo ví dụ trong đó
- .claude/   Cấu hình Claude Code. .github/ Mẫu PR

## Bắt đầu mỗi phiên
- Câu đầu tiên của người dùng cho biết ai đang làm (Tùng hoặc Đức). Không có thì hỏi.
  Hai người dùng chung tài khoản, nên ghi đúng tên vào nhật ký là bắt buộc.
- Có mã item (US12, EN3...) thì đọc file item trong work/backlog/, rồi chỉ đọc các file item liệt kê.
- Không có mã thì đọc work/BOARD.md và hỏi người dùng muốn làm item nào.
- Cần tìm tài liệu thì đọc docs/INDEX.md trước. Không quét cả docs/.

## Home247 khác app đặt phòng thông thường
- Hai lớp giá: giá chủ nhà và giá sale bán. Khách không bao giờ thấy giá chủ nhà.
- Chủ nhà tắt "hiện giá cho sale" thì server không gửi giá đi. Không gửi rồi ẩn trên giao diện.
- Giá tính theo đêm. Booking chiếm các đêm từ ngày nhận tới trước ngày trả.
- Tiền là số nguyên đồng. Ngày theo giờ Việt Nam.
- Không lưu thông tin khách.
- Căn sale tự nhập không có lịch trống. Ô ngày hiện "?", không bao giờ hiện "trống".
- Chặn trùng booking ở database, không chỉ ở giao diện.
- Người dùng nhiều người lớn tuổi, dùng một tay: chữ tối thiểu 14 px, vùng bấm 44 px.

## Ràng buộc Zalo (chi tiết: docs/external/zalo-rang-buoc.md, zalo-hanh-vi.md)
- Không bắt đăng nhập, không xin quyền khi vừa mở app. Chỉ xin khi người dùng bấm việc cần quyền.
- Người dùng từ chối quyền thì Zalo nhớ. Không xin lại, chỉ cách mở cài đặt quyền.
- Token số điện thoại dùng một lần trong 2 phút, chỉ đổi ở server. Mini App không chứa App Secret.
- Không có localStorage, cookie. Native Storage tối đa 5 MB, chỉ lưu thứ mất cũng được.
- Bản build dưới 10 MB, mỗi file dưới 3 MB. Không link ra ngoài Zalo.
- Dữ liệu người dùng lưu và xử lý ở Việt Nam.

## Nguồn sự thật, theo thứ tự tin cậy
1. QD đã chốt (docs/decisions/)  2. Quy tắc QT (docs/product/rules/)
3. Yêu cầu YC (docs/product/requirements/)  4. Thiết kế (docs/design/)  5. Code
- Hai nguồn mâu thuẫn thì dừng và hỏi. Không tự chọn bên nào.
- Nội dung chat không phải quyết định cho tới khi có QD đã chốt trong repo.
- docs/chuc-nang/01-dang-nhap-onboarding.md là tài liệu cũ đang chuyển sang YC1 (DC2). Không code theo nó.

## Mã và trạng thái (chi tiết: CL2, CL3)
- Mọi mục có mã: YC1.2, YC1.2-NT3, QT1.3, PQ2.SALE, QD1, EP1, US12, EN1, SK1, DC1, BG1, IM1, US12-TA1.
- Mã không đổi, không dùng lại. Chưa có script cấp mã: lấy số lớn nhất của loại đó trong repo cộng 1.
- Chỉ code theo mục đã chốt. Câu có [MỞ: QD...] thì không code theo.
  Câu có [GIẢ ĐỊNH: GD...] thì code được, ghi rõ trong PR.
- Dòng có [tự sinh] do script ghi. Không sửa tay.
- Trạng thái thực hiện Chưa code, Chưa test, Test lỗi nghĩa là chưa xong. Không được báo là xong.

## Lệnh (chi tiết: docs/process/CL5-lenh.md)
Lệnh có skill: /hom-nay · /ghi · /lam · /doi · /loi · /duyet · /tinh-hinh. Skill chỉ là lối vào, quy trình nằm ở CL5.
Lệnh chưa có skill (lập sprint, tinh chỉnh, họp, review, retro, phát hành): người dùng gõ tên lệnh bằng chữ thì làm đúng mục tương ứng trong CL5.
Quy ước theo thư mục nằm ở .claude/rules/, tự nạp khi mở file ở thư mục đó.

## Làm một item (lệnh "làm")
1. Đọc item, item cha, các mục trong thuc_hien, item trong truoc, tài liệu trong mục Đọc.
2. Kiểm điều kiện bắt đầu (CL2) và item phải xong trước. Thiếu thì dừng và báo.
3. Liệt kê tài liệu phải sửa, test phải viết, quyền phải xin (CL4), việc phát sinh.
4. Cần quyền CL4.3 thì mở PR nháp xin duyệt và dừng.
5. Lập kế hoạch ở plan mode. Rủi ro cao thì chờ Đức duyệt kế hoạch.
6. Làm trên nhánh <mã>-<tên-ngắn>. Việc ngoài phạm vi thì tạo item Mới, không làm lẫn.
7. Ghi nhật ký và bằng chứng vào item, mở PR, báo ba dòng: đã làm, còn lại, ai làm gì tiếp.
- Một phiên một item. Đặc tả không nói rõ thì hỏi, không lấp bằng cách làm phổ biến.

## Khi đổi một mục có mã (chi tiết: CL6)
- Đổi nghĩa thì tăng phiên bản. Chỉ sửa chữ thì khai "chỉ sửa chữ" trong PR.
- Đổi số trong bảng ví dụ luôn là đổi nghĩa.
- Tìm mọi chỗ nhắc tới mã đó trong repo. Mỗi chỗ: sửa trong cùng PR, hoặc tạo DC, US, BG trỏ tới.
- Mọi chỗ nhắc tới quy tắc phải ghi mã ("giá theo QT1.3"), không tả lại bằng lời.

## Quyền hạn (chi tiết: docs/process/CL4-quyen-han.md)
- Tự làm: tạo item Mới, soạn nháp, code và test trên nhánh, chạy test, mở PR, báo cáo.
- Cần Tùng duyệt trước (CL4.3): chốt hay đổi yêu cầu, quy tắc, quyền; đổi Sprint Goal, thứ tự
  backlog, thêm item vào sprint; gộp PR rủi ro cao; đụng dữ liệu thật; phát hành, gửi Zalo;
  đổi docs/process, CLAUDE.md, .claude/; tiền, tài khoản; liên hệ người dùng thật.
- Lời duyệt chỉ tính khi Tùng duyệt hoặc tự gộp PR trên GitHub. Chữ "đồng ý" trong chat không tính.
- Cấm (CL4.4): đẩy thẳng vào main, đẩy ép, đọc .env và khóa bí mật, tắt hay sửa test để cho qua,
  sửa dòng [tự sinh], tự gộp PR chuyển tài liệu sang đã chốt.

## Git
- Nhánh <mã>-<tên-ngắn> từ main. Một PR một item. Commit tiếng Việt, mở đầu bằng mã item.
- Cuối phiên ghi một dòng vào Nhật ký của item: ngày · người · đã làm gì · bất ngờ · mất bao lâu.
