import React from "react";
import "./input.css";
const input = (props) => {
 let classes=['formInput']
  if(props.inValid && props.shouldValidate){
   classes=['formInput', 'Invalid']
  }
  return (
    <div className="inputGroup">
      <label className="formLabel">{props.elements.placeholder}</label>
      <input
        className={classes.join(' ')}
        {...props.elements}
        value={props.inputValue}
        onChange={props.changedInput}
      />
    </div>
  );
};
export default input;
