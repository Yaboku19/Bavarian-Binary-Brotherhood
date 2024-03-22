import React from "react";

/* 
Has the bottom bar with the current money, current turn 
and next turn button.
*/
export function BottomBar({ money, currentTurn, nextTurnHandler }) {
  const inputStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'black'
};
  return (
    <div>
      <input type="text" value={"Balance: " + money} readOnly style={inputStyle}/>
      <input type="text" value={"Turn: " + currentTurn + "/25"} readOnly style={inputStyle}/>
      <button onClick={nextTurnHandler}>Next Turn</button>
    </div>
  );
}
