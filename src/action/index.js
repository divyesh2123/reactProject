import { Decrement, GetData, Increment, AddToCart } from "../cons";

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
  


  
  
  

