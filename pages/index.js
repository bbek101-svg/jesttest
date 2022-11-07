import Button from "../components/Button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-start w-full h-screen">
      <div className="flex flex-row">
        <h1>Counter: {count}</h1>
      </div>
    </div>
  );
}
