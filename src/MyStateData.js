import React, { Component } from 'react'

export default class MyStateData extends Component {

    state={

        counter : 0,
        firstName : "Test",
        lastName : "test"
    }

    myFunction = ()=> {

       this.state.counter = this.state.counter+1;

       console.log(this.state.counter);
    }
  render() {
    return (
      <div>
                {this.state.counter} {this.state.firstName}
            <button onClick={this.myFunction}>Click</button>

      </div>
    )
  }
}
