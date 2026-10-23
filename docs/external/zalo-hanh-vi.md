---
loai: ben-ngoai
nguoi_chu: duc
verified: 2026-10-22
review_by: 2026-12-22
---

# Zalo Mini App vận hành thế nào, và ảnh hưởng gì tới UI/UX

File này mô tả Home247 sống bên trong Zalo ra sao: mở, chạy nền, thu nhỏ, đóng; vùng nút của Zalo; lối tắt ngoài màn hình chính; các cửa sổ Zalo tự bật lên khi gửi tin, gọi điện, xin quyền. Mỗi hành vi đi kèm hệ quả cho thiết kế.

- Tra cứu ngày 22/10/2026 từ tài liệu API chính thức (docs.zaloplatforms.com) và vài bài hướng dẫn người dùng.
- Đi cùng file [`zalo-rang-buoc.md`](./zalo-rang-buoc.md). File kia nói về quy định, giới hạn. File này nói về hành vi.
- Chỗ nào tài liệu không ghi rõ, file ghi **"cần kiểm tra trên máy thật"**. Mục 8 gom các chỗ đó thành danh sách để thử.

## Mục lục

- [0. Kết luận: cách nghĩ đúng về Mini App](#0-kết-luận-cách-nghĩ-đúng-về-mini-app)
- [1. Vòng đời: mở, chạy nền, mở lại, đóng](#1-vòng-đời-mở-chạy-nền-mở-lại-đóng)
- [2. Vùng màn hình thuộc về Zalo](#2-vùng-màn-hình-thuộc-về-zalo)
- [3. Không thể vừa chat vừa dùng app: thu nhỏ](#3-không-thể-vừa-chat-vừa-dùng-app-thu-nhỏ)
- [4. Lối tắt ngoài màn hình chính và danh sách yêu thích](#4-lối-tắt-ngoài-màn-hình-chính-và-danh-sách-yêu-thích)
- [5. Cửa sổ Zalo tự mở khi app tương tác ra ngoài](#5-cửa-sổ-zalo-tự-mở-khi-app-tương-tác-ra-ngoài)
- [6. Hộp thoại cấp quyền](#6-hộp-thoại-cấp-quyền)
- [7. Các hành vi khác ảnh hưởng tới giao diện](#7-các-hành-vi-khác-ảnh-hưởng-tới-giao-diện)
- [8. Đối chiếu với thiết kế hiện tại](#8-đối-chiếu-với-thiết-kế-hiện-tại)
- [9. Cần kiểm tra trên máy thật](#9-cần-kiểm-tra-trên-máy-thật)
- [Nguồn](#nguồn)

---

## 0. Kết luận: cách nghĩ đúng về Mini App

**Mini App là một trang web chạy trong một khung của Zalo, không phải một app độc lập trên điện thoại.** Hãy hình dung Zalo là một tòa nhà, còn Home247 là một phòng trong đó. Người dùng phải vào tòa nhà rồi mới vào phòng. Mỗi lúc họ chỉ đứng ở một phòng. Cửa ra vào, đèn báo và chuông thì do tòa nhà quản lý.

Phép so sánh này có chỗ hở. Phòng có thể "gấp lại" thành một biểu tượng nổi để người dùng sang phòng khác rồi quay lại (mục 3). Nhưng nó giải thích đúng phần lớn hành vi.

Từ cách nghĩ đó rút ra 7 hệ quả cho thiết kế. Hệ quả nặng nhất ở trên.

1. **Gửi tin, chia sẻ, gọi điện đều đi qua cửa sổ của Zalo, và người dùng tự bấm gửi.** App không gửi tin thay người dùng, cũng không gửi tới một số điện thoại bất kỳ. Thiết kế CN10 "Lịch gửi tới số Zalo của sale" không làm được như mô tả (mục 5.2).
2. **Mỗi lúc chỉ thấy một thứ: hoặc khung chat, hoặc app.** Sale đang chat với khách mà muốn xem lịch thì phải chuyển qua lại. Thu nhỏ app giúp chuyển nhanh hơn nhưng không chạy song song (mục 3).
3. **Người dùng rời app rất thường xuyên.** Họ gọi chủ nhà, mở chat, chia sẻ. Mỗi lần như vậy app bị đẩy ra nền. Màn đang nhập dở phải giữ được nội dung khi người dùng quay lại (mục 1.3).
4. **Góc phải trên luôn là nút ··· và ✕ của Zalo.** Không đặt gì ở đó (mục 2).
5. **Hộp thoại xin quyền là của Zalo, app không đổi được giao diện.** Vì vậy phải giải thích trước, bằng màn của mình (mục 6).
6. **Lối tắt ngoài màn hình chính chỉ là nút mở nhanh.** Bấm vào thì Zalo mở ra rồi mới tới app. Nó không biến Home247 thành app riêng (mục 4).
7. **Không có API xoay ngang màn hình.** Màn S1-05 "Lịch phòng, xoay ngang" cần kiểm tra lại có làm được không (mục 7.1).

---

## 1. Vòng đời: mở, chạy nền, mở lại, đóng

### 1.1 Các cách người dùng vào app

| Điểm vào | Mô tả | Dùng cho Home247 |
|---|---|---|
| Link `https://zalo.me/s/{miniAppId}/?…` | Bấm trong tin nhắn Zalo là mở thẳng app. Link mang theo tham số. | **Chính.** Link mời sale, link xin lịch, link vào nhóm. |
| Thẻ chia sẻ Mini App | Gửi qua `openShareSheet` kiểu `zmp_deep_link`. Hiện dạng thẻ có ảnh và tiêu đề. | Gửi link mời cho đẹp, dễ bấm hơn link chữ. |
| Mã QR | Quét bằng camera hoặc máy quét QR của Zalo | Có thể in QR dán ở quầy lễ tân, cho sale quét |
| Lối tắt ngoài màn hình chính | Tạo bằng `createShortcut` (mục 4) | Cho người dùng hằng ngày |
| Mini App Store, tìm kiếm của Zalo | Người dùng tìm theo tên | Phụ |
| Menu của OA | Nút trong khung chat OA | Nếu có OA Home247 |
| Danh sách Mini App đã dùng gần đây | Zalo tự lưu **(cần kiểm tra trên máy thật vị trí chính xác)** | Phụ |

**Hệ quả.** Người dùng thường vào app từ một link cụ thể, không phải từ màn hình chính của app. Ví dụ chủ nhà bấm link xin lịch của sale. App phải đọc tham số trên link (`getRouteParams`) để đưa người dùng tới đúng màn: A8 duyệt sale, S8-03 vào nhóm. Đừng luôn mở trang Lịch rồi bắt họ tự tìm.

### 1.2 Màn khởi động

- Mỗi lần mở mới, Zalo hiện màn khởi động có logo và tên app. Màn này **mặc định, không đổi hay ẩn được**.
- App có thể giữ màn này lâu hơn để tải dữ liệu xong (`selfControlLoading` + `closeLoading`). Nhưng tổng thời gian tải trên 10 giây là vi phạm chính sách.

**Hệ quả.** Không thiết kế màn chào riêng chen giữa. Người dùng vừa xem màn khởi động của Zalo xong, thêm một màn chào nữa là thừa. Đây thêm một lý do để bỏ A1.

### 1.3 Chạy nền và quay lại

- Khi người dùng rời app mà chưa đóng hẳn, app chuyển ra nền và nhận sự kiện `AppPaused`. Ví dụ: thu nhỏ, mở chat, gọi điện, chia sẻ.
- Khi quay lại, app nhận `AppResumed`. App vẫn ở đúng màn cũ, không tải lại từ đầu.
- Nếu app đang chạy nền mà người dùng bấm một link hay QR khác của app, app nhận sự kiện `OpenApp` kèm `path` của link mới. App phải tự chuyển tới màn tương ứng.
- Tài liệu không nói app được giữ ở nền bao lâu. Hệ điều hành có thể giải phóng bộ nhớ, khi đó app phải mở lại từ đầu **(cần kiểm tra trên máy thật)**.
- File tạm, ví dụ ảnh vừa chọn chưa tải lên, bị xóa khi app khởi động lại.

**Hệ quả cho thiết kế:**

- **Form đang nhập dở phải lưu nháp.** Ví dụ CN4 thêm đặt phòng, S6-05 ghi booking, CN5-A1 thêm căn. Lưu vào Native Storage mỗi khi người dùng sửa. Nếu app bị mở lại từ đầu thì khôi phục nháp và báo "Đã khôi phục nội dung bạn đang nhập".
- **Khi `AppResumed`, tải lại dữ liệu có thể đã đổi.** Ví dụ lịch phòng, yêu cầu đặt phòng đang chờ. Người dùng vừa đi gọi chủ nhà về, trong lúc đó chủ nhà có thể đã chấp nhận yêu cầu.
- **Ảnh căn phải tải lên server ngay khi chọn.** Đừng giữ ở máy tới lúc bấm "Thêm căn". Thiết kế CN5-A2 đã hiện "Đang tải 60%" ngay khi chọn ảnh, đúng hướng.
- **Xử lý `OpenApp`.** Ví dụ sale đang mở app thì chủ nhà gửi link nhóm. Sale bấm link, app phải nhảy tới S8-03, không đứng yên ở màn cũ.

### 1.4 Đóng app

- Người dùng đóng app bằng nút ✕ ở góc phải trên (mục 2). App cũng có thể tự đóng bằng `closeApp()`, nhưng không có lý do để Home247 làm vậy.
- Chính sách cấm app tự đóng khi người dùng từ chối cấp quyền.
- Sau khi bấm ✕, app được giữ ở nền hay tắt hẳn: tài liệu không ghi **(cần kiểm tra trên máy thật)**.

**Hệ quả.** Không dựa vào việc "lần sau mở app sẽ tiếp tục ở đúng chỗ". Mỗi lần mở mới nên vào một màn chính dễ hiểu: Lịch với chủ nhà, Lịch phòng với sale.

---

## 2. Vùng màn hình thuộc về Zalo

### 2.1 Cụm nút ··· và ✕ ở góc phải trên

- **Cụm nút này có trên mọi màn của mọi Mini App, cố định ở góc phải trên.** App chỉ chọn được màu sáng hoặc tối cho cụm nút, không đổi được gì khác.
- **Nút ✕:** đóng app (mục 1.4).
- **Nút ···:** mở menu của Zalo. Menu chắc chắn có lựa chọn **"Thu nhỏ"** (mục 3). Các lựa chọn khác như chia sẻ app, thêm vào màn hình chính, thêm vào yêu thích, báo cáo, xem thông tin app thì tài liệu không liệt kê đầy đủ **(cần kiểm tra trên máy thật)**.
- Hướng dẫn thiết kế của Zalo: không đặt nút hay thông tin bên dưới cụm nút; kiểm tra các nút ở gần không bị bấm nhầm; nền phía sau phải đủ tương phản để cụm nút rõ.

**Hệ quả.** Mọi tính năng của Zalo trong menu ··· đã có sẵn ở mọi app, kể cả Home247. Ví dụ "Thu nhỏ" hay chia sẻ app. Không cần vẽ lại các nút đó trong giao diện, trừ khi muốn đặt chúng ở chỗ dễ thấy hơn (mục 3.3, mục 4.2).

### 2.2 Thanh tiêu đề và thanh trạng thái

App có hai cách dùng thanh tiêu đề.

**Cách 1: dùng thanh của Zalo.** Zalo vẽ thanh tiêu đề với nút quay lại bên trái, tên màn ở giữa hoặc bên trái, và cụm ··· ✕ bên phải. App đổi được:

- tiêu đề: `setNavigationBarTitle`, `configAppView`;
- màu nền: `setNavigationBarColor`, `headerColor`;
- màu chữ: chỉ `white` hoặc `black`;
- căn tiêu đề: trái hoặc giữa;
- ẩn nút quay lại: `leftButton: none`.

Nút quay lại tự ẩn ở trang đầu.

**Cách 2: ẩn thanh của Zalo và tự vẽ.** Dùng `actionBarHidden: true` hoặc `hide`. Cụm ··· ✕ vẫn còn, nằm đè lên phần trên của app. Thiết kế Home247 trên canvas đang theo cách này: tự vẽ header và chừa chỗ bên phải cho cụm nút.

**Thanh trạng thái** của điện thoại (giờ, pin) có ba chế độ: `normal`, `hidden`, `transparent`.

**Vùng an toàn ở đáy:** iPhone có vạch vuốt, Android có thanh điều hướng. App có thể ẩn hai vùng này (`hideIOSSafeAreaBottom`, `hideAndroidBottomNavigationBar`). Nếu tự vẽ thanh tab ở đáy thì phải chừa khoảng cho vạch vuốt của iPhone.

**Chế độ tối.** Zalo có giao diện sáng và tối. App đọc được bằng `getSystemInfo().zaloTheme`. Màu thanh tiêu đề đặt riêng được cho từng chế độ. Design system HalongHomestay hiện chỉ có giao diện sáng, nên khi Zalo ở chế độ tối, app vẫn sáng. Chấp nhận được cho MVP.

### 2.3 Quay lại

- **Android:** có nút quay lại của hệ thống và nút quay lại trên thanh tiêu đề. Zalo khuyên giữ nút "trở lại" ở góc trái trên các trang con.
- **iOS:** người dùng vuốt từ mép trái màn hình để quay lại.
- Bấm quay lại ở trang đầu tiên thì thoát app hay không: tài liệu không ghi **(cần kiểm tra trên máy thật)**.

**Hệ quả.**

- **Bảng trượt lên (bottom sheet) phải đóng được bằng thao tác quay lại.** Ví dụ S6-05 ghi booking, S1-04 sắp xếp. Đừng để thao tác quay lại đưa người dùng về hẳn màn trước và làm mất nội dung đang nhập.
- **Không đặt thao tác quan trọng ở mép trái màn hình trên iOS.** Vuốt ngang ở mép trái dễ bị hiểu là quay lại. Lịch tuần cuộn ngang (CN2, S4) cần chừa mép trái hoặc chỉ cho cuộn trong vùng bảng.

---

## 3. Không thể vừa chat vừa dùng app: thu nhỏ

### 3.1 Cơ chế

- **Mỗi lúc người dùng chỉ thấy một thứ.** Hoặc khung chat, hoặc Home247. Zalo không có chế độ chia đôi màn hình cho Mini App.
- **"Thu nhỏ" gấp app thành một biểu tượng nổi.** Biểu tượng vuông, nhỏ, nằm ở góc màn hình Zalo. Người dùng kéo được nó sang chỗ khác.
- Trong lúc app thu nhỏ, người dùng dùng các phần khác của Zalo như chat hay nhật ký. Bấm vào biểu tượng là quay lại app, **không tải lại từ đầu**.
- Muốn bỏ biểu tượng thì nhấn giữ, kéo xuống đáy màn hình tới chỗ có biểu tượng xóa.
- Có hai cách thu nhỏ:
  - **Người dùng tự thu nhỏ:** bấm ··· rồi chọn "Thu nhỏ". **Mọi Mini App đều có sẵn tính năng này.**
  - **App chủ động thu nhỏ:** gọi `minimizeApp()` (SDK 2.26.1 trở lên). Có thể gắn API này vào một nút ở bất kỳ màn nào.
- Thu nhỏ chạy trên Zalo Android và iOS. Zalo bản máy tính không hỗ trợ đầy đủ.
- Có thể thu nhỏ nhiều Mini App cùng lúc không, và tối đa bao nhiêu: tài liệu không ghi **(cần kiểm tra trên máy thật)**.

### 3.2 Vì sao điều này quan trọng với Home247

Công việc của sale là chat với khách liên tục. Khách hỏi "ngày 10 còn căn 2 phòng ngủ view biển không". Sale phải:

1. rời khung chat;
2. mở app xem lịch;
3. chọn căn, gửi ảnh;
4. quay lại khung chat.

Nếu mỗi lần như vậy phải mở app từ đầu thì sale sẽ bỏ app, quay lại gọi điện hỏi chủ nhà. Thu nhỏ giúp bước 2 chỉ còn một chạm vào biểu tượng nổi, và app vẫn ở đúng màn lịch đang xem.

Chủ nhà cũng vậy. Sale gọi tới hỏi lịch, chủ nhà thu nhỏ Zalo để nghe máy, rồi mở lại app xem lịch.

### 3.3 Hệ quả cho thiết kế

- **Đặt nút "Thu nhỏ" ở những màn người dùng hay phải quay về chat.** Không phải ai cũng biết menu ··· có chức năng này. Một nút rõ ràng giúp người lớn tuổi dùng được.
  - **S1 Lịch phòng của sale:** nút nhỏ "Thu nhỏ để chat" ở đầu màn, hoặc nhắc một lần bằng thẻ 💡.
  - **S5 Gửi cho khách:** sau khi gửi xong cả chữ và ảnh, hiện nút **"Thu nhỏ, quay lại chat"**.
  - **S3-03 Chờ chủ nhà trả lời:** nút thu nhỏ để sale nhắn khách trong lúc chờ.
  - **A7 Chờ chủ nhà đồng ý:** tương tự.
- **Nhắc lần đầu.** Lần đầu sale vào S1, hiện thẻ 💡 "Đang chat với khách? Bấm ··· rồi Thu nhỏ, app sẽ thành nút nổi. Bấm nút nổi là quay lại đúng chỗ." Thẻ đóng được, không hiện lại.
- **Nút thu nhỏ không đặt ở góc phải trên**, vì chỗ đó thuộc cụm nút ··· ✕.
- **Không dùng thu nhỏ thay cho đóng.** Nút "Về lịch" hay "Xong" vẫn đưa người dùng về màn chính của app.

---

## 4. Lối tắt ngoài màn hình chính và danh sách yêu thích

### 4.1 Lối tắt ngoài màn hình chính (`createShortcut`)

- App gọi `createShortcut()` thì Zalo tạo một biểu tượng của Mini App trên màn hình chính của điện thoại (SDK 2.16.1 trở lên).
- **Lối tắt chỉ là nút mở nhanh.** Bấm vào thì điện thoại mở Zalo, rồi Zalo mở Home247. App vẫn chạy trong Zalo, với đủ các hành vi ở trên. Điện thoại phải có Zalo và đã đăng nhập.
- Lối tắt mang theo tham số: `createShortcut({ params: { … } })`. **Tham số khác nhau tạo lối tắt khác nhau.** Ví dụ một lối tắt mở thẳng "Lịch phòng", một lối tắt mở "Tìm phòng".
- Android và iOS có luồng khác nhau. Tài liệu chỉ có sơ đồ dạng ảnh, không có chữ. Người dùng có phải bấm xác nhận không, iOS có phải đi qua bước nào thêm không **(cần kiểm tra trên máy thật)**.
- Người dùng có thể tự tạo lối tắt từ menu ··· không **(cần kiểm tra trên máy thật)**.

**Lối tắt giúp gì và không giúp gì.**

| Lối tắt giúp | Lối tắt không giúp |
|---|---|
| Mở app bằng một chạm từ màn hình chính, không phải mở Zalo rồi tìm app | Không chạy song song với chat Zalo |
| Người dùng thấy biểu tượng Home247 hằng ngày, nhớ tới app | Không có thông báo riêng của app trên biểu tượng (không có số đỏ) |
| Mở thẳng màn cụ thể nhờ tham số | Không chạy được khi không có Zalo |

**Hệ quả cho thiết kế:**

- **Gợi ý tạo lối tắt đúng lúc, không gợi ý ở lần mở đầu.** Lần đầu người dùng chưa biết app có ích không, gợi ý lúc này chỉ làm phiền. Nên gợi ý sau khi người dùng đã được việc. Với chủ nhà là sau khi ghi booking thứ 3. Với sale là sau khi gửi khách thành công lần đầu.
- Gợi ý bằng thẻ 💡 đóng được: "Mở Home247 nhanh hơn từ màn hình chính?" kèm nút **"Thêm lối tắt"**. Bấm thì gọi `createShortcut`.
- **Thêm một dòng ở tab Cá nhân (P1, P4):** "Thêm lối tắt ra màn hình chính". Người dùng tìm được tính năng này bất cứ lúc nào.
- Lối tắt của sale nên mở thẳng **Lịch phòng (S1)**. Lối tắt của chủ nhà mở thẳng **Lịch (CN1)**.

### 4.2 Danh sách yêu thích (`favoriteApp`)

- Gọi `favoriteApp()` để thêm Home247 vào danh sách yêu thích trong Zalo Mini App Store (SDK 2.27.1 trở lên).
- Danh sách này nằm trong Zalo. Người dùng phải mở Zalo, vào mục Mini App mới thấy. Vì vậy nó kém tiện hơn lối tắt.

**Hệ quả.** Dùng làm phương án phụ. Ví dụ trong P1, P4 có dòng "Thêm vào Mini App yêu thích" cho người không muốn thêm biểu tượng ra màn hình chính.

---

## 5. Cửa sổ Zalo tự mở khi app tương tác ra ngoài

Quy tắc chung: **app không tự gửi gì thay người dùng**. App chỉ mở sẵn một cửa sổ của Zalo, điền sẵn nội dung, rồi người dùng tự chọn người nhận và bấm gửi. Trong lúc cửa sổ đó mở, app bị đẩy ra nền (mục 1.3).

### 5.1 Bảng các cửa sổ

| Việc | API | Cửa sổ hiện ra | Người dùng phải làm | App biết được gì sau đó |
|---|---|---|---|---|
| Chia sẻ chữ, ảnh, thẻ Mini App | `openShareSheet` | Bảng chia sẻ của Zalo: chọn bạn bè, nhóm, đăng nhật ký | Chọn người nhận, bấm gửi | Chỉ biết **đã gửi hay hủy**, kiểu gửi, **số người nhận**. **Không biết gửi cho ai.** |
| Mở chat với một người | `openChat({ type: "user", id, message })` | Khung chat với đúng người đó, ô nhập đã điền sẵn tin | Sửa nếu muốn, bấm gửi | Không biết người dùng có gửi không |
| Mở chat với OA | `openChat({ type: "oa", id })` | Khung chat với OA | Nhắn | Không |
| Chọn bạn bè trong danh bạ Zalo | `openProfilePicker({ maxProfile })` | Danh sách bạn bè Zalo, chọn 1–10 người | Chọn | **ID, tên, ảnh** của người được chọn |
| Gọi điện | `openPhone({ phoneNumber })` | Màn gọi điện của điện thoại | Bấm gọi **(cần kiểm tra: có bước xác nhận không)** | Không |
| Nhắn SMS | `openSMS` | Ứng dụng tin nhắn của điện thoại | Bấm gửi | Không |
| Xem trang cá nhân Zalo | `openProfile` | Trang cá nhân của người đó | | Không |
| Theo dõi OA | `followOA` | Hộp thoại xác nhận của Zalo | Đồng ý | Có |
| Mở trang web | `openWebview` | Khung web dạng bảng trượt hoặc toàn màn | Đọc, đóng | Sự kiện `WebviewClosed` |

### 5.2 Hệ quả lớn nhất: không gửi được tới "số Zalo" của một người

**Cơ chế.** `openChat` cần **ID người dùng của Zalo App**, không nhận số điện thoại. ID chỉ có khi:

- người đó đã dùng Home247 (app có ID của họ), hoặc
- người dùng vừa chọn họ bằng `openProfilePicker`.

Muốn gửi theo số điện thoại thì chỉ còn SMS hoặc gọi điện.

**Hệ quả cho các màn hiện tại:**

| Màn | Thiết kế đang ghi | Thực tế làm được | Đề xuất |
|---|---|---|---|
| CN10 Gửi lịch cho sale | "Lịch gửi tới số Zalo của sale. Không chọn ai thì Zalo mở để bạn chọn người nhận." | Không gửi theo số được. Bảng chia sẻ không cho chọn sẵn người nhận. | Bỏ danh sách "sale đã lưu" có ô tích. Thay bằng một nút **"Gửi link qua Zalo"**, mở bảng chia sẻ để chủ nhà tự chọn người. Với sale đã kết nối thì không cần gửi link, sale tự thấy lịch. |
| CN7-05 Thêm sale thủ công | Nhập tên và số điện thoại, "vẫn gửi lịch cho sale qua số điện thoại này được" | Chỉ gọi hoặc SMS được theo số | Thêm nút **"Chọn từ bạn bè Zalo"** dùng `openProfilePicker`. App có ID để mở chat, khỏi gõ số. |
| CN7 "Nhắc lại" sale chưa mở link | Chưa ghi cơ chế | Sale chưa dùng app thì không có ID | Mở lại bảng chia sẻ với link cũ, hoặc `openChat` nếu sale đã được chọn qua danh bạ Zalo |
| S3-03 "Nhắn chủ nhà qua Zalo" | Mở tin nhắn tới chủ nhà | Làm được bằng `openChat`, vì chủ nhà đã dùng app nên có ID. Tin điền sẵn, sale tự bấm gửi. | Giữ. Điền sẵn tin: "Em vừa gửi yêu cầu đặt phòng 1509 ngày 10/10 trong Home247, anh chị xem giúp em." |
| A6 Gửi link xin lịch | "Gửi qua Zalo" | Bảng chia sẻ, sale tự chọn chủ nhà | Giữ. Có thể thêm "Chọn từ bạn bè Zalo" để gửi đích danh từng người. |
| S6-03 "Mời chú Bình dùng app" | Gửi lời mời | Chú Bình chưa dùng app, app không có ID | Bảng chia sẻ, hoặc SMS theo số chú Bình đã lưu |

**Vì sao `openProfilePicker` đáng thêm vào.** Nó giải quyết cùng lúc hai việc. Thứ nhất, không phải gõ số điện thoại. Người lớn tuổi gõ số hay sai. Thứ hai, app có ID Zalo để mở đúng khung chat. Giới hạn: chỉ chọn được người đã là bạn bè Zalo của người dùng.

### 5.3 Hệ quả khác

- **"✓ Đã gửi" chỉ hiện khi `openShareSheet` báo đã gửi.** Người dùng bấm hủy thì giữ nguyên nút. Thiết kế CN10 và S5 đã ghi đúng điều này.
- **Gửi khách nhiều căn là nhiều lần mở cửa sổ.** Mỗi lần chỉ gửi được một kiểu nội dung, tối đa 10 ảnh. 3 căn có nghĩa là 6 lần mở bảng chia sẻ, mỗi lần người dùng lại chọn khách. Cần thử trên máy thật xem bảng chia sẻ có nhớ người nhận gần nhất không. Nếu không nhớ, nút **"Sao chép chữ cả 3 căn"** (đã có ở S5) là đường nhanh hơn: sale dán vào chat một lần, rồi chỉ chia sẻ ảnh.
- **Nút gọi điện đưa app ra nền.** Sau cuộc gọi người dùng quay lại app. Đây chính là luồng "gọi chủ hỏi lịch, rồi ghi booking" ở S6-03 → S6-05. Nút "Ghi booking đã chốt" phải còn đúng chỗ khi sale quay lại (mục 1.3).

---

## 6. Hộp thoại cấp quyền

### 6.1 Hộp thoại là của Zalo

- Khi app gọi `getPhoneNumber`, `authorize`, `getUserInfo({ autoRequestPermission: true })` hay `requestSendNotification`, **Zalo** hiện hộp thoại xin quyền. Hộp thoại hiện trên nền app, có nút đồng ý và từ chối.
- **App không đổi được chữ, màu hay vị trí của hộp thoại.** Chính sách cấm làm giả hộp thoại này.
- Phần mô tả quyền hiển thị cho người dùng có thể điền khi xin quyền trong Mini App Center **(cần kiểm tra trên máy thật xem nó hiện ở đâu trong hộp thoại)**.
- Hộp thoại số điện thoại hiện số nào, có cho chọn số khác không **(cần kiểm tra trên máy thật)**.

### 6.2 Zalo nhớ lựa chọn

- Người dùng đồng ý thì lần sau gọi API là có dữ liệu luôn, không hỏi lại.
- Người dùng từ chối thì Zalo **nhớ lựa chọn từ chối**. API trả lỗi (`-201` với `authorize`, `-1401` với tên và ảnh), không hiện hộp thoại nữa.
- Quyền đã cấp **có thời hạn**. Hết hạn thì Zalo hỏi lại.
- Kiểm tra trạng thái bằng `getSetting()` trước khi gọi. Mở trang quản lý quyền cho người dùng tự bật lại bằng `openPermissionSetting()`.
- Mỗi lần `authorize` xin tối đa 3 quyền.

### 6.3 Hệ quả cho thiết kế

- **Luôn có một màn hay một thẻ giải thích của mình trước hộp thoại.** Người dùng chỉ có một cơ hội. Từ chối rồi thì hộp thoại không hiện lại, nên lần hỏi đầu phải là lần họ hiểu vì sao cần. A2 là màn giải thích kiểu này, nhưng phải dời tới đúng lúc cần số (xem `zalo-rang-buoc.md`, mục 2.6).
- **Thiết kế trạng thái "đã từ chối".** Ở những màn cần số điện thoại, nếu `getSetting` báo chưa cấp quyền thì hiện thẻ: "Cần số điện thoại để kết nối với chủ nhà" kèm nút **"Mở cài đặt quyền"**. Nút này gọi `openPermissionSetting`. Đừng hiện lại nút "Cho phép" như lần đầu, vì bấm vào cũng không có gì xảy ra.
- **Không xin 3 quyền cùng lúc lúc mới mở.** Mỗi quyền xin ở đúng việc cần nó.
- **Quyền chọn ảnh từ máy cũng cần Zalo duyệt** (`openMediaPicker`). Người dùng ngoài nhóm admin, developer sẽ gặp lỗi khi thêm ảnh căn nếu quyền chưa được duyệt. Cần nộp quyền này cùng quyền số điện thoại.

---

## 7. Các hành vi khác ảnh hưởng tới giao diện

### 7.1 Xoay ngang màn hình

Danh sách API của Zalo **không có API khóa hay đổi hướng màn hình**. Tài liệu cũng không nói Mini App có tự xoay theo điện thoại không. Màn **S1-05 "Lịch phòng, xoay ngang"** dựa trên giả định app xoay được.

Cần thử trên máy thật. Nếu app không xoay, thay S1-05 bằng nút **"Xem rộng"** trong app. Nút này ẩn thanh tab, thu hẹp cột ngày và mở rộng cột tên căn, không cần xoay điện thoại.

### 7.2 Thông báo ngắn

Zalo có sẵn `showToast({ message })` để hiện thông báo ngắn. Hướng dẫn thiết kế của Zalo nói modal thông báo tự tắt sau 1,5 giây. Thiết kế đang tự vẽ thông báo nổi có nút ✕. Có thể giữ cách tự vẽ để có màu và biểu tượng theo design system, nhưng cho tự tắt khoảng 1,5–3 giây.

### 7.3 Mạng yếu, mất mạng

- Sự kiện `NetworkChanged` báo khi mạng đổi. `getNetworkType` cho biết đang dùng mạng gì.
- Chủ nhà ở Hạ Long hay ra đảo, lên tàu, sóng yếu. Cần một dải cảnh báo ở đầu màn: "Mất kết nối. Lịch có thể chưa mới nhất." Design system đã có token màu `warning` cho dải này.
- Nút lưu khi mất mạng phải báo rõ "Chưa lưu được, bấm lại khi có mạng", không để người dùng tưởng đã lưu.

### 7.4 Phiên bản Zalo cũ

Nhiều API chỉ chạy trên bản Zalo mới. Ví dụ luồng xin quyền mới cần SDK 2.35.0. Người lớn tuổi hay không cập nhật Zalo.

- `getSystemInfo()` cho biết phiên bản Zalo.
- `requestUpdateZalo()` mời người dùng cập nhật Zalo.

Hệ quả: khi một tính năng không chạy vì Zalo cũ, hiện câu "Zalo của bạn cần cập nhật để dùng tính năng này" kèm nút **"Cập nhật Zalo"**. Đừng để nút bấm không phản hồi.

### 7.5 Bàn phím

- Có `hideKeyboard()` để ẩn bàn phím chủ động. Ví dụ ẩn sau khi bấm "Tìm phòng trống".
- Khi bàn phím bật lên, nút cố định ở đáy có thể bị che hoặc bị đẩy lên. Ví dụ "Lưu booking", "Thêm căn", "Tìm phòng trống". Cách xử lý khác nhau giữa iPhone và Android **(cần kiểm tra trên máy thật)**.

### 7.6 Chọn ảnh

- `openMediaPicker` chọn nhiều ảnh cùng lúc (`maxSelectItem`), có nén ảnh (`compressLevel` 0–3), tải thẳng lên server (`serverUploadUrl`).
- `chooseImage` chọn từ album hoặc chụp mới.
- Ảnh tạm bị xóa khi app khởi động lại.

Hệ quả: CN5-A1 "Thêm ảnh · chọn nhiều ảnh cùng lúc" làm được. Nên nén ở mức 1–2 để ảnh căn nhẹ, tải nhanh, mà không bị rỗ.

### 7.7 Giữ màn hình sáng, rung

- `keepScreen` giữ màn hình không tắt, cần Zalo duyệt. Home247 không cần.
- `vibrate` tạo rung nhẹ. Có thể dùng khi bấm lần đầu nút "Xác nhận xóa", để người dùng chú ý.

### 7.8 Thông báo đẩy

- App không tự gửi thông báo lên điện thoại như app thường.
- Thông báo tới người dùng là **tin nhắn từ OA** trong Zalo, kèm điều kiện và có thể tốn phí. Xem `zalo-rang-buoc.md`, mục 2.7.
- Bấm vào tin nhắn đó thì mở app theo link trong tin.

Hệ quả: trong MVP, việc cần xử lý chủ yếu hiện trong app, bằng chấm đỏ trên tab và thẻ "Yêu cầu đặt phòng · 2" ở đầu Lịch (CN1-03). Người dùng chỉ thấy khi mở app. Vì vậy lối tắt ở mục 4 càng quan trọng.

---

## 8. Đối chiếu với thiết kế hiện tại

Xếp theo mức ảnh hưởng, nặng nhất ở trên.

| # | Màn | Vấn đề | Đề xuất |
|---|---|---|---|
| 1 | CN10, CN7-05, CN7 "Nhắc lại" | Thiết kế ngầm hiểu app gửi được tin tới số Zalo của sale. Thực tế không làm được. | Mục 5.2: bảng chia sẻ cho link mời; `openProfilePicker` để chọn sale từ bạn bè Zalo |
| 2 | Mọi form nhập (CN4, CN4-02, S6-05, CN5-A1, S6-02, CN7-05) | Người dùng hay rời app giữa chừng để gọi điện, mở chat. Form có thể mất nội dung. | Lưu nháp bằng Native Storage; khôi phục khi mở lại (mục 1.3) |
| 3 | S1, S5, S3-03, A7 | Sale phải chuyển qua lại giữa chat và app. Không có gợi ý thu nhỏ. | Nút "Thu nhỏ" bằng `minimizeApp`; thẻ 💡 hướng dẫn lần đầu (mục 3.3) |
| 4 | Màn cần số điện thoại (A6, A8, CN7, CN10) | Chưa có trạng thái "đã từ chối quyền" | Thẻ "Mở cài đặt quyền" gọi `openPermissionSetting` (mục 6.3) |
| 5 | S1-05 | Chưa chắc app xoay ngang được | Thử trên máy thật; phương án dự phòng là nút "Xem rộng" (mục 7.1) |
| 6 | P1, P4 | Chưa có lối tắt ra màn hình chính | Thêm dòng "Thêm lối tắt ra màn hình chính"; gợi ý sau khi người dùng đã được việc (mục 4.1) |
| 7 | Mọi màn có danh sách | Chưa có trạng thái mất mạng | Dải cảnh báo dùng `NetworkChanged` (mục 7.3) |
| 8 | Link mời, link nhóm | App phải mở đúng màn theo tham số, kể cả khi đang chạy nền | Đọc `getRouteParams` khi mở; nghe sự kiện `OpenApp` (mục 1.3) |
| 9 | Header các màn chi tiết | Nút bút chì "Sửa" ở bên phải header có thể nằm sát cụm ··· ✕ | Kiểm tra khoảng cách; dời nút "Sửa" xuống nội dung nếu quá sát (mục 2.1) |

---

## 9. Cần kiểm tra trên máy thật

Tài liệu không ghi rõ các điểm dưới đây. Nên thử trên **một iPhone và một điện thoại Android**, mỗi máy có Zalo bản mới nhất và một bản cũ hơn nếu có. Ghi kết quả vào file này.

**Menu và đóng app**
- [ ] Menu ··· có những lựa chọn gì (thu nhỏ, chia sẻ, thêm màn hình chính, yêu thích, báo cáo…)
- [ ] Bấm ✕ thì app tắt hẳn hay vẫn chạy nền; mở lại thì ở màn nào
- [ ] Bấm quay lại (Android) ở trang đầu thì thoát app hay không

**Thu nhỏ và chạy nền**
- [ ] Biểu tượng nổi trông thế nào, nằm ở đâu, có hiện khi đang ở trong khung chat không
- [ ] Thu nhỏ được mấy Mini App cùng lúc
- [ ] App ở nền bao lâu thì bị tắt; form đang nhập còn không sau 5 phút, 30 phút
- [ ] Sau khi gọi điện bằng `openPhone`, quay lại app có còn đúng màn không

**Lối tắt**
- [ ] `createShortcut` trên iPhone: người dùng phải làm những bước gì
- [ ] `createShortcut` trên Android: có hộp thoại xác nhận không
- [ ] Bấm lối tắt khi Zalo chưa mở thì mất bao lâu tới màn của app

**Cửa sổ Zalo**
- [ ] Bảng chia sẻ có nhớ người nhận gần nhất không (ảnh hưởng S5)
- [ ] `openPhone` có bước xác nhận trước khi gọi không
- [ ] `openChat` với người chưa kết bạn thì thế nào

**Quyền**
- [ ] Hộp thoại số điện thoại hiện những gì, có cho chọn số khác không
- [ ] Phần mô tả quyền điền trong Mini App Center hiện ở đâu
- [ ] Quyền đã cấp hết hạn sau bao lâu

**Khác**
- [ ] Xoay ngang điện thoại thì app có xoay không (S1-05)
- [ ] Bàn phím che nút cố định ở đáy không, trên iPhone và Android
- [ ] Chế độ tối của Zalo làm cụm ··· ✕ và header trông thế nào trên nền sáng của app

---

## Nguồn

Tài liệu API chính thức của Zalo:

- [Events (AppPaused, AppResumed, OpenApp…)](https://docs.zaloplatforms.com/docs/MA/api/events)
- [minimizeApp](https://docs.zaloplatforms.com/docs/MA/api/zalo/minimizeApp)
- [closeApp](https://docs.zaloplatforms.com/docs/MA/api/routing/closeApp)
- [createShortcut](https://docs.zaloplatforms.com/docs/MA/api/zalo/createShortcut)
- [favoriteApp](https://docs.zaloplatforms.com/docs/MA/api/zalo/favoriteApp)
- [openChat](https://docs.zaloplatforms.com/docs/MA/api/zalo/openChat)
- [openShareSheet](https://docs.zaloplatforms.com/docs/MA/api/zalo/openShareSheet)
- [openProfilePicker](https://docs.zaloplatforms.com/docs/MA/api/zalo/openProfilePicker)
- [openPhone](https://docs.zaloplatforms.com/docs/MA/api/device/contact/openPhone)
- [configAppView](https://docs.zaloplatforms.com/docs/MA/api/user-interface/view/configAppView)
- [app-config.json](https://docs.zaloplatforms.com/docs/MA/devtools/app-config)
- [getSystemInfo](https://docs.zaloplatforms.com/docs/MA/api/basics/getSystemInfo)
- [getSetting](https://docs.zaloplatforms.com/docs/MA/api/user/setting/getSetting)
- [openPermissionSetting](https://docs.zaloplatforms.com/docs/MA/api/permission/openPermissionSetting)
- [authorize](https://docs.zaloplatforms.com/docs/MA/api/user/authorization/authorize)
- [getPhoneNumber](https://docs.zaloplatforms.com/docs/MA/api/user/user-information/getPhoneNumber)
- [showToast](https://docs.zaloplatforms.com/docs/MA/api/user-interface/interative/showToast)
- [openMediaPicker](https://docs.zaloplatforms.com/docs/MA/api/media/file/openMediaPicker)
- [chooseImage](https://docs.zaloplatforms.com/docs/MA/api/media/file/chooseImage)
- [Các điểm vào Mini App](https://docs.zaloplatforms.com/docs/MA/intro/intro/entry-point-access)
- [Zalo Mini App Design Guidelines](https://docs.zaloplatforms.com/docs/MA/intro/zalo-mini-program-design-guidelines)
- [Các lỗi kỹ thuật thường gặp](https://docs.zaloplatforms.com/docs/MA/intro/getting-started/frequently-solved-issues)

Hướng dẫn cho người dùng, nguồn phụ:

- [CNV: Mẹo thu nhỏ Mini Apps trên Zalo](https://cnv.vn/thu-nho-mini-apps-tren-zalo/)
- [Thế Giới Di Động: Zalo Mini App là gì, cách sử dụng](https://www.thegioididong.com/game-app/zalo-mini-app-la-gi-cach-su-dung-va-loi-ich-hap-dan-1579962)
- [eSMS: Tổng quan Mini App](https://helpcenter.esms.vn/hd-s-dung-user/hd-s-dung-user/mini-app/tong-quan-mini-app)
