import {useState} from 'react';

import './index.css';
import { BottomBar } from './BottomBar';
import { CardHand } from './CardHand';
import CardModel from './CardModel';
import ESGRow from './ESGRow';
import PlayedCards from './PlayedCards';
import { MonopolyCard } from './MonopoliCard';

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
    const [cardsInDeck, setCardsInDeck] = useState([
        new CardModel('Card 1', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0),
        new CardModel('Card 2', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0),
        new CardModel('Card 3', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0),
        new CardModel('Card 4', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0),
        new CardModel('Card 5', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0)
    ]);

    const [playedCards, setPlayedCards] = useState([
    ]);
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
        if(turnNumber === 25) {
            //End game
        }

        //Calculate earnings

        //For every card played, calculate the earnings by firstly calculate if the card made a profit or a loss with a randomNumber
        //them add/substract the percntage change to the value
        for(let card of playedCards) {
            let randomNumber = Math.floor(Math.random() * 100);

            if(randomNumber < card.probability * 100) {
                card.value = card.value + (card.value * card.winPercentage);
            } else {
                card.value = card.value - (card.value * card.lossPercentage);
            }
        }

        //Calculate ESG impanct

        //Change the graphics

        //Load new cards

        setCardsInHand(getRandomCards);

        setTurnNumer(turnNumber + 1);
    }

    const handleCardPlayed = (cardData, price) => {
        //Check if the player has enough money
        price = parseInt(price);
        setMoneyAvailable(parseInt(moneyAvailable));
        
        if(price > moneyAvailable) {
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
    }

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
        <div className='esgGame' >
            <MonopolyCard 
                headerColor="#4169E1" 
                title="Park Place" 
                values={[100, 200, 300, 400, 500, 600]}
            />
            <ESGRow sustainability={sustainability} social={social} governance={governance} />
            <PlayedCards cardModels={playedCards} handleSellCard={handleSellCard} />
            <CardHand cardData={cardsInHand} onPlayCard={handleCardPlayed}/>
            <BottomBar money={moneyAvailable} currentTurn={turnNumber} nextTurnHandler={handleTurnChange} />
            
        </div>
    );
}