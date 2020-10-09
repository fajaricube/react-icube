import { createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";
import cartReducer from "./reducers/cart";

const reducers = combineReducers({
  cart: cartReducer,
});

// const middlewares = applyMiddleware(thunk);

const stores = createStore(
  reducers,
  undefined,
);

export default stores;
