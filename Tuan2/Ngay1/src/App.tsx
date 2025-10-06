import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./components/Form";
import Posts from "./pages/Posts";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">🌐 React TS Demo</h1>
        </header>

        <main className="grid md:grid-cols-2 gap-6">
          <Form />
          <Posts />
        </main>
      </div>
    </QueryClientProvider>
  );
}
