import axios from "axios";
import { Dispatch } from "redux";

export const fetchPokemonData = (pokemonName: string) => async (dispatch: Dispatch) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = res.data
    } catch(err) {

    }
}