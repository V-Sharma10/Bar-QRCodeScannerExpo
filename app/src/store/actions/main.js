import * as actionTypes from "./type.js";
export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    item: item
  };
};
export const deleteItem = item => {
  return {
    type: actionTypes.DELETE_ITEM,
    itemId: item
  };
};
export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  };
};
