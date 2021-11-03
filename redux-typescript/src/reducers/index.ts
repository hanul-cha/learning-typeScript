import { combineReducers } from "redux"; //여기선 하나만 쓸건데 다른프로젝트에선 여러게 일수 있으니 합쳐서 사용하겠음
import PokemonReducer from "./PokemonReducer";


const rootReducer = combineReducers({
    PokemonReducer
})

export default rootReducer