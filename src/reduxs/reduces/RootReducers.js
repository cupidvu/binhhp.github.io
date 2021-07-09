import { combineReducers } from "redux";
import { EmailReducers } from "./EmailReducers";

const RootReducers = combineReducers({
    email: EmailReducers
});

export default RootReducers;