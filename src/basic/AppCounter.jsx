import { useState } from "react";
import "./App.css";
import Counter from "./basic/components/Counter";

export default function AppCounter() {
  const [total, setTotal] = useState(0);
  const handleClick = () => setTotal((prev) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {total} {total > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter total={total} onClick={handleClick} />
        <Counter total={total} onClick={handleClick} />
      </div>
    </div>
  );
}
