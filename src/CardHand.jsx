import React from "react";
import { CardComponent } from "./CardComponent";
import { MonopolyCard } from "./MonopolyCard";

export function CardHand({ cardData: cardDataList, onPlayCard: onPlayCard }) {
  {
    /*
return (
        <div style={{ display: 'flex' }}>
            <CardComponent cardData={cardDataList[0]} handleBuyClick={onPlayCard} />
            <CardComponent cardData={cardDataList[1]} handleBuyClick={onPlayCard} />
            <CardComponent cardData={cardDataList[2]} handleBuyClick={onPlayCard} />
        </div>
    );
*/
  }

  return (
    <div style={{ display: "flex" }}>
      <MonopolyCard
        headerColor="#4169E1"
        cardData={cardDataList[0]}
        handleBuyClick={onPlayCard}
      />
      <MonopolyCard
        headerColor="#4169E1"
        cardData={cardDataList[1]}
        handleBuyClick={onPlayCard}
      />
      <MonopolyCard
        headerColor="#4169E1"
        cardData={cardDataList[2]}
        handleBuyClick={onPlayCard}
      />
    </div>
  );
}
