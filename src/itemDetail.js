import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({ match }) {
  //use Effect is used to excute fetch when the component mounts
  //Lifecycle Method
  useEffect(() => {
    fetchItem();
  }, []);

  //setting up the state
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://ti-react-test.herokuapp.com/users/${match.params.id}`
    );

    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <h3>{item.occupation}</h3>
      <h1>{item.email}</h1>
      <h3>{item.bio}</h3>
    </div>
  );
}

export default ItemDetail;
