---
id: CL3
tieu_de: Mã định danh
trang_thai: de-xuat
nguoi_chu: tung
ban: 1
---
# CL3 · Mã định danh

## CL3.1 · Luật
1. Mã = tiền tố loại + số, không gạch nối: US12, QD22.
2. YC, QT, CL phân tầng bằng dấu chấm, tối đa ba tầng: YC1, YC1.2, YC1.2.1.
3. Mục con khác loại nối bằng gạch nối: YC1.2-NT3, QT1.3-VD2, US12-TA1. Ô quyền: PQ2.SALE.
4. Item backlog dùng số phẳng theo từng loại. Cha con nằm ở trường cha.
5. Mã không đổi, không dùng lại. Mục bỏ vẫn giữ mã. Mục chuyển nhánh: giữ mã và ghi "nay thuộc ...", hoặc mã mới với thay_cho.
6. Cấp mã: lấy số lớn nhất hiện có của loại đó trong repo (gồm cả done/) cộng 1. Khi có script (EN2) thì script cấp.
7. Phiên bản trong trường liên kết: YC1.2@3. Trong văn bản: "YC1.2 bản 3".

## CL3.2 · Bảng tiền tố
| Nhóm | Tiền tố |
|---|---|
| Sự thật sản phẩm (docs/) | YC yêu cầu · NT tiêu chí nghiệm thu · QT quy tắc nghiệp vụ · VD ví dụ số · HV hành vi hệ thống · PQ ma trận quyền · A, CN, S, P mã màn trên canvas · QD quyết định · CL cách làm việc · KB kịch bản test tay |
| Việc (work/backlog/) | EP Epic · US User Story · EN Enabler · SK Spike · DC Doc Task · BG Bug · TA Task · IM Impediment |
| Hồ sơ (work/) | SP sprint · BB biên bản · RR rủi ro · GD giả định · SC sự cố · CT cải tiến · PH phản hồi |
Mã vai trong PQ: CHU, SALE, LINK, CTV, KHACH, ADMIN.
Không dùng: TC (dễ nhầm test case).

## CL3.3 · Tên file
<MÃ>-<ten-khong-dau>.md, ví dụ US12-tim-can-trong.md, YC1-dang-nhap-ket-noi.md.
