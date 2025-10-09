import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function Layout() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Router DOM Demo</h1>
      <nav>
        <Link to="/">Trang chủ</Link> |{" "}
        <Link to="/about">Giới thiệu</Link> |{" "}
        <Link to="/users">Người dùng</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return <h2>Trang chủ</h2>;
}

function About() {
  return <h2>Trang giới thiệu React Router</h2>;
}

function Users() {
  const userList = ["Phúc", "Đạt", "Huy"];
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {userList.map((u, i) => (
          <li key={i}>
            <Link to={`/users/${u}`}>{u}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

function UserDetail() {
  const { id } = useParams();
  return <h3>Thông tin chi tiết của {id}</h3>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
