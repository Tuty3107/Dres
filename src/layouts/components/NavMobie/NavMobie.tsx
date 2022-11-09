import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuMobie from "./MenuMobie";
import useFirestore from "../../../hooks/useFirestore";

function NavMobie() {
  const listNavItems = useFirestore("navItems");
  const btnRef = React.useRef(null);
  const overlay: any = document.getElementById("menu");
  let navMobie: any;
  React.useEffect(() => {
    navMobie = document.getElementById("navMobie");
  });
  const openNavMobie = () => {
    navMobie.style.transform = "translateX(0)";
    overlay.style.display = "block";
  };
  const closeModal = () => {
    navMobie.style.transform = "translateX(-100%)";
    overlay.style.display = "none";
  };
  return (
    <>
      <div
        id="menu"
        onClick={closeModal}
        className="fixed hidden top-0 right-0 bottom-0 left-0 max-h-full items-center bg-black opacity-[0.4]"
      ></div>
      <div className="block lg:hidden">
        <div className="w-full inline-block p-4">
          <div className="logo inline-block">
            <img
              alt="logo"
              className="w-24 h-14"
              src="https://duongsrestaurant.com/wp-content/uploads/2020/04/duong-restaurant-logo-white.png"
            />
          </div>
          <button
            ref={btnRef}
            onClick={openNavMobie}
            className="float-right mt-3 cursor-pointer"
          >
            <span className="block my-1 w-5  h-[2px] bg-white"></span>
            <span className="block my-1 w-8 h-[2px] bg-white"></span>
            <span className="block my-1 w-10 h-[2px] bg-white"></span>
          </button>
        </div>
        <nav
          id="navMobie"
          className="md:block max-w-[80%] md:max-w-[80%] py-10 m-0 
          text-sm font-bold uppercase relative -top-32 z-50
          bg-black text-white -translate-x-full"
        >
          <ul className="lg:flex lg:text-center relative">
            {listNavItems.map((item, index) => (
              <MenuMobie key={index} items={item} />
            ))}
          </ul>
          <div className="text-white">
            <FontAwesomeIcon className="p-1 w-6 h-6 my-2" icon={faFacebook} />
            <FontAwesomeIcon className="p-1 w-6 h-6 my-2" icon={faInstagram} />
            <FontAwesomeIcon className="p-1 w-6 h-6 my-2" icon={faYoutube} />
            <FontAwesomeIcon className="p-1 w-6 h-6 my-2" icon={faLinkedin} />
            <FontAwesomeIcon className="p-1 w-6 h-6 my-2" icon={faPinterest} />
            <FontAwesomeIcon className="p-1 w-6 h-6 my-2" icon={faTwitter} />
          </div>
          <div className="w-16 h-16 rounded-full bg-white">
            <a>
              <span className="text-xs block -rotate-12 text-black">
                <span className="block pt-4">Reserve</span>
                <span className="block text-center">Now</span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavMobie;
