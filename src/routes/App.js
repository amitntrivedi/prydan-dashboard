import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
 import './App.css';
import Login from '../containers/login/Loing';
import Dashboard from '../containers/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router >
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}
export default App;
