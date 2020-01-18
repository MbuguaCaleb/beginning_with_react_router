import React, { useState, useEffect } from "react";
import "./App.css";

function Shop() {
  //use Effect is used to excute fetch when the component mounts

  useEffect(() => {
    fetchItems();
  }, []);

  //setting up the state
  const [items, setItems] = useState([]);

  //Fetching data from an external Api
  const fetchItems = async () => {
    const data = await fetch("https://ti-react-test.herokuapp.com/users");

    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
}

export default Shop;
