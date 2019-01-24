import React from 'react';
import {Redirect, Route} from 'react-router-dom'
export default function (props) {
  // console.log(JSON.parse(localStorage.getItem('__LOGIN__'))) // 这里大家都执行
  const Component = props.component
  return <Route path={props.path} render={(props) => { 
    // ! <Component {...props} />  这种相当于  <Component history=xx location=xx match=xx  />
    return JSON.parse(localStorage.getItem('__LOGIN__'))?<Component {...props} />:<Redirect to={{ pathname: '/login', state: {from: props.location.pathname} }} /> 
  }}></Route>
}