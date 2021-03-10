import {combineReducers} from "redux";
import {flightsReducer} from "./flightsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  flights: flightsReducer
})