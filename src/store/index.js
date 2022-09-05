import { createStore,applyMiddleware } from 'redux'

import reducer from '../reducer';
import rootReducer from '../reducer/main';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(rootSaga);

export default store;

