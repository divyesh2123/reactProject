import {takeEvery,put,delay, takeLatest} from 'redux-saga/effects';
import {IncrementAction} from '../action/index'

export function*  incrementAsync()
{
    yield delay(1000);
    yield put(IncrementAction())  
}

export function* watchIncrementAsync()
{

    yield takeLatest('INCREMENT_ASYNC',incrementAsync)
}