import BoxText from "@/components/Helper/BoxText";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Text Content */}
        <div className="lg:col-span-2">
          <BoxText>Our Team</BoxText>
          {/* Heading */}
          <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-800">
            Our Team of Exceptional Talent ,Innovation, and Vision
          </h1>
          {/* description */}
          <p className="mt-4 text-gray-700 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nobis velit eos provident, fugiat sequi quia culpa vitae rerum
            praesentium!
          </p>
          <div className="mt-8">
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out text-lg group-hover:text-white">
                Join with Team
              </span>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className=" sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3">
          <div className="relative overflow-hidden ml-10">
            <Image
              src="/images/t1.jpg"
              alt="team"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute w-[100%] h-[4rem] bottom-0 p-4 bg-rose-500 py-1 rounded-lg text-lg">
              <p className="text-lg text-white font-bold">Obyotive Jhom</p>
              <p className="text-gray-200">(Founder)</p>
            </div>
          </div>

          <div className="relative overflow-hidden ml-10">
            <Image
              src="/images/t2.jpg"
              alt="team"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute w-[100%] h-[4rem] bottom-0 p-4 bg-orange-500 py-1 rounded-lg text-lg">
              <p className="text-lg text-white font-bold">Jasic Martin</p>
              <p className="text-gray-200">(Co-Founder)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
