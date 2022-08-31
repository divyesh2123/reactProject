import React from 'react'
import { connect } from 'react-redux'
import {IncrementAction,DecrementAction} from './action/index'
 function MyTestReducer1(props) {
  return (
    <div>
            {props.counter}
            <button onClick={()=> {
                    props.IncrementAction();
            }}>+</button>
            <button onClick={()=> {

props.DecrementAction();
            }}>-</button>
    </div>
  )
}


const mapStateToProps = (state) => ({
    counter : state.counter
})


export default connect(mapStateToProps,{IncrementAction,DecrementAction})(MyTestReducer1);