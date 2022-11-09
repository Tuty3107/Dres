import { Link } from "react-router-dom";

function EntryContent() {
  return (
    <div className="lg:mt-[300px] mx-5 text-justify lg:mb-52 lg:top-0 md:top-0 relative -top-80 -z-[200]">
      <p className="text-sm leading-6 my-4">
        The list of the best restaurant in Hanoi by diners on Tripadvisor,
        Google Business and the world’s leading social networks is always named
        Duong Restaurant Hanoi. My name is Hoang Duong, my food journey started
        when I was a young boy living in the village. My Vietnamese food passion
        was ingrained when I was a child and watched my father preparing my
        family meals. My father was a master in the kitchen and he instilled in
        me the importance of using fresh ingredients when cooking the family
        meals.
      </p>
      <div className="leading-6">
        <img
          className="lg:w-[600px] h-[380px] md:float-right lg:float-right px-6"
          alt="content-entry"
          src="/images/Hanoi-Restaurant.jpg"
        />
        <p className="text-sm leading-6 my-4 ">
          As I traveled down the road to where I am now, I kept building
          knowledge and authentic cuisine recipes learnt from my father
          previously.
        </p>
        <p className="text-sm leading-6 my-4 ">
          I had a belief that whilst freshness of ingredients was a core key,
          another key to deliver dishes with full of flavor was to use only the
          best local produce.
        </p>
        <p className="text-sm leading-6 my-4 ">
          My influence makes the seasonality of produce the most important
          aspect of the menu here at Duong’s Restaurant, this is the reason why
          the menu often continues to evolve in line with the availability of
          produce. My passion, hard-working and ability to be a good chef were
          showcased on both Top Chef Vietnam and Iron Chef Vietnam competitions.
        </p>
        <p className="text-sm leading-6 my-4 ">
          I was one of 16 chefs to be invited to Top Chef Vietnam in 2014 where
          I finished at the 4th position. My showcase at Top Chef helps me to
          being sought out as a mentor for younger Vietnamese chefs.
        </p>
        <p className="text-sm leading-6 my-4 ">
          I also travel around Vietnam to provide advices to many Vietnamese
          restaurants and chefs, both young and old. This is one of the aspects
          that I like most when I am working as a mentor. Because I can help
          others and to enhance the flavours and variety in Vietnamese food.
        </p>
      </div>
      <p className="text-sm leading-6">
        I am proud to launch Duong’s Restaurant as my first solo venture and the
        first leg of my journey and vision. The 1st one is in Hanoi, then the
        one in Ma May street marked as my 2nd Duong Dining.
      </p>
      <p className="text-sm leading-6">
        I am honoured to share this journey with my family, friends and most
        importantly, with you – our beloved customers.
      </p>
      <p className="text-sm leading-6">
        I hope you will enjoy the journey that I am going to take you on where
        I’ll beautifully present you a mix of traditional Vietnamese dishes with
        Vietnamese / French fusion dishes.
      </p>
      <Link to="/about" className="text-sm hover:text-[#fb6501]">
        Read more
      </Link>
    </div>
  );
}

export default EntryContent;
