import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from "../cons/UserConst";
import fetchGetUsers from "./fetchGetUsers";

function* handleGetUsers() {
    try {
     // console.log(call(fetchGetUsers))
      const users = yield call(fetchGetUsers);
  
  
     console.log(users)
      yield put({ type: GET_USERS_SUCCESS, payload: users });
    } catch (err) {
      yield put({ type: GET_USERS_FAILED, payload: err });
    }
  }
  
  function* watcherUserSaga() {
    yield takeLatest(GET_USERS_REQUESTED, handleGetUsers);
  }
  
  export default watcherUserSaga;