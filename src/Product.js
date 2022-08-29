import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { GetProductData } from './action';
import { GetData } from './cons';
import ProductItem  from './ProductItem';

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
    <div>


<ProductItem></ProductItem>
    </div>
  )
}
