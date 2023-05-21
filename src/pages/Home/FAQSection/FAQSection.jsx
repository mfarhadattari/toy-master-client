import React, { useEffect, useState } from "react";
import FAQCard from "./FAQCard";
import faqBanner from "../../../assets/FAQ.avif";
import Skeleton from "react-loading-skeleton";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://mfarhad-toy-master.vercel.app/faq-data")
      .then((res) => res.json())
      .then((data) => {
        setFaqData(data);
        setLoading(false);
      });
  }, []);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="container my-20 mx-auto">
      <div className="divider w-3/4 mx-auto after:bg-pink-600 before:bg-pink-600 my-10">
        <h1 className="text-lg md:text-4xl font-source-serif-pro font-bold italic">
          | Frequently Asked Questions |
        </h1>
      </div>

      {loading ? (
        <div className="md:w-3/4 mx-auto">
          <Skeleton count={10} />
        </div>
      ) : (
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mt-20 md:w-3/4 p-5 mx-auto">
          <div className="space-y-5 w-full">
            {faqData.map((faq, index) => (
              <FAQCard
                key={index}
                index={index}
                faq={faq}
                handleToggle={handleToggle}
                expandedIndex={expandedIndex}
              ></FAQCard>
            ))}
          </div>
          <div className="w-full">
            <img src={faqBanner} className="w-fit mx-auto h-[400px]" />
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQSection;
