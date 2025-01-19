import "./App.css";

import Card from "./components/Card";
import Header from "./components/Header";
import NavButtons from "./components/NavButtons";
import Search from "./components/Search";
import searchCards from "./function";
import { useEffect } from "react";
import { useState } from "react";

// change size of card
// dark/light theme
// open cards into modal on button/link click
// sort properly (fool is 0)
// filter by major, minor, suit
// sort by
// drag and drop into different readings
// save readings
// notes on reading
// calendar
// change # of cards per row

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // filter should make the request based on the actual # in the data, not just a search string
    setCards(searchCards(searchTerm));

    setIsLoading(false);
    console.log(cards);
  }, [searchTerm, filter, sort]);

  const cardList = cards.map((card, i) => {
    console.log(card);
    return <Card card={card} key={i} />;
  });

  return (
    <>
      <Header>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
        <NavButtons setFilter={setFilter}></NavButtons>
      </Header>
      <div className="results">{isLoading ? "Loading..." : cardList}</div>
    </>
  );
}

export default App;
