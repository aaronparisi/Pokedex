import { combineReducers } from 'redux'

import currentPokemonDetailsReducer from './current_pokemon_details_reducer'
import itemsReducer from './items_reducer'
import movesReducer from './moves_reducer'

const currentPokemonReducer = combineReducers({
  pokemon: currentPokemonDetailsReducer,
  moves: movesReducer,
  items: itemsReducer
})

export default currentPokemonReducer