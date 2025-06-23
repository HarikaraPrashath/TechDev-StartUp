import BoxText from "@/components/Helper/BoxText";
import React from "react";
import {
  FaRocket,
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaFillDrip,
  FaLightbulb,
} from "react-icons/fa";

const Service = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
      <div data-aos="fade-left">
          <BoxText>Our Service</BoxText>
        {/* heading */}
        <h1 className="mt-4 text-xl md:text-3xl font-bold text-gray-800">
          Our Services Made for You
        </h1>
        {/* Description */}
        <p className="mt-4 w-full text-lg sm:w-[80%] md:w-[70%] lg:w-[60%] xl-w[50%] text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          deleniti, ad fugiat dolores nostrum perspiciatis dolor illo quaerat,
          totam minima ratione, debitis modi. Quae autem earum commodi non
          pariatur neque.
        </p>
      </div>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start gap-y-12 mt-16">
          {/* 1st Service */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex items-start space-x-5 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-200 bg-opacity-40">
              <FaRocket className="w-6 h-6 text-orange-500 mx-4" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-800">Start Up</p>
              <p className="text-sm text-gray-600">
                Kickstart your startup with scalable, reliable, and modern
                solutions.
              </p>
            </div>
          </div>

          {/* 2nd Service */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex items-start space-x-5 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-200 bg-opacity-40">
              <FaBriefcase className="w-6 h-6 text-orange-500 mx-4" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">Business</p>
              <p className="text-sm text-gray-600">
                Grow your business with tools tailored for performance and
                efficiency.
              </p>
            </div>
          </div>

          {/* 3rd Service */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex items-start space-x-5 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-200 bg-opacity-40">
              <FaShoppingCart className="w-6 h-6 text-orange-500 mx-4" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">E-commerce</p>
              <p className="text-sm text-gray-600">
                Boost your sales with a powerful and seamless e-commerce
                platform.
              </p>
            </div>
          </div>

          {/* 4th Service */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex items-start space-x-5 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-200 bg-opacity-40">
              <FaPalette className="w-6 h-6 text-orange-500 mx-4" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">Digital Design</p>
              <p className="text-sm text-gray-600">
                Bring your vision to life with pixel-perfect, modern designs.
              </p>
            </div>
          </div>

          {/* 5th Service */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex items-start space-x-5 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-200 bg-opacity-40">
              <FaFillDrip className="w-6 h-6 text-orange-500 mx-4" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">
                Unlimited Colors
              </p>
              <p className="text-sm text-gray-600">
                Customize your brand identity with limitless color combinations.
              </p>
            </div>
          </div>

          {/* 6th Service */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex items-start space-x-5 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-pink-200 bg-opacity-40">
              <FaLightbulb className="w-6 h-6 text-orange-500 mx-4" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">
                Strategy Solution
              </p>
              <p className="text-sm text-gray-600">
                We deliver smart solutions to help you tackle strategic
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
