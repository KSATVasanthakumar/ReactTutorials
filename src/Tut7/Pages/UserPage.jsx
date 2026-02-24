import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slices/userSlice";

const UserPage = () => {
  const users = useSelector((state) => state.userInfo.users);
  const dispatch = useDispatch();

  return (
    <>
      <div>UserPage</div>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.contact}</h3>
            <h3>{user.email}</h3>
            <button onClick={() => dispatch(deleteUser(index))}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default UserPage;
