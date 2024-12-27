const api = "https://tarotapi.dev/api/v1";

const getAllCards = (query) => {
  const search = query ? "/search?q=" + query : "";
  return fetch(api + "/cards" + search).then((response) => response.json());
};

const getOneCard = (nameShort) => {
  return fetch(api + "/cards/:" + nameShort).then((response) =>
    response.json()
  );
};

export { getAllCards, getOneCard };
