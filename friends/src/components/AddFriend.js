import React, { useState } from "react";
import axios from "../auth";

export default function AddFriend(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: "",
    id: "",
  });

  const handleChange = event => {
    setFormValues({
      ...formValues,
      id: Date.now(),
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    axios()
      .post("http://localhost:5000/api/friends", formValues)
      .then(res => {
        props.history.push('/friends')
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>
      <div>
        Age
        <input
          onChange={handleChange}
          type="text"
          name="age"
          placeholder="age"
        />
      </div>
      <div>
        Email
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <button type="submit">Add New Friend</button>
    </form>
  );
}
