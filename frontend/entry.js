import jQuery from 'jquery';
window.jQuery=jQuery;
import 'bootstrap-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {getTopicList} from './lib/client';
import { Router, Route, Link, browserHistory } from 'react-router';
import TopicDetail from './component/TopicDetail';
import Login from './component/Login';
import NewTopic from './component/NewTopic';

getTopicList({})
 .then(ret => console.log(ret))
 .catch(err=>console.error(err));
//console.log('hello, world');
/*
class App extends React.Component{
  render (){
    return (
      <div>
       <h1>Hello, world</h1>
      </div>
    )
  }
}*/
const e=document.createElement('div');
e.id='app';
document.body.appendChild(e);
ReactDOM.render((
  <Router history={browserHistory}>
   <Route path="/" component={App}>
     <Route path="topic/:id" component={TopicDetail}/>
     <Route path="new" component={NewTopic}/>
     <Route path="login" component={Login}/>
    </Route>
   </Router>
), e);
