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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {userReviews.map((review) => (
          <ReviewCard key={review._id} userReview={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default UserReview;