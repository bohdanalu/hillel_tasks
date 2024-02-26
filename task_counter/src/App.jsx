import { useReducer } from "react";
import "./App.css";

const initCount = 0;

const reducer = (state, acction) => {
  switch (acction.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initCount;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initCount);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
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
