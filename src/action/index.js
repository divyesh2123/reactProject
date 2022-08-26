import { Decrement, GetData, Increment } from "../cons";

export const IncrementAction = () => ({
  type: Increment,
  
})

export const DecrementAction = () => ({
    type: Decrement,
    
  })


  export const GetProductData = (payload) => ({
    type: GetData,
    payload
  })


  
  
  

