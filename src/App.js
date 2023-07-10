import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const className = count > 18 ? "dangerCount" : "count";
  return (
    <div className="App">
      <h1>Temperature control App</h1>
      <div className="page">
        <p className={className}>{count} °C</p>
        <div className="buttonWrapper">
          <button className="button" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button className="button" onClick={handleDecrease}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
