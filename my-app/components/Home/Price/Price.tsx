import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <h1 className="text-center text-xl text-blue-950 font-bold">
        Choose The Plan That's Right For You
      </h1>
      <p className="mt-3 items-center text-lg font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quod,
        nulla harum assumenda molestiae qui? Quis fuga cumque ad dolore quo
        recusandae praesentium eligendi iusto?
      </p>

      <div className="w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Each PriceCard gets its own grid cell */}
        <div>
          <PriceCard time="3 Month Membership" price="19.99" />
        </div>
        <div>
          <PriceCard time="12 Month Membership" price="39.99" />
        </div>
        <div>
          <PriceCard time="48 Month Membership" price="79.99" />
        </div>
      </div>
    </div>
  );
};

export default Price;
