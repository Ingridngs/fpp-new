import React from 'react';
import jwt_decode from "jwt-decode";
import { useEffect, useState  } from "react";
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import Home from '../pages/Home';

export const Login = () => {
    const [ user, setUser ] = useState({});

    function handleCallbackResponse(response){
 
      var userObject = jwt_decode(response.credential);
           console.log(userObject);
           setUser(userObject);
         
           
           document.getElementById("signInDiv").hidden = true;
        
    }

    function handleSignOut(event){
        setUser( {} );
        document.getElementById("singInDiv").hidden = false;
    }

    useEffect( () => {
      /* global google */
       google.accounts.id.initialize({
         client_id:"168280167576-0nq7ek24f2h35jjep90lp8fpnm8edous.apps.googleusercontent.com",
         callback: handleCallbackResponse
       })
       google.accounts.id.renderButton(
         document.getElementById("signInDiv"),
         { theme: "outline", size:"large"}
       );
      
    },[ ]) ;
  return (
      <div>
        <div  id="signInDiv"></div>
        
        {
        Object.keys(user).length !==   0 &&
            <button  onClick={ (e) => handleSignOut(e)}> Sign Out </button>
        }
        {
            user.email === "ingridngs87@gmail.com" ?
              <Link to="/">
                <Home/>
              </Link>
            : null
        }

        {
        user  ?
   
            <div>
                <img src={user.picture} alt="" />
                <h3>{user.name}</h3>
            </div>
            :  null
        
        }
    </div>
  )
}
