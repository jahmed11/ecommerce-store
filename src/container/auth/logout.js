import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state = {};
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}
const mapDispatchProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionCreators.logOut()),
    loggedOut: () => dispatch(actionCreators.loggedOut()),
  };
};
export default connect(null, mapDispatchProps)(Logout);
