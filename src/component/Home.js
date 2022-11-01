import React from "react";

const Home = () => {
  return (
    <div className="mt-60 grid md:grid-cols-2 container text-[20px]">
      <div>
        {/* <div className="text-[#7E64ED] font-medium text-2xl tracking-[0.2em]">
          Decentrame
        </div> */}
        <span className="text-7xl font-semibold tracking-[0.1em]">
          Decentrame
        </span>
        <div className="Home mt-5">
          Your Portal to Web3 and Decentralization
        </div>
        {/* <div className="text-[#24242496]">
          Nec feugiat nisl pretium fusce id. Nibh tortor id aliquet lectus proin
          nibh nisl condimentum consequat.
        </div> */}

        {/* <button className="bg-[#7E64ED] text-white p-4 rounded-lg">
          Get Started >
        </button> */}
      </div>
      <div className="flex justify-center">
        <iframe className="w-[500px]" src="https://decentrame.github.io/particle-js/"></iframe>
      </div>
    </div>
  );
};

export default Home;
