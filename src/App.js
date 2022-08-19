import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LanguageContext from './context/LanguageContext';
import { useState } from 'react';
import Mylevel4 from './Mylevel4';
import SimpleReactFileUpload from './FileUpload';
import {
  BrowserRouter, Route,Routes,Link } from 'react-router-dom';
import Home from './Home';
import MyAbout from './MyAbout';
import MyHome from './MyHome';
import Contact from './Contact';
import Container from './Container';
import MyPage from './MyPage';

function App() {

  const[lan,setlan] =useState("en");
  

  return (
    <div className="App">

      {/* <LanguageContext.Provider value={{lan,setlan}}>

        <Header/>
        <Mylevel4/>
        <SimpleReactFileUpload/>
        

   

      </LanguageContext.Provider> */}


      <BrowserRouter>

      <MyPage></MyPage>

        <Link to="/">Home</Link>
        <Link to="/myabout">MyAbout</Link>
        <Link to="/contact">contact</Link>

        <Routes>

        <Route path='/' element={<Container>  <MyHome/> </Container> }></Route>
        <Route path='/myabout' element={<MyAbout/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
       

        </Routes>




      </BrowserRouter>



 
     
     
 
    </div>
  );
}

export default App;
