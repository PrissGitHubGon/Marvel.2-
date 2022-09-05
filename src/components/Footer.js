import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/img/icon.png";
function Footer() {
  // Fonction qui renvoie l'année en cours
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <footer className=" bg-black text-white  bg-gradient-to-r from-green-400 to-blue-500  md:flex justify-center ">
      <div className="footer  bg-cover bg-no-repeat bg-center relative overflow-hidden h-32    w-full bg-slate-300 bg-black text-white  bg-gradient-to-r from-green-400 to-blue-500  md:flex justify-center ">
        <div className="footer-body  bg-black/75 absolute box-border w-full duration-1000 bottom-0 h-8">
          <div className="footer-content p-2 md:p-8">
            <div className="flex justify-center">
              <button
                className="mr-9 text-white-800 text-2xl md:text-4xl "
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/priscillia-gon%C3%A7alves-098285217/"
                  )
                }
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
              <button
                onClick={() =>
                  openInNewTab("https://github.com/PrissGitHubGon/Marvel.2-")
                }
                className="text-white-800 text-2xl md:text-4xl mr-9"
              >
                <i className="fa-brands fa-github"></i>
              </button>
              <button
                onClick={() =>
                  openInNewTab(
                    "https://priscillia-goncalves-portfolio.netlify.app"
                  )
                }
                className=" w-10 "
              >
                <img src={icon} alt="" />
              </button>
            </div>
            <div className="text-center text-white-700 py-5 ">
              © {getCurrentYear()} Made by :
              <Link to="text-white-800" href="">
                <span> </span> Priscillia Gonçalves
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
