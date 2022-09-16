import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class TestDataType extends Component {
  // static propTypes = {
  //       myTest : PropTypes.number

  // }

  render() {
    return (
      <div>{this.props.myTest}</div>
    )
  }
}

TestDataType.propTypes = {

  tet : PropTypes.any.isRequired
}
