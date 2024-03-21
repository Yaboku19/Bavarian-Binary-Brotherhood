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
                <img src={require("./icon/propability.jpeg")} alt="Winning Probility" title="Winning probability" />
                <input type="text" value={cardData.probability} readOnly />
            </div>
            <div>
                <img src={require("./icon/ArrowUp.jpeg")} alt="Profit Percent" title="Profit Percentage" />
                <input type="text" value={cardData.winPercentage} readOnly />
            </div>
            <div>
                <img src={require("./icon/ArrowDown.jpeg")} alt="Loss Percent" title="Loss Percentage" />
                <input type="text" value={cardData.lossPercentage} readOnly />
            </div>
            <div>
                <img src={require("./icon/tree.jpeg")} alt="EcologyRating" title="Ecology Rating" />
                <input type="text" value={cardData.ecologyRating} readOnly />
            </div>
            <div>
                <img src={require("./icon/social.jpeg")} alt="Social Rating" title="Social Rating" />
                <input type="text" value={cardData.socialRating} readOnly />
            </div>
            <div>
                <img src={require("./icon/governance.jpeg")} alt="Governance Rating" title="Governance Rating" />
                <input type="text" value={cardData.governanceRating} readOnly />
            </div>
            <div>
                <input type="number" onChange={handlePriceChange} />
                <button onClick={() => handleBuyClick(cardData, price)}>Buy</button>
            </div>
        </div>
    );
};