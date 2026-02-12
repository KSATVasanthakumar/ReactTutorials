import React, { useReducer } from "react";
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };

    case "Decrement":
      return { count: state.count - 1 };

    case "Reset":
      return initialState;

    default:
      return { count: 0 };
  }
};
const CounterReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Counter Counter useReducer Hooks</h2>
      <p>Count : {state.count}</p>
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-gray-700 p-3"
          onClick={() => dispatch({ type: "Increment" })}
        >
          <span className="text-white">+</span>
        </button>
        <button
          type="button"
          className="bg-gray-700 p-3"
          onClick={() => dispatch({ type: "Decrement" })}
        >
          <span className="text-white">-</span>
        </button>
        <button
          type="button"
          className="bg-gray-700 p-3"
          onClick={() => dispatch({ type: "Reset" })}
        >
          <span className="text-white">Reset</span>
        </button>
      </div>
    </div>
  );
};

export default CounterReducerDemo;
