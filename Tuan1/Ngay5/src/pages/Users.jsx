import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axiosClient from "../api/axiosClient";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
