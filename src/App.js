import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LanguageContext from './context/LanguageContext';
import { useState } from 'react';
import Mylevel4 from './Mylevel4';
import SimpleReactFileUpload from './FileUpload';
import {
  BrowserRouter as Router, Route,Routes,Link, useRoutes,  } from 'react-router-dom';
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
import  {AllPages} from './MyRoute';
  

function App() {

  const[lan,setlan] =useState("en");

  const MyHocHome = MyHoc(MyHome);

  const MyHocAbout = MyHoc(MyAbout);

  const MyHocContact = MyHoc(Contact);

 
  const dd = useRoutes(AllPages())



  

  return (
    <div className="App">

      {/* <LanguageContext.Provider value={{lan,setlan}}>

        <Header/>
        <Mylevel4/>
        <SimpleReactFileUpload/>
        

   

      </LanguageContext.Provider> */}

    


      


    

       

        {/* <Routes>

        <Route path='/' element={ <MyHocHome/> }></Route>
        <Route path='/myabout' element={<MyHocAbout/>}></Route>
        <Route path='/contact' element={<MyHocContact/>}></Route>
        <Route path='/login' element={<WelLogin/>}></Route>
       

        </Routes> */}

        {dd}
        
      
     



 
     
     
 
    </div>
  );
}

export default App;
