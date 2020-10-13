import * as actionType from '../actions/actions';
const initialState = {
    cart: 0,
    cartItems: [],
  };

const items = [];

const reducer=(state=initialState,action)=>{
      switch(action.type){
        case actionType.CART_NUMBER:
            return {
              ...state,
              cart: state.cart + 1,
            };
        case actionType.CART_NUMBER_MINUS:
            return {
              ...state,
              cart: state.cart - 1,
            };
        case actionType.CART_ITEM:
            for (let key of action.payload) {
              items.push(key);
            }
            return {
              ...state,
              cartItems: items,
            };
        case actionType.DELETE_CART_ITEM:
            items.splice(action.index, 1);
            let newItems = [...items];
            return {
              ...state,
              cartItems: newItems,
            };
        default:
                return state;
      }
  }

  export default reducer;