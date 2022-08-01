import React, { useEffect, useState } from 'react'
import UserAddress from './UserAddress'

export default function UserPlaceHolder() {
 const [data,setData]=   useState([])

 useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(y=>y.json())
    .then(y=> {
        setData(y)
    })

 },[])
  return (
    <div>
        {
            data.map((element,index)=> {
               return( <UserAddress
                index={index}
                address={element.address}
                />)
            })   
        }

    </div>
  )
}
