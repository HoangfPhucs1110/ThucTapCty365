import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosClient.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng (GET)</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
