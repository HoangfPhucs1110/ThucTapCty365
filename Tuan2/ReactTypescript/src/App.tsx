// App.tsx
import { Button, TextField } from "@mui/material";
import { Todo as TodoItem } from "./components/Todo";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export type Todo = { id: string; name: string; isCompleted: boolean };
type FormInput = { name: string };

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { control, handleSubmit, reset } = useForm<FormInput>({ defaultValues:{ name:"" } });

  const onSubmit = ({ name }: FormInput) => {
    if (!name.trim()) return;
    const newTodoItem: Todo = { id: uuidv4(), name: name.trim(), isCompleted: false };
    setTodoList([newTodoItem, ...todoList]);
    reset();
  };

  const updateIsCompleted = (id: string, isCompleted: boolean) =>
    setTodoList(list => list.map(t => (t.id === id ? { ...t, isCompleted } : t)));

  return (
    <>
      <p>This is Todo App</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <TextField size="small" {...field} />}
        />
        <Button variant="contained" type="submit">Thêm</Button>
      </form>
      <div>
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            updateIsCompleted={updateIsCompleted}
          />
        ))}
      </div>
    </>
  );
}
export default App;
