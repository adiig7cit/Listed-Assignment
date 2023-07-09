import React from "react";
import likes from "../assets/like.png";
import transactions from "../assets/total_transactions_icon.png";
import people from "../assets/people.png";
import camera from "../assets/camera.png";

const Card = () => {
  return (
    <div className="flex flex-wrap w-full lg:justify-between items-center gap-6 justify-center lg:gap-0">
      <div className="flex flex-col text-black py-5 bg-[#DDEFE0] w-[140px] h-[100px] sm:w-[170px] md:w-[221.053px] md:h-[120px] rounded-3xl px-6">
        <div className="flex justify-end">
          <img src={camera} className="w-[26.4px] h-[24px]" alt="camera" />
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-lato text-[12px] sm:text-[14px]">Total Revenues</p>
          <h1 className="font-bold text-[16px] md:text-[24px]">$2,129,430</h1>
        </div>
      </div>

      <div className="flex flex-col text-black py-5 bg-[#F4ECDD] w-[140px] h-[100px] sm:w-[170px] md:w-[221.053px] md:h-[120px] rounded-3xl px-6">
        <div className="flex justify-end">
          <img
            src={transactions}
            className="w-[20.792px] h-[24px]"
            alt="camera"
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-lato text-[11px] sm:text-[14px]">
            Total Transactions
          </p>
          <h1 className="font-bold text-[16px] md:text-[24px]">1520</h1>
        </div>
      </div>

      <div className="flex flex-col text-black py-5 bg-[#EFDADA] w-[140px] h-[100px] sm:w-[170px] md:w-[221.053px] md:h-[120px] rounded-3xl px-6">
        <div className="flex justify-end">
          <img src={likes} className="w-[23.298px] h-[24px]" alt="camera" />
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-lato text-[14px]">Total Likes</p>
          <h1 className="font-bold text-[18px] md:text-[24px]">9721</h1>
        </div>
      </div>

      <div className="flex flex-col text-black py-5 bg-[#DEE0EF] w-[140px] h-[100px] sm:w-[170px] md:w-[221.053px] md:h-[120px] rounded-3xl px-6">
        <div className="flex justify-end">
          <img src={people} className="w-[36.816px] h-[24px]" alt="camera" />
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-lato text-[14px]">Total Users</p>
          <h1 className="font-bold text-[18px] md:text-[24px]">892</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
