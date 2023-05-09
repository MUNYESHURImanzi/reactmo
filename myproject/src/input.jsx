import React, { useState } from 'react';


function Input(props) {

    const [data, setData] = useState("");
   

    function handemail(event){
        
        setData(event.target.value)
     
    }
   return (

    <div className="input">
      <label>{props.label} {data}</label>
      <input type={props.type} placeholder={props.place} onChange={handemail}  />
    </div>
  );
}

export default Input;
