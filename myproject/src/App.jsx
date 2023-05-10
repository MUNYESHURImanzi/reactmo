import {useState} from "react";
import Input from './input.jsx'
import Button from './button.jsx'


import './App.css' 

function App() {
  
  const [data, setData] = useState('');
   

  function handemail(event){
      
      setData(event.target.value)
   
 
   
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    let  arr= [  ]
    
    console.log(data)
    arr.push(data)
    console.log(arr)
  
    localStorage.setItem('email', JSON.stringify(arr));
    localStorage.setItem('password', JSON.stringify(arr));
    localStorage.setItem('repassword', JSON.stringify(arr));
   
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit}  onChange={handemail}>
        <h1>signup</h1>
        <p>please fill in this form to create an account</p>
        <div className="input">
          <Input label="Email" type="email" place="email" />
          <Input label="Password" type="password" place="password" />
          <Input label="re-password" type="password" place="re-password" />
        </div>
        <div className="button">
          <div className="cancel">
            <Button text="cancel" />
          </div>
          <div className="signup">
            <Button text="signup" submit />
          </div>
        </div>
      </form>
    </div>
  );
}
export default App