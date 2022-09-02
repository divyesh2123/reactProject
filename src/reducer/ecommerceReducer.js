import {POSTDATAERROR, POSTDATAREQUEST, POSTDATASUC} from  '../cons/Ecommerce';
const initialState = {
    isError : false,
    isSucc : false,
    Message : {},
    isLoadding: false
    

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case POSTDATAREQUEST:
    return { ...state, isLoadding: true }

  case POSTDATASUC :

  return {...state, isLoadding : false ,isSucc : true,Message : payload};

  case POSTDATAERROR : 

  return {...state, isLoadding : false, isError: true, Message : payload}

  default:
    return state
  }
}
