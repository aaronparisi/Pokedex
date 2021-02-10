import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions'

const currentPokemonDetailsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      let id = action.pokemon.pokemon.id
      return Object.assign({}, state, { [id]: action.pokemon })
    default:
      return state
  }
}

export default currentPokemonDetailsReducer