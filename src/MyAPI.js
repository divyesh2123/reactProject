import React, { useEffect, useState } from 'react'

export default function MyAPI() {

    const [data,setData]= useState({});
    const [data1,setData1]= useState({});
    useEffect(()=> {

        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(y=>y.json())
        .then(y=> {
            setData(y);
        })

    },[data,data1])
  return (
    <div>
        {
            data.title
        }
    </div>
  )
}
