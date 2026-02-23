import React, { useState } from "react";
import { useNavigate } from "react-router";

function Loginpage() {
    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    if (!username || !password) {
      alert("Its Empty");
      return;
    } else if (!username) {
      alert("Username is Empty");
    } else if (!password) {
      alert("Password is Empty");
    } else {
      navigate("/Home");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100 gap-4">
      <form onSubmit={handleLogin}>
        <div className="w-75 max-w-md h-60 bg-white shadow-lg rounded-xl p-8 flex flex-col gap-5 justify-center items-center">
          <h2 className="text-2xl font-semibold text-center">Login</h2>

          <input
            className="w-50 border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 pl-3"
            placeholder="Username"
            maxLength={20}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="w-50 border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 pl-3"
            placeholder="Password"
            maxLength={15}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-25 h-10 bg-blue-600 text-white rounded-lg">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
