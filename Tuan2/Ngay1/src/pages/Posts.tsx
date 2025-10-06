import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";

export default function Posts() {
  const { data, isLoading, error } = useQuery({ queryKey: ["posts"], queryFn: getPosts });

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi khi tải dữ liệu!</p>;

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold">Danh sách bài viết</h2>
      {data.map((p: any) => (
        <div key={p.id} className="bg-white p-3 shadow rounded">
          <h3 className="font-semibold">{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
