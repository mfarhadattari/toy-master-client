import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import Loader from "../../../components/Loader";
import Pagination from "./../../../components/Pagination";

const TabDisplay = ({ category }) => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  /* ----------- variable state for pagination ------------ */
  const [totalToys, setTotalToys] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const options = [6, 9, 12];
  const totalPages = Math.ceil(totalToys / perPage);

  useEffect(() => {
    fetch(`https://mfarhad-toy-master.vercel.app/category-toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setTotalToys(data.total);
      });
  }, [category]);

  useEffect(() => {
    fetch(
      `https://mfarhad-toy-master.vercel.app/toys-by-category/${category}?page=${currentPage}&limit=${perPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [category, currentPage, perPage]);

  return (
    <div>
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
      <div>
        <Pagination
          perPage={perPage}
          setPerPage={setPerPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          options={options}
        ></Pagination>
      </div>
    </div>
  );
};

export default TabDisplay;
