import React, { useState,useEffect } from 'react'
import getToken from './getToken.js';
export const UserContext=React.createContext();
export default function Context({children}) {
    const [user, setUser] = useState(null)
    const [flag,setFlag] = useState(false)
    const [SearchResults, SetSearchResults] = useState(null)
    const [show,SetShow]=useState(false)
    useEffect(()=>{
    const token=getToken();
    setUser(token);
    if(!token)
    {
      SetShow(true)
    }
  },[flag,show])
  console.log(user)

    return (
      <UserContext.Provider value={{ user,setUser,show,SetShow,flag,setFlag,SearchResults, SetSearchResults}}>
        {children}
      </UserContext.Provider>
    )
  }
  
