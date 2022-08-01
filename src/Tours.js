import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tour from './Tour';

export default function Tours() {

   const [data,setData] = useState([])

    useEffect(()=> {

        axios.get("https://course-api.com/react-tours-project")
        .then(y=> {
            setData(y.data);
        })
    },[])


  return (
    <div>
        {

            data.map((element)=> {

                return (<Tour myData={element} > </Tour>)

            })
        }

    </div>
  )
}
