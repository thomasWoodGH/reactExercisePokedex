import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Pokecard from "../Pokecard"
import SearchForm from "../SearchForm"

export default function Pokedex(){
    const [nameInput, setNameInput] = useState("")
    const [pokemon, setPokemon] = useState([])

    const navigate = useNavigate()

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
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
        </>
    )
}