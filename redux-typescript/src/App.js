"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const PokemonActions_1 = require("./actions/PokemonActions");
function App() {
    var _a, _b;
    const [pokemonName, setPokemonName] = (0, react_1.useState)("");
    const pokemonReducer = (0, react_redux_1.useSelector)((state) => state.PokemonReducer);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handlePokemonName = (event) => setPokemonName(event.target.value);
    const searchPokemonv = () => {
        dispatch((0, PokemonActions_1.fetchPokemonData)(pokemonName));
    };
    return (<div className="App">
      <input value={pokemonName} onChange={handlePokemonName}/>
      <button onClick={searchPokemonv}>포켓몬찾기</button>
      {pokemonReducer.success &&
            <div>
            <p>{pokemonName}</p>
            {(_a = pokemonReducer.pokemon) === null || _a === void 0 ? void 0 : _a.abilities.map((abilities, i) => {
                    return (<div key={i}>
                  <p>{abilities.ability.name}</p>
                  <p>{abilities.slot}</p>
                </div>);
                })}
            <img src={(_b = pokemonReducer.pokemon) === null || _b === void 0 ? void 0 : _b.sprites.front_default} alt=""/>
        </div>}
    </div>);
}
exports.default = App;
