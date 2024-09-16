import { createSlice } from "@reduxjs/toolkit";
//The following redux file allows the cart to add the store's items prices together, so that the user may see the total price.
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  //The initial amount for the store will be 0, and will increase depending on how many items the user wishes to add.
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    //If the items were to be removed, the prices will decrease once more, this includes a full page refresh.
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.totalAmount -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
