import React, { Component } from 'react'
import ChildCom from './ChildCom';

export default class LifeData extends Component {

    constructor(props)
    {
      alert("this is cons of parent");
        super(props)
        this.state = {
            counter : 1,
            isDisplay: true
        }

        console.log("constrture");

    }

   // This is used for setting value of props to state
    // static getDerivedStateFromProps(props, state)
    // {
    //     console.log("This is the call"+props.count);
    //     return {counter: props.count };

    // }

    componentDidMount()
    {
      alert("this is paretn mount")
        console.log("did mount");
        this.setState({...this.state, counter : 2});

    }

    shouldComponentUpdate(props,state)
    {
        
        console.log(state, this.state);
        return true;
    }

    componentDidUpdate(props,state)
    {
        console.log("update",state, this.state);
    }

  render() {

    alert("This is parent of render")
    let myheader;
    if (this.state.isDisplay) {
      myheader = <ChildCom />;
    };
    console.log("render");
    return (
      <div>{this.state.counter}
       <div>
      {myheader}
      <button type="button"
       onClick={()=> { this.setState({...this.state,isDisplay: !this.state.isDisplay})}}>Delete Header</button>
      </div>
      
      </div>
    )
  }
}
