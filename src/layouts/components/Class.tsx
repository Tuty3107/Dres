import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";

function Class() {
  return (
    <div className="w-full bg-classColor my-20">
      <div className="lg:w-[1180px] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 mx-5 text-base">
        <div className="text-[#6ab28e] leading-9">
          <h4 className="text-black text-lg">Why should experience with us?</h4>
          <p>
            <FontAwesomeIcon icon={faSpoon} />
            Top chef passion made - every dish is carefully made with Vietnamse
            top chef
          </p>
          <p>
            <FontAwesomeIcon icon={faSpoon} />
            ToBest restaurant in Hanoi voted by TripAdvisor & Google Business
          </p>
          <p>
            <FontAwesomeIcon icon={faSpoon} />
            Cozy atmosphere – Hanoian image cover every corner in our restaurant
          </p>
          <p>
            <FontAwesomeIcon icon={faSpoon} />
            Friendly staffs – happy smiles are waiting for you from door to door
          </p>
          <img alt="classImg" src={process.env.PUBLIC_URL + "/images/class/awards-duong-restaurant.png"} />
        </div>
        <div className="mx-auto text-black border-solid border-2 border-[#6ab28e] w-[240px] h-auto p-5">
          <img
            alt="triIcon"
            className="w-[100px] h[22px]"
            src={process.env.PUBLIC_URL + "/images/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"}
          />
          <a href="#" className="font-bold underline">
            Duong's Restaurant & Cooking Class
          </a>
          <dl className="text-sm">Tripadvisor Traveler Rating</dl>
          <dl className="text-sm">2,268 reviews</dl>
          <dl className="text-sm">
            "Hidden alley traditonal Vietnamese Restaurant"
          </dl>
          <dl className="text-sm">"Best dinner in Hanoi"</dl>
          <dl className="text-sm">"... a great dining experience"</dl>
          <dl className="text-sm">"Amazing Restaurant"</dl>
          <dl className="text-sm">
            "Exceptional service and outstanding food"
          </dl>
          <dl className="text-sm underline">
            <a href="#">Read viewer </a> |<a href="#">Write a review</a>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Class;
