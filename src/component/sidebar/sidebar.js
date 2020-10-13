import React from "react";

import Navigation from "../navigation/navigation";
import "./sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
/*const StyledButton = styled.button`
  z-index: 300;
  background-color: white;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  margin: 5px;
  border: none;
`;*/
const sidebar = (props) => {
  let classes = ["navItems", "closedSidebar"];
  let style = ["buttonToggle"];
  if (props.showSidebar) {
    classes = ["navItems", "openSidebar"];
    style = ["buttonToggle", "toggleNone"];
  }
  return (
    <div className="sidebar">
      <div className="styles">
        <button className={style.join(" ")} onClick={props.toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <nav className={classes.join(" ")}>
        <Navigation logout={props.loggedOut} authenticated={props.authenticated} />
      </nav>
    </div>
  );
};

export default sidebar;
/*<ul className="sidebaritem">
<NavigationItem link="/">Men</NavigationItem>
<NavigationItem link="/women">Women</NavigationItem>
</ul>*/
