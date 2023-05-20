import { useLoaderData } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import ToyCard from "./ToyCard";

const AllToys = () => {
  const { totalToys } = useLoaderData();
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalToys / perPage);
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://mfarhad-toy-master.vercel.app/toys?page=${currentPage}&limit=${perPage}`)
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
            {toys.length > 0 && (
              <div className="lg:w-3/4 mx-auto text-center text-lg my-10 space-y-5 shadow-xl rounded-xl py-5">
                {/* --------------------------- | TOY INFORMATION |------------------- */}
                <div className="w-full">
                  <div className="w-full p-5">
                    <table className="w-full p-5">
                      <tbody>
                        {toys.map((toy) => (
                          <ToyCard key={toy._id} toyInfo={toy}></ToyCard>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
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
