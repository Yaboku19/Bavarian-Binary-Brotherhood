import React from "react";

/* 
Has the bottom bar with the current money, current turn 
and next turn button.
*/
export function BottomBar({ money, currentTurn, nextTurnHandler }) {
  return (
    <div>
      <input type="text" value={money} readOnly />
      <input type="text" value={"Turn: " + currentTurn + "/25"} readOnly />
      <button onClick={nextTurnHandler}>Skip Turn</button>
    </div>
  );
}
