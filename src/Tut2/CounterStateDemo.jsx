import React, { useState } from "react";

const CounterStateDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter with useState Hook</h2>
      <p>Count: {count}</p>
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-gray-700 p-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <span className="text-white">+</span>
        </button>
        <button
          type="button"
          className="bg-gray-700 p-3"
          onClick={() => setCount((prev) => prev - 1)}
        >
          <span className="text-white">-</span>
        </button>
        <button
          type="button"
          className="bg-gray-700 p-3"
          onClick={() => setCount(0)}
        >
          <span className="text-white">Reset</span>
        </button>
      </div>
    </div>
  );
};

export default CounterStateDemo;
