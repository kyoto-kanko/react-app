import { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const prevCount = useRef<number>(0);

  const handleUp = (): void => {
    setCount(count + 1);
  };
  const handleDown = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  useEffect(() => {
    if (count % 5 === 0) {
      alert("aaaaa");
    }
  }, [count]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>{count}</h1>
      <button onClick={handleUp}>up</button>
      <button onClick={handleDown}>down</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
