import React, { Fragment, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const ListUsers = ({ allUsers }) => {
  console.log(allUsers);
  const [users, setUsers] = useState([]); //empty array

  // async function getTodos() {
  //   const res = await fetch("http://localhost:5000/todos");

  //   const todoArray = await res.json();

  //   setTodos(todoArray);
  // }

  useEffect(() => {
    setUsers(allUsers);
  }, [allUsers]);

  return (
    <Fragment>
      {allUsers.length !== 0 &&
        allUsers[0].user_id !== null &&
        allUsers.map((user) => (
          <div>
            <Link to={`/user/${user.user_id}`}>{user.user_name}</Link>
          </div>
        ))}
      <Outlet />
    </Fragment>
  );
};

export default ListUsers;
