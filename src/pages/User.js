import React from 'react';
import { Route, Link, Prompt, Redirect } from 'react-router-dom'
import Login from './Login.js'

class UserList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const users = JSON.parse(localStorage.getItem('__USERS__')) || []
    return (
      <ul className="list-group">
        {
          users.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Link to={"/user/detail/" + item.id}>{item.name}</Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
class UserDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    console.log(this.props.match.params)
    return (
      <div>UserDetail  id: {this.props.match.params.id}</div> // !需要显示name的话 查一下数据 匹配就可以了  跨页面 显示数据的话  还可以用vuex vue里的 
    )
  }
}
class UserAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      blocking: false // true的话 阻止直接离开页面
    }
  }
  handleSubmit = (ev) => {
    ev.preventDefault()
    let users = JSON.parse(localStorage.getItem('__USERS__')) || []
    const user = this.refs.name.value
    users.push({
      id: Date.now(),
      name: user
    })
    localStorage.setItem('__USERS__', JSON.stringify(users))
    this.setState({
      blocking: false
    })
    setTimeout(() => {
      console.log(this.props)
      this.props.history.push('/user/list') // 跳转
    }, 0)
  }
  handleChange = (ev) => {
    this.setState({
      blocking: ev.target.value.length > 0
    })
  }
  render () {
    return (
      <div>
        <Prompt when={this.state.blocking} message={(location) => `你确定要跳转到${location.pathname}吗？`}></Prompt>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input id="name" ref="name" type="text" className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-default" />
          </div>
        </form>
      </div>
      
    )
  }
}

export default class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  // componentDidMount() {
  //   const navLiEls = [].slice.call(document.querySelectorAll('.nav li'))
  //   navLiEls.forEach((item, index) => {
  //     item.classList.remove('active')
  //   })
  //   document.getElementById('user').classList.add('active')
  // }
  render () {
    return (
      <div className="row">
        <div className="col-sm-2">
          <ul className="nav nav-stacked">
            <li><Link to="/user/list">用户列表</Link></li>
            <li><Link to="/user/add">用户新增</Link></li>
          </ul>
        </div>
        <div className="col-sm-10">
          <Route path="/user/list" component={UserList}></Route>
          <Route path="/user/add" render={(props) => {
            return JSON.parse(localStorage.getItem('__LOGIN__')) ? <UserAdd {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location.pathname}}} />
          }}></Route>
          <Route path="/user/detail/:id" component={UserDetail}></Route>
        </div>
      </div>
    )
  }
}