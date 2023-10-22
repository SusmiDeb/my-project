import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className=" lg:mt-[60px] w-full h-screen max-auto text-center flex flex-col justify-center item-center"> {/* max-w-[1200px] */}
        <p className="text-[#c6fbfc] fonr-bold p-2 ">
          A web framework provides a structure
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 ">
          Laravel is a web application
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Fast, flexible financial for
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 "
            strings={["BTB", "BTC", "SASS"]} 
            typeSpeed={120}
            backSpeed={140} 
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold  text-gray-500 ">Laravel strives to provide an amazing developer experience</p>
          <button className="bg-[#c6fbfc] w-[200px] rounded-lg font-bold my-6 mx-auto py-3  text-black">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
