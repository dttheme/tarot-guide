import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getImgUrl = (name) => {
    const path = `.${import.meta.env.DEV ? "/assets/" : ""}/cards/${name}.jpg`;
    return new URL(path, import.meta.url).href;
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="cardWrapper" onClick={handleClick}>
      {!isFlipped ? (
        <div className="cardFront">
          <img src={getImgUrl(card.name_short)} alt="" />
        </div>
      ) : (
        <div className="cardBack">
          <h2>{card.name}</h2>
          <h3>Upright </h3>
          <p>{card.meaning_up}</p>
          <h3>Reversed </h3>
          <p>{card.meaning_rev}</p>
          {/* <p>
            {card.desc.length > 300
              ? card.desc.substring(0, 300) + "..."
              : card.desc}
          </p> */}
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
  }),
};

export default Card;
