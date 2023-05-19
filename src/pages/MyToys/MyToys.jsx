import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../providers/AuthProvides";
import Loader from "./../../components/Loader";
import Swal from "sweetalert2";
import ToyItems from "./toyItems";


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
        <div className="w-3/4 mx-auto text-center text-lg my-10 space-y-5">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <tbody>
                {myToys.map((toy) => (
                  <ToyItems key={toy._id} toyInfo={toy}></ToyItems>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyToys;
