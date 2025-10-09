import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Nhấn ${count} lần`;
  }, [count]);

  return (
    <div>
      <h2>Bộ đếm (useState + useEffect)</h2>
      <button onClick={() => setCount(count + 1)}>Nhấn {count} lần</button>
    </div>
  );
}
