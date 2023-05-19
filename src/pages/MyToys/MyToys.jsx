import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../providers/AuthProvides";
import Loader from "./../../components/Loader";
import Swal from "sweetalert2";
import ToyItems from "./toyItems";
import { FaEnvelope } from "react-icons/fa";
import UpdateModal from "../../components/UpdateModal";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);
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

  /* ------------------------------------------------------------------
        ! --------------------- | LOAD MY TOYS | ----------------------
    --------------------------------------------------------------------- */
  useEffect(() => {
    fetch(`https://mfarhad-toy-master.vercel.app/my-toys?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("toy-master-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Swal.fire({
            title: "Error!",
            icon: "error",
            color: "red",
            text: `${data.message}`,
          });
          setMyToys([]);
        } else {
          setMyToys(data);
        }
        setLoading(false);
      });
  }, [user.email]);

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
        fetch(`https://mfarhad-toy-master.vercel.app/remove-toy/${id}`, {
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

  /* -------------------------------------------------------------------------
    !----------------------- | UPDATE A TOY | -------------------------------
  ----------------------------------------------------------------------------- */

  const updateToy = (id, updatedInfo) => {
    fetch(`https://mfarhad-toy-master.vercel.app/update-toy/${id}`, {
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
        <div className="lg:w-3/4 mx-auto text-center text-lg my-10 space-y-5 border rounded-lg py-5">
          {/* -------------------- | USER INFORMATION | --------------------- */}
          <div className="flex justify-center md:justify-end mr-10">
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className=" w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      `https://cdn-icons-png.flaticon.com/128/3177/3177440.png`
                    }
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div className="text-start  font-style-script">
                <h1 className="font-bold">{user.displayName}</h1>
                <h1 className="flex gap-2 items-center">
                  <FaEnvelope></FaEnvelope> {user.email}
                </h1>
              </div>
            </div>
          </div>

          {/* --------------------------- | MY TOY INFORMATION |------------------- */}
          <div className="w-full">
            <div className="divider w-3/4 mx-auto my-10"></div>
            {myToys.length === 0 ? (
              <div className="my-10 text-3xl font-style-script">
                No Data Found
              </div>
            ) : (
              <>
                <div className="w-full">
                  <div className="w-full p-5">
                    <div className="space-y-5">
                      {myToys.map((toy) => (
                        <ToyItems
                          key={toy._id}
                          toyInfo={toy}
                          handelRemoveToy={handelRemoveToy}
                          openModal={openModal}
                        ></ToyItems>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------ modal ------------------------------- */}
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
