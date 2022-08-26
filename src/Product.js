import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { GetProductData } from './action';
import { GetData } from './cons';

export default function Product() {

    const myDis = useDispatch();


    useEffect(()=> {

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(y=>{
                myDis(GetProductData(y))
            })

    },[])

  return (
    <div>Product</div>
  )
}
