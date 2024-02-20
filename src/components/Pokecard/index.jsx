import React from "react"
export default function Pokecard({ key, name, type, image }) {
    return (
        <>
            <div className="pokecard">
                <h2 className="pokemonName">{name}</h2>
                <img src={image} alt={name} />
                <p className="pokemonType">Type: {type}</p>
            </div>
        </>
    )
}