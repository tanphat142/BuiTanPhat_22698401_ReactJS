import { combineReducers } from "redux";
import CounterRedux from "./CounterRedux";

const allReducers = combineReducers({
  CounterRedux, 
});

export default allReducers;