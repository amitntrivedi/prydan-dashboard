import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./combineReducers";

const middleware = [thunk, createLogger({ collapsed: true, duration: true })];

const store= createStore(reducers, applyMiddleware(...middleware));
export default  store; 