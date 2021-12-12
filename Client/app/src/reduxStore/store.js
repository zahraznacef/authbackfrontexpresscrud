import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"

import { registerReducer, ServicesReducer } from "../Redux/registerReducer"; // curly braces because we didn't export default 


const All = combineReducers({

    // Interface Reducers
    registerStore : registerReducer,


})

const store = createStore(All, applyMiddleware(thunk));
export default store;


// thunk makes it accept data from the store