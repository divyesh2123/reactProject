import { GetData } from "../cons"

const initialState = {

    items : [],
    cart : [],
    currentSelectItem : {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GetData:
    return { ...state, items : payload }

  case AddtoCart:

  let myobje = [];

  if(state.cart.length == 0)
  {

    myobje.push(payload);
  }
  else
  {
    state.cart

  }

  return {...state, currentSelectItem: payload}
  default:
    return state
  }
}
