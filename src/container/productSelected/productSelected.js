import React, { Component } from "react";
import "./productSelected.css";
import * as actions from "../../store/actions/products";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/cart";
import Modal from "../../component/modal/modal";

class ProductSelected extends Component {
  state = {
    showModal: false,

  };
  
  purchaseHandler = () => {
    this.props.history.push("/forms");
  };
  addCarthandler = () => {
    this.props.onAddCart();
    this.setState({
      showModal: true,
    });
    this.props.onaddingItem(this.props.filteredProduct);
  };
  modalCloseHandler = () => {
    this.setState({
      showModal: false,
    });
  };
  cartViewedHandler = () => {
    this.props.history.push("/shoppingCart");
  };
  checkouthandler = () => {
    this.props.history.push("/forms");
  };
  goBackHandler = () => {
    this.props.history.goBack();
  };
  modal = () => {
    if (this.state.showModal) {
      this.setState({ showModal: false });
    }
  };
  render() {
    let showModal = null;
    if (this.state.showModal) {
      showModal = (
        <Modal
          cartViewed={this.cartViewedHandler}
          clicked={this.modalCloseHandler}
          show={this.state.showModal}
          goToForms={this.checkouthandler}
          goBack={this.goBackHandler}
          modalClosed={this.modal}
        />
      );
    }
    let show=null;
    
     show = this.props.filteredProduct.map((item) => {
        let sizes = null;
        sizes = item.availableSizes.map((size) => {
          return (
            <div key={size}>
              <input type="radio" value={size} name="size" />
              <label>{size}</label>
            </div>
          );
        });
        return (
          <div className="productSelected" key={item.id}>
            <img
              className="productImage"
              src={`/products-images/${item.sku}.jpg`}
              alt="t-shirts"
            />
            <div className="description">
              <h5>{item.title}</h5>
              <div className="itemSize">sizes: {sizes}</div>
              <h5>${item.price}</h5>
            </div>
          </div>
        );
      });
    
    
    return (
      <div
        onClick={this.modaljso}
        style={{ margin: "84px auto 20px auto", textAlign: "center" }}
      >
        {showModal}
        {show}
      
        <button className="btn btn-outline-dark m-2" onClick={this.addCarthandler}>
          Add to cart
        </button>
        <button className="btn btn-outline-dark m-2" onClick={this.purchaseHandler}>
          BUY NOW
        </button>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    filteredProduct: state.product.filterProducts,
  };
};
const mapDispatchProps = (dispatch) => {
  return {

    onAdd: () => dispatch(actions.addProduct()),
    onSubstract: () => dispatch(actions.substractProduct()),
    onAddCart: () => dispatch(actionCreater.cartNumberAdder()),
    onaddingItem: (filteredProduct) => dispatch(actionCreater.cartItem(filteredProduct)),
  };
};

export default connect(mapStateProps, mapDispatchProps)(ProductSelected);



/*  <div className="buttons">
          <button
            disabled={this.props.counter === 1}
            onClick={this.props.onSubstract}
            className="btn btn-outline-dark"
          >
            -
          </button>
          <p>{this.props.counter}</p>
          <button onClick={this.props.onAdd} className="btn btn-outline-dark">
            +
          </button>
        </div>*/