import React, { useState } from "react"
import Pokecard from "../Pokecard"
import SearchForm from "../SearchForm"

export default function Pokedex(){
    const [nameInput, setNameInput] = useState("")
    const [pokemon, setPokemon] = useState([])

    const addPokemon = (newPokemon) => {
        setPokemon([...pokemon, newPokemon])
    }

    return(
        <>
        <div>
            <ul>
                {pokemon.map((p, i) => <Pokecard key={i} name={p.name} type={p.type} image={p.image}/>)}
            </ul>
            <SearchForm onFormSubmit={addPokemon} nameInput={nameInput} setNameInput={setNameInput}/>
        </div>
        </>
    )
}