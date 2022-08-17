import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Counter from './Counter';
import MyState from './MyState';
import MyStateData from './MyStateData';
import MyTest from './MyTest';
import MyAPI from './MyAPI';
import User from './User';
import UserData from './UserData';
import UserPlaceHolder from './UserPlaceHolder';
import Tours from './Tours';

import MySecure from './MySecure';
import FormData from './FormData';
import FullFormFunction from './FullFormFunction';
import EmployeeInfo from './EmployeeInfo';
import FormWithValidation from './FormWithValidation';
import AnotherForm from './AnotherForm';
import MyValidation from './MyValidation';
import DynamicForm from './DynamicForm';
import FormFunctio from './FormFunctio';
import Header from './Header';
import SimpleFileUpload from './SimpleFileUpload';
import EcommerceRegistration from './EcommerceRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

 <EcommerceRegistration/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
