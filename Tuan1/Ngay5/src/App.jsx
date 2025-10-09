import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import ErrorPage from "./pages/ErrorPage";

function Layout() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Mini Project – Tuần 1</h1>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Trang chủ</Link> | <Link to="/users">Người dùng</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserDetail />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
