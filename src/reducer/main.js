import { combineReducers } from "redux";
import counter from '../reducer/index';
import myuserReducer from '../reducer/myuserReducer';

import product from '../reducer/productReducer';


const rootReducer = combineReducers({

    counter : counter,
    product :product,
    myuserReducer: myuserReducer

})


export default rootReducer;