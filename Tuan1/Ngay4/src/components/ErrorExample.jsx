import axiosClient from "../api/axiosClient";
import { useState } from "react";

export default function ErrorExample() {
  const [error, setError] = useState(null);

  const handleError = async () => {
    try {
      await axiosClient.get("/invalid-endpoint");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Xử lý lỗi (Error Handling)</h2>
      <button onClick={handleError}>Gửi request lỗi</button>
      {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}
    </div>
  );
}
