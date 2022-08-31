import React, { useReducer } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IncrementAction } from './action';
 import mapDispatchToProps from './cons/MyCon';

const myStateToProps = (state)=> {

  return {
    counter : state.counter
  }
}
 function CounterR(data) {



 const myChange = ()=> {

   data.increment();
 }

 console.log(data.counter);
  return (
    <div>{data.counter}
    
        <button onClick={myChange}>Increment</button>
    </div>
  )
}


export default connect(myStateToProps,mapDispatchToProps)(CounterR);