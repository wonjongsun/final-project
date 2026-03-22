import { createSlice, configureStore } from "@reduxjs/toolkit";

let user = createSlice({
  name: "userss",
  initialState: "kim",
});

let cart = createSlice({
  name: "cartss",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 }
  ],
  reducers: {
    addCount(state,action) {
      let cartId = state.findIndex((a) => {
        return a.id === action.payload;
      })
      state[cartId].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    }
  },
})

export default configureStore({
  reducer: {
    users: user.reducer,
    carts: cart.reducer
  },
});

export let { addCount, addItem } = cart.actions;