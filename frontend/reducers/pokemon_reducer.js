import {combineReducers} from 'redux';

import pokemonIndexReducer from './pokemon_index_reducer'
import currentPokemonReducer from './current_pokemon_reducer'

const pokemonReducer = combineReducers({
  index: pokemonIndexReducer,
  currentPokemon: currentPokemonReducer
})

export default pokemonReducer;