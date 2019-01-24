import React from 'react';
import { Route, Link } from 'react-router-dom'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  // componentDidMount() {
  //   const navLiEls = [].slice.call(document.querySelectorAll('.nav li'))
  //   navLiEls.forEach((item, index) => {
  //     item.classList.remove('active')
  //   })
  //   document.getElementById('home').classList.add('active')
  // }
  render () {
    console.log(this.props)
    return (
      <div ref="div" onClick={() => console.log(this.refs.div)}>home</div>
    )
  }
}