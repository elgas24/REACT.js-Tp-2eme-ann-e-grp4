import axios from 'axios';
import React, { useState } from 'react'


    const handleDelete = async()=>{
        try{
            const {data,status} = await axios.delete(`http://localhost:8000/api/article/delete/${id}`);
        if (status === 200) console.log('item deleted'); console.log(data,status);
    }catch(err) {
        console.log(err);
        
    }
}
  


export default handleDelete

