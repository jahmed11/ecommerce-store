import * as actionTypes from "./actions";

export const cartNumberAdder = () => {
  return {
    type: actionTypes.CART_NUMBER,
  };
};

export const cartNumberSubtractor = () => {
  return {
    type: actionTypes.CART_NUMBER_MINUS,
  };
};

export const cartItem = (filteredProduct) => {
  return {
    type: actionTypes.CART_ITEM,
    payload:filteredProduct,
  };
};
export const deleteCartItem = (index) => {
  return {
    type: actionTypes.DELETE_CART_ITEM,
    index: index,
  };
};
