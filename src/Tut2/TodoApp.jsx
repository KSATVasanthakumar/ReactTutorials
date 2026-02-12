import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
  completedCount: 0,
  totalCount: 0,
};
const todoReducer = (state, action) => {
  switch (action.type) {
    case "Addtask":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
        totalCount: state.totalCount + 1,
      };
    case "TOGGLE":
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      const completedCount = updatedTodos.filter(
        (todo) => todo.completed
      ).length;

      return { ...state, todos: updatedTodos, completedCount };

    case "DELETE":
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      const newcompletedCount = filteredTodos.filter(
        (todo) => todo.completed
      ).length;
      return {
        ...state,
        todos: filteredTodos,
        completedCount: newcompletedCount,
        totalCount: state.totalCount - 1,
      };
  }
};
const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [taskname, setTaskname] = useState("");
  return (
    <div className="p-3">
      <h2 className="text-blue-950 font-bold underline text-xl">Todo App</h2>
      <input
        className="p-3 border-b-2 m-3 outline-0"
        placeholder="Enter the Task"
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
      />
      <button
        className="p-3 bg-slate-800 hover:cursor-pointer"
        onClick={() => dispatch({ type: "Addtask", payload: taskname })}
      >
        <span className="text-white">Add</span>
      </button>

      <h1>List of Task</h1>
      <p>Total Task : {state.totalCount}</p>
      <p>Total Completed : {state.completedCount}</p>
      <ul className="flex flex-col w-50">
        {state.todos.map((todo) => (
          <li key={todo.id} className="flex mb-3 p-3 justify-between">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            />
            <span
              className={`bg-yellow-100 p-3 ${
                todo.completed ? "line-through" : "underline"
              }`}
            >
              {todo.text}
            </span>
            <button
              className="p-3 bg-red-800 hover:cursor-pointer"
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              <span className="text-white">Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
