import React, { useState } from 'react'

export default function MyState() {

    const [data,setData] = useState({
    city : "",
    
    })

    var myTest = ()=> {

        setData({...data,fullName : data.firstName[0] + '' + data.lastName})

    }
  return (
    <div>
            {data.fullName} {data.firstName} {data.lastName}

            <button onClick={myTest}>Check FullName</button>

    </div>
  )
}
