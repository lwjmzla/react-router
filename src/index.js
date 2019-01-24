import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom' // BrowserRouter
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home.js'
import User from './pages/User.js'
import Login from './pages/Login.js'
import ProtectedRoute from './ProtectedRoute.js'

function Root () {
  return ''
}
class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    console.log(this.props)
    return (
      <div ref="div" onClick={() => console.log(this.refs.div)}>Profile</div>
    )
  }
}
function MenuLink(props) {
  const {label, to} = props
  return (
    <Route path={to} children={(props) => {
      // !children的作用： 不管当前路径（即to）是否匹配上，都渲染对应的组件  !!!
      // !这里要 to是 匹配的 才加 active
      //console.log(props.match)
      return <li className={props.match ? 'active' : ''}><Link to={to}>{label}</Link></li>
    }} ></Route>
  )
}
function NotFound () {
  return <h1>404</h1>
}

ReactDOM.render(
  <Router>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">XX用户管理系统</div>
          </div>
          <ul className="nav navbar-nav">
            <li id="home"><NavLink to={{ pathname: '/home', state: {from: 'xxx'} }} activeStyle={{color: 'white'}} >首页</NavLink></li>
            <li id="user"><NavLink to="/user" activeClassName='active' activeStyle={{color: 'white'}}>用户管理</NavLink></li>
            <MenuLink to='/profile' label="个人设置"></MenuLink>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Switch>
              <Route path="/" exact render={(props) => <div>首页</div>}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/user" component={User}></Route>
              <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
              <Route path="/login" component={Login}></Route>
              <Route component={NotFound}></Route>
            </Switch>
            
          </div>
        </div>
      </div>
    </div>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
