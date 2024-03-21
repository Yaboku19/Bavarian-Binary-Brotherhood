/**
 * Renders the ColorMap component in the root element of the DOM.
 * @module index
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ESGGame from './ESGGame'

ReactDOM.render(
    <React.StrictMode>
        <ESGGame />
    </React.StrictMode>
    ,
    document.getElementById('root')
);
