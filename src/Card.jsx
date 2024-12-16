import React from "react";

const Card = (data) => {
  console.log(data);
  return (
    <div>
      <img src={"/cards/" + data.name_short + ".jpg"} alt="" />
      <p>{data.name}</p>
    </div>
  );
};

export default Card;
