import PropTypes from "prop-types";

const NavButtons = ({ setFilter }) => {
  const handleClick = (e) => {
    const value = e.target.value;

    setFilter(value);
  };
  return (
    <div className="navButtons">
      <div>
        <button value={""} onClick={handleClick}>
          All
        </button>
        <button value={"major"} onClick={handleClick}>
          Major
        </button>
        <button value={"minor"} onClick={handleClick}>
          Minor
        </button>
      </div>
      <div>
        <button value={"ace"} onClick={handleClick}>
          Ace
        </button>
        <button value={"two"} onClick={handleClick}>
          2
        </button>
        <button value={"three"} onClick={handleClick}>
          3
        </button>
        <button value={"four"} onClick={handleClick}>
          4
        </button>
        <button value={"five"} onClick={handleClick}>
          5
        </button>
        <button value={"six"} onClick={handleClick}>
          6
        </button>
        <button value={"seven"} onClick={handleClick}>
          7
        </button>
        <button value={"eight"} onClick={handleClick}>
          8
        </button>
        <button value={"nine"} onClick={handleClick}>
          9
        </button>
        <button value={"ten"} onClick={handleClick}>
          10
        </button>
      </div>
      <div>
        <button value={"king"} onClick={handleClick}>
          King
        </button>
        <button value={"queen"} onClick={handleClick}>
          Queen
        </button>
        <button value={"knight"} onClick={handleClick}>
          Knight
        </button>
        <button value={"page"} onClick={handleClick}>
          Page
        </button>
      </div>
      <div>
        <button value={"swords"} onClick={handleClick}>
          Swords
        </button>
        <button value={"wands"} onClick={handleClick}>
          Wands
        </button>
        <button value={"cups"} onClick={handleClick}>
          Cups
        </button>
        <button value={"pentacles"} onClick={handleClick}>
          Pentacles
        </button>
      </div>
    </div>
  );
};

NavButtons.propTypes = {
  setFilter: PropTypes.func,
};

export default NavButtons;
