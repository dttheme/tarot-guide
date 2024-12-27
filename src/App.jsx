import "./App.css";

import Card from "./Card";
import Search from "./Search";
import { getAllCards } from "./api";
import { useEffect } from "react";
import { useState } from "react";

// change size of card
// dark/light theme
// open cards into modal on button/link click
// filter by major, minor, suit
// sort
// drag and drop into different readings
// save readings

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCards(searchTerm)
      .then((cards) => {
        setCards(cards.cards);
      })
      .then(() => setIsLoading(false));
  }, [searchTerm, filter, sort]);

  const cardList = cards.map((card, i) => {
    return <Card card={card} key={i} />;
  });

  return (
    <>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <div className="results">{isLoading ? "Loading..." : cardList}</div>
    </>
  );
}

export default App;
