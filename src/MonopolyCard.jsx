import React from "react";
import CardRow from "./CardRow";

export function MonopolyCard({ headerColor, title, values }) {
  const cardStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    minWidth: "200px",
    margin: "1em",
    padding: "10px",
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

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>{title}</div>
      <CardRow
        cardData={values[0]}
        imageSrc={require("./icon/probability.jpeg")}
      ></CardRow>
      <CardRow
        cardData={values[1]}
        imageSrc={require("./icon/ArrowUp.jpeg")}
      ></CardRow>
      <CardRow
        cardData={values[2]}
        imageSrc={require("./icon/ArrowDown.jpeg")}
      ></CardRow>
      <CardRow
        cardData={values[3]}
        imageSrc={require("./icon/tree.jpeg")}
      ></CardRow>
      <CardRow
        cardData={values[4]}
        imageSrc={require("./icon/social.jpeg")}
      ></CardRow>
      <CardRow
        cardData={values[5]}
        imageSrc={require("./icon/governance.jpeg")}
      ></CardRow>
    </div>
  );
}
