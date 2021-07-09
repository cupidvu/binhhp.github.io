import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducers from "./reduces/RootReducers";

const middleware = [thunk];

const store = createStore(
    RootReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;