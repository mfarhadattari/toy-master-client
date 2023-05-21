import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../providers/AuthProvides";
import Loader from "./../../components/Loader";
import Swal from "sweetalert2";
import ToyItems from "./toyItems";
import { FaEnvelope } from "react-icons/fa";
import UpdateModal from "../../components/UpdateModal";
import useSetTitle from "../../hooks/useSetTitle";
import { useLocation, useNavigate } from "react-router-dom";
import SortingBar from "../../components/SortingBar";
import Skeleton from "react-loading-skeleton";

const MyToys = () => {
  useSetTitle("My Toys");
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("None");
  const [sortedLoader, setSortedLoader] = useState(false);

  /* ------------------------------------------------------------------
  ! --------------------- | LOAD MY TOYS | ----------------------
  --------------------------------------------------------------------- */
  useEffect(() => {
    setSortedLoader(true);
    fetch(
      `http://localhost:5000/my-toys?email=${user.email}&sortBy=${sortBy}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("toy-master-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Swal.fire({
            title: "Error!",
            icon: "error",
            color: "red",
            text: `${data.message} Please Login.`,
          }).then(() => {
            navigate("/login", {
              replace: true,
              state: { from: location },
            });
            logoutUser();
          });
        } else {
          setMyToys(data);
        }
        setLoading(false);
        setSortedLoader(false);
      });
  }, [user.email, navigate, logoutUser, location, sortBy]);

  /* -------------------------------------------------------------------------
    !----------------------- | REMOVE A TOY | -------------------------------
  ----------------------------------------------------------------------------- */
  const handelRemoveToy = (id) => {
    Swal.fire({
      title: "Want to remove?",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonColor: "red",
      confirmButtonText: "YES",
      showCancelButton: true,
      cancelButtonColor: "green",
      cancelButtonText: "NO",
    }).then((swalResult) => {
      if (swalResult.isConfirmed) {
        fetch(`http://localhost:5000/remove-toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                icon: "success",
                text: "Remove Successfully",
              });
              const remainingToys = myToys.filter((toy) => toy._id !== id);
              setMyToys(remainingToys);
            } else {
              Swal.fire({
                title: "Error!",
                icon: "error",
                text: "Remove Field",
              });
            }
          });
      }
    });
  };

  /* ------------------------------------------------------------------------
  !----------------- | UPDATE TOY MODAL STATE AND FUNCTION | --------------------- 
  ----------------------------------------------------------------------------*/
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const openModal = (toy) => {
    setSelectedToy(toy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedToy(null);
    setIsModalOpen(false);
  };

  const updateToy = (id, updatedInfo) => {
    fetch(`http://localhost:5000/update-toy/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedToy = myToys.find((toy) => toy._id === id);
          updatedToy.price = updatedInfo.price;
          updatedToy.quantity = updatedInfo.quantity;
          updatedToy.rating = updatedInfo.rating;
          updatedToy.details = updatedInfo.details;
          Swal.fire({
            title: "Success!",
            icon: "success",
            text: "Updated Successfully",
          }).then((result) => {
            setIsModalOpen(false);
          });
        } else {
          Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Cannot Updated",
          });
        }
      });
  };

  return (
    <section className="container mx-auto p-5">
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="lg:w-3/4 mx-auto text-center text-lg my-10 space-y-5 shadow-xl rounded-xl p-5">
          {/* -------------------- | USER INFORMATION AND FILTER | --------------------- */}
          <div className="flex justify-between items-center">
            <div className="flex w-full items-center gap-5">
              <div className="avatar">
                <div className=" w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      `https://cdn-icons-png.flaticon.com/128/3177/3177440.png`
                    }
                  />
                </div>
              </div>
              <div className="text-start  font-source-serif-pro">
                <h1 className="font-bold">{user.displayName}</h1>
                <h1 className="flex gap-2 items-center">
                  <FaEnvelope></FaEnvelope> {user.email}
                </h1>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <SortingBar sortBy={sortBy} setSortBy={setSortBy}></SortingBar>
            </div>
          </div>

          {/* --------------------------- | MY TOY INFORMATION |------------------- */}
          {sortedLoader ? (
            <div className="mt-5">
              <Skeleton count={10} />
            </div>
          ) : (
            <div className="w-full">
              <div className="divider w-3/4 mx-auto my-10 before:bg-pink-600 after:bg-pink-600"></div>
              {myToys.length === 0 ? (
                <div className="my-10 text-3xl font-source-serif-pro ">
                  No Data Found
                </div>
              ) : (
                <>
                  <div className="w-full p-5">
                    <table className="w-full p-5">
                      <tbody>
                        {myToys.map((toy) => (
                          <ToyItems
                            key={toy._id}
                            toyInfo={toy}
                            handelRemoveToy={handelRemoveToy}
                            openModal={openModal}
                          ></ToyItems>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------UPDATE MODAL ------------------------------- */}
      <UpdateModal
        isModalOpen={isModalOpen}
        selectedToy={selectedToy}
        closeModal={closeModal}
        updateToy={updateToy}
      ></UpdateModal>
    </section>
  );
};

export default MyToys;
