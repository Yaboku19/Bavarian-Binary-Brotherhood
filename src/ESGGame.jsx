import {useState} from 'react';

import './index.css';
import { BottomBar } from './BottomBar';
import { CardHand } from './CardHand';
import CardModel from './CardModel';
import ESGRow from './ESGRow';
import PlayedCards from './PlayedCards';

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
    const [selectedCard, setSelectedCard] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const [playedCards, setPlayedCards] = useState([
    ]);

    const handleTurnChange = (event) => {
        if(turnNumber === 25) {
            //End game
        }

        //Calculate earnings

        //Calculate ESG impanct

        //Change the graphics

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

        //End the turn

        handleTurnChange();
    }

    const handleSellCard = (card) => {
        // Logic to sell the card
        
        // Add the money to the player
        setMoneyAvailable(moneyAvailable + parseInt(card.value));

        // Remove the card from the played cards
        setPlayedCards(playedCards.filter((c) => c !== card));
    };

    /**
     * Highlights a HOVERD CARD
     * @param {Object} e - The event object.
     */
    const highlightFeature = (e) => {
        let layer = e.target;
        layer.setStyle({
            color: '#444',
            weight: 2
        });
        layer.bringToFront();
        setHoveredCard(layer.feature.properties);
    }

    /**
     * Resets the highlight of a target element.
     * @param {Event} e - The event object.
     */
    const resetHighlight = (e) => {
        e.target.setStyle({
            color: '#888',
            weight: 1
        });
        setHoveredCard(null);
    } 

    const cardDataArray = [
        new CardModel('Card 1', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0),
        new CardModel('Card 2', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0),
        new CardModel('Card 3', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0)
    ];

    return (
        <div className='esgGame' >
            <ESGRow sustainability={sustainability} social={social} governance={governance} />
            <PlayedCards cardModels={playedCards} handleSellCard={handleSellCard} />
            <CardHand cardData={cardDataArray} onPlayCard={handleCardPlayed}/>
            <BottomBar money={moneyAvailable} currentTurn={turnNumber} nextTurnHandler={handleTurnChange} />
        </div>
    );
}