import React, { useEffect, useRef } from 'react'
import TestRefresh from './TestRefresh';

export default function MyDataEmp() {



 const myrefData =   useRef();

 const mySubmit = (e)=> {

    console.log(myrefData.current.value);
    
 }

 useEffect(()=> {
    myrefData.current.value = "1";

 },[])
  return (
    <div>

        <input type="text"  ref={myrefData}  />
        <button onClick={mySubmit}>Save</button>

        <TestRefresh/>

    </div>
  )
}
