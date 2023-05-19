import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../providers/AuthProvides";
import Loader from "./../../components/Loader";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ------------------------------------------------------------------
        ! --------------------- load my toys ----------------------
    --------------------------------------------------------------------- */
  useEffect(() => {
    fetch(`http://localhost:5000/my-toys?email=${user.email}`, {
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
    <section>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="text-center text-3xl my-10 font-bold space-y-5">
          <h1>THIS IS MY TOYS</h1>
          <h1>{myToys.length}</h1>
        </div>
      )}
    </section>
  );
};

export default MyToys;
