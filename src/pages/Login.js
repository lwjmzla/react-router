import React from 'react';
import { Route, Link } from 'react-router-dom'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleClick = (ev) => {
    localStorage.setItem('__LOGIN__', true)
    if (this.props.location.state) {
      const orginPage = this.props.location.state.from
      this.props.history.push(orginPage)
    } else {
      this.props.history.push('/home')
    }
  }
  render () {
    console.log(this.props.location)
    return (
      <h1 onClick={this.handleClick}>login</h1>
    )
  }
}