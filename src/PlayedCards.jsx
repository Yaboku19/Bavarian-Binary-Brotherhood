import { border, style } from '@mui/system';
import React from 'react';

export default function PlayedCards({ cardModels, handleSellCard }) {
    const totalRow = cardModels.reduce(
        (acc, card) => {
            acc.probability /= 100;
            acc.winPercentage /= 100;
            acc.lossPercentage /= 100;
            acc.ecologyRating /= 100;
            acc.socialRating /= 100;
            acc.governanceRating /= 100;

            acc.ecologyRating = (acc.ecologyRating * acc.value) + (card.ecologyRating * parseInt(card.value));
            acc.socialRating += (acc.socialRating * acc.value) + (card.socialRating * parseInt(card.value));
            acc.governanceRating += (acc.governanceRating * acc.value) + (card.governanceRating * parseInt(card.value));

            acc.value += parseInt(card.value);
            acc.ecologyRating /= acc.value;
            acc.socialRating /= acc.value;
            acc.governanceRating /= acc.value;
            acc.probability *= (card.probability * card.value);
            acc.probability /= acc.value;
            acc.winPercentage += (card.winPercentage * card.value);
            acc.winPercentage /= acc.value;
            acc.lossPercentage += (card.lossPercentage * card.value);
            acc.lossPercentage /= acc.value;
            acc.priceBought += parseInt(card.priceBought);

            acc.probability *= 10000;
            acc.probability = Math.round(acc.probability);
            acc.probability /= 100;

            acc.winPercentage *= 10000;
            acc.winPercentage = Math.round(acc.winPercentage);
            acc.winPercentage /= 100;

            acc.lossPercentage *= 10000;
            acc.lossPercentage = Math.round(acc.lossPercentage);
            acc.lossPercentage /= 100;

            acc.ecologyRating *= 10000;
            acc.ecologyRating = Math.round(acc.ecologyRating);
            acc.ecologyRating /= 100;

            acc.socialRating *= 10000;
            acc.socialRating = Math.round(acc.socialRating);
            acc.socialRating /= 100;

            acc.governanceRating *= 10000;
            acc.governanceRating = Math.round(acc.governanceRating);
            acc.governanceRating /= 100;
            return acc;
        },
        {
            probability: 100,
            winPercentage: 0,
            lossPercentage: 0,
            ecologyRating: 0,
            socialRating: 0,
            governanceRating: 0,
            priceBought: 0,
            value: 0,
        }
    );

    // Calculate the average socialRating
    if (totalRow.value !== 0) {
        totalRow.socialRating = (totalRow.socialRating / totalRow.value).toFixed(2);
    }

    // Calculate the average ecologyRating
    if (totalRow.value !== 0) {
        totalRow.ecologyRating = (totalRow.ecologyRating / totalRow.value).toFixed(2);
    }

    // Calculate the average governanceRating
    if (totalRow.value !== 0) {
        totalRow.governanceRating = (totalRow.governanceRating / totalRow.value).toFixed(2);
    }

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
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.probability + "%"}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.winPercentage + "%"}</td>
                    <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{totalRow.lossPercentage + "%"}</td>
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
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{(Math.round(card.probability * 100)) + "%"}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{(Math.round(card.winPercentage * 100)) + "%"}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{(Math.round(card.lossPercentage * 100)) + "%"}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{(Math.round(card.ecologyRating * 100))}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{(Math.round(card.socialRating * 100))}</td>
                        <td style={{ border: "2px solid lightgrey", backgroundColor:"#c9f3f5" }}>{(Math.round(card.governanceRating * 100))}</td>
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