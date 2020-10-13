import React, { Component } from "react";
import Input from "../../component/input/input";
import {Redirect} from 'react-router-dom';

class Signup extends Component {
  state = {isSignUp: true,
    controls: {
      name:{
        type:'input',
        elements:{
          type:'text',
          placeholder:'name',
        },
        value:'',
        validation:{
          test:true,
        },
        valid:false,
        touched:false,
      },
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
submitHandler=(event,name,email,password)=>{
event.preventDefault();
}
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
    return (   <div className="auth">
    {redirect}
    <h1 className="signIn-title">Sign Up</h1>
    <form
      onSubmit={(event) =>
        this.submitHandler(
          event,
          this.state.controls.name.value,
          this.state.controls.email.value,
          this.state.controls.password.value
        )
      }
    >
      {form}
      <button className="btn-submit">Submit</button>
    </form>
     </div>
     );
  }
}
 
export default Signup;