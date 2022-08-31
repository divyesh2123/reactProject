import { createStore,applyMiddleware } from 'redux'

import reducer from '../reducer';
import rootReducer from '../reducer/main';
import thunk from 'redux-thunk';


const store = createStore(rootReducer,applyMiddleware(thunk)
  
    );

export default store;

