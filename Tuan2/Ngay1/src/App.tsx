import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dữ liệu:", data);
    alert(`Xin chào ${data.name}!`);
    reset();
  };

  return (
    <div style={{ padding: 30, maxWidth: 400, margin: "auto" }}>
      <h2>React Hook Form + TypeScript</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Tên:</label>
        <input
          {...register("name", { required: "Vui lòng nhập tên" })}
          style={{ width: "100%", marginBottom: 8 }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <label>Email:</label>
        <input
          {...register("email", {
            required: "Vui lòng nhập email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email không hợp lệ",
            },
          })}
          style={{ width: "100%", marginBottom: 8 }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}
