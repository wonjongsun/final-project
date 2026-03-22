import { createSlice, configureStore } from "@reduxjs/toolkit";

let user = createSlice({
  name: "userss",
  initialState: "kim",
});

let cart = createSlice({
  name: "cartss",
  initialState: [
    // { id: 0, name: "White and Black", count: 2 },
    // { id: 2, name: "Grey Yordan", count: 1 }
  ],
  reducers: {
    addCount(state,action) {
      let cartId = state.findIndex((a) => {
        return a.id === action.payload;
      })
      state[cartId].count++;
    },
    removeCount(state, action) {
      let cartId = state.findIndex((a) => {
        return a.id === action.payload;
      })

      if(state[cartId].count > 1) {
        state[cartId].count--;
      }
    },
    addItem(state, action) {
      let index = state.findIndex((a) => {
        return a.id === action.payload.id;
      })
      if(index !== -1) {
        state[index].count++;
      } else {  
        state.push(action.payload);
      }
    },
    removeItem(state, action) {
      let cartId = state.findIndex((a) => {
        return a.id === action.payload;
      })
      if(cartId !== -1) {
        state.splice(cartId,1);
      }
    },
  },
})

export default configureStore({
  reducer: {
    users: user.reducer,
    carts: cart.reducer
  },
});

export let { addCount, removeCount, addItem, removeItem } = cart.actions;