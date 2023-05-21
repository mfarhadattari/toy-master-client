import useSetTitle from "../../hooks/useSetTitle";
import Banner from "./Banner";
import CategoriesToys from "./CategoriesToys/CategoriesToys";
import FAQSection from "./FAQSection/FAQSection";
import Gallery from "./Gallery";
import UserReview from "./UserReviews/UserReview";

const Home = () => {
  useSetTitle("Home");
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoriesToys></CategoriesToys>
      <UserReview></UserReview>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
