import React, { Component } from 'react'

export class ClassBasedSample extends Component {
    constructor(props) {
    super(props)
    this.state = {
      first: 0,
      second:100
    }
    this.handleClick2 = this.handleClick2.bind(this)

    }

    handleClick1 = () => {
        this.setState({first: this.state.first + 1})
    }

    handleClick2 = () => {
        this.setState({second: this.state.second + 1})
    }

    componentDidMount() {
        console.log("Component Mounted/ Data Received")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated")
        if (prevState.first !== this.state.first) {
            console.log("First State Updated")
        }
    }

  render() {
    return (
     <>
     <p>Class-Based Sample</p>
        <p>{this.state.first}</p>
        <p>{this.state.second}</p>
        <button onClick={this.handleClick1}>Increment First</button>
        <button onClick={this.handleClick2}>Increment Second</button>
     </>

    )
  }
}

export default ClassBasedSample