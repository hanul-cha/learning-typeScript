"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPokemonData = void 0;
const axios_1 = require("axios");
const PokemonActionTypes_1 = require("./PokemonActionTypes");
const fetchPokemonData = (pokemonName) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = res.data;
        dispatch({
            type: PokemonActionTypes_1.POKEMON_SUCCESS,
            payload: data
        }); //type이 POKEMON_SUCCESS라면 payload를 인자로 무조건 불러와야한다는 타입을 지정해주었음
    }
    catch (err) {
        dispatch({
            type: PokemonActionTypes_1.POKEMON_FAIL
        }); //여기선 type이 FAIL로 가져왔기때문에 다른 인자를 필요로 하지 않아 경고를 주지 않는다
    }
});
exports.fetchPokemonData = fetchPokemonData;
