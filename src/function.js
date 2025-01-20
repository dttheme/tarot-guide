import data from "./card_data.json";

const cardData = data.cards;

const searchCards = (filter) => {
  let results = cardData;

  // set results to filtered if there is a filter string
  if (filter) {
    const filtered = cardData.filter(
      (card) =>
        card.value === filter ||
        card.value_int === filter ||
        card.suit === filter ||
        card.type === filter
    );
    results = filtered;
  }

  // preform search on filtered items
  // only preform search if there is a search string
  // if (searchTerm) {
  //   const searched = results.filter((card) => {
  //     const values = Object.values(card);
  //     console.log(values);
  //     return values.includes(searchTerm);
  //   });
  //   results = searched;
  // }

  return results;
};

export default searchCards;
