import React from 'react'

 function Employee(data) {

    console.log(data);
  return (
    <div>Employee</div>
  )
}

//HOC conecpt
export default React.memo(Employee,(prev,current)=> {

   // console.log("pre"+ prev);
   // console.log("current"+ current);

    if(prev.data.length == current.data.length)
    {
        return false;
    }

});