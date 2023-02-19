import React from "react";

/* API to fetch iamge for Pokemon character */

const pAPI = "https://raw.githubusercontent.com/" +
    "PokeAPI/sprites/master/sprites/pokemon/";


/* Create a card for each Pokemon character */

function PokeCard({ exp, id, name, type }) {
    const img = `${pAPI}${id}.png`;

    return (
        <div className="PokeCard">
            <div className="PokeCard-title">{name}</div>
            <img className="PokeCard-image" src={img} alt={name} />
            <div className="PokeCard-type">Type: {type}</div>
            <div className="PokeCard-exp">EXP: {exp}</div>
        </div>
    );
}

export default PokeCard;
