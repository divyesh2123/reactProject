import React from 'react'

 function Employee(data) {

    console.log(data);
  return (
    <div>
        {
          data.data.map((e)=> {

            return( <div>{e}</div>)
          })

        }

    </div>
  )
}

//HOC conecpt
export default React.memo(Employee);