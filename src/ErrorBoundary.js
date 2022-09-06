import PropTypes from 'prop-types'
import React, { Component } from 'react'
import * as Sentry from "@sentry/react";

export default class ErrorBoundary extends Component {
  
    constructor(props) {  
        super(props);  
        this.state = { hasError: false };  
      } 
      
      static getDerivedStateFromError(error) {  
        // It will update the state so the next render shows the fallback UI.  
        return { hasError: true };  
      } 
      
      componentDidCatch(error, info) {  
     
        Sentry.withScope(scope => {
          
          Sentry.captureException(error);
        });
      } 

  render() {
    if (this.state.hasError) {  
        return (  
        <div>Something is wrong.</div> 
    );  
    }  
    return this.props.children;   
  }  
  }

