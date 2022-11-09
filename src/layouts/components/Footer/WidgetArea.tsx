import useFirestore from "../../../hooks/useFirestore";

interface itemResProps {
  id:number;
  address:string;
  nameRestaurant:string;
  picSrc:string;
  tel:string;
}
function WidgetArea() {
  const itemsRes = useFirestore("itemsRes");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {itemsRes && itemsRes.map((item: itemResProps) => (
        <aside key={item.id} className="bg-footerColor mx-auto pt-10 relative
        first:after:absolute first:after:top-0 first:after:mt-10 first:after:border-r-2 first:after:border-dashed first:after:h-3/4 first:after:border-white first:after:right-0
        last:before:absolute last:before:top-0 last:before:mt-10 last:before:border-r-2 last:before:border-dashed last:before:h-3/4 last:before:border-white
        ">
          <div className="px-20 pb-10">
            <a href="#">
              <img alt="widgetarea" className="object-fill" src={process.env.PUBLIC_URL + `${item.picSrc}`} />
            </a>
          </div>
          <div className="text-white text-center text-sm px-24 py-10">
            <h4 className="font-bold uppercase py-2">{item.nameRestaurant}</h4>
            <p>{item.address}</p>
            <p>Tel: {item.tel}</p>
          </div>
        </aside>
      ))}
    </div>
  );
}

export default WidgetArea;
