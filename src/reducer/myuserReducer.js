import { GetUser } from "../cons"

const initialState = {

    items : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GetUser:
    return { ...state, items: payload };

  default:
    return state
  }
}
