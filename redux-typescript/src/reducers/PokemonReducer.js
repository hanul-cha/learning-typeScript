"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokemonActionTypes_1 = require("../actions/PokemonActionTypes");
const initialState = {
    success: false
};
const PokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case PokemonActionTypes_1.POKEMON_FAIL:
            return Object.assign(Object.assign({}, state), { success: false });
        case PokemonActionTypes_1.POKEMON_SUCCESS:
            const { abilities, sprites } = action.payload;
            return Object.assign(Object.assign({}, state), { success: true, pokemon: {
                    abilities,
                    sprites
                } });
        default:
            return state;
    }
};
exports.default = PokemonReducer;
