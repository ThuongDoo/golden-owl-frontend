import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        if (state.products[existingProductIndex].quantity > 0) {
          state.products[existingProductIndex].quantity -= 1;
        }
        if (state.products[existingProductIndex].quantity === 0) {
          state.products.splice(existingProductIndex, 1);
        }
      }
    },
    removeProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.products.splice(existingProductIndex, 1);
      }
    },
    resetBasket: (state) => {
      state.products = [];
    },
  },
});

export const {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  resetBasket,
} = basketSlice.actions;
export const selectProductById = (state, id) =>
  state.basket.products.filter((product) => product.id === id);
export const selectBasketTotal = (state) =>
  state.basket.products.reduce(
    (total, product) => (total += product.price * product.quantity),
    0
  );
// export const selectBasketQuantity = (state) =>
//   state.basket.products.reduce((quantity, item) => (quantity += item.quantity), 0);
export const selectBasket = (state) => state.basket.products;
export default basketSlice.reducer;
