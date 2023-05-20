import React, { useEffect, useState } from "react";

const TabDisplay = ({ category }) => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys-by-category?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);

  return <div></div>;
};

export default TabDisplay;
