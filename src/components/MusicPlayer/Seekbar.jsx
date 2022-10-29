import React from 'react';

const Seekbar = (props) => {
  // converts the time to format 0:00

  return (
    <div className="hidden sm:flex flex-row items-center">
      <p className="text-white"></p>
      <input
        type="range"
        step="any"
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white"></p>
    </div>
  );
};

export default Seekbar;
