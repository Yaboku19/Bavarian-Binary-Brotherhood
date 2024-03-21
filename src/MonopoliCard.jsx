import React from 'react';

export function MonopolyCard({ headerColor, title }) {
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

    const iconWithTextStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '10px'
    };

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                {title}
            </div>
            <div style={iconWithTextStyle}>
                <img src={require("./icon/propability.jpeg")} alt="Winning Probility" />
                <p>example</p>
            </div>
        </div>
    );
}