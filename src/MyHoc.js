import React from "react";
import WelFooter from "./WelFooter";
import WelHeader from "./WelHeader";
import {
  BrowserRouter, Route,Routes,Link } from 'react-router-dom';
const MyHoc = (Component) => ({...props}) => (
    <div>
      
      <WelHeader/>


        <Link to="/">Home</Link>
        <Link to="/myabout">MyAbout</Link>
        <Link to="/contact">contact</Link>
        <Link to="/login">login</Link>


      <div>
        <Component {...props}/>

      
       
      </div>
      
      <WelFooter/>
    </div>
  );

export default MyHoc;