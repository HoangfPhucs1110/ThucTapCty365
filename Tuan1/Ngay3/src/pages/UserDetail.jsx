import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();

  return (
    <div>
      <h3>Thông tin chi tiết người dùng: {id}</h3>
      <p>Trang này hiển thị dữ liệu dựa trên URL động /users/:id.</p>
    </div>
  );
}
