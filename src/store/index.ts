import { createStore, applyMiddleware} from 'redux';
import reducers from './allReducers';
import thunk from "redux-thunk";
// 引入日志
import logger from "redux-logger";

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;