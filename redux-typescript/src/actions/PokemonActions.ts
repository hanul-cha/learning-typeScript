import axios from "axios";
import { Dispatch } from "redux";
import { PokemonDispatchType, POKEMON_FAIL, POKEMON_SUCCESS } from "./PokemonActionTypes";

export const fetchPokemonData = (pokemonName: string) => async (dispatch: Dispatch<PokemonDispatchType>) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = res.data

        dispatch({
            type: POKEMON_SUCCESS,
            payload:data
        })//type이 POKEMON_SUCCESS라면 payload를 인자로 무조건 불러와야한다는 타입을 지정해주었음
    } catch(err) {
        dispatch({
            type: POKEMON_FAIL
        })//여기선 type이 FAIL로 가져왔기때문에 다른 인자를 필요로 하지 않아 경고를 주지 않는다
    }
}