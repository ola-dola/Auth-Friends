import React from "react";
import { Route, NavLink, Redirect, withRouter } from "react-router-dom";
import "./App.css";

import LoginForm from './components/LoginForm';
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App(props) {

  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>FRIENDSIS</h1>
        <div>
          <NavLink to="/" className="links">Login</NavLink>
          <NavLink to="/friends" className="links">Your Friends</NavLink>
          <NavLink to="/add-friend" className="links">Add Friend</NavLink>
          <button onClick={logout} className="links">Logout</button>
        </div>
      </header>

      <Route exact path="/" component={LoginForm} />
      <Route  path="/friends" render={props => withAuthCheck(FriendsList, props)} />
      <Route  path="/add-friend" render={props => withAuthCheck(AddFriend, props)} />
    </div>
  );
}

function withAuthCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to="/" />
}

export default withRouter(App);