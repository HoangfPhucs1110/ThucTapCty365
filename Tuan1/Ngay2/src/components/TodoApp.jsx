import React, { useState, useEffect } from "react";

// Custom Hook lưu vào localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

function TodoApp() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Nhập công việc..." 
      />
      <button onClick={addTask}>Thêm</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} 
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
