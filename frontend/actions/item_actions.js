import * as APIUtil from '../util/items_api_util'
import { receivePokemonErrors } from './error_actions'

export const RECEIVE_POKEMON_ITEMS = "RECEIVE_POKEMON_ITEMS"
export const START_LODING_POKEMON_ITEMS = "START_LOADING_POKEMON_ITEMS"
export const CLEAR_POKEMON_ITEMS = "CLEAR_POKEMON_ITEMS"

export const receivePokemonItems = items => {
  return {
    type: RECEIVE_POKEMON_ITEMS,
    items
  }
}

export const startLoadingPokemonItems = () => {
  return {
    type: START_LODING_POKEMON_ITEMS
  }
}

export const requestPokemonItems = pokeId => dispatch => {
  dispatch(startLoadingPokemonItems())

  APIUtil.getAllPokemonItems(pokeId)
  .then(
    items => {
      dispatch(receivePokemonItems(items.items))
    },
    err => {
      dispatch(receivePokemonErrors(err))
    }
  )
}

export const clearPokemonItems = () => {
  return {
    type: CLEAR_POKEMON_ITEMS
  }
}