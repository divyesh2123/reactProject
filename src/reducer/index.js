import { Decrement, Increment } from "../cons"

const initialState = 0

export default (state = initialState, { type, payload }) => {
    
  switch (type) {

  case Increment:
    return state+1;

  case Decrement:
    return state-1;

  default:
    return state
  }
}
