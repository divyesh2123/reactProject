import { combineReducers } from "redux";
import counter from '../reducer/index';
import myuserReducer from '../reducer/myuserReducer';

import product from '../reducer/productReducer';

import ecommerce from '../reducer/ecommerceReducer'

import userReducer from '../reducer/userReducer'

const rootReducer = combineReducers({

    counter : counter,
    product :product,
    myuserReducer: myuserReducer,
    ecommerce: ecommerce,
    userInfo: userReducer
})


export default rootReducer;