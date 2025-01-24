import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getImgUrl = (name) => {
    const path = `${import.meta.env.BASE_URL}cards/${name}.jpg`;
    return new URL(path, import.meta.url).href;
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="cardWrapper"
      onClick={handleClick}
      style={{ overflowY: isFlipped ? "scroll" : "hidden" }}
    >
      {!isFlipped ? (
        <div className="cardFront">
          <img src={getImgUrl(card.name_short)} alt="" />
        </div>
      ) : (
        <div className="cardBack">
          <h2>{card.name}</h2>
          <h3>Upright</h3>
          <p>{card.meaning_up}</p>
          <h3>Reversed</h3>
          <p>{card.meaning_rev}</p>
          <h3>Description</h3>
          <p>{card.desc}</p>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    name_short: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    meaning_up: PropTypes.string,
    meaning_rev: PropTypes.string,
    type: PropTypes.string,
    suit: PropTypes.string,
  }),
};

export default Card;
