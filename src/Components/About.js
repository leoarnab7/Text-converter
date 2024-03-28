import React, { useState } from "react";
import './About.css';
import Profile from "./Profile";


export default function About() {
  const [myStyle,setMyStyle]=useState({
    color:'black',
    backgroundcolor:'white'

  })
  const[btnText,setBtnText]=useState("enable dark mode")
  const toggleStyle=()=>{
    if(myStyle.color==='black'){
      setMyStyle({
        color:'white',
        backgroundcolor:'black',
        border:'1px solid white'
      })
      setBtnText("Enable light mode")
    }else{
      setMyStyle({
        color:'black',
        backgroundcolor:'white'
      })
      setBtnText("Enable dark mode");
    }
  }
  return (
    <div className="container">
   
      <h2 class=" .bold-and-beautiful {
  font-weight: bold;
  font-size: 22px; 
  color: #333; 
  
} display-4  my-6 mx-2 ">About Us</h2>

      <div className="container" style={myStyle}>
      <div className="row">
        <div className=" col-md-3 ">
          <div className="card my-4 mx-5 " >
            <div className="card-body">
              <p className="bold-and-beautiful">Welcome to our website! This site is dedicated to converting lowercase letters into uppercase and uppercase letters into lowercase.</p>
            
            </div>
          </div>
        </div>
        <div className="col-md-6">
          
            <div className="card-body " >
              <Profile/>
              
          </div>
          
        </div>
      </div>
    </div>
   </div>
  );
}
