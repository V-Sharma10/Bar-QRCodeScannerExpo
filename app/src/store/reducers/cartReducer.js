import * as actionTypes from "../actions/type.js";

const initialState = {
  cart: {},
  counter: 0,
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      // debugger;
      const k1 = state.counter + 1;
      let c = { ...state.cart };
      let currentItem = c[action.item["itemId"]];
      if (currentItem) {
        let total = state.totalPrice + action.item["price"];

        c[action.item["itemId"]].quantity += 1;
        return {
          ...state,
          cart: c,
          counter: k1,
          totalPrice: total
        };
      } else {
        let ob = { ...action.item, quantity: 1 };

        let total = state.totalPrice + ob.price;
        let yr = action.item["itemId"];
        c[yr] = ob;
        console.log(c);
        return {
          ...state,
          cart: c,
          counter: k1,
          totalPrice: total
        };
      }
    case actionTypes.DELETE_ITEM:
      if (state.cart[action.itemId] !== undefined) {
        let c = { ...state.cart };
        let total = state.totalPrice - c[action.itemId].price;

        const k1 = state.counter - 1;
        if (c[action.itemId].quantity > 1) {
          c[action.itemId].quantity -= 1;

          return {
            ...state,
            cart: c,
            counter: k1,
            totalPrice: total
          };
        } else {
          c[action.itemId] = undefined;
          return {
            ...state,
            cart: c,
            counter: k1,
            totalPrice: total
          };
        }
      } else return state;

    case actionTypes.CLEAR_CART:
      let b = {};
      return {
        ...state,

        cart: b,
        counter: 0,
        totalPrice: 0
      };
    default:
      return state;
  }
};
export default cartReducer;
