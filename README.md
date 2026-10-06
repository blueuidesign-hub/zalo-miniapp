# zalo-miniapp

Mini App chạy trên Zalo. Stack: React + TypeScript + Vite + `zmp-ui` + `zmp-sdk`.

## Cấu trúc

```
app-config.json        Cấu hình app (title, màu header...)
vite.config.ts         Build config (có zmp-vite-plugin)
src/index.html         Entry HTML
src/app.tsx            Entry React
src/components/app.tsx Router + layout gốc
src/pages/             Mỗi màn hình một file
src/css/               CSS
```

## Cài lần đầu (mỗi máy làm một lần)

### 1. Cài công cụ

| Cần | Để làm gì |
|---|---|
| Node.js 20+ (https://nodejs.org) | Chạy `npm install`, `npm start`, `npm run build` |
| Git (https://git-scm.com) | Kéo code về, đẩy code lên |
| Claude Code hoặc Claude trên web/app | Nhờ Claude viết và sửa code |
| Tài khoản Zalo developer | `zmp login`, `zmp deploy` |

Không cần VS Code nếu bạn không tự đọc hay sửa code. Cài thêm chỉ khi muốn xem Claude vừa đổi gì.
Nếu ngại gõ lệnh Git, dùng GitHub Desktop (https://desktop.github.com). Nó có nút bấm cho pull, commit, push và tự lo đăng nhập.

Kiểm tra đã cài: `node -v` và `git --version`.

### 2. Cài và đăng nhập Git

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "mr.tungvx@gmail.com"
git config --global pull.rebase false
git config --global core.autocrlf input   # Windows: dùng "true" nếu hay lỗi xuống dòng
```

Đăng nhập GitHub. Chọn một trong hai cách:

**Cách A, HTTPS + GitHub CLI (dễ nhất, không cần tự tạo token)**
```bash
# cài gh: https://cli.github.com
gh auth login      # chọn GitHub.com, HTTPS, login bằng browser
```

**Cách B, SSH key**
```bash
ssh-keygen -t ed25519 -C "mr.tungvx@gmail.com"
cat ~/.ssh/id_ed25519.pub        # copy toàn bộ dòng này
```
Vào GitHub, Settings, SSH and GPG keys, New SSH key, dán vào.
Mỗi máy tạo một key riêng, đừng copy key private giữa các máy.
Kiểm tra: `ssh -T git@github.com`

**Cách C, Personal Access Token** (chỉ khi hai cách trên không dùng được)
- Ưu tiên fine-grained token: chọn repo `zalo-miniapp`, quyền **Contents: Read and write** và **Metadata: Read-only**.
- Classic token chỉ cần tick `repo`. Token này đọc và ghi mọi repo của bạn nên đặt hạn 30 đến 90 ngày.
- Nếu org bật SSO, bấm **Configure SSO** cạnh token rồi **Authorize**, không thì push vẫn lỗi 403.
- Không dán token vào chat, README hay file trong repo. Mỗi máy một token riêng.

### 3. Lấy code về

```bash
git clone https://github.com/blueuidesign-hub/zalo-miniapp.git
cd zalo-miniapp
npm install
```

### 4. Đăng nhập Zalo Mini App

```bash
npx zmp login
```
Cần tạo Mini App trước tại https://mini.zalo.me/ (đăng nhập Zalo developer), lấy App ID.
Cách chạy thử và deploy:

```bash
npm start          # chạy dev, mở trên Zalo Mini App Studio hoặc simulator
npm run build      # build ra thư mục www/
npm run deploy     # đẩy bản lên Zalo (cần App ID, đã login)
```

Lần deploy đầu, `zmp deploy` sẽ hỏi App ID. Có thể đặt vào `.env` (xem `.env.example`).

## Quy trình đồng bộ giữa 2 máy

Nguyên tắc: **GitHub là bản gốc**. Máy nào cũng phải `pull` trước khi làm, `push` sau khi xong.

Bắt đầu làm việc:
```bash
git pull
npm install        # chỉ cần khi package.json đổi
```

Kết thúc làm việc (kể cả khi chưa xong, để máy kia lấy được):
```bash
git add -A
git commit -m "mô tả ngắn việc đã làm"
git push
```

Quy tắc để khỏi conflict:

| Tình huống | Cách xử lý |
|---|---|
| Quên push ở máy A, giờ ngồi máy B | Phải quay lại máy A push. Không có cách khác. |
| `git pull` báo conflict | Mở file bị đánh dấu `<<<<<<<`, sửa tay, rồi `git add` và `git commit` |
| Cả hai máy sửa cùng file khác nhau | Git tự gộp. Không sao. |
| Cả hai máy sửa cùng dòng | Conflict. Tránh bằng cách luôn pull trước khi làm. |
| Chưa muốn commit nhưng phải đổi máy | `git stash` không đồng bộ giữa máy. Hãy commit vào một branch `wip` rồi push. |

Không commit những thứ sau (đã nằm trong `.gitignore`):
- `node_modules/`, `www/`, `dist/`
- `.env` (chứa token, App ID)

## Làm việc với Claude Code / branch

Nên làm trên branch riêng rồi merge vào `main` bằng Pull Request:
```bash
git checkout -b feature/ten-tinh-nang
# ... code, commit ...
git push -u origin feature/ten-tinh-nang
```
Sau đó mở Pull Request trên GitHub và merge.

## Làm việc với Claude

Bạn mô tả việc cần làm, Claude sửa code và push lên branch riêng, rồi mở Pull Request.
Bạn merge PR trên GitHub, sau đó `git pull` ở máy của mình.

Sau mỗi thay đổi, tự chạy thử trước khi tin:
```bash
npm start          # xem app chạy đúng chưa
npm run build      # build không lỗi
```

## Khi gặp lỗi

| Lỗi | Nguyên nhân thường gặp | Cách xử lý |
|---|---|---|
| Claude push báo `403` | Claude GitHub App bị suspend hoặc chưa cài | GitHub, Settings, Applications, Claude, bấm **Unsuspend** ở Danger zone. Kết nối lại tại https://claude.ai/connect-github. Mở session mới và chọn repo |
| `git push` từ máy bạn báo `403` | Token thiếu quyền, hoặc chưa authorize SSO | Kiểm tra quyền token, bấm Authorize SSO cho org |
| `git pull` báo conflict | Hai máy sửa cùng dòng | Sửa tay chỗ `<<<<<<<`, rồi `git add` và `git commit` |
| `npm start` không chạy | Chưa `npm install` hoặc chưa `zmp login` | Chạy lại hai lệnh đó |
