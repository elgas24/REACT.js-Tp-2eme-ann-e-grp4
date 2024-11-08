import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const {id}= useParams();
  
  
  const [values, setValues] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: 0,
    content: "",
    stock: 0,
    online: false,
    pictures: {
      img: "",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
    },
  });

  useEffect(() => {
    const GetById = async () => {
      try {
        const { data, status } = await axios.get(
          `http://localhost:8000/api/article/get/${id}`
        );

        if (status === 200) setValues(data); 
        
        console.log("good");
      } catch (err) {
        console.log(err);
      }
    };
    GetById();
  }, []);

  console.log(values);
  

  const Put = async () => {
    try {
      const { data, status } = await axios.put(
        `http://localhost:8000/api/article/update/${id}`,
        formData
      );

      if (status === 200) console.log("bon");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={''}>
      <input
        type="text"
        name="name"
        defaultValue={values?.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        defaultValue={values?.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="brand"
        defaultValue={values?.brand}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        defaultValue={values?.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        defaultValue={values?.content}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        defaultValue={formData?.stock}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="online"
        defaultValue={values?.online}
        onChange={handleChange}
        required
      />

      <h4>Upload Images:</h4>
      <input
        type="text"
        name="img"
        defaultValue={values?.pictures}
        onChange={()=> (handleChange)}
        required
      />
      <input type="text" name="img1" onChange={handleChange} />
      <input type="text" name="img2" onChange={handleChange} />
      <input type="text" name="img3" onChange={handleChange} />
      <input type="text" name="img4" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
