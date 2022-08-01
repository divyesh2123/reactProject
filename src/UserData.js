import React, { useEffect, useState } from 'react'
import MyImage from './MyImage';
import MyImageClass from './MyImageClass';

export default function UserData() {

 const [data,setData]  =  useState([]);

 useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(y=>y.json())
    .then(y=> {
        setData(y);

    })

 },[])

  return (
    <div>
        {
                data.map((element)=> {

                    return (<div> 
                        <MyImageClass 
                        imageUrl={element.url}
                        imagetitle ={element.title}
                        altText={element.title}
                        />
                    </div>)

                })


        }


    </div>
  )
}
