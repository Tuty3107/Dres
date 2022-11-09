import HeadlessTippy from "@tippyjs/react/headless";
import { SubProps } from "./NavProps";

function Submenu({ children, items }: SubProps) {
  const renderItems = () => {
    return (
      <ul className="lg:bg-black lg:text-[#ccc] text-sm uppercase p-2">
        {items.map((item) => (
          <li key={item.id} className="flex cursor-pointer hover:text-white">
            {item.srcFlgs && 
            <img className="p-1" alt="flags" src={process.env.PUBLIC_URL + `${item.srcFlgs}`} />}
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <HeadlessTippy
      appendTo={() => document.body}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div
          tabIndex={-1}
          {...attrs}
          style={{
            zIndex: "-10px",
            position: "absolute",
            top: "-35px",
            left: "-50px",
            width: "150px",
          }}
        >
          {renderItems()}
        </div>
      )}
    >
      <div>{children}</div>
    </HeadlessTippy>
  );
}

export default Submenu;
