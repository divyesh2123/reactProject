import React, { useCallback, useEffect, useState } from 'react'
import Employee from './Employee';
import MyDisplayInformation from './MyDisplayInformation';

export default function EmployeeData() {

    const [name,setName] = useState();

    const [obj,setiobj] = useState({})

    const [data,setData]= useState([]);

  

    const deleteItem = useCallback(() => {
     //code for delete an item
     //data
     //imput
    },[data]);

    const manageData = ()=> {

      setData([...data, name]);
  }


    
    const mydelete = ()=> {

    }
  return (
    <div>
       
        <input type="text"  value={name} onChange={(e)=> {
            setName(e.target.value)
        }}/>

<Employee  data= {data}  myDelete = {deleteItem}>

</Employee>


        <button onClick={manageData}>Save</button>

     


    </div>
  )
}
