import React from "react";
import chart from "../assets/Pie Chart.png";
import right from "../assets/rightarrow.png";
import down from "../assets/downarrow.png";

const Detail = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 justify-between">
      <div className="flex flex-col px-10 py-6 lg:px-15 lg:py-10 gap-6 justify-between text-black bg-white rounded-3xl">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[18px]">Top products</h2>
          <p className="flex items-center gap-2 text-[14px] text-[#858585]">
            May-June 2021{" "}
            <img src={down} className="w-[8px] h-[5px]" alt="down" />
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-16">
          <img
            src={chart}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[145px] lg:h-[145px]"
            alt="chart1"
          />
          <div className="flex flex-col justify-between">
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full w-[11px] h-[11px] bg-[#98D89E] mb-3" />
              <div className="flex flex-col justify-between">
                <h2 className="font-bold text-[12px] sm:text-[14px]">
                  Basic Tees
                </h2>
                <p className="text-[#858585] text-[12px] font-lato">55%</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full w-[11px] h-[11px] bg-[#F6DC7D] mb-3" />
              <div className="flex flex-col justify-between">
                <h2 className="font-bold text-[12px] sm:text-[14px]">
                  Custom Short Pants
                </h2>
                <p className="text-[#858585] text-[12px] font-lato">31%</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full w-[11px] h-[11px] bg-[#EE8484] mb-3" />
              <div className="flex flex-col justify-between">
                <h2 className="font-bold text-[12px] sm:text-[14px]">
                  Super Hoodies
                </h2>
                <p className="text-[#858585] text-[12px] font-lato">14%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-10 py-6 lg:px-20 lg:py-10 gap-6 justify-between text-black bg-white rounded-3xl">
        <div className="flex justify-between w-full items-center relative">
          <h2 className="font-bold text-[18px]">Today's schedule</h2>
          <p className="flex  absolute right-0 gap-1 text-[14px] text-[#858585]">
            See All <img src={right} className="w-2 h-2 items-center mt-2" alt="right" />
          </p>
        </div>
        <div className="flex justify-start gap-4">
          <div className="bg-[#9BDD7C] w-[5px] h-[66px]" />
          <div className="flex flex-col justify-between font-lato">
            <h2 className="font-bold text-[#666666] text-[12px] lg:text-[14px]">
              Meeting with suppliers from Kuta Bali
            </h2>
            <p className="text-[12px] text-[#999999]">14.00-15.00</p>
            <p className="text-[12px] text-[#999999]">
              at Sunset Road, Kuta, Bali
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4">
          <div className="bg-[#6972C3] w-[5px] h-[66px]" />
          <div className="flex flex-col justify-between font-lato">
            <h2 className="font-bold text-[#666666] text-[12px] lg:text-[14px]">
              Check operation at Giga Factory 1
            </h2>
            <p className="text-[12px] text-[#999999]">18.00-20.00</p>
            <p className="text-[12px] text-[#999999]">at Central Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
