import Sliders from "../../components/Sliders";

import banner1 from "../../assets/banners/banner1.avif";
import banner2 from "../../assets/banners/banner2.avif";
import banner3 from "../../assets/banners/banner3.avif";
import banner4 from "../../assets/banners/banner4.avif";

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
