import { combineReducers } from "redux";
import addReducer from "./addReducer";


const rootReducer = combineReducers({
    Add: addReducer,
});
export default rootReducer;