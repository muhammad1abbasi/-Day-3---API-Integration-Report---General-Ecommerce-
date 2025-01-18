import Image from "next/image";

import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto max-w-full ">
      <div className="flex justify-evenly items-center bg-slate-100">
        <div className="flex justify-evenly items-center">
          <div className=" mb-72 hidden md:flex">
            <Image src="lamp.svg" alt="img" width={387} height={387} />
          </div>
          <div className="flex font-josifin flex-col sm:flex-row space-y-3 justify-between items-center">
            <div className="flex flex-col space-y-5 justify-center items-center sm:justify-start sm:items-start">
              <p className="text-pink-500 font-josifin">
                Best Furniture For Your Castle....
              </p>
              <h1 className="text-[53px] font-josifin">
                New Furniture Collection <br /> Trends in 2020
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing <br />
                in phasellus non in justo.
              </p>
              <button className="bg-pink-500 w-[163px] h-[50px] items-center  text-white">
                Shop Now
              </button>
              <div className="justify- items-center">
                <Image
                  src="threedots.svg"
                  alt="img"
                  width={66.7}
                  height={66.7}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-20 hidden sm:flex">
          <Image src="sofa.svg" alt="img" width={629} height={629} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
