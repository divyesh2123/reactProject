import PropTypes from 'prop-types'
import React, { Component } from 'react'

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
        // It will catch error in any component below. We can also log the error to an error reporting service.  
      //  logErrorToMyService(error, info); 
        // it will store you error log

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

