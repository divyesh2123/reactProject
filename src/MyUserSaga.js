import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { UserRequest } from './action/myUserAction';

export default function MyUserSaga() {

    const data = useSelector(y=>y.userInfo);

    const dis = useDispatch();

    console.log(data);

    useEffect(()=> {

        dis(UserRequest());
    },[])
    
  return (
    <div>MyUserSaga</div>
  )
}
