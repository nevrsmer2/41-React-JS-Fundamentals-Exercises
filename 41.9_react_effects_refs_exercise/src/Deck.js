import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

/*  Base API for creating a deck, reshuffling a deck, and drawing a card from this deck given the appropriate endpoing*/

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

/* Creates a new deck containing 52 cards using */
/* Sets initiat state for the deck, drawing a card, and deck shuffling */

function Deck() {
    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);

    console.log('DRAWN:', drawn)

    useEffect(function loadDeckFromAPI() {
        async function fetchData() {
            const d = await axios.get(`${API_BASE_URL}/new/shuffle/`);
            setDeck(d.data);
        };
        fetchData();
    }, []);

    /* Draws a card from deck and update state of drawn */

    async function drawCard() {
        try {
            const drawRes = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw/`);
            if (drawRes.data.remaining === 0) throw new Error("There are no more cards in the deck!");

            const card = drawRes.data.cards[0];

            setDrawn(d => [
                ...d,
                {
                    id: card.code,
                    name: `${card.suit} ${card.value}`,
                    image: card.image,
                },
            ]);
        } catch (error) {
            alert(error);
        };
    };

    /** Shuffles the current deck and updates the state of the drawn card and shuffling of deck*/

    async function shuffleDeck() {
        setIsShuffling(true);
        try {
            await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`);
            setDrawn([]);
        } catch (err) {
            alert(err);
        } finally {
            setIsShuffling(false);
        }
    }

    /* Returns the button to draw a card in the DOM */
    function drawCardButton() {
        return (
            <button
                onClick={drawCard}
                disabled={isShuffling}
            >Draw a Card</button>
        );
    };

    /* Returns the button in the DOM to shuffle the deck 
    Maps 'dran' []] and passes id, name and image values of each card in the [] to Card component as props*/

    function shuffleDeckButton() {
        if (!deck) return null;
        return (
            <button
                onClick={shuffleDeck}
                disabled={isShuffling}
            >Shuffle Deck</button>
        );
    };

    return (
        <>
            {drawCardButton()}
            {shuffleDeckButton()}

            <div>{
                drawn.map(card => (
                    <Card key={card.id} name={card.name} image={card.image} />
                ))}
            </div>
        </>
    );
};

export default Deck;
