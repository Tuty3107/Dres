import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";

function InnerHeader() {

  return (
    <div className="hidden lg:block">
      <article className="mx-auto text-center">
        <div className="tracking-widest text-white text-4xl font-bold uppercase">
          Best restaurant in Hanoi Old Quater
          <div className="my-4 text-white">
            <div className="decorPrimary"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="decorPrimary"></div>
          </div>
          <Button classes="primary" to="/reserve">Reserve Now</Button>
          <p className="text-[#f26b38] font-bold my-2 relative -z-10">
            Open hours: Mon - Sun : 11:30am -20:30pm
          </p>
        </div>
      </article>
    </div>
  );
}

export default InnerHeader;
