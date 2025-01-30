import NavButtons from "./NavButtons";
import PropTypes from "prop-types";
import ToggleTip from "./ToggleTip";

const Header = ({ setFilter, cardRow, handleRange, note }) => {
  const aboutText = (
    <>
      Hi! Thanks for checking out Tarot Guide. This is a pet project of{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dyannaturner.com"
      >
        Dyanna Turner
      </a>
      . You can see the code{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/dttheme/tarot-guide"
      >
        here
      </a>
      . Card data collected by{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ekelen/tarot-api"
      >
        tarot-api
      </a>
      .
    </>
  );

  return (
    <div className="header">
      <div className="about">
        <h1>Tarot Guide</h1>
        <ToggleTip toggleOpenText="About" toggleTipText={aboutText}></ToggleTip>
      </div>
      <div>
        <NavButtons setFilter={setFilter}></NavButtons>
        <div className="cardRow">
          <label htmlFor="card-row">Cards per Row: {cardRow}</label>
          <input
            type="range"
            name="cardRow"
            id="card-row"
            min={1}
            max={4}
            value={cardRow}
            onChange={handleRange}
          />
        </div>
      </div>
      <div>{note}</div>
    </div>
  );
};

Header.propTypes = {
  setFilter: PropTypes.func,
  cardRow: PropTypes.number,
  handleRange: PropTypes.func,
  note: PropTypes.string,
};

export default Header;
