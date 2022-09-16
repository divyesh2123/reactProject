import React, { Component, PureComponent } from 'react'

export default class Task extends PureComponent {
    
  render() {
    console.log("task added");
    return (
      <div>{this.props.title}</div>
    )
  }
}
