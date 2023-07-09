import React from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Detail from "../components/Detail";
import Header from "../components/Header";
import Chart1 from "./Chart1";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between gap-4 lg:gap-6 w-full py-2">
      <Header />
      <Card />
      <Chart />
      <Detail />
    </div>
  );
};

export default Hero;
