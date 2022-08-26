import { combineReducers } from "redux";
import counter from '../reducer/index';

import product from '../reducer/productReducer';


const rootReducer = combineReducers({

    counter : counter,
    product :product

})


export default rootReducer;