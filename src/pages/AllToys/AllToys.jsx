import { useLoaderData } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const AllToys = () => {
  const { totalToys } = useLoaderData();
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalToys / perPage);
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://mfarhad-toy-master.vercel.app/toys?page=${currentPage}&limit=${perPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [perPage, currentPage]);

  return (
    <section className="container mx-auto my-10">
      <div>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div>
            <h1 className="text-center text-3xl my-10">{toys.length}</h1>
          </div>
        )}
      </div>
      <Pagination
        perPage={perPage}
        setPerPage={setPerPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </section>
  );
};

export default AllToys;
