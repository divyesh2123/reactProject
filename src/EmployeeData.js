import React, { useCallback, useEffect, useState } from 'react'
import Employee from './Employee';
import MyDisplayInformation from './MyDisplayInformation';

export default function EmployeeData() {

    const [name,setName] = useState();

    const [obj,setiobj] = useState({})

    const [data,setData]= useState([]);

    const manageData = ()=> {

        setData([...data, name]);
    }


    
    const mydelete = ()=> {

    }
  return (
    <div>
        <Employee  data= {{data}} >

        </Employee>

        <input type="text"  value={name} onChange={(e)=> {
            setName(e.target.value)
        }}/>

        <button onClick={manageData}>Save</button>

         <MyDisplayInformation text="This is the information This is the infromation This is the informnation This is the information"/>


    </div>
  )
}
