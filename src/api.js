const api = "https://tarotapi.dev/api/v1";

const getAllCards = () => {
  return fetch(api + "/cards").then((response) => response.json());
};

const getOneCard = (nameShort) => {
  return fetch(api + "/cards/:" + nameShort).then((response) =>
    response.json()
  );
};

export { getAllCards, getOneCard };
