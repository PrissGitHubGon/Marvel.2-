import React from "react";
import Hulk from "../assets/img/hulk-5959620_960_720.png";
import Captain from "../assets/img/captain-america-g7c018314b_640.png";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500  md:flex justify-center items-center lg:gap-40">
      <a
        href="/characters"
        className="md:brightness-50 md:hover:brightness-100 cursor-pointer"
      >
        <img src={Hulk} alt="Hulk" className="h-80 " />
        <p className="text-center text-4xl fontFamily text-white">
          Personnages
        </p>
      </a>
      <a
        href="/comics"
        className=" md:brightness-50 md:hover:brightness-100 cursor-pointer"
      >
        <img src={Captain} alt="Captain" className="h-80  " />
        <p className="text-center text-4xl fontFamily text-white">Comics</p>
      </a>
    </div>
  );
}

export default Home;
