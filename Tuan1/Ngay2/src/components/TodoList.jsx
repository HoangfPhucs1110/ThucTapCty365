import { useState, useCallback, useMemo } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `Công việc ${prev.length + 1}`]);
  }, []);

  const total = useMemo(() => todos.length, [todos]);

  return (
    <div>
      <h2>Danh sách công việc (useCallback + useMemo)</h2>
      <button onClick={addTodo}>Thêm việc</button>
      <p>Tổng số việc: {total}</p>
      <ul>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}
