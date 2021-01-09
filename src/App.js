import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import HomePage from "./containers/HomePage";
//Assets
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            render={props => <HomePage {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
