---
id: CL11
tieu_de: Bản đồ repo
trang_thai: de-xuat
nguoi_chu: tung
ban: 1
---
# CL11 · Bản đồ repo

Thư mục chỉ được tạo khi có file thật đầu tiên. Thư mục rỗng làm AI tưởng cần tự điền vào.

## Đang có
```
CLAUDE.md                 Tờ dặn đầu ca cho Claude Code
README.md                 Cách đọc repo cho người
docs/                     SỰ THẬT: sản phẩm phải làm gì
  INDEX.md                Mục lục mọi tài liệu
  product/goal.md         Product Goal, người dùng, không làm gì
  product/glossary.md     Mỗi từ một nghĩa
  product/requirements/   Cây yêu cầu YC. Mỗi file một YC cấp 1
  product/rules/          Quy tắc nghiệp vụ QT. Mỗi file một QT cấp 1
  design/screens/INDEX.md Bảng đăng ký màn hình
  external/               Quy định và hành vi của Zalo. Có hạn tra lại
  decisions/              Quyết định QD, mỗi QD một file
  process/                Cách làm việc CL1 đến CL11, mẫu file trong templates/
  chuc-nang/              Tài liệu cũ, đang chuyển sang YC1 (DC2). Không code theo
work/                     VIỆC VÀ HỒ SƠ
  BOARD.md                Bảng việc
  backlog/                Mỗi item một file. THU-TU.md là thứ tự ưu tiên
  sprints/                SP0, SP1...
  risks.md                Rủi ro RR, giả định GD
handbook/PMGuide/         Giáo trình. Claude Code không đọc
.claude/                  settings.json (quyền cấm), rules/ (quy ước theo thư mục)
.github/                  Mẫu PR
```

## Sẽ tạo khi cần
| Thư mục, file | Tạo khi | Item |
|---|---|---|
| docs/product/system-behaviors.md | Có hành vi hệ thống đầu tiên được chốt | DC |
| docs/architecture/ | Chốt backend (QD về backend) | EN |
| docs/security/permissions.md | Bắt đầu EP2 | DC |
| docs/testing/ | Có test đầu tiên | EN |
| docs/design/principles.md, flows.md | Chuyển từ bản mô tả MVP | DC1 |
| work/meetings/, work/inbox/ | Cuộc họp đầu tiên | |
| work/TRACE.md, script sinh bảng | Có script | EN2 |
| work/releases/, test-runs/ | Bản Testing đầu tiên | |
| work/incidents/, feedback/, improvements.md | Có người dùng thật | |
| docs/process/CL8 phát hành, CL9 sự cố | Trước bản phát hành đầu | |
| .claude/skills/, agents/, hooks/ | Sau khi chạy tay một quy trình hai ba lần | EN |
| src/, server/, tests/ | Theo QD1 | |
