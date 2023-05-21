import { useLoaderData } from "react-router-dom";
import useSetTitle from "./../../hooks/useSetTitle";

const Blogs = () => {
  useSetTitle("Blogs");
  const blogs = useLoaderData();

  return (
    <section className="container mx-auto my-20">
      <div className="w-full md:w-3/4 mx-auto p-5 space-y-5">
        {blogs.map((blog, idx) => (
          <div
            key={blog._id}
            className="border p-5 rounded-lg space-y-3 shadow-xl"
          >
            <h2 className="text-xl md:w-3/4 font-semibold">
              {idx + 1}.{blog.question}
            </h2>
            <p>Answer: {blog.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
