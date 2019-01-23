import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // BrowserRouter
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home.js'
import User from './pages/User.js'

function Root () {
  return ''
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
            <li><Link to="/home">首页</Link></li>
            <li><Link to="/user">用户</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Route path="/" component={Root}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/user" component={User}></Route>
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
