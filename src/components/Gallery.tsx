import useFirestore from "../hooks/useFirestore";
import Button from "./Button";

interface galProps {
  id:number;
  src:string
}
//320 x215pxs
function Gallery() {
  const listGallItems = useFirestore("galleryItems");
  return (
    <div className="w-full text-center">
      <div className="mx-auto text-center my-10">
        <Button classes="medium">Reserve Now</Button>
      </div>
      <label className="lg:text-6xl block">Gallery</label>
      <div className="lg:w-[1180px] mx-auto py-4 font-light tracking-widest">
        <div className="relative inline-block text-black text-lg text-center uppercase
        before:absolute before:block before:h-[1px] before:lg:w-[310px] before:bg-black before:mb-2 
        after:absolute  after:block  after:h-[1px]  after:lg:w-[310px]  after:bg-black after:mb-2 ">
          duong restaurant photos
        </div>
      </div>
      <figure className="lg:w-[1180px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2">
        {listGallItems.map((item: galProps) => (
          <img alt="gallery" key={item.id} src={process.env.PUBLIC_URL + `${item.src}`} />
        ))}
      </figure>
    </div>
  );
}

export default Gallery;
