import {createStore,applyMiddleware} from "redux"
// import Reducer from "./Reducer";
import thunk from "redux-thunk";
import CompineReducers from "./ruducers/CompineReducers";

const store = createStore(CompineReducers, applyMiddleware(thunk))


export default store;