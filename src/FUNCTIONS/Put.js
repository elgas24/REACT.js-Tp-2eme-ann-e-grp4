import axios from 'axios'
import React from 'react'

const Put = (id) => {
  const {data,status} = axios.put(`http://localhost:8000/api/article/update/${id}`,)
}

export default Put
