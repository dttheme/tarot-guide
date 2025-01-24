import "./App.css";

import Card from "./components/Card";
import Header from "./components/Header";
import NavButtons from "./components/NavButtons";
import searchCards from "./function";
import { useEffect } from "react";
import { useState } from "react";

// todo
// link to different resources (build link for biddy, labyrinthos, the tarot-guide) (might not be possible/efficient bc they're all weird af links)
// dark/light theme
// sparkles
// about (modal?, toggletip?)
// drag and drop into different readings
// save readings
// notes on reading
// calendar
// search meaning

// done
// change # of cards per row
// sort properly (fool is 0)
// change size of card
// filter by major, minor, suit
// scroll inside card back

function App() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("");
  const [cardRow, setCardRow] = useState(2);

  useEffect(() => {
    setCards(searchCards(filter));
  }, [filter]);

  const cardList = cards.map((card, i) => {
    return <Card card={card} key={i} />;
  });

  const handleRange = (e) => {
    setCardRow(Number(e.target.value));
  };

  return (
    <>
      <Header>
        <NavButtons setFilter={setFilter}></NavButtons>
        <div>
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
      </Header>
      <div className="resultsContainer">
        <div>{cardList.length.toString()} Cards</div>
        <div
          className="results"
          style={{ gridTemplateColumns: `repeat(${cardRow}, 1fr` }}
        >
          {cardList}
        </div>
      </div>
    </>
  );
}

export default App;
