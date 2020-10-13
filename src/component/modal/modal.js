import React from "react";
import "./modal.css";
const modal = (props) => {
  let classes = ["Mymodal", "MymodalClose"];
  if (props.show) {
    classes = ["Mymodal", "MymodalOpen"];
  }
  return (
    <div className={classes.join(" ")}>
      <button className="closeModal" onClick={props.clicked}>
        x
      </button>
      <h3>ADDED TO BAG</h3>
      <button className="btn btn-outline-secondary MymodalButtons" onClick={props.goToForms}>
        Checkout
      </button>
      <button className="btn btn-outline-secondary MymodalButtons" onClick={props.goBack}>
        Continue Shopping
      </button>
      <button className="btn btn-outline-secondary MymodalButtons" onClick={props.cartViewed}>
        View Cart
      </button>
    </div>
  );
};

export default modal;
