import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const UserReview = () => {
  const [userReviews, setUserReviews] = useState([]);
  useEffect(() => {
    fetch("https://mfarhad-toy-master.vercel.app/user-reviews")
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, []);
  return (
    <section className="container mx-auto my-10">
      <div className="divider w-3/4 mx-auto after:bg-pink-600 before:bg-pink-600 my-10">
        <h1 className="text-lg md:text-4xl text-center font-source-serif-pro font-bold italic">
          | User Reviews |
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {userReviews.map((review) => (
          <ReviewCard key={review._id} userReview={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default UserReview;
