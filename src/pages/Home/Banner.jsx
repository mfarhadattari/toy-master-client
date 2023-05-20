import Sliders from "../../components/Sliders";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";

const banners = [banner1, banner2, banner3, banner4];

const Banner = () => {
  return (
    <section className="container mx-auto my-10">
      <div>
        <Sliders banners={banners}></Sliders>
      </div>
    </section>
  );
};

export default Banner;
