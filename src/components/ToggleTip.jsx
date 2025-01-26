import PropTypes from "prop-types";
import { useState } from "react";

const ToggleTip = ({ toggleOpenText, toggleTipText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="toggleTip">
      <button className="toggleTipOpen" onClick={handleClick}>
        {toggleOpenText}
      </button>
      {isOpen && (
        <div className="toggleTipText">
          <button className="toggleTipClose" onClick={handleClick}>
            X
          </button>
          <p>{toggleTipText}</p>
        </div>
      )}
    </div>
  );
};

export default ToggleTip;

ToggleTip.propTypes = {
  toggleOpenText: PropTypes.node,
  toggleTipText: PropTypes.string,
};
