import React, { Component } from "react";
import Aux from '../auxiliary/auxiliary';
import { connect } from "react-redux";
import Navbar from "../../component/navbar/navbar";
import Sidebar from "../../component/sidebar/sidebar";
import * as actionCreators from '../../store/actions/auth';
class Layout extends Component {
  state = {
    sidebar: false,
  };
  sidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { sidebar: !prevState.sidebar };
    });
  };
  sidebarClosedHandler = () => {
    this.setState({ sidebar: false });
  };
  sidebarCloseHandler = () => {
    this.setState({ sidebar: false });
  };
  logoutHandler=()=>{
    this.props.logOut();
  }
  render() {
    return (
      <Aux>
        <Sidebar
          authenticated={this.props.loggedIn}
          sidebarClose={this.sidebarClosedHandler}
          toggleSidebar={this.sidebarToggleHandler}
          showSidebar={this.state.sidebar}
          loggedOut={this.logoutHandler}
          authenticated={this.props.loggedIn}
        />
        <Navbar
          loggedOut={this.logoutHandler}
          authenticated={this.props.loggedIn}
          onClick={this.sidebarCloseHandler}
        />
        <main  onClick={this.sidebarCloseHandler}>{this.props.children}</main>
      </Aux>
    );
  }
}
const mapStateProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
const mapDispatchProps=(dispatch)=>{
  return {
    logOut:()=>dispatch(actionCreators.authenticated())
  }
 
}
export default connect(mapStateProps,mapDispatchProps)(Layout);
