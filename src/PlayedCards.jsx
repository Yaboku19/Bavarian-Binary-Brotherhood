import { border, style } from '@mui/system';
import React from 'react';

export default function PlayedCards({ cardModels, handleSellCard }) {

    const totalRow = cardModels.reduce(
        (acc, card) => {
            acc.probability += card.probability;
            acc.winPercentage += card.winPercentage;
            acc.lossPercentage += card.lossPercentage;
            acc.ecologyRating += card.ecologyRating;
            acc.socialRating += card.socialRating;
            acc.governanceRating += card.governanceRating;
            acc.priceBought += parseInt(card.priceBought);
            acc.value += parseInt(card.value);
            return acc;
        },
        {
            probability: 0,
            winPercentage: 0,
            lossPercentage: 0,
            ecologyRating: 0,
            socialRating: 0,
            governanceRating: 0,
            priceBought: 0,
            value: 0,
        }
    );

    return (
        <table style={{
            borderCollapse: "collapse",
            outline: "1px solid #3b3d3d",
            marginTop: "10px"
          }}>
            <thead>
                <tr>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "70px"}}>Name</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "90px"}}>Probability</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "130px"}}>Win Percentage</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "135px"}}>Loss Percentage</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "125px"}}>Ecology Rating</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "110px" }}>Social Rating</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "155px" }}>Governance Rating</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "110px" }}>Price bought</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "50px"}}>Value</th>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white", width: "60px"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white",}}>Total</th>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.probability}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.winPercentage}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.lossPercentage}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.ecologyRating}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.socialRating}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.governanceRating}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.priceBought}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.value}</td>
                    <td style={{backgroundColor:"#c9f3f5", border: "2px solid lightgrey"}}></td>
                </tr>
                {cardModels.map((card) => (
                    <tr key={card.name}>
                        <th style={{ border: "2px solid #3b3d3d", backgroundColor:"#4169E1", color: "white",}}>{card.name}</th>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{card.probability}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{card.winPercentage}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{card.lossPercentage}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{card.ecologyRating}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{card.socialRating}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{card.governanceRating}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{card.priceBought}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{card.value}</td>
                        <td style={{textAlign:"center", border: "2px solid lightgrey", backgroundColor:"#c9f3f5"}}>
                            <button onClick={() => handleSellCard(card)} >Sell</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}