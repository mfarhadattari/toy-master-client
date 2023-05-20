import useSetTitle from "../../hooks/useSetTitle";
import Banner from "./Banner";
import CategoriesToys from "./CategoriesToys/CategoriesToys";
import Gallery from "./Gallery";

const Home = () => {
  useSetTitle("Home");
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoriesToys></CategoriesToys>
    </div>
  );
};

export default Home;
