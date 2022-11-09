import Button from "../../../components/Button";
import ServiceItems from "./ServiceItems";
import useFirestore from "../../../hooks/useFirestore";

interface ItemsSerProps {
  id:number;
  content:string;
  path:string;
  title:string;
  urlSer:string;
}
function Service() {
  const listItemsSer = useFirestore("service");

  return (
    <>
      <h3 className="lg:text-5xl text-center">Best Restaurant In Hanoi</h3>
      <div className="mx-auto text-center my-10">
        <Button classes="medium">Reserve Now</Button>
      </div>
      <div className="bg-serviceColor w-full lg:h-[316px]">
        <div className="lg:w-[1180px] h-full mx-auto">
          <h3 className="uppercase text-white text-center lg:text-4xl py-5">
            Our special Service
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {listItemsSer && listItemsSer.map((item: ItemsSerProps) => (
              <ServiceItems
                key={item.id}
                content={item.content}
                title={item.title}
                urlSer={process.env.PUBLIC_URL + `${item.urlSer}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto text-center my-10">
        <Button classes="medium">Reserve Now</Button>
      </div>
    </>
  );
}

export default Service;
