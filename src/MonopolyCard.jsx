import React, { useState } from "react";
import CardRow from "./CardRow";
import Card from "@mui/material/Card";
import { Typography, CardActions, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";


export function MonopolyCard({ headerColor, title, cardData, handleBuyClick }) {

  const [price, setPrice] = useState(0);
  const cardStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    minWidth: "200px",
    margin: "1em",
    padding: "10px",
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const icons = [
    "./icon/probability.jpeg",
    "./icon/probability.jpeg",
    "./icon/probability.jpeg",
    "./icon/probability.jpeg",
    "./icon/probability.jpeg",
    "./icon/probability.jpeg",
  ];

  const headerStyle = {
    backgroundColor: headerColor,
    padding: "10px",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  };

  const iconWithTextStyle = {};
  console.log(cardData);
  return (
    <div style={cardStyle}>
      <div style={headerStyle}>{title}</div>
      <div>
      <CardRow
          cardData={cardData.probability}
          imageSrc={require("./icon/probability.jpeg")}
        ></CardRow>
        <CardRow
          cardData={cardData.winPercentage}
          imageSrc={require("./icon/ArrowUp.jpeg")}
        ></CardRow>
        <CardRow
          cardData={cardData.lossPercentage}
          imageSrc={require("./icon/ArrowDown.jpeg")}
        ></CardRow>
        <CardRow
          cardData={cardData.ecologyRating}
          imageSrc={require("./icon/tree.jpeg")}
        ></CardRow>
        <CardRow
          cardData={cardData.socialRating}
          imageSrc={require("./icon/social.jpeg")}
        ></CardRow>
        <CardRow
          cardData={cardData.governanceRating}
          imageSrc={require("./icon/governance.jpeg")}
        ></CardRow>
      </div>
      <div>
          <input type="number" onChange={handlePriceChange} />
          <button onClick={() => handleBuyClick(cardData, price)}>Buy</button>
        </div>
    </div>
  );
}
