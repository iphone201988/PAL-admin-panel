import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay with less blur and lower opacity */}
      <div className="absolute inset-0 bg-[#1e2931]/40 backdrop-blur-[1.5px]"></div>

      {/* Loader content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></div>
          {/* <img
            src="../vite.svg"
            className="rounded-full h-14 w-14"
            alt="loading"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
