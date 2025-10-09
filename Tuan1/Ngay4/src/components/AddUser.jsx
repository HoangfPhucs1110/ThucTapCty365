import axiosClient from "../api/axiosClient";

export default function AddUser() {
  const addUser = async () => {
    const newUser = { name: "Người dùng mới", email: "new@example.com" };
    const res = await axiosClient.post("/users", newUser);
    console.log("Đã thêm:", res.data);
  };

  return (
    <div>
      <h2>Thêm người dùng (POST)</h2>
      <button onClick={addUser}>Thêm</button>
    </div>
  );
}
