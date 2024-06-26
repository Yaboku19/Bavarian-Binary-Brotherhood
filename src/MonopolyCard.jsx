import React, { useState } from "react";
import CardRow from "./CardRow";
import Card from "@mui/material/Card";
import { Typography, CardActions, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";


export function MonopolyCard({ headerColor, cardData, handleBuyClick }) {

  const [price, setPrice] = useState(0);
  const cardStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    minWidth: "200px",
    margin: "1em",
    padding: "10px",
    backgroundColor:"#c9f3f5"
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
    border: "1px solid black",
    marginBottom:"10px"
  };

  const iconWithTextStyle = {};
  
  return (
    <div style={cardStyle}>
      <div style={headerStyle}>{cardData.name}</div>
      <div >
        <CardRow
          cardData={Math.round(cardData.probability * 100) + "%"}
          imageSrc={require("./icon/probability.jpeg")}
          tooltip="Probability"
        ></CardRow>
        <CardRow
          cardData={Math.round(cardData.winPercentage * 100) + "%"}
          imageSrc={require("./icon/ArrowUp.jpeg")}
          tooltip="Win Percentage"
        ></CardRow>
        <CardRow
          cardData={Math.round(cardData.lossPercentage * 100) + "%"}
          imageSrc={require("./icon/ArrowDown.jpeg")}
          tooltip="Loss Percentage"
        ></CardRow>
        <CardRow
          cardData={Math.round(cardData.ecologyRating * 100)}
          imageSrc={require("./icon/tree.jpeg")}
          tooltip="Ecology Rating"
        ></CardRow>
        <CardRow
          cardData={Math.round(cardData.socialRating * 100)}
          imageSrc={require("./icon/social.jpeg")}
          tooltip="Social Rating"
        ></CardRow>
        <CardRow
          cardData={Math.round(cardData.governanceRating * 100)}
          imageSrc={require("./icon/governance.jpeg")}
          tooltip="Governance Rating"
        ></CardRow>
      </div>
      <div>
          <input type="number" onChange={handlePriceChange} style={{marginRight: "2px"}} />
          <button onClick={() => handleBuyClick(cardData, price)}>Buy</button>
        </div>
    </div>
  );
}
