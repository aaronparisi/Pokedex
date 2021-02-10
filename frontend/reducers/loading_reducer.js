import {
  RECEIVE_ALL_POKEMON, 
  RECEIVE_SINGLE_POKEMON,
  START_LOADING_ALL_POKEMON,
  START_LOADING_SINGLE_POKEMON
} from './../actions/pokemon_actions';

import { RECEIVE_POKEMON_ERRORS } from './../actions/error_actions'

const loadingReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
    case RECEIVE_SINGLE_POKEMON:
    case RECEIVE_POKEMON_ERRORS:
      return Object.assign({}, state, { loadingAll: false, loadingSingle: false })
    case START_LOADING_ALL_POKEMON:
      return Object.assign({}, state, { loadingAll: true })
    case START_LOADING_SINGLE_POKEMON:
      return Object.assign({}, state, { loadingSingle: true })
    default:
      return state;
  }
}

export default loadingReducer