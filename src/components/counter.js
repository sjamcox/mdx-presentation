import React from 'react'

export default class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
        <button onClick={this.handleClick.bind(this)}>
          Click to increase
        </button>
      </center>
    )
  }
}