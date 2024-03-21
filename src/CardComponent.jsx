import React, {useState} from 'react';

export function CardComponent({cardData, checkMoneyIsValid, handleBuyClick}) {
    const [price, setPrice] = useState(0);

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }
    
    return (
        <div>
            <div>
                <input type="text" value={cardData.name} readOnly />
            </div>
            <div>
                <img src={cardData.icon} alt="Card Icon" />
                <input type="text" value={cardData.probability} readOnly />
            </div>
            <div>
                <img src={cardData.icon} alt="Card Icon" />
                <input type="text" value={cardData.winPercentage} readOnly />
            </div>
            <div>
                <img src={cardData.icon} alt="Card Icon" />
                <input type="text" value={cardData.lossPercentage} readOnly />
            </div>
            <div>
                <img src={cardData.icon} alt="Card Icon" />
                <input type="text" value={cardData.ecologyRating} readOnly />
            </div>
            <div>
                <img src={cardData.icon} alt="Card Icon" />
                <input type="text" value={cardData.socialRating} readOnly />
            </div>
            <div>
                <img src={cardData.icon} alt="Card Icon" />
                <input type="text" value={cardData.governanceRating} readOnly />
            </div>
            <div>
                <input type="number" onChange={handlePriceChange} />
                <button onClick={() => handleBuyClick(cardData, price)}>Buy</button>
            </div>
        </div>
    );
};