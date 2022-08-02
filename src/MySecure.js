import axios from 'axios';
import React, { useEffect, useState } from 'react'
import authFetch from './globalData/custom';
import authFetchData from './globalData/fetchData';

export default function MySecure() {

    const [data,setData]= useState([]);

    useEffect(()=> {

        authFetchData.get("accounts").then(y=> {
            console.log(y);
        })

        
    },[])

  return (
    <div>MySecure</div>
  )
}
