import "./App.css";

import Card from "./Card";
import { getAllCards } from "./api";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCards().then((cards) => {
      setCards(cards.cards);
    });
  }, []);

  const cardList = cards.map((card) => Card(card));

  return <>{cardList}</>;
}

export default App;
