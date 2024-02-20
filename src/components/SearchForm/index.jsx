import React, { useState } from "react"

export default function SearchForm({ onFormSubmit, nameInput, setNameInput }){

    const [noSearch, setNoSearch] = useState(false)

    const handleNameInput = (e) => {
        setNameInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNoSearch(true)
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameInput}`)
        const pokemon = await pokemonData.json()
        onFormSubmit({
            name: pokemon.name,
            type: pokemon.types[0].type.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        });
        setNameInput("")
    }

    return(
        <>
        {!noSearch && <p id="NoSearchYet">No Pokemon searched yet.</p>}
        <form onSubmit={handleSubmit}>
            <input value={nameInput} type="text" onChange={handleNameInput}/>
            <button type="submit" onSubmit={handleSubmit}>Search</button>
        </form>
        </>
    )
}