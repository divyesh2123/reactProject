import PropTypes from 'prop-types';
import React, { Component } from 'react'

export default class MyTestDataClass extends Component {

   
  render() {
    return (
      <div>{this.props.myTest}</div>
    )
  }
}

MyTestDataClass.propTypes = {
    myTest : PropTypes.number
}

