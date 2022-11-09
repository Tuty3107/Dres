import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MenuProps } from "../Navbar/NavProps";
import SubMobie from "./SubMobie";

function MenuMobie({ items }: MenuProps) {
  const [dropdown, setdropdown] = React.useState(false);
  return (
    <>
      {items.submenu ? (
        <li key={items.id} className="lg:text-white px-3 pt-5 cursor-pointer relative after:absolute after:w-full after:h-[1px] after:mt-6 after:bg-slate-500 after:left-0"
          onMouseOut={() => setdropdown(false)} onMouseOver={() => setdropdown(true)}>
          <Link to={`${items.path}`}>{items.content}</Link>
          <FontAwesomeIcon icon={faAngleDown} className="float-right" />
          <SubMobie items={items.submenu} dropdown={dropdown} />
        </li>
      ) : (
        <li key={items.id} className="lg:text-white first:text-[#f26b38] px-3 pt-5 cursor-pointer relative after:absolute after:w-full after:h-[1px] after:bg-slate-500 after:mt-6 after:left-0">
          <Link to={`${items.path}`}>{items.content}</Link>
        </li>
      )}
    </>
  );
}

export default MenuMobie;
