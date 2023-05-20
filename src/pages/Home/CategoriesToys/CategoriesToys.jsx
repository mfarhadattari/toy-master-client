import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabDisplay from "./TabDisplay";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CategoriesToys = () => {
  const [loading, setLoading] = useState(true);
  /* ----------------------------------------------------------------
        ! --------------------- categories data ------------------ 
    ---------------------------------------------------------------*/
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="container mx-auto my-20">
      <div className="divider w-3/4 mx-auto after:bg-pink-600 before:bg-pink-600 my-10">
        <h1 className="text-4xl text-center font-source-serif-pro font-bold italic">
          | Toys Category |
        </h1>
      </div>
      {loading ? (
        <Skeleton count={3} />
      ) : (
        <Tabs>
          <TabList className="flex justify-center items-center flex-wrap">
            {categories.map((category) => (
              <Tab key={category._id} selectedClassName="text-pink-600">
                <button className="hover:text-pink-600 font-semibold">
                  {category.name}
                </button>
              </Tab>
            ))}
          </TabList>
          {categories.map((category) => (
            <TabPanel key={category._id}>
              <TabDisplay category={category.name}></TabDisplay>
            </TabPanel>
          ))}
        </Tabs>
      )}
    </section>
  );
};

export default CategoriesToys;
