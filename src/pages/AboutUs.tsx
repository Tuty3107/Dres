import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import Gallery from "../components/Gallery";

function AboutUs() {

  return (
    <>
      <article className="h-[360px] lg:relative absolute top-0 left-0 right-0 bg-aboutus bg-repeat -z-50">
          <h1 className="text-center text-white font-bold lg:text-5xl text-3xl pt-40">
            About us
          </h1>
      </article>
      <div className="lg:w-[1180px] lg:top-0 mx-auto px-5 pt-20 relative top-[-300px]">
        {/*About Us text*/}
        <div className="text-sm text-black leading-8 text-justify">
          <p className="font-bold">
            Xin Chào! Welcome to Top Restaurants by Trip Advisor!
          </p>
          <p>
            My name is Hoang Duong, my food journey started when I was a young
            boy living in the village. My Vietnamese food passion was ingrained
            when I was a child and watched my father preparing my family meals.
            My father was a master in the kitchen and he instilled in me the
            importance of using fresh ingredients when cooking the family meals.
          </p>
          <p>
            As I traveled down the road to where I am now, I kept building
            knowledge and authentic cuisine recipes learnt from my father
            previously. I had a belief that whilst freshness of ingredients was
            a core key, another key to deliver dishes with full of flavor was to
            use only the best local produce. My influence makes the seasonality
            of produce the most important aspect of the menu here at Duong’s
            Restaurants, this is the reason why the menu often continues to
            evolve in line with the availability of produce.
          </p>
          <p>
            My passion, hard-working and ability to be a good chef were
            showcased on both Top Chef Vietnam and Ironchef Vietnam
            competitions. I was one of 16 chefs to be invited to Top Chef
            Vietnam in 2014 where I finished at the 4th position. My showcase at
            Top Chef helps me to being sought out as a mentor for younger
            Vietnamese chefs. I also travel around Vietnam to provide advices to
            many Vietnamese restaurants and chefs, both young and old. This is
            one of the aspects that I like most when I am working as a mentor.
            Because I can help others and to enhance the flavours and variety in
            Vietnamese food.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className=" bg-black relative w-40 h-40 m-10 transform rotate-45">
            <div className="text-white absolute top-10 left-0 right-0 bottom-10 text-[1rem]  transform -rotate-45 uppercase">
              <span className="block">Hoang Duong</span>
              <span className="block">Top chef Vietnam</span>
              <span className="block">Ironchef Vietnam</span>
            </div>
          </div>
          <img 
            alt="topchef"
            className="w-[25rem] h-[13.5rem]"
            src={process.env.PUBLIC_URL + "/images/Hanoi-Restaurant.jpg"}
          />
          <img
            alt="topchef"
            className="w-[25rem] h-[13.5rem]"
            src={process.env.PUBLIC_URL + "/images/topchef-2.jpg"}
          />
        </div>
        <p className="text-sm leading-7 text-justify">
          I am proud to launch Duong’s Restaurants as my first solo venture and
          the first leg of my journey and vision. The 1st one is in Hanoi –
          Duong restaurant in Ngo Huyen street then the one in Ma Maystreet
          marked as Duong Dining. I am honoured to share this journey with my
          family, friends and most importantly, with you – our beloved
          customers. I hope you will enjoy the journey that I am going to take
          you on where I’ll beautifully present you a mix of traditional
          Vietnamese dishes with Vietnamese / French fusion dishes.
        </p>
        <p className="text-sm leading-7 text-justify">
          Recommended menu by our Top Chef Vietnam
          <a href="#" className="text-orange">
            {" "}
            Click here{" "}
          </a>
        </p>
        <p className="italic text-sm leading-7 text-justify">
          You are always welcome at any of our Duong’s restaurants in Vietnam as
          listed below:
        </p>
        {/*duong restaurant*/}
        <div>
          <h3 className="text-3xl uppercase text-center font-bold pt-10">
            Duong's Restaurant
          </h3>
          <span className="block text-sm uppercase text-center">
            At 27 Ngo Huyen street, Hoan Kiem Dist, Hanoi, Vietnam
          </span>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <img src={process.env.PUBLIC_URL+ "/images/galabt/ngohuyen1.jpg"} alt="res" />
            <img src={process.env.PUBLIC_URL + "/images/galabt/ngohuyen2.jpg"} alt="res" />
          </div>
          <div className="mx-auto text-center my-10">
            <Button classes="medium">Reserve Now</Button>
          </div>
        </div>
        {/*Duong dining*/}
        <div>
          <h3 className="text-3xl uppercase text-center font-bold">
            DUONG DINING
          </h3>
          <span className="block uppercase text-sm text-center">
            101 Ma May street, Hoan Kiem Dist, Hanoi, Vietnam
          </span>
          <figure className="w-[1180px] mx-auto grid grid-cols-2 gap-2">
            <img alt="dining" src={process.env.PUBLIC_URL + "/images/galabt/mamay1.jpg"} />
            <img alt="dining"
              src={process.env.PUBLIC_URL + "/images/gallery/home-duong-restaurant-1.jpg"}
            />
          </figure>
        </div>
        <Gallery />
        <div>
          <div className="mt-10 text-center">
            <div className="decorbg"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="decorbg"></div>
          </div>
          <div className="mx-auto text-center mb-10 mt-2">
            <Button classes="primaryBg" icon>Contact us</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
