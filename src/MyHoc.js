import React from "react";
import WelFooter from "./WelFooter";
import CustComLink from "./CustComLink";
import WelHeader from "./WelHeader";
import {
  BrowserRouter, Route,Routes,Link,NavLink } from 'react-router-dom';
const MyHoc = (Component) => ({...props}) => (
    <div>
      
      <WelHeader/>


        <Link to="/">Home</Link>
        <Link to="/myabout">MyAbout</Link>
        <Link to="/contact">contact</Link>
        <Link to="/login">login</Link>
        <Link to="/invoices">Invoice</Link>

        <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#fff',
                    background: '#7600dc',
                  }
                : { color: '#545e6f', background: 'red' }
            }
          >ContactTest
            </NavLink>
            

            <CustComLink to='/contact'>Contact</CustComLink>
          
      <div>
        <Component {...props}/>

      
       
      </div>
      
      <WelFooter/>
    </div>
  );

export default MyHoc;