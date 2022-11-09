import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export interface BtnProps {
  to?: string;
  children?: JSX.Element | JSX.Element[] | string | string[];
  classes?: string;
  icon?:boolean;
}
function Button({ to, children, classes, icon}: BtnProps) {
  const props = { to };

  return (
    <button className={classes} {...props}>
      <Link to="" >
        {children}
      </Link>
      {icon && <FontAwesomeIcon icon={faAngleRight} className="pl-4"/>}
    </button>
  );
}

export default Button;
