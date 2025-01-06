import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="cardWrapper" onClick={handleClick}>
      {!isFlipped ? (
        <div className="cardFront">
          <img src={"/cards/" + card.name_short + ".jpg"} alt={card.name} />
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
