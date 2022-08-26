import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductItem() {

    const data = useSelector(y=>y.product);
    console.log(data);

  return (
    <div>ProductItem</div>
  )
}
