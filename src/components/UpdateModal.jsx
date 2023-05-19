import React from "react";
import Modal from "react-modal";

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
  "Geographical Kits",
];
const styles = {
  content: {
    height: "70%",
    width: "fit-content",
    margin: "100px auto",
    border: "5px solid #DB2777",
    borderRadius: "10px",
    scrollbarColor: "pink",
  },
};

const UpdateModal = ({ isModalOpen, closeModal, selectedToy, updateToy }) => {
  const handelUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.details.value;
    const data = {
      _id: selectedToy._id,
      price,
      quantity,
      rating,
      description,
    };
    updateToy(data);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={styles}
    >
      {selectedToy && (
        <div className="w-full  mx-auto">
          <h1 className="text-center mt-10 font-bold text-4xl font-style-script">
            Update Toy
          </h1>
          <form className="card-body" onSubmit={handelUpdateToy}>
            {/* ---------------- toy name and toy category--------- */}
            <div className="md:flex gap-5">
              <div className="form-control my-2 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Toy Name"
                  defaultValue={selectedToy.name}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control my-2 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Toy Name"
                  defaultValue={selectedToy.category}
                  className="input input-bordered"
                  readOnly
                />
              </div>
            </div>

            {/* -------------- price , rating and quantity ----------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="form-control my-2 w-full">
                <label className="label">
                  <span className="text-lg">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  min={0}
                  placeholder="Price"
                  className="input input-bordered"
                  defaultValue={selectedToy.price}
                  required
                />
              </div>
              <div className="form-control my-2 w-full">
                <label className="label">
                  <span className="text-lg">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  min={0}
                  name="quantity"
                  className="input input-bordered"
                  defaultValue={selectedToy.quantity}
                  required
                />
              </div>
              <div className="form-control my-2 w-full">
                <label className="label">
                  <span className="text-lg">Rating</span>
                </label>
                <input
                  type="number"
                  max={5}
                  min={0}
                  step={0.1}
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  defaultValue={selectedToy.rating}
                  required
                />
              </div>
            </div>

            {/* ------------- details ---------------- */}
            <div className="form-control my-2 w-full">
              <label className="label">
                <span className="text-lg">Description</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered w-full"
                rows={6}
                name="details"
                defaultValue={selectedToy.details}
                required
              ></textarea>
            </div>

            {/* ------------ action btn -------------------- */}
            <div className="flex gap-5">
              <div className="form-control mt-6 w-full">
                <button
                  className="btn bg-pink-600 border-0 hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
              <div className="form-control mt-6 w-full">
                <input
                  type="submit"
                  className="btn bg-pink-600 border-0 hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600"
                  value="Update"
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default UpdateModal;
