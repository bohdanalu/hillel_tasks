import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <button onClick={handleIncrement}>+</button>
        <div
          style={{
            minWidth: "40px",
            border: "1px solid gray",
            borderRadius: "4px",
            padding: "4px",
            fontWeight: "bold",
          }}
        >
          {count}
        </div>
        <button onClick={handleDecrement}>-</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
