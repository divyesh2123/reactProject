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
import FormCustom from './Form';
import { formData } from './MyJsonData';
import Test from './Test';
import FormMyData from './FormMyData';
import MyButton from './MyButton';
import Container from './Container';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import MyData from './MyData';
import { Provider } from 'react-redux'
import ErrorFallback from './ErrorFallback';
import MyExampleReducer from './MyExampleReducer';
import EmployeeData from './EmployeeData';
import MyDataEmp from './MyDataEmp';
import store1 from './store';
import storeSlice from './store/storeSlice';
import CounterR from './CounterR';
import Product from './Product';
import ProductItem from './ProductItem';
import MyUser from './MyUser';
import MyTestReducer from './MyTestReducer';
import MyTestReducer1 from './MyTestReducer1';
import MyCounterSlice from './MyCounterSlice';

import BuggyCounter from './BuggyCounter';
import MyCounterSaga from './MyCounterSaga';
import * as Sentry from "@sentry/react";
import ErrorBoundary from "react-error-boundary";
import MyUserSaga from './MyUserSaga';

Sentry.init({
  dsn: "https://99ae3baf2c954c4cbd4ea9162cb74854@o1196007.ingest.sentry.io/6319187",
 

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


<ToastContainer/>

 {/* <ErrorBoundary FallbackComponent={ErrorFallback}>

      <BuggyCounter/>

      

      </ErrorBoundary> */}

    
    <Provider store={store1}>

    <MyUserSaga/>


     

      {/* <MyCounterSlice></MyCounterSlice> */}
      {/* <EcommerceRegistration></EcommerceRegistration> */}
{/*   
       <MyCounterSaga></MyCounterSaga> */}
    </Provider>

     {/* <FormMyData formData={formData} />  */}
    {/* <Container>

     <MyHeader></MyHeader>
     <MyFooter></MyFooter> */}
    {/* </Container> */}
    {/* <ToastContainer/>

    <MyDataEmp/> */}

    {/* <EmployeeData/> */}

   
    


    {/* <App/> */}
   {/* <Test/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
