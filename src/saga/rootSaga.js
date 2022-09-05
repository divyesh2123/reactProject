import {  all  } from 'redux-saga/effects';
import {watchIncrementAsync} from './counterSaga'

export default function* rootSaga() {
    //  yield all([getProductsWatcher(), incWatcher(),watcherUserSaga(), getPostsWatcher(),addPostWatcher()]);
  
    yield all([watchIncrementAsync()]);
    }