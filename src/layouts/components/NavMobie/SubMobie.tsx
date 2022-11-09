import { SubProps } from "../Navbar/NavProps";

function SubMobie({ items, dropdown }: SubProps) {
  return (
    <ul className="bg-white text-sm text-black"
      style={dropdown ? { display: "block" } : { display: "none" }}>
      {items.map(item => (
        <li key={item.id} className="flex cursor-pointer hover:text-[#f26b38]">
          {item.srcFlgs && <img className="p-1" alt="flags" src={item.srcFlgs}/>}
          <span>{item.content}</span>
        </li>
      ))}
    </ul>
  );
}

export default SubMobie;
