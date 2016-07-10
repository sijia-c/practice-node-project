import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import TopicList from './component/TopicList';
import TopicDetail from './component/TopicDetail';
import { Router, Route, Link, browserHistory } from 'react-router'

class Index extends React.Component{
  render (){
    return (
      <div>
       <Header />
        {this.props.children ? this.props.children : <TopicList />}
       <Footer />
      </div>
    )
  }
}

export default class App extends React.Component{
  render (){
    return (
       <Router history={browserHistory}>
        <Route path="/" component={Index}>
          <Route path="/topic/:id" component={TopicDetail}/>
         </Route>
        </Router>
    );
  }
}
