import React, { useEffect, useState } from "react";
export default function Profile() {
  const hostlength = window.location.origin.length;
  const baseUrl = window.location.href;
  const last = baseUrl.length - hostlength - 6;
  const user_id = JSON.stringify(baseUrl.slice(-last));

  const [user, setUser] = useState([]);

  const getUser = async (username) => {
    try {
      const res = await fetch(
        `http://localhost:5000/dashboard/users/${username}`,
        {
          method: "GET",
          headers: { jwt_token: localStorage.token },
        }
      );

      const parseData = await res.json();

      setUser(parseData);

      //   setName(parseData[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  return <div></div>;
}
