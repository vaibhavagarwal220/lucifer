import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppCSS from './App.module.css';
import People from '../People/People';
import Shows from '../Shows/Shows'
import NavHeader from '../NavHeader/NavHeader';


const App = () => {
  return (
    <Router>
      <div className={AppCSS.app}>
        <NavHeader/>
        <Switch>
          <Route path="/shows">
            <Shows />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/">
            Welcome to Lucifer!
          </Route>
        </Switch>
      </div>
    </Router>
  ); 
}

export default App;
