import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
 
  increment
 
} from './slice/counterslice';

export default function MyCounterSlice() {

  const data=  useSelector(y=>y.counter);

  const dis = useDispatch();


  const myData = ()=> {

     dis(increment())
  }

  
  return (
    <div>{data.counter}
    
      <button onClick={myData}>+</button>
    
    </div>
    
  )
}
