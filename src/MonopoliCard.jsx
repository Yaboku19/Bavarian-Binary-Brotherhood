import React from 'react';

export function MonopolyCard({ headerColor, title, values}) {
    const cardStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        minWidth: '200px',
        margin: '1em',
        padding: '10px'
    };

    const icons = ["./icon/propability.jpeg", 
        "./icon/propability.jpeg", 
        "./icon/propability.jpeg", 
        "./icon/propability.jpeg", 
        "./icon/propability.jpeg", 
        "./icon/propability.jpeg"];
    
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
            {values.map((value, index) => (
                <div key={index} style={iconWithTextStyle}>
                    <img src={require("./icon/propability.jpeg")} alt="Winning Probility" />
                    <p>{value}</p>
                    <p>{icons[index]}</p>
                </div>
            ))}
        </div>
    );
}