import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  name: string;
  email: string;
};

const schema = yup.object({
  name: yup.string().required("Tên không được để trống").min(3, "Tối thiểu 3 ký tự"),
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
});

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(`Chào ${data.name} (${data.email})`);
    reset();
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Form Validation với React Hook Form + Yup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Họ và tên" style={{ width: "100%", marginBottom: 6 }} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <input {...register("email")} placeholder="Email" style={{ width: "100%", marginBottom: 6 }} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}
