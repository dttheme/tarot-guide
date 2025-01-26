import PropTypes from "prop-types";
import ToggleTip from "./ToggleTip";

const Header = ({ children }) => {
  const aboutText = `Hi! Thanks for checking out Tarot Guide. This is a pet project of Dyanna Turner. You can see the code here. Card data collected by tarot-api.`;
  return (
    <div className="header">
      <div>
        <h1>Tarot Guide</h1>
        <ToggleTip toggleOpenText="About" toggleTipText={aboutText}></ToggleTip>
      </div>
      <div>{children}</div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.array,
  handleAboutClick: PropTypes.func,
};

export default Header;
