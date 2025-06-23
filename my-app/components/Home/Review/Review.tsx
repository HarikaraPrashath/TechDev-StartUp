import React from "react";
import ClientReviewCard from "./ClientReviewCard";

const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div data-aos="fade-up" data-aos-duration="3000">
        <h1 className="text-center text-2xl text-blue-950 font-bold">
          What our Happy Client Says
        </h1>
        <p className="mt-3 text-center text-lg font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi amet
          sint corporis nobis reprehenderit ut labore corrupti vero voluptatum
          placeat?
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=""
        >
          <ClientReviewCard
            image="/images/u1.jpg"
            name="Jasica Man"
            rating="4.7"
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=""
        >
          <ClientReviewCard
            image="/images/u2.jpg"
            name="Jack ma"
            rating="4.7"
          />
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=""
        >
          <ClientReviewCard
            image="/images/u3.jpg"
            name="Den Dennial"
            rating="4.7"
          />
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=""
        >
          <ClientReviewCard
            image="/images/u4.jpg"
            name="Janny Jack"
            rating="4.7"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
