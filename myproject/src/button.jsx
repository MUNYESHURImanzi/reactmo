


import React  from 'react';


function Button(props) {
  return (
    <button onClick={props.onClick} type={props.submit ? 'submit' : 'button'}>
      {props.text}
    </button>
  );
}
export default Button

