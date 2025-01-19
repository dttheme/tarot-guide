import data from "./card_data.json";

const cardData = data.cards;

const searchCards = (searchTerm) => {
  return searchTerm != ""
    ? cardData.filter((card) => {
        console.log("test", Object.values(card));
        return Object.values(card).includes(searchTerm);
      })
    : cardData;
};

// const filterCards = (array) => {
//   return array;
// };

export default searchCards;
