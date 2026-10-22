# Ràng buộc của Zalo Mini App với Home247

Tất cả quy định, giới hạn kỹ thuật và giới hạn giao diện mà nền tảng Zalo Mini App đặt ra, gom trong một file. Mỗi mục ghi rõ quy định gốc, vì sao nó ảnh hưởng tới Home247 và cần làm gì.

- Tra cứu ngày 22/10/2026, từ tài liệu chính thức của Zalo (docs.zaloplatforms.com, miniapp.zaloplatforms.com). Các trang chính thức ghi "cập nhật lần cuối 19/10/2026".
- Mục nào chỉ dựa trên bài viết của bên thứ ba thì có ghi **(nguồn phụ)**. Mục đó nên kiểm tra lại trên trang quản trị Mini App trước khi dựa vào.
- Zalo đổi chính sách khá thường xuyên. Trước mỗi lần gửi duyệt, đọc lại mục 8 (checklist) và các trang nguồn ở cuối file.

## Mục lục

- [0. Kết luận: 6 điều phải sửa hoặc quyết định ngay](#0-kết-luận-6-điều-phải-sửa-hoặc-quyết-định-ngay)
- [1. Chủ sở hữu, xác thực và tên app](#1-chủ-sở-hữu-xác-thực-và-tên-app)
- [2. Quyền truy cập thông tin người dùng](#2-quyền-truy-cập-thông-tin-người-dùng)
- [3. Dữ liệu cá nhân và quyền riêng tư](#3-dữ-liệu-cá-nhân-và-quyền-riêng-tư)
- [4. Nội dung, liên kết và kinh doanh](#4-nội-dung-liên-kết-và-kinh-doanh)
- [5. Ràng buộc kỹ thuật](#5-ràng-buộc-kỹ-thuật)
- [6. Ràng buộc giao diện](#6-ràng-buộc-giao-diện)
- [7. Phát hành và xét duyệt](#7-phát-hành-và-xét-duyệt)
- [8. Checklist trước khi gửi duyệt](#8-checklist-trước-khi-gửi-duyệt)
- [Nguồn](#nguồn)

---

## 0. Kết luận: 6 điều phải sửa hoặc quyết định ngay

Đối chiếu quy định với thiết kế hiện tại trên canvas, có 6 chỗ đáng lo. Xếp theo mức nguy hiểm, nặng nhất ở trên.

| # | Vấn đề | Quy định | Hậu quả nếu để nguyên | Cách sửa |
|---|---|---|---|---|
| 1 | **A1 bắt bấm "Bắt đầu với Zalo", rồi A2 xin số điện thoại ngay sau đó** | Chính sách kiểm duyệt 6.1 và 6.4: không xin quyền ngay khi vừa vào app; không bắt đăng ký hay đăng nhập mới cho dùng | Bị từ chối duyệt. Đây là lý do bị từ chối hay gặp nhất. | Vào thẳng app, lấy ID ngầm (mục 2.2). Bỏ màn đăng nhập. Xin số điện thoại và tên đúng lúc cần (mục 2.6). |
| 2 | **Dữ liệu người dùng phải xử lý và lưu trên lãnh thổ Việt Nam** | Thỏa thuận nhà phát triển §5.3.3(b) | Vi phạm thỏa thuận. Nếu chọn server hay database ở nước ngoài thì phải dời đi sau, rất tốn công. | Quyết định nơi đặt server và database **trước khi code backend**. Chọn nhà cung cấp có trung tâm dữ liệu ở Việt Nam. |
| 3 | **App hiện giá và có nút "Đặt phòng" nhưng không tích hợp Checkout SDK** | Chính sách kiểm duyệt mục 8: app không có Checkout SDK thì không được hiện giá sản phẩm, dịch vụ; nút mua phải đổi thành "Liên hệ" hoặc "Tư vấn" | Có thể bị hiểu là app bán phòng, rồi bị từ chối | Mô tả app khi gửi duyệt là **công cụ quản lý lịch giữa chủ nhà và sale**, không bán phòng cho khách. App không tạo đơn thanh toán. Hỏi trước bộ phận hỗ trợ của Zalo (mục 4.3). |
| 4 | **Số điện thoại phải được Zalo duyệt quyền, và bản thử nghiệm không có dữ liệu riêng tư** | Tài liệu xin cấp quyền; Thỏa thuận §5.3.3(a) | Người thử ngoài nhóm admin, developer không lấy được số điện thoại. Kết nối chủ nhà và sale không chạy khi cho người thật dùng thử. | Xin quyền số điện thoại ngay ở phiên bản đầu tiên gửi duyệt. Mời người dùng thử làm tester trong Mini App Center. |
| 5 | **Thanh tab có 5 tab** | Design Guidelines: thanh điều hướng dưới "không nên vượt quá 4" | Không phải lý do từ chối chắc chắn, nhưng lệch hướng dẫn | Đưa "Cá nhân" thành biểu tượng người ở góc trái thanh tiêu đề, như bản mô tả MVP cũ. Còn 4 tab. |
| 6 | **Link mời dạng `home247.vn/xin/…` và `home247.vn/nhom/…`** | Chính sách 4.1: không đưa người dùng ra khỏi Mini App | Link mở trình duyệt ngoài, người nhận không vào được app | Dùng link Mini App `https://zalo.me/s/{miniAppId}/?…` (mục 5.4). |

Ngoài 6 điều trên, mục 3.4 nêu thêm một chỗ thiết kế đang ngược với quyết định của chính dự án: file Excel ở P8 có cột tên và số điện thoại khách.

---

## 1. Chủ sở hữu, xác thực và tên app

### 1.1 Ai được làm chủ Mini App

Từ 15/10/2025, mọi Mini App phải xác thực chủ sở hữu mới được hoạt động.

| Loại chủ sở hữu | Cách xác thực |
|---|---|
| Cá nhân | Tự động, bằng tài khoản Zalo đã định danh điện tử (eKYC) |
| Doanh nghiệp, hộ kinh doanh | Qua OA doanh nghiệp, hoặc nộp giấy đăng ký kinh doanh kèm CCCD của người đại diện |
| Cơ quan nhà nước | Qua OA cơ quan nhà nước |

Thêm các điều kiện:

- Tài khoản Zalo dùng để đăng ký Mini App phải đã eKYC.
- Hộ kinh doanh phải có giấy chứng nhận đăng ký hộ kinh doanh (Thỏa thuận §4.1).
- Thời gian duyệt giấy tờ thường 3–5 ngày làm việc.
- Mỗi tài khoản Mini App chỉ được xác thực bởi 1 OA **(nguồn phụ)**.
- Thông tin người phát triển phải hiển thị công khai: số CCCD nếu là cá nhân, hoặc mã số đăng ký kinh doanh (Thỏa thuận §5.5(a)).
- App phải hiện rõ đầu mối chăm sóc khách hàng (Thỏa thuận §5.5(b)).

**Vì sao nên đứng tên hộ kinh doanh, không đứng tên cá nhân.** Có ba lý do:

1. Đứng tên cá nhân thì số CCCD của chủ app bị hiển thị công khai.
2. Gửi thông báo cho người dùng qua OA cần Mini App được xác thực bởi OA (mục 2.7). Tài khoản cá nhân bị hạn chế các tính năng gửi tin như Broadcast, tin theo UID, ZNS **(nguồn phụ)**.
3. Chủ nhà và sale tin một app có tên đơn vị rõ ràng hơn.

**Ngành có điều kiện.** Zalo yêu cầu giấy phép riêng cho một số ngành. Hai ngành gần với Home247:

- Vận tải và du lịch cần giấy phép kinh doanh dịch vụ lữ hành.
- Bất động sản cần xác nhận ngành nghề và ít nhất một người có chứng chỉ môi giới.

Home247 là công cụ quản lý lịch phòng giữa chủ nhà và sale. App không bán tour, không môi giới mua bán nhà. Vì vậy khi đăng ký, chọn danh mục và viết mô tả đúng với chức năng này. Không nên chọn danh mục du lịch hay bất động sản.

### 1.2 Tên và logo

Theo Chính sách kiểm duyệt, mục 1 và 2:

- Tên phải nói đúng chức năng.
- Tên không viết hoa toàn bộ, không chỉ là danh từ chung.
- Tên không chứa chữ "App", "Mini App", "Zalo", ký tự đặc biệt, emoji.
- Tên phải có tiền tố hoặc hậu tố cho biết chủ sở hữu.
- Logo là của chính app, liên quan tới chức năng. Logo không chứa số điện thoại, mã QR, và không có nền trong suốt.
- Mô tả app không chứa đường link.

**Áp dụng cho Home247.** Tên trên canvas "🏠 Lịch phòng Hạ Long" có emoji, nên phải bỏ emoji khỏi tên đăng ký. Emoji vẫn dùng được trong giao diện. Tên cần có phần chỉ chủ sở hữu, ví dụ "Home247 Lịch phòng Hạ Long" với Home247 là thương hiệu đã đăng ký. Hiện chưa có logo. Cần làm logo nền đặc trước khi gửi duyệt.

### 1.3 Duy trì sau khi phát hành

Theo Chính sách kiểm duyệt, mục 9:

- Mini App phải có tối thiểu **10 lượt truy cập mỗi tháng**.
- Không đạt tiêu chí trong 3 tháng thì app có thể bị hạn chế hiển thị hoặc bị tắt.
- Tính năng chính phải chạy ổn định trên bản đã phát hành.
- Khi ngừng hoạt động, phải xóa hết dữ liệu người dùng trong 24 giờ (Thỏa thuận §5.3.3(d)).

Với một dự án học tập ít người dùng, mức 10 lượt mỗi tháng là thấp. Nhưng cần nhớ: nếu bỏ app vài tháng thì app có thể bị tắt.

---

## 2. Quyền truy cập thông tin người dùng

Đây là phần dễ bị từ chối nhất. Cơ chế của Zalo có hai lớp:

- **Lớp 1. Zalo cho phép app được hỏi.** Bạn nộp yêu cầu trong Mini App Center, Zalo duyệt kèm phiên bản.
- **Lớp 2. Người dùng đồng ý.** Khi app gọi API, Zalo hiện hộp thoại xin quyền. Người dùng bấm đồng ý thì app mới nhận được dữ liệu.

Một số quyền chỉ cần lớp 2. Số điện thoại cần cả hai lớp.

### 2.1 Bảng quyền và ai phải cho phép

| Quyền | Zalo phải duyệt | Người dùng phải đồng ý | Home247 có dùng không |
|---|---|---|---|
| ID người dùng | Không | Không (từ SDK 2.35.0) | Có, để định danh tài khoản |
| Tên và ảnh đại diện | Không có trong bảng quyền cần duyệt | **Có** | Có |
| Số điện thoại | **Có** | **Có** | Có |
| Vị trí | Có | Có | Không |
| Camera, quét QR | Có | Có | Không cần trong MVP |
| Lưu trữ trên máy (Native Storage) | Có | Không | Có, để lưu tìm kiếm gần đây, nháp |
| Lưu ảnh vào máy | Có | Không | Có thể, ở S5 "lưu ảnh" |
| Gửi thông báo | Không có trong bảng | Có | Có (P3, P12) |
| Theo dõi OA | Không | Có | Có thể |
| Mở màn hình gọi điện, nhắn tin | Không (mặc định) | Không | Có, nút "Gọi" |
| Chia sẻ qua Zalo, chọn bạn bè | Không (mặc định) | Không | Có |
| Đổi màu, tiêu đề thanh điều hướng | Không (mặc định) | Không | Có |

**Lưu ý quan trọng khi thử nghiệm.** Thỏa thuận §5.3.3(a) ghi: "các Mini App trong quá trình thử nghiệm sẽ không được cấp quyền truy cập bất kỳ dữ liệu riêng tư nào". Trên thực tế, tài khoản admin và developer của app vẫn dùng được các API này để code. Người khác mở bản thử nghiệm thì bị lỗi. Hệ quả là muốn cho chủ nhà và sale thật dùng thử luồng kết nối, quyền số điện thoại phải được duyệt trước.

### 2.2 ID người dùng: lấy ngầm, không cần hỏi

**Cơ chế.** Từ SDK 2.35.0, `getAccessToken` trả access token **mà không cần người dùng đồng ý**. Token này chỉ dùng để lấy ID người dùng. ID là duy nhất cho mỗi người dùng trên mỗi Zalo App.

**Luồng đúng:**

1. Mini App gọi `getAccessToken()`.
2. Gửi token lên server của Home247, đặt trong header. Không dùng cookie (mục 5.2).
3. Server gọi `GET https://graph.zalo.me/v2.0/me` với header `access_token` và `appsecret_proof`. `appsecret_proof` là HMAC-SHA256 của access token, khóa là App Secret. Zalo bắt buộc tham số này từ 01/01/2024.
4. Server tạo tài khoản mới, hoặc đăng nhập tài khoản có sẵn theo ID.

**Vì sao quan trọng với thiết kế.** Có ID ngầm thì app biết ai đang dùng mà không cần màn đăng nhập. Đây là lý do bỏ được A1 "Bắt đầu với Zalo" (xem mục 0, điều 1).

### 2.3 Tên và ảnh đại diện

**Quy định.** Tên và ảnh đại diện "sẽ yêu cầu người dùng xác nhận cho phép trước khi truy xuất". Lý do Zalo đưa ra là tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.

**Cách lấy:**

- Gọi `authorize({ scopes: ["scope.userInfo"] })` trước, hoặc gọi `getUserInfo({ autoRequestPermission: true })`.
- Người dùng từ chối thì `getUserInfo` báo lỗi `-1401`.
- `getUserInfo` còn trả `isSensitive`. Giá trị `true` nghĩa là tài khoản thuộc nhóm cần xử lý riêng theo luật, ví dụ trẻ em hay người khuyết tật.

**Điều kiện để quyền này không bị từ chối khi duyệt.** Bảng quyền không yêu cầu Zalo duyệt riêng tên và ảnh. Nhưng vẫn áp dụng các quy tắc chung ở mục 2.5: chỉ hỏi khi người dùng làm một việc cần đến tên.

**Khi nào Home247 xin tên.** Khớp với quyết định dự án đã chốt: xin tên và ảnh khi chủ nhà tạo căn đầu tiên, khi sale mời chủ nhà hay gửi link xin lịch (A6), hoặc khi sale thêm căn tự nhập. Lý do là tin nhắn gửi đi cần tên người gửi.

**Khi người dùng từ chối.** App vẫn chạy. Người dùng tự gõ tên hiển thị ở P2. Tin nhắn xin lịch dùng tên tự gõ.

### 2.4 Số điện thoại

**Điều kiện cấp phép, lớp 1: Zalo duyệt.**

1. Vào Mini App Center, mục **Quyền Mini App**.
2. Chọn quyền số điện thoại.
3. Viết lý do dùng quyền và gửi kèm ảnh chụp màn hình nơi dùng quyền.
4. Có thể thêm phần mô tả hiển thị cho người dùng.
5. Gửi yêu cầu. Bộ phận kiểm duyệt **xét yêu cầu cấp quyền cùng lúc với xét duyệt phiên bản mới**. Kết quả báo qua OA và Mini App Center.

Zalo khuyên mô tả rõ lý do và ảnh để duyệt nhanh hơn. Đã có người chờ quyền này tới 2 tháng ở trạng thái "Đang xét duyệt" **(nguồn phụ, diễn đàn)**. Vì vậy nên nộp sớm.

Tài liệu chính thức không nói chỉ doanh nghiệp mới được cấp quyền này. Nhưng chủ sở hữu đã xác thực và lý do rõ ràng giúp tăng khả năng được duyệt.

**Lý do gợi ý khi nộp cho Home247.** "Chủ nhà và sale kết nối với nhau qua số điện thoại. Khi chủ nhà gửi lịch cho sale, hoặc sale xin xem lịch, app cần số điện thoại để nhận ra đúng người và gửi lịch tới đúng tài khoản. Số điện thoại chỉ hiện cho người đã kết nối, không hiện cho khách." Ảnh kèm theo: màn A6, CN10, CN7-05.

Nếu dự án giữ quyết định "không hiện số điện thoại cho nhau", câu "chỉ hiện cho người đã kết nối" phải bỏ. Lý do nộp phải khớp với cách app thật sự dùng số.

**Điều kiện cấp phép, lớp 2: người dùng đồng ý.** Gọi `getPhoneNumber()` thì Zalo hiện hộp thoại. Chỉ khi người dùng đồng ý, app mới nhận được dữ liệu.

**Cơ chế kỹ thuật.** App không nhận số điện thoại trực tiếp, mà nhận một token:

1. `const { token } = await getPhoneNumber();`
2. Gửi token lên server ngay. Token **chỉ dùng được 1 lần và hết hạn sau 2 phút**.
3. Server gọi `GET https://graph.zalo.me/v2.0/me/info` với 3 header: `access_token` (từ `getAccessToken`), `code` (token vừa nhận), `secret_key` (App Secret).
4. Kết quả có dạng `{ "data": { "number": "849123456789" }, "error": 0 }`. Số có mã nước 84, không có dấu + hay số 0 đầu. Server phải chuẩn hóa trước khi so khớp với số chủ nhà hay sale đã nhập tay.

**Vì sao phải đi qua server.** Bước giải mã cần App Secret. Đưa App Secret vào code Mini App thì ai cũng đọc được. Zalo cũng cảnh báo gọi API server-to-server từ Mini App có thể lỗi.

**Khi nào Home247 xin số điện thoại.** Chỉ khi người dùng bấm vào việc cần kết nối: gửi link xin lịch (A6), mời sale hay gửi lịch cho sale (CN7, CN10), duyệt sale (A8). Không xin ở màn đầu.

### 2.5 Quy tắc chung khi xin quyền

Đây là các quy tắc trong Chính sách kiểm duyệt mục 6 và Thỏa thuận §5.3.3. Cột cuối đối chiếu với thiết kế Home247.

| Quy tắc | Nội dung | Thiết kế hiện tại |
|---|---|---|
| 6.1 Đúng ngữ cảnh | Không xin quyền ngay khi vừa vào app. Giải thích mục đích trước rồi mới xin. | **Vi phạm.** A2 xin số ngay sau A1. |
| 6.2 Dùng giao diện của Zalo | Không làm giả hộp thoại xin quyền để dụ người dùng bấm đồng ý | A2 là màn giải thích, sau đó mới bật hộp thoại thật của Zalo. Được, nếu A2 không giống hộp thoại hệ thống. |
| 6.3 Không ép quyền | Không bắt phải cấp quyền mới dùng được app. Từ chối thì các tính năng không liên quan vẫn phải chạy. API lấy thông tin cá nhân "chỉ nên được kích hoạt dựa trên hành vi, tương tác cụ thể của người dùng". | A2 có nút "Để sau", đúng hướng. Phải bảo đảm tính năng không cần số vẫn chạy. |
| 6.4 Không bắt đăng nhập | Không bắt đăng ký hay đăng nhập mới cho dùng. Chỉ app nội bộ (trường, công ty) mới được có màn đăng nhập. | **Vi phạm.** A1 là màn đăng nhập. |
| 6.5 Liên kết tài khoản | Nếu liên kết số Zalo với tài khoản có sẵn qua đăng nhập truyền thống, tính năng phải tên "Liên kết tài khoản" và chỉ làm sau khi đăng nhập | Không áp dụng |
| §5.3.3(a) Khớp dịch vụ | Quyền xin phải khớp với dịch vụ đã khai báo | Khai báo rõ ở mô tả app |
| §5.3.3(b) Không tự thoát | Người dùng từ chối quyền thì app không được tự đóng, tự thoát | Phải giữ người dùng ở màn hiện tại |
| §5.4(a) Chỉ dùng tài khoản Zalo | Không đăng ký, đăng nhập bằng mạng xã hội khác | Đúng, chỉ dùng Zalo |

**Hướng dẫn thêm của Zalo về thời điểm hỏi:**

- "Không nên yêu cầu người dùng chia sẻ số điện thoại ngay khi vừa mới truy cập Mini App."
- Nếu số điện thoại là bắt buộc thì hiện màn onboarding giải thích lý do và mục đích trước. Zalo từ chối app có "luồng xin cấp quyền chưa rõ ràng".
- Mỗi lần gọi `authorize` xin tối đa 3 quyền, kể cả quyền thông tin người dùng.
- Quyền người dùng cấp có thời hạn và sẽ bị thu hồi sau một thời gian. Code phải luôn kiểm tra lại bằng `getSetting` trước khi dùng.

### 2.6 Luồng xin quyền đề xuất cho Home247

Luồng này thay cho A1 → A2 → A3 hiện tại, để không vi phạm 6.1 và 6.4.

1. **Mở app.** Lấy ID ngầm (mục 2.2). Người mới thấy A3 "Bạn dùng app để làm gì?", kèm 3 dòng lợi ích của A1 ở trên. Không có nút "Bắt đầu với Zalo", không xin quyền nào.
2. **Người dùng làm việc chính.** Chủ nhà thêm căn, sale thêm căn tự nhập. Lúc này xin tên và ảnh (`scope.userInfo`), kèm một câu giải thích. Từ chối thì cho tự gõ tên.
3. **Người dùng bấm việc cần kết nối.** Ví dụ gửi link xin lịch, mời sale, duyệt sale. Lúc này hiện màn giải thích A2, rồi gọi `getPhoneNumber`. Từ chối thì vẫn gửi được link qua bảng chia sẻ Zalo, chỉ không tự khớp được theo số.
4. **Muốn bật thông báo.** Lúc người dùng vừa làm xong việc đầu tiên cần theo dõi, ví dụ sale gửi yêu cầu đặt phòng, gọi `requestSendNotification`.

**Khi người dùng đã từ chối trước đó.** `authorize` trả lỗi `-201`. Trạng thái từ chối được Zalo ghi nhớ cho các lần sau. Muốn người dùng bật lại thì gọi `openPermissionSetting` để mở trang cài đặt quyền. Đừng gọi lại hộp thoại liên tục, vì xin quyền liên tục gây khó chịu cũng là lý do bị từ chối **(nguồn phụ)**.

### 2.7 Gửi thông báo cho người dùng

Thiết kế có P3 và P12 "Thông báo gửi qua Zalo của bạn". Các thông báo này phụ thuộc vào các điều kiện sau.

**Bước người dùng đồng ý.** Gọi `requestSendNotification()` (SDK 2.27.1 trở lên). Theo dõi OA (Follow OA) và xin gửi thông báo đều được xếp là API nhạy cảm, cần người dùng đồng ý (Thỏa thuận §5.3.3(a)).

**Bước gửi tin.** Tin gửi qua OA, theo cơ chế tin Tư vấn hoặc Giao dịch. Chính sách này đang thử nghiệm. Đối tác phải đạt đủ 3 điều kiện:

1. Đạt điều kiện kiểm duyệt.
2. Đạt điều kiện hiệu suất (mục 5.6).
3. Mini App được xác thực bởi OA.

Tin chỉ được gửi sau khi người dùng làm một hành động thuộc danh sách cố định. Hành động gần với Home247 nhất là bấm một nút có nhãn đúng một trong các mẫu: "Thanh toán", "Đặt món", "Đặt xe", "Đặt hàng", "Mua vé", "Booking", "Đặt chỗ", "Tạo đơn hàng", "Đặt trước", "Mua hàng", "Đặt lịch", "Tra cứu", "Kiểm tra".

Tin dùng chung hạn mức và phí với tin tư vấn của OA. Mức phí xem ở chính sách OA.

**Áp dụng cho Home247.**

- Các thông báo chủ động không gắn với một hành động trong app sẽ khó gửi qua kênh này. Ví dụ "khách nhận phòng ngày mai lúc 18:00", "nhắc sao lưu ngày 1 hằng tháng".
- Loại thông báo đó cần ZNS, là tin mẫu trả phí, cần OA doanh nghiệp đã xác thực.
- Nút gửi yêu cầu đặt phòng của sale nên đặt nhãn **"Đặt chỗ"** hoặc **"Booking"** để khớp danh sách mẫu.
- Trong MVP, thông báo trong app (chấm đỏ, danh sách chờ) là đủ. Gửi qua Zalo là bước sau, cần OA và có thể tốn phí.

---

## 3. Dữ liệu cá nhân và quyền riêng tư

### 3.1 Quy định

Theo Thỏa thuận nhà phát triển:

| Điều | Quy định |
|---|---|
| §5.3.3(b) | Phải có sự đồng ý hợp pháp của người dùng trước khi thu thập dữ liệu |
| §5.3.3(b) | Xử lý và lưu trữ dữ liệu người dùng phải thực hiện **trong lãnh thổ Việt Nam** |
| §5.3.3(c) | Không dùng dữ liệu cho mục đích người dùng và Zalo chưa cho phép |
| §5.3.3(d) | Không tiết lộ, chia sẻ, trao đổi dữ liệu người dùng khi chưa được phép |
| §5.3.3(d), §6.16.5 | Khi ngừng hoạt động, xóa hoàn toàn dữ liệu đã thu thập trong 24 giờ |
| §6.15.1 | Người dùng có quyền yêu cầu xem, sửa, rút lại đồng ý, xóa dữ liệu |
| §7.5 | Cấm bán, cho thuê, trao đổi dữ liệu cá nhân |

Theo Chính sách kiểm duyệt mục 7: không thu thập dữ liệu khi chưa có đồng ý rõ ràng; không chứa link độc hại; chỉ chia sẻ với bên thứ ba khi người dùng đồng ý.

Theo Chính sách kiểm duyệt mục 4.8: điều khoản và chính sách quyền riêng tư phải cụ thể, không dùng mẫu chung chung. Văn bản phải nêu tên đơn vị vận hành và có tiêu đề nói rõ thuộc Mini App nào.

### 3.2 Vì sao quy định đặt dữ liệu ở Việt Nam ảnh hưởng nhiều nhất

Các dịch vụ backend miễn phí hay dùng khi học code thường mặc định đặt server ở Singapore, Mỹ hay châu Âu. Ví dụ Supabase, Firebase, Vercel. Nếu xây xong rồi mới đổi thì phải chuyển database, sửa cấu hình, test lại toàn bộ.

Cách phòng: chọn nơi lưu dữ liệu ở Việt Nam ngay từ đầu, rồi ghi quyết định này vào tài liệu kiến trúc. Câu hỏi "nhà cung cấp nào, giá bao nhiêu" cần tra riêng.

### 3.3 Việc Home247 phải làm

- Có trang **Chính sách quyền riêng tư** và **Điều khoản sử dụng** riêng cho Home247, mở trong app, nêu tên hộ kinh doanh vận hành.
- Nêu rõ thu thập gì và để làm gì: Zalo ID, tên, ảnh, số điện thoại, lịch phòng, giá, booking.
- Có tính năng **Xóa tài khoản**. P2 đã có, phải xóa thật ở server.
- Kế hoạch xóa dữ liệu trong 24 giờ nếu dừng dự án.
- Không gửi dữ liệu cho bên thứ ba, kể cả công cụ phân tích, nếu chưa ghi trong chính sách.

### 3.4 Mâu thuẫn với thiết kế hiện tại

Dự án đã chốt **không lưu thông tin khách**. Nhưng thiết kế có ba chỗ đi ngược:

- CN4 có ô tên và số điện thoại cho khách lẻ, ghi là không bắt buộc.
- CN7-04 hiện tên khách "Phạm Long".
- P8 xuất Excel có cột "Khách" và "SĐT".

Lưu tên và số điện thoại khách là thu thập dữ liệu của người **không dùng app và chưa đồng ý**. Đây đúng là loại việc §5.3.3(b) và mục 7 cấm. Cách sửa: bỏ ô số điện thoại khách. Ô tên khách đổi thành "Ghi chú" tự do, và P8 bỏ hai cột này.

---

## 4. Nội dung, liên kết và kinh doanh

### 4.1 Liên kết ra ngoài

- **4.1:** Không đưa người dùng ra khỏi Mini App, kể cả đăng nhập bằng Google hay Facebook. Ngoại lệ là điều khoản và chính sách, được hiện trong popup hoặc nhúng trong app.
- **Thỏa thuận §7.3:** Hạn chế điều hướng người dùng tới dịch vụ bên ngoài.
- **Duyệt phiên bản:** Không chuyển hướng tới link bên thứ ba khi chưa được Zalo cho phép. Không khuyến khích người dùng tải app khác.

Áp dụng cho Home247: mọi link mời dùng dạng `zalo.me/s/…` (mục 5.4). "Hướng dẫn sử dụng" (P9) nằm trong app, đúng như thiết kế. "Nhắn Zalo cho Home247" mở chat OA bằng API của Zalo, không mở website.

### 4.2 Nội dung bị cấm

| Mục | Quy định | Liên quan Home247 |
|---|---|---|
| 4.2 | Không nội dung sai sự thật, lừa đảo, trái pháp luật | Không |
| 4.3 | Không quảng cáo, banner kiếm tiền khi chưa được Zalo chấp thuận | Không có quảng cáo. Nếu sau này thu phí sale thì phải hỏi Zalo. |
| 4.4 | Không bán vật phẩm ảo, nội dung số. Gói đăng ký nội dung số là vi phạm. Mua dịch vụ đời thực thì được. | **Cần lưu ý.** Ý tưởng thu sale 100k mỗi tháng là thu phí dùng phần mềm, có thể bị xếp vào "dịch vụ số". Hỏi Zalo trước khi làm. |
| 4.5 | Không rút tiền, trả thưởng | Không |
| 4.6 | Không làm tính năng mạng xã hội (đăng bài, like, bình luận), không cạnh tranh sản phẩm Zalo | Nhóm sale (S8) chỉ chia sẻ nguồn phòng, không có bài đăng. Giữ như vậy. |
| 4.7 | Ảnh phải tải được, chữ đọc được | Ảnh căn tải lỗi phải có ô thay thế |

### 4.3 Hiện giá và nút đặt phòng

**Quy định, mục 8.** App có tính năng thanh toán, tạo đơn và hiện giá trực tiếp thì phải tích hợp Checkout SDK. App không có Checkout SDK thì "không được hiển thị giá sản phẩm/dịch vụ", và nút mua hay thanh toán phải đổi thành "Liên hệ" hoặc "Tư vấn".

**Vì sao Home247 có rủi ro.** App hiện giá phòng theo đêm (CN1, S1, S3) và có nút "Đặt phòng" (S3). Người duyệt có thể hiểu là app bán phòng.

**Vì sao vẫn có lý để được chấp nhận.** Quy định nhắm vào app bán hàng cho người tiêu dùng. Ở Home247:

- Giá là giá chủ nhà báo cho sale, tức giao dịch giữa hai bên kinh doanh.
- "Đặt phòng" là yêu cầu giữ lịch, không tạo đơn thanh toán.
- Khách thuê không dùng app.

Đây là lập luận của mình, chưa có xác nhận của Zalo.

**Cách phòng, theo thứ tự nên làm:**

1. Gửi email hỏi trước `hotrodoitac@zaloplatforms.com`, mô tả đúng mô hình.
2. Khi gửi duyệt, mô tả app là "công cụ quản lý lịch phòng và giá giữa chủ nhà và sale, không bán phòng cho khách, không thanh toán trong app".
3. Đổi nhãn nút "Đặt phòng" của sale thành "Gửi yêu cầu giữ phòng" hoặc "Đặt chỗ". Không dùng chữ "Mua", "Thanh toán".
4. Phương án dự phòng nếu bị từ chối: chỉ hiện giá sau khi người dùng đã kết nối, không hiện ở màn công khai.

---

## 5. Ràng buộc kỹ thuật

### 5.1 Bảng giới hạn

| Giới hạn | Con số hoặc quy định | Ảnh hưởng tới code |
|---|---|---|
| Dung lượng mỗi phiên bản | 10 MB cả app, 3 MB mỗi file | Không đóng gói ảnh căn mẫu hay font vào app. Ảnh để trên server hoặc CDN. Chia nhỏ code (code splitting). |
| Số lần deploy | 300 lần mỗi tháng cho Development, 60 lần mỗi tháng cho Testing | Không deploy Testing sau mỗi lần sửa nhỏ. Dùng Development khi code. |
| Mục tiêu biên dịch | Mặc định ES2015 | Thư viện dùng cú pháp mới (async generator, `for await`) sẽ lỗi. Nâng target lên ESNext thì máy cũ kém tương thích. |
| Phiên bản SDK | ≥ 2.35.0 để dùng luồng xin quyền mới | Ghim phiên bản `zmp-sdk` trong `package.json` |
| Ảnh trong thư mục `public` | Đường dẫn tuyệt đối chạy được ở localhost nhưng lỗi trong Zalo thật | `import` ảnh để Vite đóng gói |
| Màn khởi động (splash) | Mặc định, có logo và tên, không đổi hay ẩn được | Có thể tự tắt bằng `selfControlLoading` + `closeLoading` |

### 5.2 Lưu trữ và đăng nhập

- **Không có LocalStorage, SessionStorage, Cookie.** Zalo ghi rõ các API này "sẽ không được hỗ trợ".
- **Native Storage thay thế.** Dùng `nativeStorage` từ `zmp-sdk`. Tối đa **5 MB** mỗi app. Đầy thì Zalo **tự xóa dữ liệu cũ nhất**. Key và value phải là chuỗi. Có từ SDK 2.43.0. Đây là quyền cần Zalo duyệt (mục 2.1).
- **Hệ quả.** Không lưu dữ liệu quan trọng ở máy. Native Storage chỉ để lưu tiện ích có mất cũng không sao: tìm kiếm gần đây, bộ lọc đã chọn, nháp form. Lịch, booking, giá luôn ở server.
- **Đăng nhập dựa trên header.** Gửi xác thực bằng header `Authorization: Bearer <token>`. Zalo khuyên server tự phát JWT sau khi xác minh access token Zalo.

**Liên quan thiết kế.** P7 "Sao lưu dữ liệu" và "Khôi phục từ file" sinh ra trong bối cảnh app cũ lưu dữ liệu ở máy. Khi dữ liệu nằm ở server, tính năng này cần xem lại. Có thể chỉ còn "Xuất file Excel".

### 5.3 Gọi API tới server Home247

- **Bắt buộc HTTPS.** Chứng chỉ phải còn hạn. Gọi HTTP thường, gọi thẳng địa chỉ IP, hoặc dùng chứng chỉ hết hạn đều lỗi.
- **CORS.** Mini App chạy trên tên miền của Zalo. Server phải trả header `Access-Control-Allow-Origin: https://h5.zdn.vn`, kể cả với request OPTIONS. Header chỉ được chứa **một** origin. Header tùy chỉnh phải được khai trong `Access-Control-Allow-Headers`.
- **Bí mật để ở server.** Giải mã số điện thoại, gửi thông báo, Open API và một số lệnh Checkout cần App Secret. Các lệnh này phải gọi từ server, không gọi từ Mini App.

### 5.4 Link mở app

- Định dạng: `https://zalo.me/s/{miniAppId}/?bien=gia_tri`.
- Link gửi qua Zalo mở thẳng Mini App trong tin nhắn. Link này cũng dùng được trong mã QR.
- Thêm `zDebug=true` vào link để mở công cụ debug trên bản đang chạy.

**Áp dụng.** Link xin lịch của sale, ví dụ `https://zalo.me/s/{miniAppId}/?xin=hung-0912`. Link mời vào nhóm, ví dụ `https://zalo.me/s/{miniAppId}/?nhom=bai-chay-7k2`. Khi app mở, đọc tham số để đi tới A8 hoặc S8-03.

### 5.5 Chia sẻ qua Zalo (`openShareSheet`)

| Kiểu | Giới hạn | Dùng ở Home247 |
|---|---|---|
| `text` | Có `autoParseLink` để link hiện dạng thẻ | Gửi chữ cho khách (S5), tin xin lịch (A6) |
| `image` | Tối đa **10 ảnh** mỗi lần | Gửi ảnh căn cho khách (S5) |
| `zmp_deep_link` | Tiêu đề tối đa 100 ký tự, mô tả tối đa 400 ký tự, cần ảnh thumbnail | Gửi link mời, link xin lịch dạng thẻ đẹp |

**Mỗi lần chia sẻ chỉ một kiểu nội dung.** Vì vậy S5 tách "Gửi chữ" và "Gửi ảnh" cho từng căn, đúng như thiết kế.

**Kết quả trả về** cho biết người dùng đã hủy hay đã gửi (`status` 0, 1, 2). Dùng kết quả này để chỉ hiện "✓ Đã gửi" khi thật sự đã gửi. Thiết kế CN10 đã ghi đúng: "Tắt cửa sổ Zalo mà không gửi thì ở lại CN10, không có thông báo".

### 5.6 Hiệu suất

Theo Chính sách kiểm duyệt mục 5:

- Thời gian tải trên **10 giây** là vi phạm. Mục tiêu: **LCP dưới 2,5 giây**, PageLoad dưới 1,5 giây.
- App không được treo, màn trắng hay màn đen.
- Mọi tính năng phải chạy được. Tính năng còn ở dạng demo là vi phạm.
- Đạt điều kiện hiệu suất cũng là một trong 3 điều kiện để được gửi thông báo qua OA (mục 2.7).

Cách phòng: nén ảnh căn, chỉ tải ảnh nhỏ ở danh sách, tải lịch theo từng tuần thay vì cả năm.

### 5.7 Webview và file

- `openWebview` mở trang web trong khung của Zalo, nhưng vẫn chịu quy định không dẫn ra ngoài (mục 4.1).
- Mở PDF qua webview lỗi trên Android. Nếu cần xem file thì hiển thị ngay trong app.

---

## 6. Ràng buộc giao diện

### 6.1 Vùng của Zalo

- **Nút menu của Zalo (··· và ✕) cố định ở góc phải trên mọi màn.** Chỉ đổi được màu sáng hoặc tối. Không đặt nút hay thông tin bên dưới vùng này. Kiểm tra các nút gần đó không bị bấm nhầm.
- **Thanh điều hướng của Zalo** cấu hình trong `app-config.json`:
  - `title` bắt buộc.
  - `headerTitle`, `headerColor`, `textColor` dùng giá trị `white` hoặc `black`.
  - `leftButton` dùng giá trị `back` hoặc `none`. Nút này tự ẩn ở trang đầu.
  - `actionBarHidden: true` để tự làm header.
  - Màu và chữ có thể đặt riêng cho chế độ sáng và tối.
- **Thanh trạng thái** dùng một trong ba giá trị `normal`, `hidden`, `transparent` (từ API 2.25.0).
- **Vùng an toàn.** Có `hideIOSSafeAreaBottom` và `hideAndroidBottomNavigationBar`. Nếu tự làm thanh tab ở đáy thì phải chừa vùng an toàn của iPhone.
- **Quay lại.** Trên Android giữ nút "trở lại" ở góc trái trên các trang con. Trên iOS người dùng vuốt từ mép trái.

**Áp dụng.** Thiết kế đã chừa góc phải trên và đặt "‹ Quay lại" ở góc trái. Đúng. Riêng màn chi tiết có nút bút chì "Sửa" ở góc phải header (CN3-02, P1, P4) cần kiểm tra lại: nút đó có nằm sát dưới menu Zalo không.

### 6.2 Thanh tab, chữ, vùng chạm

| Hướng dẫn | Con số | Thiết kế hiện tại |
|---|---|---|
| Thanh điều hướng dưới | Không nên quá **4 tab** | **5 tab.** Xem mục 0, điều 5. |
| Cỡ chữ phổ biến | 20, 18, 16, 15, 14, 12, 10 pt; dùng phông hệ thống | Design system dùng phông hệ thống, cỡ từ 10 tới 24. Khớp. |
| Vùng chạm | 7–9 mm | Design system 44 px. Khớp. |
| Màu | Chữ chính, chữ phụ theo bảng màu Zalo; link xanh dương, thành công xanh lá, cảnh báo cam, lỗi đỏ | Màu hành động xanh lá, lỗi đỏ. Khớp hướng. |

### 6.3 Phản hồi và trạng thái

- **Modal thông báo** cho việc quan trọng đã xong, tự tắt sau **1,5 giây**. Thiết kế đang dùng thông báo nổi có nút ✕. Thời gian tự tắt nên theo 1,5 giây.
- **Popup** dùng khi kết quả cần người dùng chọn bước tiếp.
- **Trang kết quả** dùng cuối một luồng, nói rõ việc tiếp theo. Ví dụ CN9-02 "Đã chấp nhận".
- **Lỗi** hiện rõ, dùng modal lỗi màu đỏ.
- **Đang tải:** thanh tiến trình nhỏ dưới thanh tiêu đề; loading toàn màn dùng hạn chế; báo khi mất mạng hay tải lỗi.
- **Mỗi trang một điểm nhấn chính.**

### 6.4 Nhập liệu

- Giảm gõ phím. Ưu tiên lựa chọn có sẵn, lịch sử tìm kiếm, chip. Thiết kế đã theo hướng này (chip số đêm, chip tòa, tìm gần đây, ghi booking nhanh S6-05).
- Dùng component chuẩn của Zalo khi có. Dự án code bằng Vue, trong khi bộ component ZaUI chính thức viết cho React. Vì vậy cần tự làm component theo design system HalongHomestay, nhưng giữ kích thước và hành vi giống component chuẩn của Zalo.
- Ô nhập dùng chữ 16 px để Safari trên iPhone không tự phóng to. Đây là quy tắc của design system, không phải của Zalo, nhưng áp dụng vì app chạy trên iPhone.

---

## 7. Phát hành và xét duyệt

### 7.1 Quy trình

1. Hoàn tất xác thực chủ sở hữu (mục 1.1). Chưa xác thực thì không gửi duyệt được.
2. Deploy phiên bản lên trạng thái **Testing**.
3. Gửi xét duyệt ở mục **Quản lý phiên bản → Danh sách phiên bản**. Trạng thái chuyển thành **Chờ xét duyệt**.
4. Yêu cầu cấp quyền (số điện thoại, Native Storage…) được xét cùng phiên bản.
5. Có kết quả **Đã duyệt** thì bấm **Publish**.

**Thời gian:** thường 3–5 ngày làm việc **(nguồn phụ)**. **Mọi phiên bản cập nhật đều phải duyệt lại** (Thỏa thuận §5.2(b)).

**Người dùng thử:** bản Development và Testing chỉ tài khoản admin, developer mở được. Người khác mở sẽ thấy trang "không tìm thấy". Muốn cho chủ nhà, sale thật thử thì thêm họ vào danh sách tester trong Mini App Center. Tài liệu chính thức không ghi số tester tối đa.

**Tìm kiếm:** app có form đăng nhập bằng tên và mật khẩu có thể không hiện trong kết quả tìm kiếm của Zalo.

### 7.2 Người duyệt kiểm tra gì

Theo trang Phát hành:

- Tên, logo, mô tả rõ ràng, nhất quán, không vi phạm bản quyền.
- Dịch vụ khớp danh mục đã đăng ký.
- Không chuyển hướng ra link bên thứ ba khi chưa được duyệt.
- Không khuyến khích tải app khác.
- Không gian lận, không nội dung cấm.
- Không mua bán vật phẩm ảo.
- Chạy ổn định, không crash, không làm Zalo crash.
- Đạt chuẩn tải trang, giao diện, trải nghiệm, quyền riêng tư, bảo mật.
- Định danh người dùng theo chuẩn xác thực của Zalo.

### 7.3 Lý do bị từ chối hay gặp (nguồn phụ)

Các bài viết của đơn vị làm Mini App liệt kê:

1. App chưa sẵn sàng dùng thật: nút không bấm được, dữ liệu mẫu, nội dung trống.
2. Tính năng nhạy cảm: đổi điểm ra tiền, ví nội bộ.
3. Thiếu chính sách quyền riêng tư, xin quyền không cần thiết, xin quyền không có sự đồng ý.
4. Đưa người dùng ra khỏi Mini App.
5. Nội dung không khớp mô tả đã đăng ký.
6. Tên viết hoa toàn bộ, trùng thương hiệu khác, có ký tự đặc biệt.
7. Thiếu giấy tờ sở hữu, hoặc thông tin giữa giấy đăng ký kinh doanh và OA không khớp.

**Áp dụng.** Lý do số 1 đáng chú ý với Home247. Bản gửi duyệt không được còn dữ liệu mẫu kiểu "Chị Hoa", "Sale Hùng". Mọi nút phải chạy được. Màn trống phải có hướng dẫn.

---

## 8. Checklist trước khi gửi duyệt

**Chủ sở hữu và hồ sơ**
- [ ] Tài khoản Zalo đăng ký đã eKYC
- [ ] Mini App đã xác thực chủ sở hữu (hộ kinh doanh qua OA hoặc giấy tờ)
- [ ] Thông tin trên giấy đăng ký kinh doanh khớp với OA và đăng ký Mini App
- [ ] Danh mục và mô tả khớp chức năng; mô tả không chứa link
- [ ] Tên không viết hoa toàn bộ, không emoji, không chữ "App", "Zalo"; có phần chỉ chủ sở hữu
- [ ] Logo riêng, nền đặc, không chứa số điện thoại hay QR

**Quyền và dữ liệu**
- [ ] Không có màn đăng nhập bắt buộc; ID lấy ngầm bằng `getAccessToken`
- [ ] Không xin quyền nào khi vừa mở app
- [ ] Số điện thoại xin đúng lúc, có màn giải thích trước
- [ ] Đã nộp yêu cầu quyền số điện thoại trong Mini App Center, kèm lý do và ảnh
- [ ] Từ chối quyền thì app vẫn chạy, không tự đóng
- [ ] Giải mã số điện thoại và xác minh access token làm ở server, có `appsecret_proof`
- [ ] Server và database đặt ở Việt Nam
- [ ] Có Chính sách quyền riêng tư và Điều khoản riêng của Home247, mở trong app, có tên đơn vị vận hành
- [ ] Không lưu tên, số điện thoại khách thuê
- [ ] Xóa tài khoản xóa thật dữ liệu ở server
- [ ] Hiện đầu mối hỗ trợ khách hàng

**Nội dung**
- [ ] Không link ra ngoài; link mời dạng `zalo.me/s/…`
- [ ] Không quảng cáo, không thu phí trong app (hoặc đã được Zalo chấp thuận)
- [ ] Đã xử lý rủi ro hiện giá (mục 4.3)
- [ ] Không còn dữ liệu mẫu; mọi nút đều chạy

**Kỹ thuật và giao diện**
- [ ] Gói app dưới 10 MB, không file nào quá 3 MB
- [ ] Không dùng LocalStorage, SessionStorage, Cookie
- [ ] Server trả CORS cho `https://h5.zdn.vn`, chạy HTTPS chứng chỉ còn hạn
- [ ] Tải trang dưới 10 giây, LCP dưới 2,5 giây trên máy tầm trung
- [ ] Không có nút nằm dưới menu Zalo ở góc phải trên
- [ ] Thanh tab không quá 4 tab
- [ ] Thử trên cả Android và iPhone, kể cả iPhone có tai thỏ

---

## Nguồn

Tài liệu chính thức của Zalo:

- [Chính sách kiểm duyệt Zalo Mini App](https://miniapp.zaloplatforms.com/documents/zalo-mini-app-censorship-policy)
- [Thỏa thuận chương trình nhà phát triển Zalo Mini App](https://miniapp.zaloplatforms.com/documents/zalo-mini-app-developer-program-agreement)
- [Xác thực Mini App](https://miniapp.zaloplatforms.com/documents/zalo-mini-app-developer-program-agreement/mini-app-verification)
- [Xin cấp quyền trong Zalo Mini App](https://docs.zaloplatforms.com/docs/MA/intro/request-permission)
- [Phát hành Zalo Mini App](https://docs.zaloplatforms.com/docs/MA/intro/public-mini-program)
- [Zalo Mini App Design Guidelines](https://docs.zaloplatforms.com/docs/MA/intro/zalo-mini-program-design-guidelines)
- [Best practice: xác thực người dùng](https://docs.zaloplatforms.com/docs/MA/intro/best-practices/authen-user)
- [Best practice: gọi RESTful API](https://docs.zaloplatforms.com/docs/MA/intro/best-practices/call-restful-api)
- [Best practice: lưu dữ liệu tạm](https://docs.zaloplatforms.com/docs/MA/intro/best-practices/cache-data)
- [Các lỗi kỹ thuật thường gặp](https://docs.zaloplatforms.com/docs/MA/intro/getting-started/frequently-solved-issues)
- [Các điểm vào Mini App](https://docs.zaloplatforms.com/docs/MA/intro/intro/entry-point-access)
- [API authorize](https://docs.zaloplatforms.com/docs/MA/api/user/authorization/authorize)
- [API getPhoneNumber](https://docs.zaloplatforms.com/docs/MA/api/user/user-information/getPhoneNumber)
- [API getUserInfo](https://docs.zaloplatforms.com/docs/MA/api/user/user-information/getUserInfo)
- [API getAccessToken](https://docs.zaloplatforms.com/docs/MA/api/user/user-information/getAccessToken)
- [API openShareSheet](https://docs.zaloplatforms.com/docs/MA/api/zalo/openShareSheet)
- [API requestSendNotification](https://docs.zaloplatforms.com/docs/MA/api/permission/requestSendNotification)
- [API nativeStorage.setItem](https://docs.zaloplatforms.com/docs/MA/api/native-storage/setItem)
- [API openWebview](https://docs.zaloplatforms.com/docs/MA/api/routing/openWebview)
- [Cấu hình app-config.json](https://docs.zaloplatforms.com/docs/MA/devtools/app-config)
- [Gửi tin từ OA tới người dùng Mini App](https://docs.zaloplatforms.com/docs/MA/tin-mini-app/send-message-oa-to-user)

Nguồn phụ, do đơn vị làm Mini App viết:

- [MiniApp.vn: Xin cấp quyền trong Zalo Mini App](https://miniapp.vn/xin-cap-quyen-trong-zalo-mini-app/)
- [MiniApp.vn: Quy trình kiểm duyệt Zalo Mini App](https://miniapp.vn/quy-trinh-kiem-duyet-zalo-mini-app/)
- [MiniApp.vn: Khởi tạo và xác thực Mini App 2026](https://miniapp.vn/huong-dan-khoi-tao-va-xac-thuc-tren-zalo-mini-app-nam-2026/)
- [MiniApp.vn: Cập nhật chính sách nền tảng v1/2024](https://miniapp.vn/thong-bao-cap-nhat-chinh-sach-nen-tang-zalo-mini-app-v1-2024/)
- [Panda Loyalty: 7 lỗi khiến Mini App bị từ chối](https://pandaloyalty.com/loi-pho-bien-khien-zalo-mini-app-bi-tu-choi/)
- [eSMS: Câu hỏi thường gặp về Mini App](https://helpcenter.esms.vn/hd-s-dung-user/hd-s-dung-user/mini-app/cau-hoi-thuong-gap)
