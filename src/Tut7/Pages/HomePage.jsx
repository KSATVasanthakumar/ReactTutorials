import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../slices/userSlice";

const HomePage = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    Age: "",
    email: "",
    contact: "",
  });

  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormInput((currInput) => {
      return { ...currInput, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formInput));
  };
  return (
    <>
      <div>HomePage</div>
      <br />
      <form>
        <label>Name</label>
        <br />
        <input
          name="name"
          placeholder="Name"
          value={formInput.name}
          onChange={handleOnchange}
        />
        <br />
        <br />
        <label>Age</label>
        <br />
        <input
          name="Age"
          placeholder="Age"
          value={formInput.Age}
          onChange={handleOnchange}
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          placeholder="Email"
          value={formInput.email}
          onChange={handleOnchange}
        />
        <br />
        <br />
        <label>Mobile Number</label>
        <br />

        <input
          name="contact"
          placeholder="Mobile Number"
          value={formInput.contact}
          onChange={handleOnchange}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default HomePage;
