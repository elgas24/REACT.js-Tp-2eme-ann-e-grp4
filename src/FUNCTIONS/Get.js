import React, { useState } from "react";
import axios from 'axios';

const Get = async () => {

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

