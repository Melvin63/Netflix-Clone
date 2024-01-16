import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-10 md:pt-[10%]  absolute text-white bg-gradient-to-r from-black">
      <h1 className=" pt-8 text-2xl font-bold  md:text-6xl">{title}</h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="pt-4">
        <button className="  bg-white text-black p-2 text-xs px-3  md:p-4  md:px-12  md:text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 text-xs px-3  md:p-4 md:px-12 md:text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
