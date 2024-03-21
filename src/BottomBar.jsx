import React from 'react';

export function BottomBar({ money, currentTurn, nextTurnHandler}) {
    return (
        <div>
            <input type="text" value={money} readOnly />
            <input type="text" value={"Turn: " + currentTurn + "/25"} readOnly />
            <button onClick={nextTurnHandler}>Next Turn</button>
        </div>
    );
};