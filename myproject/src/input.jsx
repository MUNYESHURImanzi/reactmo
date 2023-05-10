import React, { useState } from 'react';


function Input(props) {

   return (

    <div className="input">
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.place} required />
    </div>
  );
}

export default Input;
