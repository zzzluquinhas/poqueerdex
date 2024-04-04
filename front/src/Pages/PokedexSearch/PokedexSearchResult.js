import './PokedexSearchResult.css'
import { PokedexSearchItem } from "./PokedexSearchItem"
import { useState } from "react"
import { PokemonInfoPage } from "../PokemonInfo/PokemonInfoPage";


export function PokedexSearchResult(props){

    return(
        <div className='pokemon-container'> 
            {props.pokemonList.map(pokemon => (
                <div pokemon-grid-item>
                    <PokedexSearchItem pokemonNumber={pokemon.entry_number} pokemonName={pokemon.pokemon_species.name}></PokedexSearchItem>
                </div>
            ))}
        </div>
    )
}