import './App.css';

import React, { Component } from 'react'
import Nav from './COMPONENTS/Nav';
import News from './COMPONENTS/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
         <Nav/>
        
         <Switch>

          <Route exact path="/genreal"><News key="genreal" pageSize={6} country="in" category= "genreal" /></Route>
          <Route exact path="/business"><News  key="business" pageSize={6} country="in" category= "business" /></Route>
          <Route exact path="/entertainment"><News  key="entertainment" pageSize={6} country="in" category= "entertainment" /></Route>
          <Route exact path="/genreal"><News  key="genreal" pageSize={6} country="in" category= "genreal" /></Route>
          <Route exact path="/health"><News pageSize={6}  key="health" country="in" category= "health" /></Route>
          <Route exact path="/science"><News  key="science" pageSize={6} country="in" category= "science" /></Route>
          <Route exact path="/sports"><News  key="sports" pageSize={6} country="in" category= "sports" /></Route>
          <Route exact path="/technology"><News  key="technology" pageSize={6} country="in" category= "technology" /></Route>
         
        </Switch>
         </Router>
      </div>
     
    )
    
  }
}

