import React, { useState } from "react";
import { Link } from "react-router-dom";
import firestar from "../assets/img/firestar-6205262_1280.png";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleIsOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeSideBar = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="flex items-center justify-between py-6 pl-4 bg-gray-800 text-white bg-[url('https://res.cloudinary.com/dl6flp50k/image/upload/v1659953347/Marvel-Wallpaper-HD-41300_z2bvtd.jpg')]  bg-cover bg-center">
      <a href="/" className="ml-6  h-20 w-20">
        <svg
          className="md:ml-6 h-20 w-20 md:h-28 md:w-28"
          enable-background="new -215.19 -86.608 1000 402.473"
          height="402.473"
          viewBox="-215.19 -86.608 1000 402.473"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m-215.19-86.608h1000v402.473h-1000z" fill="#ed1d24" />
          <path
            d="m631.063 7.184v-61.603h-171.419l-28.191 205.803-27.896-205.802h-61.817l6.925 54.915c-7.14-14.068-32.449-54.915-88.146-54.915-.367-.024-61.901 0-61.901 0l-.237 299.974-45.057-299.974-80.959-.047-46.612 310.814.024-310.769h-77.483l-27.933 174.585-27.208-174.583h-77.508v337.906h61.036v-162.87l27.764 162.866h32.449l27.374-162.866v162.866h117.667l7.14-51.995h47.374l7.116 51.995 115.521.071h.094v-.071h.072.072v-109.685l14.162-2.063 29.319 111.819h.072 59.61.07l-.024-.071h.106.072l-38.475-131.057c19.498-14.422 41.513-51.047 35.654-86.084v-.023c.07.474 36.316 217.38 36.316 217.38l71.065-.216 48.559-306.284v306.285h115.236v-60.773h-54.7v-77.496h54.7v-61.698h-54.7v-76.334zm-534.798 170.721 16.758-144.461 17.4 144.461zm177.419-66.704c-4.697 2.278-9.595 3.417-14.363 3.417v-108.691c.083 0 .179-.022.297-.022 4.78-.024 40.419 1.446 40.419 53.774 0 27.373-12.121 44.62-26.353 51.522m480.36 111.464v60.772h-112.414v-337.902h60.526v277.13z"
            fill="#fff"
          />
        </svg>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden mr-7">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => handleIsOpen((prev) => !prev)}
          >
            <img src={firestar} alt="" className="h-28 w-28 " />
            <p className="text-center bg-red-600 border-2 border-white rounded-lg hover:bg-red-800 fontFamily">
              Click here{" "}
            </p>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 h-screen"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-fuchsia-900  sm:text-fuchsia-500 sm:hover:text-fuchsia-700 cursor-pointer "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[300px] text-black  text-2xl fontFamily">
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8">
                <Link to="/characters" onClick={closeSideBar}>
                  Personnages
                </Link>
              </li>
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 ">
                <Link to="/comics" onClick={closeSideBar}>
                  Comics
                </Link>
              </li>
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 text-center ">
                <Link to="/login" onClick={closeSideBar}>
                  <i class="fas fa-user "></i>
                  <p>Connexion</p>
                </Link>
              </li>
              <li className="border-b-2 border-fuchsia-900 sm:border-fuchsia-600  sm:hover:border-fuchsia-800 my-8 text-center">
                <Link to="/registration" onClick={closeSideBar}>
                  <i class="fas fa-user-edit"></i>
                  <p>Inscription</p>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-7 text-4xl fontFamily">
          <li>
            <Link to="/characters">Personnages</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
          <li>
            <Link to="/login">
              <i class="fas fa-user"></i>
            </Link>
          </li>
          <li>
            <Link to="/registration">
              <i class="fas fa-user-edit"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
