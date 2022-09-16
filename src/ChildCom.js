import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ChildCom extends Component {
 
    constructor(props)
    {
        super(props)
        alert("this is the child of cons");

    }

    componentDidMount()
    {

        alert("this is mount of child");
    }
    componentWillUnmount()
    {
        alert("This is the will change of child");
    }

  render() {
    alert("This is the render of child");
    return (
      <div>ChildCom</div>
    )
  }
}
