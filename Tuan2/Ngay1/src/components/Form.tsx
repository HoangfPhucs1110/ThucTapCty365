import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
}

export default function Form() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    alert(`Tên: ${data.name}\nEmail: ${data.email}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow rounded space-y-4">
      <h2 className="text-xl font-bold">Đăng ký</h2>
      <input {...register("name")} placeholder="Tên" className="border p-2 w-full" />
      <input {...register("email")} placeholder="Email" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Gửi</button>
    </form>
  );
}
