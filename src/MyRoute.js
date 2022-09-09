import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LanguageContext from './context/LanguageContext';
import { useState } from 'react';
import Mylevel4 from './Mylevel4';
import SimpleReactFileUpload from './FileUpload';
import {
  BrowserRouter, Route,Routes,Link, useRoutes, Router } from 'react-router-dom';
import Home from './Home';
import MyAbout from './MyAbout';
import MyHome from './MyHome';
import Contact from './Contact';
import Container from './Container';
import MyPage from './MyPage';
import WelHeader from './WelHeader';
import WelFooter from './WelFooter';
import WelLogin from './WelLogin';
import MyHoc from './MyHoc';


const MyHocHome = MyHoc(MyHome);

  const MyHocAbout = MyHoc(MyAbout);

  const MyHocContact = MyHoc(Contact);
export const AllPages = () => {
 

 

    let  routes = [
        {
          path: "/",
          element: <MyHocHome/>  
        },
        {
          path: "/myabout",
          element: <MyHocAbout /> 
        },
        {
          path: "/contact",
          element: <MyHocContact />
        },
        {
          path: "/login",
          element: <WelLogin />
        }
    
    
      ]
  
    return routes;
         
  
  }
  
  