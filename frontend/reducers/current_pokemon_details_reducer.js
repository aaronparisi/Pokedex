import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions'

const currentPokemonDetailsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return Object.assign({}, state, action.singlePoke)
    default:
      return state
  }
}

export default currentPokemonDetailsReducer