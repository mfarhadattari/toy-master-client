import { useLoaderData } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { useState } from "react";

const AllToys = () => {
  const { totalToys } = useLoaderData();
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalToys / perPage);

  return (
    <div>
      <h1>THIS IS ALL TOYS</h1>
      <Pagination
        perPage={perPage}
        setPerPage={setPerPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default AllToys;
