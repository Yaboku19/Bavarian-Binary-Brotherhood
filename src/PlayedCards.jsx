import React from 'react';

export default function PlayedCards({ cardModels }) {
    const handleSellCard = (card) => {
        // Logic to sell the card
        console.log(`Selling card: ${card.name}`);
    };

    const totalRow = cardModels.reduce(
        (acc, card) => {
            acc.probability += card.probability;
            acc.winPercentage += card.winPercentage;
            acc.lossPercentage += card.lossPercentage;
            acc.ecologyRating += card.ecologyRating;
            acc.socialRating += card.socialRating;
            acc.governanceRating += card.governanceRating;
            return acc;
        },
        {
            probability: 0,
            winPercentage: 0,
            lossPercentage: 0,
            ecologyRating: 0,
            socialRating: 0,
            governanceRating: 0,
        }
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Probability</th>
                    <th>Win Percentage</th>
                    <th>Loss Percentage</th>
                    <th>Ecology Rating</th>
                    <th>Social Rating</th>
                    <th>Governance Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cardModels.map((card) => (
                    <tr key={card.name}>
                        <td>{card.name}</td>
                        <td>{card.probability}</td>
                        <td>{card.winPercentage}</td>
                        <td>{card.lossPercentage}</td>
                        <td>{card.ecologyRating}</td>
                        <td>{card.socialRating}</td>
                        <td>{card.governanceRating}</td>
                        <td>
                            <button onClick={() => handleSellCard(card)}>Sell</button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td>Total</td>
                    <td>{totalRow.probability}</td>
                    <td>{totalRow.winPercentage}</td>
                    <td>{totalRow.lossPercentage}</td>
                    <td>{totalRow.ecologyRating}</td>
                    <td>{totalRow.socialRating}</td>
                    <td>{totalRow.governanceRating}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}