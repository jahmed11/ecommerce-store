import * as actionType from '../actions/actions';

const initialState = {
    products: [],
    filterProducts: [],
  };

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionType.ADD_PRODUCTS:
            return {
              ...state,
              products: [...action.product],
            };
        case actionType.PRODUCT_SELECTED:
            return {
              ...state,
              filterProducts: action.item,
            };
        default:
            return state;
    }
}

export default reducer;