"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux"); //여기선 하나만 쓸건데 다른프로젝트에선 여러게 일수 있으니 합쳐서 사용하겠음
const PokemonReducer_1 = require("./PokemonReducer");
const rootReducer = (0, redux_1.combineReducers)({
    PokemonReducer: PokemonReducer_1.default
});
exports.default = rootReducer;
