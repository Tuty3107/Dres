import useFirestore from "../../../hooks/useFirestore";
import WidgetArea from "./WidgetArea";
import { itemsFtProps } from "./footerPic";

function Footer() {
  const itemsNavFooter =useFirestore("itemFooter");
  return (
    <div className="lg:w-full bg-black lg:pb-10 lg:mt-20">
      <WidgetArea />
      <div className="lg:w-[37.4rem] mx-auto text-center bg-black">
        <div className="w-[9.375rem] h-[5.625rem] mx-auto text-center my-10">
          <img
            alt="logo"
            className="content-fill"
            src={process.env.PUBLIC_URL + "/images/duong-restaurant-logo-white.png"}
          />
        </div>
        <p className="text-white text-sm">
          Email: info@duongrestaurant.com <br></br>
          Tel: +84 243 636 4567 | Hotline: +84 983 135 782 (Viber/Zalo)
          <br></br>
          Copyright © 2022 Duong's Restaurant. All Rights Reserved. Design by
          4irhotel
          <br></br>
        </p>
        <img
          alt="protectedlogo"
          src={process.env.PUBLIC_URL + "/images/dmca_protected_sml_120n.png"}
          className="mx-auto py-10"
        />
        <br />
        <p className="text-white text-center text-sm">
          Interested travellers:
          {itemsNavFooter.map((item: itemsFtProps)=> (
            <a href="#" key={item.id} className="p-2 hover:text-[#f26b38]">
             | {item.content} 
            </a>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Footer;
