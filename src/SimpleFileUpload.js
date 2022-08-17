import axios from 'axios';
import React, { useState } from 'react'

export default function SimpleFileUpload() {

const [data,setData]= useState(null);

const myChange = (e) => {
    debugger;
    setData(e.target.files[0]);
}

const myClick = (e)=> {

  var formData = new FormData();
  formData.append("file",data);

  axios.post("http://localhost:8080/upload",formData).then(y=> {
    console.log(y);
  })




}

  return (
    <div>
        <input type="file" onChange={myChange} />

        <button type='button' value="Save" onClick={myClick}> Save</button>

    </div>
  )
}
