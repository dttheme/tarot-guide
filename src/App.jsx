import "./App.css";

import { searchCards, searchNotes } from "./function";

import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";
import { useState } from "react";

// todo
// fix scrollbar making cards act strange (changing size)
// link to different resources (build link for biddy, labyrinthos, the tarot-guide) (might not be possible/efficient bc they're all weird af links)
// dark/light theme
// sparkles
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
// about (modal?, toggletip?)

function App() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("");
  const [cardRow, setCardRow] = useState(2);
  const [note, setNote] = useState("");

  useEffect(() => {
    const _note = searchNotes(filter);
    const _cards = searchCards(filter);
    // console.log(_note);
    setCards(_cards);
    setNote(_note);
  }, [filter]);

  const cardList = cards.map((card, i) => {
    return <Card card={card} key={i} />;
  });

  const handleRange = (e) => {
    setCardRow(Number(e.target.value));
  };

  return (
    <>
      <Header
        setFilter={setFilter}
        handleRange={handleRange}
        cardRow={cardRow}
        note={note}
      />
      <div className="resultsContainer">
        <div>{cardList.length.toString()} Cards</div>
        <div
          className="results"
          style={{ gridTemplateColumns: `repeat(${cardRow}, 1fr` }}
        >
          {cardList}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
