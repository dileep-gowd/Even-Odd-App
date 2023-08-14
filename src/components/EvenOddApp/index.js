/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  generateRandNum = () => {
    // const {num} = this.state
    this.setState(() => ({num: Math.floor(Math.random() * 101)}))
  }

  evenOrOdd = () => {
    const {num} = this.state
    if (num % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-cont">
        <h1>Count {num}</h1>
        <p>Count is {this.evenOrOdd()}</p>
        <button onClick={this.generateRandNum}>Increment</button>
        <p className="p1">*Increase By Random number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
