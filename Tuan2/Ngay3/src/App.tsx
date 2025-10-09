import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();
const API_URL = "https://jsonplaceholder.typicode.com/users";

function Users() {
  const queryClient = useQueryClient();

  // Lấy danh sách user
  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(API_URL);
      return res.data;
    },
  });

  // Mutation thêm user
  const addUser = useMutation({
    mutationFn: async () =>
      await axios.post(API_URL, {
        name: "Người dùng mới",
        email: "new@example.com",
      }),
    onSuccess: (_, __, context) => {
      // ✅ Thêm trực tiếp user mới vào cache để thấy ngay
      queryClient.setQueryData(["users"], (old: any) => [
        ...(old || []),
        { id: Date.now(), name: "Người dùng mới", email: "new@example.com" },
      ]);
    },
  });

  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  if (isError) return <p>Lỗi khi tải danh sách!</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>🧩 Demo TanStack Query</h2>
      <button
        onClick={() => addUser.mutate()}
        disabled={addUser.isPending}
        style={{ marginBottom: 10 }}
      >
        {addUser.isPending ? "Đang thêm..." : "➕ Thêm người dùng"}
      </button>

      <ul>
        {users.map((u: any) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}
