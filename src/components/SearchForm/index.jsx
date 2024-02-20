import React, { useState, useEffect } from "react"

export default function SearchForm({ onFormSubmit, nameInput, setNameInput }){

    const [searching, setSearching] = useState("")

    const handleNameInput = (e) => {
        setNameInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setSearching("Searching...")
            const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameInput.toLowerCase()}`)
            const pokemon = await pokemonData.json()
            const pokemonTypes = (pokemon.types.length == 2 ? `${pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}, ${pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}` : pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1))
            onFormSubmit({
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            type: pokemonTypes,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        });
        setSearching("")
        setNameInput("")
        } catch (error) {
            setSearching("Pokemon not found.")
        }
    }

    return(
        <>
        <p className="searching">{searching}</p>
        <form onSubmit={handleSubmit}>
            <input value={nameInput} type="text" onChange={handleNameInput}/>
            <button type="submit" onSubmit={handleSubmit}>Search</button>
        </form>
        </>
    )
}