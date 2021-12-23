
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=6
  apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       <Switch>
          <Route exact path="/"> <News apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/business"> <News apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"> <News apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/general"> <News apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/health"> <News apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
          <Route exact path="/science"> <News apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science"/></Route>
          <Route exact path="/technology"> <News apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route>
          <Route exact path="/sports"> <News apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route>
            
         
        </Switch>
       </Router>
      </div>
    )
  }
}
