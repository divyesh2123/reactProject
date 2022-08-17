import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LanguageContext from './context/LanguageContext';
import { useState } from 'react';
import Mylevel4 from './Mylevel4';
import SimpleReactFileUpload from './FileUpload';

function App() {

  const[lan,setlan] =useState("en");
  

  return (
    <div className="App">

      <LanguageContext.Provider value={{lan,setlan}}>

        <Header/>
        <Mylevel4/>
        <SimpleReactFileUpload/>
        

   

      </LanguageContext.Provider>

 
     
     
 
    </div>
  );
}

export default App;
