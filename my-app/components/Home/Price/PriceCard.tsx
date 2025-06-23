import React from "react";
type props = {
  time: string;
  price: string;
};
const PriceCard = ({ time, price }: props) => {
  return (
    <div className="bg-white rounded-lg p-8 relative border-b-4 border-t-2 border-rose-300 ">
      <h1 className="text-sky-500 text-xl font-bold">{time}</h1>
      <p className="mt-4 text-gray-600 text-sm     font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
        aperiam cumque officia veritatis doloribus debitis quibusdam quidem
        perspiciatis aut eligendi.
      </p>
      {/* Price */}
      <div className="mt-8 ">
        <div className="text-gray-700 font-semibold text-lg ">
          <span className="text-4xl font-bold text-black ">${price}</span>{" "}
          /Month
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-sm relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition duration-300 ease-out bg-gradient-to-r from-blue-600 to-red-500 rounded-xl shadow-lg hover:from-red-600 hover:to-blue-500"
        >
          Upgrade Package
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
