import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCartData } from './action';

export default function ProductItem() {

    const data = useSelector(y=>y.product);

    const myReducer  =useDispatch();
    console.log(data);

    const myAddToCart = (ele)=> {

      myReducer(AddToCartData(ele))
    }

  return (
    <div>
      {
        data.items.map((elemment)=> {

          return (<div> 

              {elemment.title}
              <button onClick={()=> {
                  myAddToCart(elemment);
              }}>Add To Cart</button>

          </div>)
        })
      }

    </div>
  )
}
