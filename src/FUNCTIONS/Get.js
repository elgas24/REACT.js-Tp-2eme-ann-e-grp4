import React, { useState } from "react";
import axios from "axios";

const Get = async () => {
  const handleDelete = async (id) => {
    try {
      const { data, status } = await axios.delete(
        `http://localhost:8000/api/article/delete/${id}`
      );
      if (status === 200) console.log("item deleted");
      console.log(data, status);
    } catch (err) {
      console.log(err);
    }
  };

  const [users, setUsers] = useState([]);
  try {
    const { data, status } = await axios.post(
      "https://jsonplaceholder.typicode.com/users/"
    );

    //   console.log(data);
    if (status === 200) setUsers(data);
  } catch (err) {
    console.log(err.message);
  }
  console.log(users);
};

export default Get;
