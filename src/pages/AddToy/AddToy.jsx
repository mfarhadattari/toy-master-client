import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvides";
import Swal from "sweetalert2";

const kitCategories = [
  "Chemistry Kits",
  "Physics Kits",
  "Biology Kits",
  "Astronomy Kits",
  "Robotics Kits",
  "Engineering Kits",
  "Geology Kits",
  "Microscope Kits",
  "Electronics Kits",
  "Coding Kits",
  "Mathematics Kits",
  "Environmental Science Kits",
];

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handelAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const seller = form.seller.value;
    const email = form.email.value;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const img = form.img.value;
    const details = form.details.value;

    const toyData = {
      seller,
      email,
      name,
      category,
      price,
      quantity,
      rating,
      img,
      details,
    };
    fetch("http://localhost:5000/add-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Toy Added Successfully",
            icon: "success",
          });
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="container mx-auto my-10 p-5 lg:p-0">
      <div className="border-2 border-pink-600 rounded-xl shadow-xl w-full md:w-3/4 mx-auto">
        <h1 className="text-center mt-10 font-bold text-4xl font-style-script">
          ADD TOY
        </h1>
        <form className="card-body" onSubmit={handelAddToy}>
          {/* -------------- seller name and seller email----------- */}
          <div className="md:flex gap-5">
            <div className="form-control my-2 w-full">
              <input
                type="text"
                name="seller"
                placeholder="Seller Name"
                defaultValue={user.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control my-2 w-full">
              <input
                type="email"
                placeholder="Seller Email"
                name="email"
                defaultValue={user.email}
                className="input input-bordered"
                readOnly
                required
              />
            </div>
          </div>

          {/* ---------------- toy name and toy category--------- */}
          <div className="md:flex gap-5">
            <div className="form-control my-2 w-full">
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control my-2 w-full">
              <select className="input input-bordered" name="category" required>
                {kitCategories.map((category, idx) => (
                  <option key={idx}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* -------------- price , rating and quantity ----------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="form-control my-2 w-full">
              <input
                type="number"
                name="price"
                min={0}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control my-2 w-full">
              <input
                type="number"
                placeholder="Quantity"
                min={0}
                name="quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control my-2 w-full">
              <input
                type="number"
                max={5}
                min={0}
                step={0.1}
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* ---------- image url ---------- */}
          <div className="form-control my-2 w-full">
            <input
              type="url"
              name="img"
              placeholder="Image URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* ------------- details ---------------- */}
          <div className="form-control my-2 w-full">
            <textarea
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              name="details"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-pink-600 border-0 hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600"
              value="ADD TOY"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddToy;
