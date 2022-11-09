import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DecorItem() {
  return (
    <div className="my-4">
      <div className="inline-block relative -top-1 before:block before:h-0.5 before:w-40 before:bg-white"></div>
      <FontAwesomeIcon icon={faStar} />
      <div className="inline-block relative -top-1 before:block before:h-0.5 before:w-40 before:bg-white"></div>
    </div>
  );
}

export default DecorItem;
