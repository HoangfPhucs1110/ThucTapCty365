import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import ErrorExample from "./components/ErrorExample";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Axios Demo (Core – Methods – Error Handling)</h1>
      <UserList />
      <hr />
      <AddUser />
      <hr />
      <ErrorExample />
    </div>
  );
}
