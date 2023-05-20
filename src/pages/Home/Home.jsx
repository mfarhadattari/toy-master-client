import useSetTitle from "../../hooks/useSetTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";

const Home = () => {
  useSetTitle("Home");
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
