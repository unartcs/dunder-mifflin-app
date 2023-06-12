import React from "react";

function Hero() {
  const heroBg = `${process.env.PUBLIC_URL}/imgs/herobg.png`;
  return (
    <div className="hero-wrapper flex flex-col my-10 items-center bg-black text-white h-[80vh] justify-center relative z-[-2]">
      <div
        className="hero-bg bg-no-repeat bg-cover w-full h-full p-20 flex flex-col items-center justify-center opacity-80 absolute z-[-1]"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      <div className="hero-content flex flex-col gap-5 justify-center mx-20 items-center bg-[rgb(10,20,20)] w-full p-10 bg-opacity-60">
        <div className="hero-logo-wrapper flex flex-col border-b-2 border-yellow-400 ">
          <div className="hero-logo text-3xl font-Impact">
            Dunder Mifflin Inc
          </div>
          <div className="hero-sublogo text-2xl font-Helvetica tracking-widest">
            Paper Company
          </div>
        </div>
        <div className="hero-text  items-center w-80 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio
          dolor cupiditate deserunt rerum ut quam iure debitis. Perferendis
          maxime minima officiis! Cupiditate aliquid ab quos, dignissimos ipsam
          non qui?
        </div>
      </div>
    </div>
  );
}

export default Hero;
