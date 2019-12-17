import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import LoginForm from './components/LoginForm';
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FRIENDSIS</h1>
        <div>
          <NavLink to="/" className="links">Login</NavLink>
          <NavLink to="/friends" className="links">Your Friends</NavLink>
          <NavLink to="/add-friend" className="links">Add Friend</NavLink>
        </div>
      </header>

      <Route exact path="/" component={LoginForm} />
      <Route  path="/friends" component={FriendsList} />
      <Route  path="/add-friend" component={AddFriend} />
    </div>
  );
}

export default App;
