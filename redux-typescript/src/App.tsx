import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from "./Store"
import { fetchPokemonData } from "./actions/PokemonActions"

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const pokemonReducer = useSelector((state: RootReducerType) => state.PokemonReducer)
  const dispatch = useDispatch()


  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value)
  const searchPokemonv = () => {
    dispatch(fetchPokemonData(pokemonName))
  }



  return (
    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button onClick={searchPokemonv}>포켓몬찾기</button>
      {pokemonReducer.success &&
        <div>
            <p>{pokemonName}</p>
            {pokemonReducer.pokemon?.abilities.map((abilities, i) => {
              return (
                <div key={i}>
                  <p>{abilities.ability.name}</p>
                  <p>{abilities.slot}</p>
                </div>
              )
            })}
            <img src={pokemonReducer.pokemon?.sprites.front_default} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
