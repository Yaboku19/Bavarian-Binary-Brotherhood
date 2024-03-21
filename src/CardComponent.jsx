import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Typography, CardActions, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardRow from "./CardRow";

{
  /*

const BasicCard = () => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 24, mb: 2, textAlign: "center" }}
          variant="h2"
          color="text.secondary"
          gutterBottom
        >
          Quote of the Day
        </Typography>
        <Typography
          sx={{ fontSize: 18, mb: 1.5 }}
          variant="h5"
          color="text.secondary"
        >
          “I am not afraid of Dario, for I am learning how to sail my ship.”
        </Typography>
        <Typography sx={{ mb: 1 }} variant="body2">
          “Little Women” by Louisa May Alcott.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};
*/
}

export function CardComponent({ cardData, checkMoneyIsValid, handleBuyClick }) {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  {
    /* <div style={{ border: "1px solid red", margin: "10px" }}> */
  }

  return (
    <div style={{ margin: "10px" }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 24, mb: 2, textAlign: "center" }}
            variant="h2"
            color="text.secondary"
            gutterBottom
          >
            {cardData.name}
          </Typography>

          <CardRow
            cardData={cardData.probability}
            imageSrc={require("./icon/probability.jpeg")}
          ></CardRow>
          <CardRow
            cardData={cardData.winPercentage}
            imageSrc={require("./icon/ArrowUp.jpeg")}
          ></CardRow>
          <CardRow
            cardData={cardData.lossPercentage}
            imageSrc={require("./icon/ArrowDown.jpeg")}
          ></CardRow>
          <CardRow
            cardData={cardData.ecologyRating}
            imageSrc={require("./icon/tree.jpeg")}
          ></CardRow>
          <CardRow
            cardData={cardData.socialRating}
            imageSrc={require("./icon/social.jpeg")}
          ></CardRow>
          <CardRow
            cardData={cardData.governanceRating}
            imageSrc={require("./icon/governance.jpeg")}
          ></CardRow>

          <Typography
            sx={{ fontSize: 18, mb: 1.5 }}
            variant="h5"
            color="text.secondary"
          >
            “I am not afraid of Dario, for I am learning how to sail my ship.”
          </Typography>
          <Typography sx={{ mb: 1 }} variant="body2">
            “Little Women” by Louisa May Alcott.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
      {/*
    <Card>
        <div>
          <img src={require("./icon/ArrowUp.jpeg")} alt="Profit Percent" />
          <input type="text" value={cardData.winPercentage} readOnly />
        </div>
        <div>
          <img src={require("./icon/ArrowDown.jpeg")} alt="Loss Percent" />
          <input type="text" value={cardData.lossPercentage} readOnly />
        </div>
        <div>
          <img src={require("./icon/tree.jpeg")} alt="EcologyRating" />
          <input type="text" value={cardData.ecologyRating} readOnly />
        </div>
        <div>
          <img src={require("./icon/social.jpeg")} alt="Social Rating" />
          <input type="text" value={cardData.socialRating} readOnly />
        </div>
        <div>
          <img
            src={require("./icon/governance.jpeg")}
            alt="Governance Rating"
          />
          <input type="text" value={cardData.governanceRating} readOnly />
        </div>
        <div>
          <input type="number" onChange={handlePriceChange} />
          <button onClick={() => handleBuyClick(cardData, price)}>Buy</button>
        </div>
      </Card>
  */}
    </div>
  );
}
