import React from 'react';
import {CardComponent} from './CardComponent';

export function CardHand({ cardData: cardDataList, onPlayCard: onPlayCard }) {
    return (
        <div style={{ display: 'flex' }}>
            <CardComponent cardData={cardDataList[0]} handleBuyClick={onPlayCard} />
            <CardComponent cardData={cardDataList[1]} handleBuyClick={onPlayCard} />
            <CardComponent cardData={cardDataList[2]} handleBuyClick={onPlayCard} />
        </div>
    );
}