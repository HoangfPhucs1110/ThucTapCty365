import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "block px-4 py-2 bg-blue-600 text-white rounded"
      : "block px-4 py-2 hover:bg-gray-200 rounded";

  return (
    <aside className="w-48 h-screen bg-white shadow p-4 fixed">
      <h1 className="font-bold text-xl mb-6">🌐 My Web</h1>
      <nav className="flex flex-col gap-3">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/todos" className={linkClass}>Todos</NavLink>
        <NavLink to="/posts" className={linkClass}>Posts</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
      </nav>
    </aside>
  );
}
