export default function getAndFormattedCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần cộng thêm 1. Sử dụng phương thức padStart để chèn số 0 vào đầu nếu tháng có một chữ số.
    const day = now.getDate().toString().padStart(2, '0'); // Sử dụng phương thức padStart để chèn số 0 vào đầu nếu ngày có một chữ số.
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
