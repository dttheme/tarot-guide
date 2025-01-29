import PropTypes from "prop-types";
import ToggleTip from "./ToggleTip";

const Header = ({ children }) => {
  const githubUrl = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/dttheme/tarot-guide"
    >
      here
    </a>
  );
  const TarotApiUrl = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/ekelen/tarot-api"
    >
      tarot-api
    </a>
  );
  const personalSite = (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://dyannaturner.com"
    >
      Dyanna Turner
    </a>
  );
  const aboutText = (
    <>
      Hi! Thanks for checking out Tarot Guide. This is a pet project of{" "}
      {personalSite}. You can see the code {githubUrl}. Card data collected by{" "}
      {TarotApiUrl}.
    </>
  );
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
