import { combineReducers } from "redux";
import { exchangeReducer } from "./exchange.reducer";

const reducers = combineReducers({
  exchangesState: exchangeReducer
});

export default reducers;
