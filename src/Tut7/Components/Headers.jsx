import React from "react";
import { NavLink } from "react-router";

const Headers = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </>
  );
};

export default Headers;
