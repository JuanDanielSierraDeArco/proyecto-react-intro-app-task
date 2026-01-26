import CheckSVG from "../../assets/icons/check.svg?react";
import DeleteSVG from "../../assets/icons/delete.svg?react";
import "./TodoIcon.css"

const iconTypes = {
  check: (color) =><CheckSVG className="ti-icon-svg" fill={color}/>,
  delete: (color) =><DeleteSVG className="ti-icon-svg" fill={color}/>,
};

function TodoIcon({ type, color, onClick }) {

  return (
    <span className={`ti-icon ti-icon-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };