import React, { useState } from "react";

export default function LoginForm(props) {
  const [formValue, setFormValue] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={null}>
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
