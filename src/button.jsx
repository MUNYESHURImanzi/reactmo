import { useState } from "react";


function Button(props) {
    const [color,setData]=useState('')
    function colors(event) {
     setData(props.event.link)
    
     window.location.href=setData
        
    }
    return (
      <button onClick={colors}>{props.text}</button>

    );
  }
  
  export default Button;