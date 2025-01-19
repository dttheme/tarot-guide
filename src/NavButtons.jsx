import PropTypes from "prop-types";

const NavButtons = ({ setFilter }) => {
  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
    setFilter(value);
  };
  return (
    <div>
      <div>
        <button value={"major"} onClick={handleClick}>
          Major
        </button>
        <button value={"minor"} onClick={handleClick}>
          Minor
        </button>
      </div>
      <div>
        <button value={"1"} onClick={handleClick}>
          Ace
        </button>
        <button value={"2"} onClick={handleClick}>
          2
        </button>
        <button value={"3"} onClick={handleClick}>
          3
        </button>
        <button value={"4"} onClick={handleClick}>
          4
        </button>
        <button value={"5"} onClick={handleClick}>
          5
        </button>
        <button value={"6"} onClick={handleClick}>
          6
        </button>
        <button value={"7"} onClick={handleClick}>
          7
        </button>
        <button value={"8"} onClick={handleClick}>
          8
        </button>
        <button value={"9"} onClick={handleClick}>
          9
        </button>
        <button value={"10"} onClick={handleClick}>
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
