import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from "../cons/UserConst"

const initialState = {

    isLoadding : false,
    data : [],
    error: null

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_USERS_REQUESTED:
    return { ...state, isLoadding : true }

  case GET_USERS_SUCCESS:
    return {...state, data : payload}

  case GET_USERS_FAILED : 

  return {...state,error : payload}

  default:
    return state
  }
}
