import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosClient
      .get(`/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p style={{ color: "red" }}>Lỗi: {error}</p>;
  if (!user) return <p>Đang tải dữ liệu...</p>;

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Chi tiết người dùng</h3>
      <p><b>Tên:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Địa chỉ:</b> {user.address.city}</p>
    </div>
  );
}
