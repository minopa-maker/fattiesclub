import React from "react";

const HeroSection = ({ onJoinClick }) => {
  return (
    <section className="-mb-7 text-center p-10 text-white h-screen flex flex-col items-center justify-center ">
      <h1 className="sm: text-4xl p-5  md:text-8xl font-bold mt-5">
        STRONGER, TOGETHER - <br /> WELCOME TO THE FATTIES CLUB.
      </h1>
      <div className="sm: text-base  md:mt-5 text-3xl mb-2">
        <h2>Struggling with losing weight?</h2>
        <h2>No reuslts, no support?</h2>
        <h2>We've been there - Let's change together!</h2>
      </div>
      <button
        onClick={onJoinClick}
        className="mt-6 bg-orange-500 px-6 py-2 text-white font-bold text-2xl rounded cursor-pointer hover:bg-orange-600 transition duration-100 -mb-6"
      >
        JOIN NOW
      </button>
    </section>
  );
};

export default HeroSection;
