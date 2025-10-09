import { Link, Outlet } from "react-router-dom";

export default function Users() {
  const users = ["Phúc", "Đạt", "Huy"];

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
            <Link to={`/users/${u}`}>{u}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
