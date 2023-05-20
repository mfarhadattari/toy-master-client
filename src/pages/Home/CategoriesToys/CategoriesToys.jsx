import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabDisplay from "./TabDisplay";

const CategoriesToys = () => {
  /* ----------------------------------------------------------------
        ! --------------------- categories data ------------------ 
    ---------------------------------------------------------------*/
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <section className="container mx-auto my-20">
      <div className="divider w-3/4 mx-auto after:bg-pink-600 before:bg-pink-600 my-10">
        <h1 className="text-4xl text-center font-source-serif-pro font-bold italic">
          | Toys Category |
        </h1>
      </div>
      <Tabs>
        <TabList className="w-fit mx-auto">
          {categories.map((category) => (
            <Tab key={category._id}>{category.name}</Tab>
          ))}
        </TabList>
        {categories.map((category) => (
          <TabPanel key={category._id}>
            <TabDisplay category={category.name}></TabDisplay>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
};

export default CategoriesToys;
