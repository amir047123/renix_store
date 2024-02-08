import React from "react";
import PageHeader from "../components/ui/PageHeader";
import Shop from "../components/shop/Shop";

const Home = () => {
  return (
    <main className="bg-[#f5f5f5] ">
      <PageHeader />
      <Shop />
    </main>
  );
};

export default Home;
