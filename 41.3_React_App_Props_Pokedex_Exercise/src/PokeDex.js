import React from "react";
import PokeCard from "./PokeCard";
// import "./Pokedex.css";


const pokemonPlayers = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];



/* HTML structure for each Pokemon card. */

function PokeDex({ pokemonPlayers }) {
    return (
        <div className="PokeDex">
            <h2 className="PokeDex-title">Pokedex</h2>
            <div className="PokeDex-cards">
                {pokemonPlayers.map(p => (
                    <PokeCard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
        </div>
    );
}

export default PokeDex;
