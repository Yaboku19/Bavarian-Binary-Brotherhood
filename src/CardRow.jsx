import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Typography, CardActions, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function CardRow({ cardData, imageSrc }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ flex: 1 }}></div>
      <div>
        <img src={imageSrc} alt="Profit Percent" />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">{cardData}</Typography>
      </div>
    </div>
  );
}
