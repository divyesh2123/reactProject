import React, { useEffect, useState } from 'react'

export default function User() {

   const [data,setData] = useState([]);
   const [load,setReload]= useState(false);

   useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(y=>y.json())
    .then(y=> {

        console.log(y);
        setData(y.filter(y=>y.userId == 1));
    })

   },[])

   const reloadAll =()=> {
        setReload(!load);
   }

   

 const  myRemove=(id)=> {

    console.log(id);
   }
  return (
    <div>{
        data.map((element,index)=> {

            return(<div>{element.userId}
                    <button onClick={()=>{myRemove(index) }}>
                        Remove</button>
            </div>)
        })

        }
            <button onClick={reloadAll}>reloadALL</button>
        </div>
  )
}
