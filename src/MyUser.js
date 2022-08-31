import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserData } from './action/userAction';

export default function MyUser() {

      const myDis =  useDispatch();

      const data =   useSelector(y=>y.myuserReducer);

      console.log(data);
    useEffect(()=> {

            myDis(GetUserData());
    },[])

  return (
    <div>MyUser</div>
  )
}
