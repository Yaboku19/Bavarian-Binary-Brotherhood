import { useState } from "react";

import "./index.css";
import "./ESGGame.css";
import { BottomBar } from "./BottomBar";
import { CardHand } from "./CardHand";
import CardModel from "./CardModel";
import ESGRow from "./ESGRow";
import PlayedCards from "./PlayedCards";
import { MonopolyCard } from "./MonopolyCard";
import generateRandomCards from "./PlayingCardsGenerator";

/**
 * Renders a Choropleth Map component.
 *
 * @returns {JSX.Element} The Choropleth Map component.
 */
export default function ESGGame() {
  const [sustainability, setSustainability] = useState(50);
  const [social, setSocial] = useState(50);
  const [governance, setGovernance] = useState(50);
  const [moneyAvailable, setMoneyAvailable] = useState(10000);
  const [turnNumber, setTurnNumer] = useState(1);

  //Load from JSON file
  const [cardsInDeck, setCardsInDeck] = useState(generateRandomCards());
  const [playedCards, setPlayedCards] = useState([]);

  const [cardsInHand, setCardsInHand] = useState(getRandomCards());

    function getRandomCards() {
        const randomCards = [];

        const numberOfCards = cardsInDeck.length < 3 ? cardsInDeck.length : 3;

        const uniqueCards = new Set();

        while (uniqueCards.size < numberOfCards) {
            const randomIndex = Math.floor(Math.random() * cardsInDeck.length);
            const randomCard = cardsInDeck[randomIndex];
            uniqueCards.add(randomCard);
        }

        randomCards.push(...uniqueCards);

        return randomCards;
    }

    // Use the randomCards array as needed

  const handleTurnChange = (event) => {
    if (turnNumber === 25) {
      //End game
    }

    //Calculate earnings

    //For every card played, calculate the earnings by firstly calculate if the card made a profit or a loss with a randomNumber
    //them add/substract the percntage change to the value
    for (let card of playedCards) {
      let randomNumber = Math.floor(Math.random() * 100);

      if (randomNumber < card.probability * 100) {
        card.value = card.value + card.value * card.winPercentage;
      } else {
        card.value = card.value - card.value * card.lossPercentage;
      }
    }

    //Calculate ESG impanct

    let totalValue = 0;
    let weightedSumSocial = 0;
    let weightedSumEcological = 0;
    let weightedSumGovernmental = 0;

    for (let card of playedCards) {
      totalValue += card.value;
      weightedSumSocial += card.socialRating * card.value;
      weightedSumEcological += card.ecologyRating * card.value;
      weightedSumGovernmental += card.governanceRating * card.value;
    }

    const averageSocialScore = totalValue !== 0 ? weightedSumSocial / totalValue : 0;
    const averageEcologicalScore = totalValue !== 0 ? weightedSumEcological / totalValue : 0;
    const averageGovernmentalScore = totalValue !== 0 ? weightedSumGovernmental / totalValue : 0;
    

    //Update the ESG scores
    setSustainability(averageEcologicalScore);
    setSocial(averageSocialScore);
    setGovernance(averageGovernmentalScore);

    //Load new cards

    setCardsInHand(getRandomCards);

    setTurnNumer(turnNumber + 1);
  };

  const handleCardPlayed = (cardData, price) => {
    //Check if the player has enough money
    price = parseInt(price);
    setMoneyAvailable(parseInt(moneyAvailable));

    if (price > moneyAvailable) {
      return;
    }

    //Substract the money from the player
    setMoneyAvailable(moneyAvailable - price);

    //Set price and value of cardData
    cardData.priceBought = price;
    cardData.value = price;

    setPlayedCards([...playedCards, cardData]);

    //Remove the played card from the deck
    const playedCardIndex = cardsInDeck.findIndex((c) => c === cardData);
    if (playedCardIndex !== -1) {
        cardsInDeck.splice(playedCardIndex, 1);
    }

    //End the turn

    handleTurnChange();
  };

  const handleSellCard = (card) => {
    // Logic to sell the card

    // Add the money to the player
    setMoneyAvailable(moneyAvailable + parseInt(card.value));

    // Remove the card from the played cards
    setPlayedCards(playedCards.filter((c) => c !== card));

    //Add the card back to the deck
    setCardsInDeck([...cardsInDeck, card]);

  };

  return (
    <div className="esgGame" style={{backgroundColor: "white", marginTop: "50px"}}>
      <ESGRow
        sustainability={sustainability}
        social={social}
        governance={governance}
      />
      
      <CardHand cardData={cardsInHand} onPlayCard={handleCardPlayed} />
      <BottomBar
        money={moneyAvailable}
        currentTurn={turnNumber}
        nextTurnHandler={handleTurnChange}
      />
      <PlayedCards cardModels={playedCards} handleSellCard={handleSellCard}/>
    </div>
  );
}
