import jQuery from 'jquery';
window.jQuery=jQuery;
import 'bootstrap-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {getTopicList} from './lib/client';

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

ReactDOM.render(<App />, document.body);
