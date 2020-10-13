import React from "react";
import "./navigationItem.css";
import { NavLink } from "react-router-dom";
const navigationItem = (props) => {
  return (
    <NavLink className="_routerItems" to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  );
};
export default navigationItem;
