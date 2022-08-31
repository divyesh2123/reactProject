import React from 'react'
import { connect } from 'react-redux'
import {IncrementAction} from './action/index'

export const MyTestReducer = (props) => {
  return (
    <div>{props.counter}

        <button onClick={()=> {
            props.increment();
        }}>Inc</button>

    </div>
  )
}

const mapStateToProps = (state) => ({
    counter : state.counter
})

const mapDispatchToProps = (dispatch)=> ({

    increment : ()=> {

        dispatch(IncrementAction())
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(MyTestReducer)