import React from 'react';


/* Renders a single carf from the deck */

function Card({ name, image }) {
    return <img
        className="Card"
        alt={name}
        src={image}
    />;
}

export default Card;
