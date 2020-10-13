import React from "react";
import "./navigation.css";
import NavigationItem from "./navigationItem/navigationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const navigation = (props) => {
  return (
    <nav className="_routes">
      <NavigationItem exact={true} link="/">
        Home
      </NavigationItem>
      <NavigationItem link="/productDisplay">Men</NavigationItem>
      <NavigationItem link="/women">Women</NavigationItem>
      <NavigationItem className="cartLink" link="/shoppingCart">
        <p className="cartNumber">{props.cart}</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </NavigationItem>
    {props.authenticated?<button className="btn btn-warning" onClick={props.logout}>LOG OUT</button> :<NavigationItem exact={true} link="/signIn">
          Sign In
      </NavigationItem>}
       
    </nav>
  );
};
const mapStateProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};
export default connect(mapStateProps)(navigation);

/* */
