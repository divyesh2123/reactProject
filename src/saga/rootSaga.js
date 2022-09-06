import {  all  } from 'redux-saga/effects';
import {watchIncrementAsync} from './counterSaga';
import watcherUserSaga from './watcherUserSaga'

export default function* rootSaga() {
    //  yield all([getProductsWatcher(), incWatcher(),watcherUserSaga(), getPostsWatcher(),addPostWatcher()]);
  
    yield all([watchIncrementAsync(),watcherUserSaga()]);
    }