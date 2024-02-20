import React from "react"
import Pokecard from "../Pokecard"

export default function Pokedex({ pokemon }){
    return(
        <>
        <div>
            <ul>
                {pokemon.map((p, i) => <Pokecard key={i} name={p.name} type={p.type} image={p.image}/>)}
            </ul>
        </div>
        </>
    )
}