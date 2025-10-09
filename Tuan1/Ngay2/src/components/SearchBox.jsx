import { useState, useDeferredValue, useTransition } from "react";

export default function SearchBox() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 2000 }, (_, i) => `Item ${i}`);

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(deferredText.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Tìm kiếm..."
        value={text}
        onChange={(e) => {
          const val = e.target.value;
          startTransition(() => setText(val));
        }}
      />
      {isPending && <p>Đang xử lý...</p>}
      <ul>
        {filtered.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
