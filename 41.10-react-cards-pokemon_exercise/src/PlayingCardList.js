import React from "react";
import UseAxios from "./hooks/UseAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a playing card each time a button is clicked.  Uses UseAxios hook in /hooks directory */
function CardTable() {
    const URL = "https://deckofcardsapi.com/api/deck/new/draw/";
    const { data, fetchData } = UseAxios();

    return (
        <div className="PlayingCardList">
            <h3>Pick a card, any card!</h3>
            <div>
                <button onClick={() => fetchData(URL)}>Add a playing card!</button>
            </div>
            <div className="PlayingCardList-card-area">
                {data.map(cardData => (
                    <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
                ))}
            </div>
        </div>
    );
}

CardTable.defaultProps = {};

export default CardTable;
