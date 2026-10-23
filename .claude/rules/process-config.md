---
paths:
  - "docs/process/**"
  - "CLAUDE.md"
  - ".claude/**"
  - ".github/**"
---
# Quy ước khi sửa cách làm việc

Mọi thay đổi ở đây thuộc CL4.3.6, nên chỉ mở PR cho Tùng duyệt. AI không gộp.

- Một việc một chỗ. CLAUDE.md chỉ chứa điều phải đọc đầu mỗi phiên và trỏ tới CL. Chi tiết nằm ở docs/process/CLx. Đừng chép chi tiết CL vào CLAUDE.md, rules hay skills.
- Skill trong .claude/skills/ là lối vào ngắn cho một lệnh của CL5. Thân skill nói "làm đúng CL5.x" và những gì riêng của lệnh. Quy trình chỉ viết ở CL5.
- Thêm hoặc đổi một CL: tăng "ban" ở đầu file, thêm dòng vào docs/INDEX.md, cập nhật CL11 nếu đổi cây thư mục.
- Giữ CLAUDE.md dưới 120 dòng. Dòng nào Claude không cần ở mọi phiên thì chuyển sang rules (theo thư mục) hoặc skills (theo lệnh).
- Chỉ thêm quy tắc khi đã thấy lỗi xảy ra hoặc sắp xảy ra, và ghi lỗi nào vào PR. Thêm quy tắc "cho chắc" làm quy trình nặng hơn sức hai người (RR3).
- Rules nói AI nên làm gì, nhưng không chặn được. Điều phải chặn cứng thì vào permissions.deny trong .claude/settings.json.
- Không đưa khóa, token, App Secret, số điện thoại, tên người dùng thật vào bất kỳ file nào ở đây.
