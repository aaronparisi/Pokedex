import * as APIUtil from '../util/pokemon_api_util';
import { receivePokemonErrors } from './error_actions'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON"
export const START_LOADING_ALL_POKEMON = "START_LOADING_ALL_POKEMON"
export const START_LOADING_SINGLE_POKEMON = "START_LOADING_SINGLE_POKEMON"

export const startLoadingAllPokemon = () => {
  return {
    type: START_LOADING_ALL_POKEMON
  }
}

export const startLoadingSinglePokemon = () => {
  return {
    type: START_LOADING_SINGLE_POKEMON
  }
}

export const receiveAllPokemon = pokemon => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon: pokemon
  }
}

export const receiveSinglePokemon = singlePoke => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    pokemon: singlePoke
  }
}

export const requestAllPokemon = () => dispatch => {
  dispatch(startLoadingAllPokemon())

  return APIUtil.getAllPokemon()
    .then(pokemon => {
      dispatch(receiveAllPokemon(pokemon))
    })
}

export const requestSinglePokemon = pokeId => dispatch => {
  dispatch(startLoadingSinglePokemon())

  return (
    APIUtil.getSinglePokemon(pokeId)
    .then(
      singlePoke => {
        dispatch(receiveSinglePokemon(singlePoke))
      },
      err => {
        dispatch(receivePokemonErrors(err))
      }
    )
  )
}

export const postPokemon = pokemon => dispatch => {
  return (
    APIUtil.postPokemon(pokemon)
    .then(
      addedPoke => {
        dispatch(receiveSinglePokemon(addedPoke))  // this should include items and moves from :show
        return addedPoke
      },
      err => {
        dispatch(receivePokemonErrors(err))
      }
    )
  )
}

export const putPokemon = pokemon => dispatch => {
  return (
    APIUtil.putPokemon(pokemon)
    .then(
      addedPoke => {
        dispatch(receiveSinglePokemon(addedPoke))  // this should include items and moves from :show
        return addedPoke
      },
      err => {
        dispatch(receivePokemonErrors(err))
      }
    )
  )
}