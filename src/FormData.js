import axios from 'axios';
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

    const [error,setError]= useState({
        title: "",
        firstName : "",
        lastName: ""
       
    });

    const myData = (e)=> {

        
        
        if(e.target.type =="checkbox")
        {
            setData({...data,[e.target.name]: e.target.checked});
        }

         else
         {

           var message = checkValidation(e.target.name,e.target.value);

           setError({...error,[e.target.name]: message});
           setData({...data,[e.target.name]: e.target.value});

         }       
        
    }
    
    var checkValidation = (key,value) => {

        switch(key)
        {

                case "title" :

                    if(!value)
                    {
                        return "title is required";
                    }
                    break;

                case  "firstName":

                    if(!value)
                    {

                        return "firstName is required";

                    }

                    break;
                 case "lastName" :

                 if(!value)
                 {
                    return "lastName is required";
                 }

                 break;

                
                
                
                
                
                
                
                
                
                


                


        }

    }

    const mySubmit=(e)=> {
        console.log(e)
        e.preventDefault();
        console.log(data);

        var errorObject = {};

        Object.keys(error).map((element)=> {
           
          let message =  checkValidation(element,data[element])

          errorObject[element]= message;
       
            
        });

        setError(errorObject);

        console.log(error);

        // axios.post("http://localhost:4000/accounts/register",data).then(y=> {

        // console.log(y);
        // })
    }


  return (
    <div>
        <form onSubmit={mySubmit }  >

        <label>title</label>
            <input type="text" name='title' onChange={myData}  
            value={data.title}  onBlur={myData}/>
             <span>{error?.title}</span>
            <label>FirstName</label>
            <input type="text" name='firstName' onChange={myData} />

            <span>{error?.firstName}</span>

            <label>LastName</label>
            <input type="text" name='lastName' onChange={myData} />

            <span>{error?.lastName}</span>

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
