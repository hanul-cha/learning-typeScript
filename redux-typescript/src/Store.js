"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const index_1 = require("./reducers/index");
const redux_thunk_1 = require("redux-thunk");
const store = (0, redux_1.createStore)(index_1.default, (0, redux_1.applyMiddleware)(redux_thunk_1.default));
exports.default = store;
