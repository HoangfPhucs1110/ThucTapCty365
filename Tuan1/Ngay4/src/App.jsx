import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Todos from "./pages/Todos";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="ml-52 p-6 space-y-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
