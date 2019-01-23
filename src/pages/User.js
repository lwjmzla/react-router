import React from 'react';
import { Route, Link } from 'react-router-dom'

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
    this.state = {}
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
    this.props.history.push('/user/list') // 跳转
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input id="name" ref="name" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-default" />
        </div>
      </form>
    )
  }
}

export default class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
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
          <Route path="/user/add" component={UserAdd}></Route>
          <Route path="/user/detail/:id" component={UserDetail}></Route>
        </div>
      </div>
    )
  }
}