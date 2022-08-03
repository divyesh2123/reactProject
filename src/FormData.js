import React, { useEffect, useState } from 'react'

export default function FormData() {

    const hobies = ["re"]

   const [data,setData] = useState(
    {
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true,
        languages :[]
      }

    )

    const myData = (e)=> {

        
        if(e.target.type =="checkbox")
        {
            setData({...data,[e.target.name]: e.target.checked});
        }

         else
         {
             setData({...data,[e.target.name]: e.target.value});

         }       
        
    }

    const mySubmit=(e)=> {
        console.log(e)
        e.preventDefault();
        console.log(data);
    }


  return (
    <div>
        <form onSubmit={mySubmit }  >

        <label>title</label>
            <input type="text" name='title' onChange={myData} />

            <label>FirstName</label>
            <input type="text" name='firstName' onChange={myData} />

            <label>LastName</label>
            <input type="text" name='lastName' onChange={myData} />


            <label>email</label>
            <input type="text" name='email' onChange={myData} />


            <label>password</label>
            <input type="text" name='password' onChange={myData} />


            <label>confirmPassword</label>
            <input type="text" name='confirmPassword' onChange={myData} />

                <label>Terms and Con</label>

                <input type="checkbox" name='acceptTerms' onClick={myData}  />


                <input type="submit" value="Save"/>

        </form>


    </div>
  )
}
