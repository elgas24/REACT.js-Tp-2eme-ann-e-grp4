import axios from "axios";
import React, { useState } from "react";

const Add = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log(formData);


  const handleSubmit = async () => {
    try {
      const {data, status} = await axios.post(
        "http://localhost:8000/api/article/add",
        formData
      );

      if (status === 200) console.log('bon'); console.log(data,status);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="online"
        placeholder="Online"
        onChange={handleChange}
        required
      />

      <h4>Upload Images:</h4>
      <input type="text" name="img" onChange={handleChange} required />
      <input type="text" name="img1" onChange={handleChange} />
      <input type="text" name="img2" onChange={handleChange} />
      <input type="text" name="img3" onChange={handleChange} />
      <input type="text" name="img4" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Add;
