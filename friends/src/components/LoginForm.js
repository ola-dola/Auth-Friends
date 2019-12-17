import React, { useState } from "react";
import axios from "axios";

export default function LoginForm(props) {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    axios.post("http://localhost:5000/api/login", formValues)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/falz');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} >
      <div>
        Username
        <input onChange={handleChange} name="username" placeholder="Username" />
      </div>
      <div>
        Password
        <input onChange={handleChange} name="password" placeholder="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
