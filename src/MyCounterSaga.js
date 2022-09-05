import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {firstSaga} from './action/mycounterSaga'

export default function MyCounterSaga() {

    const data = useSelector(y=>y.counter);

    const mydis = useDispatch();

     const dataClick = ()=> {

        mydis(firstSaga());
    }

  return (
    <div>
            {data}

            <button onClick={dataClick}>MyData</button>

    </div>
  )
}
