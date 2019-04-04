import React, { Component } from 'react';
import './App.css';

import Todo from './Component/Todo'
import Login from './Component/Login'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            <Switch>
              <Route
                  path='/todo'
                  component={Todo}/>
              <Route
                  path='/'
                  component={Login}/>
            </Switch>
          </Router>
        </div>
        // <div className="App">
        //     <Todo/>
        // </div>
    );
  }
}

export default App;