import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MenuItems from "./MenuItems";
import useFirestore from "../../../hooks/useFirestore";

function Navbar() {
  const listNavItems = useFirestore("navItems");
  React.useEffect(() => {
    let navElem: HTMLElement | any = document.getElementById("nav");
    let icons: HTMLElement | any = document.getElementById("icons");
    const scrollFunction = () => {
      if (document.body.scrollTop > 40 ||document.documentElement.scrollTop > 40) {
        navElem.style.backgroundColor = "#333";
      } else {
        navElem.style.backgroundColor = "transparent";
      }
    };

    window.onscroll = function () {
      scrollFunction();
    };

    return () => window.removeEventListener("scroll", scrollFunction);
  });

  return (
    <div id="nav" className="lg:w-full lg:fixed relative top-0 lg:pb-7">
      <div className="hidden lg:block lg:pt-10">
        <nav className="flex justify-between lg:w-[73.75rem] mx-auto text-sm font-bold uppercase">
          <div className="logo">
            <img
              alt="logo"
              className="w-24 h-14"
              src="https://duongsrestaurant.com/wp-content/uploads/2020/04/duong-restaurant-logo-white.png"
            />
          </div>
          <ul className="lg:flex lg:text-center">
            {listNavItems.map((item, index) => (
              <MenuItems key={index} items={item} />
            ))}
          </ul>
          <div id="icons" className="text-white">
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
    </div>
  );
}

export default Navbar;
