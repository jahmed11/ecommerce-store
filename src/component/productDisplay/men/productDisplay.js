import React, { Component } from "react";
import "./displayProducts.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/products";
import { withRouter } from "react-router-dom";


class MenProducts extends Component {
 
  clickedHandler = (id) => {
    this.props.onClicked(id);

    this.props.history.push("/men/" + id);
  };
  render() {
    const men = this.props.products.filter((items) => {
      return items.type === "male";
    });
    const showProducts = men.map((item) => {
      return (
        <div className="product" key={item.id}>
          <img onClick={() => this.clickedHandler(item.id)} className="_productImage" src={`/products-images/${item.sku}.jpg`} alt="t-shirts" />
          <h3>{item.title}</h3>
          <h3>${item.price}</h3>
        </div>
      );
    });
    return <div className="grid">{showProducts}</div>;
  }
}

const mapStateProps = (state) => {
  return {
    products: state.product.products,
   
  };
};

const mapDispatchProps = (dispatch) => {
  return {

    onClicked: (id) => dispatch(actions.selectedProduct(id)),
  };
};

export default connect(
  mapStateProps,
  mapDispatchProps
)(withRouter(MenProducts));
