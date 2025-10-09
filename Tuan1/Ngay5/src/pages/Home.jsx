import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Trang chủ</h2>
      <p>Mini Project tổng hợp React Hook, Router và Axios.</p>
      <Link to="/users">Xem danh sách người dùng</Link>
    </div>
  );
}
