import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FRIENDSIS</h1>
        <div>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/friends">Your Friends</NavLink>
        </div>
      </header>

      <Route path="/" component={Login} />
    </div>
  );
}

export default App;
