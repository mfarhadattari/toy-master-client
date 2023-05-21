import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ReviewCard = ({ userReview }) => {
  return (
    <div className="rounded-lg p-5 space-y-3 shadow-2xl" data-aos="flip-left">
      <h3 className="text-2xl font-semibold text-center">{userReview.name}</h3>
      <p className="font-light">{userReview.comment}</p>
    </div>
  );
};

export default ReviewCard;
