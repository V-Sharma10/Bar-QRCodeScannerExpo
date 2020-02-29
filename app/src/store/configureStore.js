import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
const rootReducer = combineReducers({
  cart: cartReducer
});
const configureStore = () => {
  console.log("store");
  return createStore(rootReducer);
};

export default configureStore;
