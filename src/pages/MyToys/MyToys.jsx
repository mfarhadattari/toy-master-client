import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../providers/AuthProvides";
import Loader from "./../../components/Loader";

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
        setMyToys(data);
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
