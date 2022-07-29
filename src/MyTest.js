import React, { useEffect, useState } from 'react'

export default function MyTest() {
    
 const [data,setData] =  useState([]);

 useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(y=>y.json())
    .then(y=> {
        setData(y)
    })

 },[])
  return (
    <div>
            {
            data.map((element)=> {

                return (<div>{element.title} </div>)
            })

            }

    </div>
  )
}
