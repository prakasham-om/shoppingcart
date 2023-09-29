import { combineReducers } from "redux";
import api_reducer from "./api_reducer";

const rootReducer=combineReducers({
    api_data:api_reducer,
})


export default rootReducer;