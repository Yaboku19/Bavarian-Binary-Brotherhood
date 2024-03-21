import React from 'react';

export function MonopolyCard({ headerColor, title, price, description }) {
    const cardStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        minWidth: '200px',
        margin: '1em',
        padding: '10px'
    };

    const headerStyle = {
        backgroundColor: headerColor,
        padding: '10px',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center'
    };

    const priceStyle = {
        fontSize: '18px',
        textAlign: 'center'
    };

    const descStyle = {
        fontSize: '16px',
        textAlign: 'center'
    };

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                {title}
            </div>
            <div style={priceStyle}>
                {price}
            </div>
            <div style={descStyle}>
                {description}
            </div>
        </div>
    );
}