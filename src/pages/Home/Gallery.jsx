import AOS from "aos";
import "aos/dist/aos.css";
import gallery1 from "../../assets/gallery/gallery1.avif";
import gallery2 from "../../assets/gallery/gallery2.avif";
import gallery3 from "../../assets/gallery/gallery3.avif";
import gallery4 from "../../assets/gallery/gallery4.avif";
import gallery5 from "../../assets/gallery/gallery5.avif";
import gallery6 from "../../assets/gallery/gallery6.avif";
import gallery7 from "../../assets/gallery/gallery7.avif";
import gallery8 from "../../assets/gallery/gallery8.avif";
import gallery9 from "../../assets/gallery/gallery9.avif";
import gallery10 from "../../assets/gallery/gallery10.avif";
import gallery11 from "../../assets/gallery/gallery11.avif";
import gallery12 from "../../assets/gallery/gallery12.avif";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

AOS.init();

const Gallery = () => {
  return (
    <section className="container mx-auto my-20 p-5">
      <div className="divider w-3/4 mx-auto after:bg-pink-600 before:bg-pink-600 my-10">
        <h1 className="text-7xl text-center font-source-serif-pro font-bold italic">| Photo Gallery |</h1>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-5 justify-center items-center gap-5 mt-20">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration={5000}
            className="mx-auto"
          >
            <img
              src={img}
              className="w-[300px] h-[300px] rounded-lg border shadow-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
