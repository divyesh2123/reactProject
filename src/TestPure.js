import React, { PureComponent } from 'react'
import Task from './Task';

export default class TestPure extends PureComponent {

    constructor(props)
    {
        super(props)
        this.state  = {
            taskList : [
                { title: 'excercise'},
                { title: 'cooking'},
                { title: 'Reacting'},

            ]
        }
    }

    componentDidMount()
    {
        setInterval(() => {
            this.setState((oldState) => {
                return { taskList: [...oldState.taskList] }
             });
        }, 3000);
    }
  render() {
    console.log("taskList render called");
    return (
      <div>
        {
            this.state.taskList.map((tak,i)=> {

                return (<Task
                    key={i}
                    title={tak.title}
                 />);
            })
        }
      </div>
    )
  }
}
