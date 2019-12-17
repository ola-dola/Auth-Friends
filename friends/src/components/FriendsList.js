import React, { useState, useEffect } from "react";
import axios from "../auth";

export default function FriendsList() {
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    axios()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriendsData(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      {friendsData.map(friend => (
        <div key={friend.id}>
          <h2>Name: {friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </section>
  );
}
