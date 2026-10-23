---
id: EN9
tieu_de: Rules theo thư mục và lệnh / cho Claude Code
loai: EN
trang_thai: cho-nghiem-thu
cha: EP1
nguon: Yêu cầu của Tùng ngày 23/10/2026
nguoi: tung
rui_ro: tb
uoc_luong: 2 giờ
can_duyet: [CL4.3.6]
ngay_tao: 2026-10-23
---
## Mục tiêu
Claude Code tự biết quy ước của từng thư mục khi mở file ở đó, và có lệnh ngắn cho các việc lặp lại, mà CLAUDE.md không dài thêm.

## Làm gì
- .claude/rules/: product, decisions, external, process-config, code. Sửa work.md.
- .claude/skills/: hom-nay, ghi, lam, doi, loi, duyet, tinh-hinh. Mỗi skill là lối vào ngắn tới CL5.
- CLAUDE.md mục Lệnh: trỏ tới tên lệnh /.

## Chưa làm, và vì sao
- Hooks: chưa có lỗi nào xảy ra mà permissions.deny không chặn được. Thêm khi có (CL11).
- Skill cho lap-sprint, tinh-chinh, hop, review, retro, phat-hanh: chưa chạy tay lần nào. Thêm sau khi chạy tay 2 đến 3 lần.
- Skill dua-yc-vao-repo: lệnh mẫu docs/process/templates/lenh-dua-yc-vao-repo.md đang nằm ở PR #7.
- CODEOWNERS: cần tài khoản GitHub riêng của Tùng (QD6, EN6).

## Task
- [x] EN9-TA1 Claude Code: viết rules và skills, sửa CLAUDE.md, CL5, CL11
- [ ] EN9-TA2 Tùng: duyệt và tự gộp PR (CL4.3.6)
- [ ] EN9-TA3 Đức: mở phiên Claude Code mới, thử /hom-nay Đức và /tinh-hinh YC1, ghi lệnh nào không chạy hoặc trả lời sai vào Nhật ký
- [ ] EN9-TA4 Tùng: sau 1 tuần dùng, ghi quy tắc nào bị bỏ qua hoặc thừa, bỏ bớt (RR3)

## Nhật ký
- 2026-10-23 · Tùng (phiên Claude Code) · Viết rules, skills, sửa CLAUDE.md, CL5, CL11 · Còn lại: Đức thử lệnh trong phiên mới · Bất ngờ: chưa có · Chưa thử lệnh nào trong phiên Claude Code mới
