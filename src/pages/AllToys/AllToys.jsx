import { useLoaderData } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import ToyTableTow from "./ToyTableTow";
import useSetTitle from "./../../hooks/useSetTitle";
import SearchBar from "../../components/SearchBar";

const AllToys = () => {
  useSetTitle("All Toys");
  const { totalToys } = useLoaderData();

  /* ----------------- | STORING DATA STATE |------------ */
  const [allToys, setAllToys] = useState([]);
  const [toys, setToys] = useState([]);

  /* ---------------- | STATE FOR PAGINATION |-------------- */
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalToys / perPage);
  const [loading, setLoading] = useState(true);
  const options = [10, 15, 20];

  /* ------------------- | STATE FOR SEARCHING |---------------- */
  const [matched, setMatched] = useState(0);
  const [isMatched, setIsMatched] = useState(false);

  /* ------------------------------------------------------------
  !--------- | LOADING DATA ACCORDING TO PAGINATION |----------------
  ------------------------------------------------------------------- */
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/toys?page=${currentPage}&limit=${perPage}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setToys(data);
        setLoading(false);
      });
  }, [perPage, currentPage]);

  /* ------------------------------------------------------------------------------
  !------------------- | SEARCH DATA BY NAME , KEYWORD, LETTERS |-----------------
  -------------------------------------------------------------------------------- */
  const searchByNameKeywordLetter = (name) => {
    setLoading(true);
    if (name === "") {
      setToys(allToys);
      setMatched(0);
      setLoading(false);
      setIsMatched(false);
    } else {
      fetch(`http://localhost:5000/search-toy?search=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
          setMatched(data.length);
          setIsMatched(true);
          setLoading(false);
        });
    }
  };

  return (
    <section className="container mx-auto my-10">
      {/* ----------------------- SEARCH BAR --------------------- */}
      <div className="w-full mx-auto">
        <SearchBar
          searchByNameKeywordLetter={searchByNameKeywordLetter}
        ></SearchBar>
      </div>

      {/* --------------------- MATCHING RESULT ----------------- */}
      {isMatched && (
        <div className="text-xl text-center w-fit font-semibold font-source-serif-pro mx-auto my-10">
          Matched Result : {matched}
        </div>
      )}
      <div>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div>
            {toys.length > 0 && (
              <div className="lg:w-3/4 mx-auto text-center text-lg my-10 space-y-5  rounded-xl py-5">
                {/* --------------------------- | TOYs INFORMATION |------------------- */}
                <div className="w-full">
                  <div className="w-full p-5">
                    <table className="w-full p-5">
                      <tbody>
                        {toys.map((toy) => (
                          <ToyTableTow
                            key={toy._id}
                            toyInfo={toy}
                          ></ToyTableTow>
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
        options={options}
      ></Pagination>
    </section>
  );
};

export default AllToys;
