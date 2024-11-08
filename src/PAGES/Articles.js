import React, { useEffect, useState } from "react";
import Plus from "../IMAGES/plus.png";
import Get from "../FUNCTIONS/Get";
import axios from "axios";
import Add from "./Add";
import { Link } from "react-router-dom";

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


const Article = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      try {
        const { data, status } = await axios.get(
          "http://localhost:8000/api/article/get"
        );

        console.log(data);
        console.log(status);

        if (status === 200) setUsers(data);
        console.log("bon");
      } catch (err) {
        // console.log(err.message);
      }
    };
    Fetch();
  }, []);
  //   console.log(users);
  return (
    <div className="flex flex-col">
      
      <div className="w-screen space-x-4 flex-nowrap overflow-x-scroll">
        {users.map((data, index) => (
          <div key={index} className="h-8 w-max flex gap-4">
          <Link to={`/article/${data._id}`}>
          <div>
            <p>name:{data?.name} </p>
            <p>username:{data?.brand} </p>
            <p>email:{data?.price} </p>
            <p>name:{} </p>
            <p>name:{} </p>
            <p>name:{} </p>
            <button onClick={() => handleDelete(data._id)}>delete</button>
          </div></Link></div>
        ))}
      </div>
      <Link to="/add">
        <img src={Plus} width={100} alt="corbeille" />
      </Link>
      
    </div>
  );
};

export default Article;
