import { createSlice } from "@reduxjs/toolkit";


//cartRedux

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {

    //Reducer addProduct
    addProduct: (state, action) => {
      if (!state.products.some((product) => product._id === action.payload._id)) {
        state.products.push(action.payload)
        state.quantity += 1
      } else {
        state.products = state.products.map(item => item._id === action.payload._id ? { ...item, quantity: action.payload.quantity } : item)
      };

      state.total = state.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
        0
      );
    },

    //Reducer deleteProduct
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter((item) => item._id !== action.payload);

      state.total = state.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
        0
      );
    },

    //Reducer resetCart
    resetCart: (state, action) => {
      state.quantity = 0;
      state.total = 0;
      state.products = [];
    },
  },
});

export const { addProduct, deleteProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;