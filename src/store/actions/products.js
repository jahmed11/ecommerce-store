import * as actionTypes from "./actions";
import axios from "axios";

export const setProducts = (products) => {
  return {
    type: actionTypes.ADD_PRODUCTS,
    product: products,
  };
};
export const getIdFromServer=(data)=>{
  return {
    type: actionTypes.PRODUCT_SELECTED,
    item: data,
  }
}
 // getting products from backend
export const addProducts = () => {
  return async (dispatch) => {
   await axios.get("https://junaidecommerce-app.herokuapp.com/ecommerce/items")
   .then((response)=>{
   
     dispatch(setProducts(response.data.items.products))
    })
   .catch(err=>console.log(err))
  };
};

// selected products from items, getting from backend
export const selectedProduct = (id) => {
  console.log(id,'id runing');
  localStorage.clear();
  localStorage.setItem('id',id);
  return async dispatch =>{
    try{
    const response =  await axios.get(`https://junaidecommerce-app.herokuapp.com/ecommerce/item/${id}`)
    dispatch(getIdFromServer(response.data))
   
    }catch(err){
     console.log(err);
    }
  }
   
};
export const addProduct = () => {
  return {
    type: actionTypes.ADD,
  };
};
export const substractProduct = () => {
  return {
    type: actionTypes.SUBTRACT,
  };
};
