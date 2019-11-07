import { createStore , Store, applyMiddleware} from 'redux';
import { combineReducers } from "redux";
import reducers from './reducers/index';
import thunk from "redux-thunk";
// 引入日志
import logger from "redux-logger";

let store = createStore(reducers);

export default store;