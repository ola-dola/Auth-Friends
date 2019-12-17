import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FRIENDSIS</h1>
        <div>
          <NavLink to="/" className="links">Login</NavLink>
          <NavLink to="/friends" className="links">Your Friends</NavLink>
        </div>
      </header>

      <Route exact path="/" component={LoginForm} />
    </div>
  );
}

export default App;
