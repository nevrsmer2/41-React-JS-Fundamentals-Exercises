import React from "react";
import backOfCard from "./back.png";
import UseCardFacingState from './hooks/UseCardFacingState';
import "./PlayingCard.css";

/* Call hook to fenders a single playing card and flip it. */
function PlayingCard({ front, back = backOfCard }) {
    const [isFacingUp, toggleCardFace] = UseCardFacingState(true);

    return (
        <img
            src={isFacingUp ? front : back}
            alt="playing card"
            // onClick={flipCard}
            onClick={toggleCardFace}
            className="PlayingCard Card"
        />
    );
}

export default PlayingCard;
