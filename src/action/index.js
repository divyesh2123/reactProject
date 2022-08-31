import axios from "axios";
import { Decrement, GetData, Increment, AddToCart, GetUser } from "../cons";

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

  export const AddToCartData = (payload) => ({
    type: AddToCart,
    payload
  })

  



  
  
  

