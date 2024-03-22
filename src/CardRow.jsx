import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Typography, CardActions, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function CardRow({ cardData, imageSrc }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
        justifyContent: "space-between",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <img
        src={imageSrc}
        alt="Profit Percent"
        style={{
          border: "2px solid black",
        }}
      />

      <div style={{}}>
        <Typography variant="body1">{cardData}</Typography>
      </div>
    </div>
  );
}
