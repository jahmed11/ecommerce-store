import React from "react";
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";
import "./navbar.css";
const navbar = (props) => {
  return (
    <header className="wrapper">
      <div className="_routerNav">
        <div className="_nav">
        <div className="_logo">
          <Logo />
        </div>
        <div className="showNav">
          <Navigation logout={props.loggedOut} authenticated={props.authenticated} />
        </div>
        </div>
       
      </div>
    </header>
  );
};

export default navbar;
