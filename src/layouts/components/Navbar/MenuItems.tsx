import { Link } from "react-router-dom";
import Submenu from "./Submenu";
import { MenuProps } from "./NavProps";

function MenuItems({ items }: MenuProps) {
  return (
    <>
      {items.submenu ? (
        <Submenu key={items.id} items={items.submenu}>
          <li className="lg:text-white px-1 pt-5 cursor-pointer">
            <Link to={`${items.path}`}>{items.content}</Link>
          </li>
        </Submenu>
      ) : (
        <li key={items.id} className="lg:text-white px-1 pt-5 cursor-pointer">
          <Link to={`${items.path}`}>{items.content}</Link>
        </li>
      )}
    </>
  );
}

export default MenuItems;
