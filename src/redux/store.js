import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

//The store.js will contain the saved information for the user's name and bought products.
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
export default store;
