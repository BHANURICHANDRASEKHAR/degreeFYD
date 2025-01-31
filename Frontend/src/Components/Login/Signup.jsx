import React,{useContext, useState} from 'react'
import Input from './Input'
import signup from './Submit.js'
import SearchSelect from './StateSelector.jsx'
import { UserContext } from '../Context/Context.jsx'
function Signup({changeAuthMode}) {
    const [loading,setloading]=useState(false)
    const {SetShow} =useContext(UserContext);
   const initistate={
    firstname:'',
    lastname:'',
    email:'',
    phonenumber:'',
    password:'',
    state:'',
    confirmPassword:'',
    
   }
   const [data,setdata]=useState(initistate)
   function onHandler(e)
   {
   
    setdata({...data,[e.target.name]:e.target.value})
   }
 
   return (
     <div className="Auth-form-container">
         <div className="Auth-form-content">
           <h3 className="Auth-form-title">Sign Up</h3>
           <div className="text-center">
             Already registered?{" "}
             <span className="link-primary" onClick={changeAuthMode}>
               Sign In
             </span>
           </div>
           <Input lable='First Name' placeholder='e.g Abc' type='text' handler={onHandler} value={data.firstname} name='firstname'/>
           <Input lable='Last Name' placeholder='Surname' type='text' handler={onHandler} value={data.firstname} name='lastname'/>
           <Input lable='Email Address' placeholder='e.g Abc.com' type='email' handler={onHandler} value={data.email} name='email'/>
           <SearchSelect Statedata={setdata}/>
           <Input lable='Password' placeholder='Password' type='password' handler={onHandler} value={data.password} name='password'/>
           <Input lable='Confirm Password' placeholder='Password' type='password' handler={onHandler} value={data.confirmPassword} name='confirmPassword'/>
           <div className="d-grid gap-2 mt-3">
             <button type="submit" className="btn btn-primary" disabled={loading} onClick={()=>signup(data,setloading,changeAuthMode,SetShow)}>
             {loading ? '...Loading' : 'Submit'}
             </button>
           </div>
         </div>
       
     </div>
   )
 }

 export default React.memo(Signup)