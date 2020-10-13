import React, { Component } from "react";
import Input from "../../component/input/input";
import "./forms.css";
import axios from "axios";
class Forms extends Component {
  state = {
    controls: {
      firstName: {
        inputType: "input",
        elements: {
          placeholder: "first name",
          type: "text",
        },
        value: "",
        validation: {
          test: true,
        },
        valid: false,
        touched:false,
      },
      LastName: {
        inputType: "input",
        elements: {
          placeholder: "last name",
          type: "text",
        },
        value: "",
        validation: {
          test: true,
        },
        valid: false,
        touched:false,
      },
      email: {
        inputType: "input",
        elements: {
          placeholder: "email",
          type: "email",
        },
        value: "",
        validation: {
          test: true,
        },
        valid: false,
        touched:false,
      },
      city: {
        inputType: "input",
        elements: {
          placeholder: "city",
          type: "input",
        },
        value: "",
        validation: {
          test: true,
        },
        valid: false,
        touched:false,
      },
      mobile: {
        inputType: "input",
        elements: {
          placeholder: "mobile number",
          type: "input",
        },
        value: "",
        validation: {
          test: true,
          minLength: 11,
          maxLength: 11,
        },
        valid: false,
        touched:false,
      },
      address:{
        inputType:'input',
        elements:{
          placeholder:'address',
          type:'input',
        },
        value:'',
        validation:{
          test:true,
        },
        valid:false,
        touched:false,
      }
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
  changeHandler = (event, formId) => {
    const updatedForms = { ...this.state.controls };
    const updatedElement = updatedForms[formId];
    updatedElement.value = event.target.value;
    updatedElement.valid = this.validation(
      updatedElement.value,
      updatedElement.validation
    );
    updatedElement.touched=true;
    console.log(updatedElement);
    this.setState({ controls: updatedForms });
  };
  formSubmitHandler = (event) => {
    event.preventDefault();
    const customerInfo = {};
    for (let key in this.state.controls) {
      customerInfo[key] = this.state.controls[key].value;
    }
    axios
      .post(
        "https://e-commerce-830d5.firebaseio.com/customerInfo.json",
        customerInfo
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  render() {
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
      <form onSubmit={this.formSubmitHandler} className="forms">
        {form}
        <br />
        <button className="btn-form">Order</button>
      </form>
    );
  }
}

export default Forms;
