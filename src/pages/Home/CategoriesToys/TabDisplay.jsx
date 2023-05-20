import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import Loader from "../../../components/Loader";

const TabDisplay = ({ category }) => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/toys-by-category?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {toys.map((toy) => (
            <ToyCard key={toy._id} toyInfo={toy} loading={loading}></ToyCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabDisplay;
