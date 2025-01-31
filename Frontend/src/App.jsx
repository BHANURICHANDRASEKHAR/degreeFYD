import React, { useContext, useEffect, useState } from 'react'
import Model from './Components/Login/Model'
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import PLashScreenComponent from './Components/splah-screen/Main'
import 'aos/dist/aos.css';
import { UserContext } from './Components/Context/Context';
import AssignMentUi from './Components/AssignmentUI/Main'
export default function App(){
  const [PlashScreen,SetPlashscreen] =useState(true);
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
    });
    setTimeout(() => {
      SetPlashscreen(false);
    },3800);
   
  }, []);
  if(PlashScreen)
  {
    return <PLashScreenComponent />
  }
  const {user}=useContext(UserContext)
  return(
 <React.Fragment>
  {
    user? <AssignMentUi/>:<Model />  
  }
  <ToastContainer position='top-center'/>
</React.Fragment>
  )
}
export const ApiLink='https://affworld-tdwb.onrender.com'
// http://localhost:5000,https://affworld-tdwb.onrender.com