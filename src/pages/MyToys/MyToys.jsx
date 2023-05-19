import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../providers/AuthProvides";
import Loader from "./../../components/Loader";
import Swal from "sweetalert2";
import ToyItems from "./toyItems";
import { FaEnvelope } from "react-icons/fa";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ------------------------------------------------------------------
        ! --------------------- load my toys ----------------------
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

  return (
    <section className="container mx-auto">
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="w-3/4 mx-auto text-center text-lg my-10 space-y-5 border rounded-lg py-5">
          <div className="flex justify-end mr-10">
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className=" w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user.photoURL}
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

          <div>
            <div className="divider w-3/4 mx-auto my-10"></div>
            {myToys.length === 0 ? (
              <div className="my-10 text-3xl font-style-script">
                No Data Found
              </div>
            ) : (
              <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  <tbody>
                    {myToys.map((toy) => (
                      <ToyItems key={toy._id} toyInfo={toy}></ToyItems>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MyToys;
