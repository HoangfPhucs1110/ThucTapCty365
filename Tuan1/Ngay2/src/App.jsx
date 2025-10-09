import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import SearchBox from "./components/SearchBox";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Hooks Practice</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>React Hook Cơ bản</h2>
        <Counter />
      </section>

      <section>
        <h2>React Hook Nâng cao</h2>
        <TodoList />
      </section>

      <section>
        <h2>React 18+ Hooks</h2>
        <SearchBox />
      </section>
    </div>
  );
}
