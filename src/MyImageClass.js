import React, { Component } from 'react'

export default class MyImageClass extends Component {

    
  render() {
    const {imageUrl,imagetitle,altText} = this.props;
   
    return (
      <div>

<img src={this.props.imageUrl} title={imagetitle}
            alt={altText} />
      </div>
    )
  }
}
