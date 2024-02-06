import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((count + 1));
  }
  const minus = () => {
    setCount((count - 1));
  }
  return (
    <div>
      <h1 className="flex flex-col justify-center items-center" >
        
      </h1>
    </div>
  );
}