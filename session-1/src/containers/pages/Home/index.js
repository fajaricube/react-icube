import React from "react";
import Slider from "./../../../component/slider";
import Widget from "../../../component/categoryWidget";

const Home = () => {
  return (
    <main className="my-8">
      <div className="slider pb-20">
        <Slider />
      </div>
      <Widget title="Jewelery" category_name="jewelery" />
      <Widget title="Best Seller" category_name="bestseller" />
    </main>
  );
};

export default Home;
