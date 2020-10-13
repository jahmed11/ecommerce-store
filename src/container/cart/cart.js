import React, { Component } from "react";
import "./cart.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import * as actionCreaters from "../../store/actions/cart";

class Cart extends Component {

  itemDeleteHandler = (id) => {
    this.props.onCartItemDelete(id);
    this.props.cartNumberHandler();
  };
  checkoutHandler=()=>{
    this.props.history.push('/forms');
  }
  render() {
    //showing selected items in the cart
    let showCartItem = this.props.cartItems.map((item, index) => {
      return (
        <tr className="eachItem" key={item.id}>
          <td className="all ItemTilte">{item.title}</td>
          <td className="all ItemPrice">${item.price}</td>
          <td>
            <FontAwesomeIcon
              onClick={() => this.itemDeleteHandler(index)}
              className="deleteProduct"
              icon={faTrash}
            />
          </td>
        </tr>
      );
    });
    //total price of items
    let tableDescription = null;
    let totalPrice=null;
    if (this.props.cartItems.length > 0) {
      tableDescription = (
        <tr className="headings">
          <th>Items</th>
          <th>Price</th>
          <th></th>
        </tr>
      );
      totalPrice = this.props.cartItems
        .map((price) => price.price)
        .reduce((acc, value) => acc + value);
     
    }
 

    return (
      <div className="cart">
        <div>
        <h2 className="cartTitle">Bag</h2>
        <table className="cartTable">
          {tableDescription}
          {showCartItem.length!==0?showCartItem:<tbody><tr><td>No Items</td></tr></tbody>}
        </table>
        </div>
        
       
        <div className="checkout">
          <h5 className="summary">Summary</h5>
          <table>
            <tbody>
            <tr>
              <td className="pricesName">Price</td>
              <td className="prices">${totalPrice}</td>
            </tr>
            <tr>
              <td className="pricesName">Taxes</td> 
              <td className="prices">${(totalPrice*0.12).toFixed(2)}</td>
            </tr>
            <tr className="trTotal">
              <td className="pricesName">Total</td>
              <td className="prices">${(totalPrice+totalPrice*0.12).toFixed(2)}</td>
            </tr>
            </tbody>
          </table>
          <button disabled={this.props.cartItems.length===0} onClick={this.checkoutHandler} className="btn btn-outline-dark checkoutB">Checkout</button>
        </div>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    onCartItemDelete: (id) => dispatch(actionCreaters.deleteCartItem(id)),
    cartNumberHandler: () => dispatch(actionCreaters.cartNumberSubtractor()),
  };
};
export default connect(mapStateProps, mapDispatchProps)(Cart);
