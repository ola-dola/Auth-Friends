import React, { useState } from "react";
import axios from "axios";

export default function LoginForm(props) {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Username
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        Password
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
      {error ? <p>Invalid Password. Retry!</p> : null}
      <button type="submit">Login</button>
    </form>
  );
}
