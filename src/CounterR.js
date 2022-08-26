import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncrementAction } from './action';

export default function CounterR() {
 const counter = useSelector(u=>u);

const myDis = useDispatch();

 const myChange = ()=> {

    myDis(IncrementAction())
 }

 console.log(counter);
  return (
    <div>{counter}
    
        <button onClick={myChange}>Increment</button>
    </div>
  )
}
