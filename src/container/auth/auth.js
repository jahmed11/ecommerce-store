import React, { Component } from "react";
import Input from "../../component/input/input";
import "./auth.css";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as actionCreators from "../../store/actions/auth";
import styled from "styled-components";
const CreateAccountButton = styled.button`
  background-color: white;
  color: blue;
  border: none;
  :focus {
    outline: none;
  }
`;
const StyledP = styled.p`
  margin-top: 10px;
`;
class Auth extends Component {
  state = {
    isSignUp: true,
    controls: {
      email: {
        type: "input",
        elements: {
          type: "email",
          placeholder: "email",
        },
        value: "",
        validation: {
          test: true,
        },
        valid: false,
        touched:false,
      },
      password: {
        type: "input",
        elements: {
          type: "password",
          placeholder: "password",
        },
        value: "",
        validation: {
          test: true,
          minLength: 6,
        },
        valid: false,
        touched:false,
      },
    },
  };
  validation = (value, validity) => {
    let isValid = true;
    if (validity.test) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validity.minLength) {
      isValid = value.length >= validity.minLength && isValid;
    }
    if (validity.maxLength) {
      isValid = value.length <= validity.maxLength && isValid;
    }
    return isValid;
  };
  changeHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        touched:true,
        valid: this.validation(
          event.target.value,
          this.state.controls[controlName].validation
        ),
      },
    };

    this.setState({
      controls: updatedControls,
    });
  };
  swicthAuthHandler = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        isSignUp: !prevState.isSignUp,
      };
    });
  };
  submitHandler = (event, email, password) => {
    event.preventDefault();
    console.log(email, password);

      this.props.onAuthSuccess(email, password);
      this.props.isAuthenticated();
  
  
  };
  render() {
    let redirect = null;
    if (this.props.loggedIn) {
      redirect = <Redirect to="/" />;
    }
    let contact = [];
    for (let key in this.state.controls) {
      contact.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    const form = contact.map((item) => {
      return (
        <Input
          key={item.id}
          name={item.id}
          elements={item.config.elements}
          inputValue={item.config.value}
          changedInput={(event) => this.changeHandler(event, item.id)}
          inValid={!item.config.valid}
          shouldValidate={item.config.touched}
        />
      );
    });

    return (
      <div className="auth">
        {redirect}
        <h1 className="signIn-title">Sign In</h1>
        <form
          onSubmit={(event) =>
            this.submitHandler(
              event,
              this.state.controls.email.value,
              this.state.controls.password.value
            )
          }
        >
          {form}
          <button className="btn-submit">Submit</button>
        </form>
        <StyledP>If you dont have account</StyledP>
        <Link to="/signup">
          <CreateAccountButton>Create new account</CreateAccountButton>
        </Link>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    onAuthSuccess: (email, password) =>dispatch(actionCreators.logIn(email, password)),
    onSignUp: (email, password) =>dispatch(actionCreators.signUp(email, password)),
    onSignOut: () => dispatch(actionCreators.logOut()),
    isAuthenticated: () => dispatch(actionCreators.authenticated()),
  };
};
export default connect(mapStateProps, mapDispatchProps)(Auth);
