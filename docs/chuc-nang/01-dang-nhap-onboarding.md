# 01 · Đăng nhập và onboarding

Mô tả chức năng cho phần mở đầu của Home247 · Lịch phòng Hạ Long: đăng nhập, xin số điện thoại, chọn vai trò, màn hình lần đầu, và cách sale với chủ nhà kết nối với nhau.

- Nguồn thiết kế: canvas Design "Home247 · Lịch phòng Hạ Long", artboard **01 · Bắt đầu · Chung**, màn A1 đến A9.
- Cập nhật: 19/10/2026.
- Người viết mô tả: Tùng (phân tích, thiết kế). Người code: Đức.

---

## 1. Tóm tắt

Người dùng vào app bằng Zalo, không cần email hay mật khẩu. Sau đó app xin số điện thoại, có giải thích lý do. Người dùng chọn mình là chủ nhà hay sale. Lựa chọn này chỉ quyết định **màn hình đầu tiên**, không khóa quyền. Màn hình lần đầu luôn chỉ ra một việc cụ thể để làm tiếp.

Phần quan trọng nhất là **kết nối giữa sale và chủ nhà**. Không có kết nối thì sale không thấy lịch, và app gần như vô dụng với sale. Vì vậy onboarding của sale xoay quanh một việc: gửi link xin xem lịch cho chủ nhà, rồi chờ chủ nhà đồng ý.

## 2. Vì sao luồng được thiết kế như vậy

Mỗi quyết định dưới đây giải quyết một vấn đề cụ thể. Khi phải đổi thiết kế, kiểm tra xem vấn đề gốc còn được giải quyết không.

| Quyết định | Vấn đề gốc nó giải quyết | Nếu bỏ đi thì hỏng gì |
|---|---|---|
| Đăng nhập bằng Zalo, không dùng email | Nhiều chủ nhà và sale không có email, hoặc không nhớ mật khẩu | Người dùng bỏ app ngay ở màn đầu |
| Giải thích trước khi xin số điện thoại | Zalo yêu cầu giải thích. Người dùng cũng ngại đưa số khi không biết để làm gì | Bị Zalo từ chối duyệt, hoặc người dùng bấm từ chối |
| Cho phép "Để sau" với số điện thoại | Ép buộc ở bước này làm mất người dùng chưa tin app | Mất người dùng ở bước 2 |
| Vai trò chỉ chọn màn hình đầu | Nhiều người vừa có căn vừa bán phòng (đại lý, sale thuê lại căn) | Phải làm app thứ hai, hoặc người dùng kẹt ở một vai trò |
| Mở từ link mời thì bỏ qua chọn vai trò | Link đã cho biết người này đến để làm gì | Thêm một bước thừa đúng lúc người dùng đang có động lực |
| Chủ nhà phải đồng ý sale mới thấy lịch | Chủ nhà sợ lịch bị chuyển tiếp cho người lạ | Chủ nhà không dám gửi link |
| Màn lần đầu luôn có một nút hành động chính | Màn trống không có hướng dẫn khiến người mới không biết bắt đầu từ đâu | Người dùng mở app, thấy trống, rồi thoát |

---

## 3. Khái niệm và dữ liệu

| Khái niệm | Ý nghĩa | Ghi chú cho người code |
|---|---|---|
| Tài khoản | Một người dùng, định danh bằng Zalo ID | Tạo ngay lần đầu đăng nhập. Không cần email. |
| Số điện thoại | Lấy qua quyền số điện thoại của Zalo | Có thể rỗng nếu người dùng chọn "Để sau". |
| Vai trò ban đầu | `owner` hoặc `sale` | Chỉ dùng để chọn màn hình đầu và nội dung gợi ý. **Không** dùng để chặn tính năng. |
| Link mời của chủ nhà | Chủ nhà gửi cho sale để sale xem lịch | Mở link thì bỏ qua A3, vai trò mặc định là `sale`. |
| Link xin lịch của sale | Link cá nhân của sale, gửi cho chủ nhà | **Một link dùng cho nhiều chủ nhà.** Mỗi chủ nhà mở link tạo một yêu cầu riêng. |
| Yêu cầu kết nối | Một cặp (sale, chủ nhà) với trạng thái | Trạng thái: `da_gui`, `da_mo`, `dong_y`, `tu_choi`. |
| Quyền xem của sale | Những gì sale thấy trong lịch của chủ nhà | Mặc định lấy từ cài đặt của chủ nhà. Xem F9. |

**Sale luôn thấy và không bao giờ thấy gì.** Đây là quy tắc cứng, không có công tắc:

- Luôn thấy: ngày nào trống, ngày nào đã đặt.
- Không bao giờ thấy: tên và số điện thoại của khách, doanh thu của chủ nhà.

---

## 4. Sơ đồ luồng

```
A1 Chào mừng ──► A2 Số điện thoại ──► A3 Chọn vai trò
                                        ├─ Chủ nhà ──► A4 Chủ nhà mới ──► Thêm căn (CN5-A1)
                                        └─ Sale ─────► A5 Sale mới
                                                         ├─ Xin lịch ──► A6 Soạn tin ──► A7 Chờ chủ nhà
                                                         └─ Thêm căn tự nhập (S6-02)

A1-link (mở từ link mời) ──► A2 ──► (bỏ qua A3) ──► lịch của người mời

Phía chủ nhà, khi mở link xin lịch của sale:
A8 Duyệt sale ── Đồng ý ──► sale thấy A9, chủ nhà thấy sale mới trong CN7
              └─ Từ chối ──► (xem câu hỏi mở số 4)
```

---

## 5. Chi tiết chức năng

Mỗi chức năng có cùng cấu trúc: mục đích, khi nào hiện, nội dung, hành vi, trường hợp đặc biệt, và tiêu chí chấp nhận. Tiêu chí chấp nhận là thứ Đức dùng để tự kiểm tra trước khi báo xong.

### F1 · Chào mừng và đăng nhập bằng Zalo (A1)

**Mục đích.** Người mới hiểu app làm gì trong khoảng 5 giây, rồi vào app bằng một chạm.

**Khi nào hiện.** Lần đầu mở app, hoặc sau khi đăng xuất.

**Nội dung, từ trên xuống:**
- Tên app "🏠 Lịch phòng Hạ Long" và câu giới thiệu: "Lịch phòng và giá homestay, chia sẻ cho sale trong một chạm."
- Ba dòng lợi ích:
  - "Ghi lịch các phòng nhanh hơn sổ tay"
  - "Sale tự xem phòng trống, không cần gọi hỏi"
  - "Gửi ảnh và giá phòng cho khách trong vài giây"
- Nút chính: **Bắt đầu với Zalo**.
- Dòng nhỏ: "Bằng việc tiếp tục, bạn đồng ý với Điều khoản và Chính sách quyền riêng tư." Hai cụm từ là liên kết, mở trang **bên trong app**.

**Hành vi.**
1. Bấm "Bắt đầu với Zalo": lấy Zalo ID, tạo tài khoản nếu chưa có.
2. Tài khoản đã có vai trò và dữ liệu: vào thẳng màn hình chính, bỏ qua A2 và A3.
3. Tài khoản mới: sang A2.

**Trường hợp đặc biệt.**
- Mất mạng khi bấm nút: hiện lỗi ngay dưới nút, "Không kết nối được. Kiểm tra mạng rồi bấm lại." Nút vẫn bấm được.
- Điều khoản và Chính sách mở trong app. Zalo hay từ chối duyệt app có link ra ngoài.

**Tiêu chí chấp nhận.**
- [ ] Người dùng mới đi từ A1 sang A2 chỉ bằng một chạm.
- [ ] Người dùng cũ mở lại app không thấy A1, A2, A3.
- [ ] Không có ô nhập email hay mật khẩu ở bất kỳ đâu.
- [ ] Hai liên kết Điều khoản và Chính sách không mở trình duyệt ngoài.

### F2 · Xin quyền số điện thoại (A2)

**Mục đích.** Chủ nhà và sale nhận ra nhau qua số điện thoại, nên app cần số này để kết nối hai người. Zalo bắt buộc giải thích trước khi hiện hộp thoại xin quyền.

**Khi nào hiện.** Ngay sau A1, với tài khoản chưa có số điện thoại.

**Nội dung.**
- Tiêu đề: "Cho phép dùng số điện thoại".
- Giải thích: "Chủ nhà và sale nhận ra nhau qua số điện thoại. Số của bạn chỉ hiện cho người bạn đã kết nối, không hiện cho khách." (Xem câu hỏi mở số 1.)
- Nút chính: **Cho phép dùng số điện thoại**. Bấm thì mở hộp thoại xin quyền của Zalo.
- Nút chữ: **Để sau**.

**Hành vi.**
- Đồng ý trong hộp thoại Zalo: lưu số, sang A3 (hoặc bỏ qua A3 nếu vào từ link mời).
- Từ chối trong hộp thoại, hoặc bấm "Để sau": vẫn sang bước tiếp theo, số điện thoại để trống.

**Trạng thái "Để sau".** Người dùng dùng app bình thường. Ở màn hình nào cần số điện thoại (gửi link xin lịch, duyệt sale, gửi lịch cho sale), hiện thẻ nhắc "Cần số điện thoại để kết nối" kèm nút **Cho phép**. Không chặn cả màn hình.

**Tiêu chí chấp nhận.**
- [ ] Hộp thoại xin quyền của Zalo chỉ hiện sau khi người dùng bấm nút trên A2, không tự bật.
- [ ] Bấm "Để sau" không làm kẹt người dùng ở A2.
- [ ] Số điện thoại lấy được thì lưu ở server, không chỉ lưu trên máy.
- [ ] Màn hình cần số điện thoại hiện thẻ nhắc khi tài khoản chưa có số.

### F3 · Chọn vai trò (A3)

**Mục đích.** Đưa người mới tới đúng màn hình đầu tiên. Chủ nhà cần thêm căn. Sale cần có nguồn phòng.

**Nội dung.**
- Tiêu đề: "Bạn dùng app để làm gì?"
- Hai thẻ lớn, chọn một:
  - **Tôi là chủ nhà**. "Ghi lịch phòng, đặt giá, mời sale xem lịch."
  - **Tôi là sale**. "Tìm phòng trống, gửi ảnh và giá cho khách."
- Thẻ được chọn có viền màu chính và dấu ✓.
- Nút **Tiếp tục**, chỉ bật khi đã chọn một thẻ.

**Hành vi.**
- Chọn chủ nhà: sang A4.
- Chọn sale: sang A5.

**Quy tắc quan trọng.** Vai trò **không khóa tính năng**. Chủ nhà và sale dùng chung 5 tab: Lịch, Căn, Sale, Thống kê, Cá nhân. Ai cũng có thể có căn riêng, chia sẻ căn cho sale khác và xem lịch của người khác. Vai trò chỉ quyết định màn hình đầu và nội dung gợi ý.

**Tiêu chí chấp nhận.**
- [ ] Nút Tiếp tục tắt khi chưa chọn.
- [ ] Người chọn "chủ nhà" vẫn mở được tab Sale và thêm nguồn phòng.
- [ ] Người chọn "sale" vẫn thêm được căn của mình.

### F4 · Mở app từ link mời (A1-link)

**Mục đích.** Người được mời đã có lý do để vào app. Rút ngắn đường đi tới thứ họ muốn xem.

**Khi nào hiện.** Người dùng chưa đăng nhập mở app từ link mời, ví dụ chủ nhà gửi link lịch cho sale.

**Nội dung.** Giống A1, thêm một thẻ phía trên các dòng lợi ích:
- Ảnh đại diện hoặc chữ cái đầu của người mời.
- "Anh Tuấn mời bạn xem lịch 6 căn".
- "Đăng nhập để xem lịch và giá mới nhất".

**Hành vi.** A1-link → A2 → **bỏ qua A3**, vai trò mặc định `sale` → mở thẳng lịch của người mời.

**Tiêu chí chấp nhận.**
- [ ] Thẻ mời hiện đúng tên người mời và số căn.
- [ ] Không hiện A3.
- [ ] Sau đăng nhập, người dùng thấy lịch của người mời, không phải màn hình trống.
- [ ] Người đã đăng nhập mở link mời thì đi thẳng tới lịch, không thấy A1-link.

### F5 · Màn lần đầu của chủ nhà, chưa có căn (A4)

**Mục đích.** Chủ nhà mới thấy ngay ba việc cần làm theo thứ tự, và bắt đầu việc đầu tiên.

**Nội dung.**
- Tab Lịch ở trạng thái rỗng. Tiêu đề "Chưa có căn nào".
- Mô tả: "Thêm căn đầu tiên để bắt đầu ghi lịch và mời sale xem phòng trống."
- Nút chính: **Thêm căn đầu tiên**.
- Thẻ "3 bước để bắt đầu":
  1. Thêm căn và ảnh: tòa nhà, số phòng ngủ, ảnh để sale gửi khách.
  2. Đặt giá: ngày thường, cuối tuần, ngày lễ.
  3. Mời sale xem lịch: gửi link qua Zalo.
- Mẹo: "💡 Có sổ lịch cũ? Thêm căn trước, sau đó nhập các booking sắp tới."

**Hành vi.** Nút "Thêm căn đầu tiên" và dòng "Thêm căn và ảnh" cùng mở màn thêm căn (CN5-A1).

**Tiêu chí chấp nhận.**
- [ ] Hai điểm chạm cùng mở một màn thêm căn.
- [ ] Khi đã có ít nhất một căn, A4 không hiện nữa.

### F6 · Màn lần đầu của sale, chưa có nguồn phòng (A5)

**Mục đích.** Sale chưa có nguồn phòng thì chưa tìm được phòng nào. Màn này đưa sale tới hai cách có nguồn phòng.

**Nội dung.**
- Tab Tìm phòng ở trạng thái rỗng. Tiêu đề "Chưa có nguồn phòng".
- Mô tả: "Xin chủ nhà gửi link mời để thấy lịch phòng trống. Chủ chưa dùng app thì tự nhập căn."
- Nút chính: **Gửi tin nhắn xin lịch cho chủ nhà** → A6.
- Nút phụ: **Thêm căn tự nhập** → S6-02.
- Thẻ: "Chủ nhà đã gửi link? Mở link trong tin nhắn Zalo của chủ nhà, lịch sẽ hiện ở đây."

**Lưu ý về căn tự nhập.** Căn tự nhập không có lịch trống. Sale gọi chủ để hỏi mỗi lần. Chi tiết trong tài liệu "Quy tắc căn tự nhập".

**Tiêu chí chấp nhận.**
- [ ] Hai nút dẫn đúng tới A6 và S6-02.
- [ ] Khi đã có ít nhất một nguồn phòng, A5 không hiện nữa.

### F7 · Sale soạn tin xin xem lịch (A6)

**Mục đích.** Sale thường đã quen chủ nhà qua Zalo. Cách nhanh nhất là gửi một tin nhắn có sẵn link, chủ nhà bấm vào là xong.

**Nội dung.**
- Tiêu đề: "Xin chủ nhà cho xem lịch".
- Mô tả: "Gửi tin này cho chủ nhà qua Zalo. Chủ nhà bấm link và đồng ý là bạn thấy lịch phòng trống."
- Khung "Tin nhắn sẽ gửi", điền sẵn tên sale:
  > Chào anh/chị, em là Hùng, sale phòng ở Hạ Long. Anh/chị bấm link dưới đây để cho em xem lịch phòng trống. Em gửi khách nhanh hơn, không phải gọi hỏi từng lần.
  > [link cá nhân của sale]
- Dòng nhỏ: "Một link dùng được cho nhiều chủ nhà."
- Thẻ "Sau khi gửi", ba bước:
  1. Chủ nhà mở link trong Zalo. Chủ chưa dùng app sẽ đăng nhập bằng Zalo trước.
  2. Chủ nhà bấm "Đồng ý cho xem lịch". Bạn nhận thông báo ngay.
  3. Lịch của chủ hiện trong Nguồn phòng. Tìm phòng trống được ngay.
- Nút chính: **Gửi qua Zalo** (mở bảng chia sẻ của Zalo).
- Nút phụ: **Sao chép tin nhắn**.

**Hành vi.**
- Gửi hoặc sao chép xong: sang A7.
- Link là link cá nhân cố định của sale. Mỗi chủ nhà mở link tạo một yêu cầu kết nối riêng.

**Tiêu chí chấp nhận.**
- [ ] Tin nhắn có tên thật của sale, không phải tên mẫu.
- [ ] Link mở được Mini App trong Zalo (xem câu hỏi mở số 3).
- [ ] Hai chủ nhà mở cùng một link tạo ra hai yêu cầu riêng.
- [ ] Sao chép xong có thông báo "Đã sao chép".

### F8 · Sale chờ chủ nhà đồng ý (A7)

**Mục đích.** Sale biết link đã đến đâu, để quyết định có cần nhắc chủ nhà không.

**Nội dung.**
- Tab Tìm phòng. Tiêu đề "Đang chờ chủ nhà đồng ý".
- "Đã gửi link lúc 14:20 hôm nay. Chủ nhà đồng ý là lịch phòng hiện ở đây."
- Danh sách "Chủ nhà đã mở link · 1". Mỗi dòng: số điện thoại che bớt (0904 \*\*\* 772), "Đã mở lúc 14:35, chưa trả lời", nút nhắn và gọi.
- Gợi ý: "Chủ nhà lâu chưa trả lời? Nhắn hoặc gọi để nhắc chủ mở link."
- Nút: **Gửi link cho chủ nhà khác**, **Thêm căn tự nhập**.

**Hành vi.**
- Chủ nhà mở link: dòng mới xuất hiện trong danh sách.
- Chủ nhà đồng ý: sale nhận thông báo, màn chuyển sang A9.

**Tiêu chí chấp nhận.**
- [ ] Danh sách chỉ hiện chủ nhà **đã mở link**. Sale không biết ai chưa mở, vì app không biết sale đã gửi cho ai.
- [ ] Giờ mở link đúng theo giờ Việt Nam.

### F9 · Chủ nhà duyệt yêu cầu xem lịch (A8)

**Mục đích.** Chủ nhà kiểm soát ai thấy lịch của mình và thấy tới đâu. Đây là điều kiện để chủ nhà dám gửi link.

**Khi nào hiện.** Chủ nhà mở link xin lịch của sale.

**Nội dung.**
- Tiêu đề: "Lời mời xem lịch".
- Thông tin sale: chữ cái đầu, tên "Sale Hùng", số điện thoại, "xin xem lịch phòng trống của bạn để gửi khách."
- "Nếu đồng ý, Sale Hùng sẽ thấy", danh sách quyền có công tắc:

  | Quyền | Mô tả | Mặc định |
  |---|---|---|
  | Giá từng đêm | Sale thấy giá niêm yết của bạn | Bật |
  | Tình trạng cọc | Sale thấy booking của mình đã cọc chưa | Bật |
  | Booking của sale khác | Chỉ hiện là đã đặt, không hiện tên sale | Tắt |

- Dòng cố định: "Không bao giờ thấy tên, số điện thoại khách và doanh thu. Đổi được trong mục Sale."
- Mẹo cho chủ nhà chưa có tài khoản: "💡 Chưa có tài khoản? Bấm Đồng ý để đăng nhập bằng Zalo, sau đó thêm căn."
- Nút chính: **Đồng ý cho xem lịch**. Nút phụ: **Từ chối**.

**Hành vi.**
- Đồng ý: tạo kết nối với các quyền đã chọn. Sale nhận thông báo. Sale mới xuất hiện trong danh sách Sale của chủ nhà (CN7).
- Chủ nhà chưa có tài khoản bấm Đồng ý: đi qua A1 và A2, bỏ qua A3 (vai trò mặc định `owner`), rồi hoàn tất kết nối. Nếu chưa có căn, mở A4.
- Từ chối: đóng yêu cầu. Xem câu hỏi mở số 4.

**Tiêu chí chấp nhận.**
- [ ] Ba công tắc quyền lưu đúng theo lựa chọn lúc bấm Đồng ý.
- [ ] Tên và số điện thoại khách, doanh thu không bao giờ gửi về máy của sale, kể cả trong dữ liệu API. Chỉ ẩn trên giao diện là chưa đủ.
- [ ] Chủ nhà chưa có tài khoản vẫn hoàn tất được việc đồng ý sau khi đăng nhập.
- [ ] Mở lại cùng một link sau khi đã đồng ý thì hiện "Bạn đã cho Sale Hùng xem lịch", không tạo yêu cầu mới.

### F10 · Sale nhận kết quả đồng ý (A9)

**Mục đích.** Sale thấy ngay kết quả và dùng được luôn.

**Nội dung.** Tab Lịch phòng của sale. Thẻ thông báo ở đầu:
- "✓ Chị Hoa đã đồng ý".
- "ICON40 1509 và Sapphire 1103 đã có trong lịch bên dưới. Lịch tự cập nhật khi chủ nhà ghi booking."
- Nút đóng thẻ.

Bên dưới là lịch 7 ngày, các căn mới của chủ nhà nằm trong nhóm Nguồn phòng.

**Tiêu chí chấp nhận.**
- [ ] Thẻ thông báo hiện một lần, đóng rồi không hiện lại.
- [ ] Các căn của chủ nhà hiện trong lịch đúng theo quyền đã được cấp.

---

## 6. Câu hỏi mở và mâu thuẫn cần chốt

Xếp theo mức nguy hiểm nếu để nguyên khi code.

1. **Có hiện số điện thoại cho nhau không.** Đã từng có quyết định không hiện số điện thoại giữa những người đã kết nối. Nhưng thiết kế hiện tại lại hiện số: A2 ghi "Số của bạn chỉ hiện cho người bạn đã kết nối", A8 hiện đủ số của sale, A7 hiện số che bớt kèm nút gọi. Hai hướng này kéo theo cách lưu và trả dữ liệu khác nhau, nên phải chốt trước khi làm API. Nếu không hiện số thì nút "Gọi" phải đi qua cách khác, ví dụ nhắn qua Zalo.
2. **Lúc nào xin tên và ảnh đại diện Zalo.** Đã từng có quyết định chỉ xin tên và ảnh khi người dùng cần đến: chủ nhà tạo căn đầu tiên, hoặc sale mời chủ nhà, hoặc sale thêm căn tự nhập. Thiết kế A1 lại ngầm hiểu là lấy hết khi bấm "Bắt đầu với Zalo". Đề xuất: A1 chỉ lấy Zalo ID, tên và ảnh xin ở các thời điểm trên. Như vậy tin nhắn ở A6 cần tên sale, nên phải xin tên ngay trước A6.
3. **Dạng link.** Thiết kế đang dùng `home247.vn/xin/hung-0912`. Link gửi trong Zalo nên là link mở thẳng Mini App, để người nhận không phải ra trình duyệt ngoài. Cần kiểm tra cách tạo link mở Mini App kèm tham số trong tài liệu Zalo.
4. **Chủ nhà từ chối thì sale thấy gì.** Thiết kế chưa có trạng thái này. Đề xuất: không báo "bị từ chối" cho sale, chỉ để dòng đó biến khỏi danh sách "đã mở link". Lý do là tránh căng thẳng giữa hai người quen nhau ngoài đời. Cần chốt.
5. **Link cá nhân bị chuyển tiếp.** Một link dùng được cho nhiều chủ nhà. Nếu link bị gửi lung tung, người lạ cũng tạo được yêu cầu. Rủi ro thấp, vì chủ nhà vẫn phải đồng ý. Cách phòng: cho sale tạo link mới, link cũ ngừng hoạt động.

## 7. Ngoài phạm vi tài liệu này

- Đăng xuất, xóa tài khoản, cài đặt: xem artboard 09 · Cá nhân.
- Thêm căn (CN5-A1) và thêm căn tự nhập (S6-02): xem tài liệu chức năng Căn.
- Chủ nhà chủ động mời sale (CN7): xem tài liệu chức năng Sale và thống kê.
