import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Todos() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Todo App</h2>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc..."
        className="border px-2 py-1 mr-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-3 py-1">Thêm</button>
      <ul className="mt-4">
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between mb-2 border p-2 rounded">
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500">Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
