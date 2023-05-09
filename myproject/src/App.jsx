
import Input from './input.jsx'
import Button from './button.jsx'


import './App.css' 

function App(){

  return(
    <div className='body'>
    <h1>signup</h1>
    <p>please fill in this form to create an account</p>
    <div className='input'>
    <Input
         label="Email"
         type="email"
         place="email"
       
         />
         <Input
         label="Password"
         type="password"
         place="password"
         
       
         />
         <Input 
         label="re-password"
         type="password"
         place="re-password"
       
         
         />
         </div>
         <div className='button'>
          <div className='cancel'>
   <Button 
   text="cancel"
   />
   </div>
   <div className='signup'>
    <Button 
   text="signup"


   />
   </div>
</div>
    </div>
   )
}
export default App



