import axios from "axios";
import { POSTDATAERROR, POSTDATAREQUEST, POSTDATASUC } from "../cons/Ecommerce";
export const PostUserData = (data)=> {

  
    return distpatch=> {

      distpatch({
        type : POSTDATAREQUEST,
        
      })
    

     
        axios.post("http://localhost:8002/api/auth/register",data).then(y=> {
            
            
         
            distpatch({
              type : POSTDATASUC,
              payload: y.data
            })
       
        }).catch(y=> {
            console.log(y);
            distpatch({
              type : POSTDATAERROR,
              payload: y.data
            })
        })

    }

  }