import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPosts } from './slice/userSlice';
export default function UserPost() {

   const myData = useSelector(y=>y.user);

   console.log(myData);

    const myDis =  useDispatch();

    useEffect(()=> {

        myDis(getPosts({ userId: 1 }));
    },[myDis])
  return (
    <div>UserPost</div>
  )
}
