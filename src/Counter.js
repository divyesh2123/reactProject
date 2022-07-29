import React, { useState } from 'react'

export default function Counter() {

    var counterData =1;

   const [data,setData] =useState(0);

   const [step,setStep] = useState(1);

   const [fname,setfname]= useState("TEST");

    const [fullname,setfullname] = useState("React Javascript");



  

    var myCounter = ()=> {

           setData(data+ step);
    }

var myStepCounter= ()=> {

    setStep(step+1)
}


var myfullName = ()=> {

    setfullname(fullname.split(" ")[0]);
}

var myDecrementCounter = ()=> {

    setData(data-step);
}

var mylower = ()=> {

    setfname(fname.toLowerCase());
}

    
console.log("This is the data")


  return (
    <div>{data} {fname} {fullname}
    
        <button onClick={myCounter}>Counter</button>

        Steper

        {step}    

             <button onClick={myStepCounter}>MyStepCounter</button>    


            <button onClick={myDecrementCounter}>Dec Counter</button>


            <button onClick={mylower}>ToLower</button>

            <button onClick={myfullName}>FullName</button>



    </div>

    
  )
}
