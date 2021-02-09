import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON"
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS"

export const receiveAllPokemon = pokemon => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon: pokemon
  }
}

export const requestAllPokemon = () => dispatch => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => {
      dispatch(receiveAllPokemon(pokemon))
    })
}

export const receiveSinglePokemon = singlePoke => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    pokemon: singlePoke
  }
}

export const requestSinglePokemon = pokeId => dispatch => {
  return (
    APIUtil.fetchSinglePokemon(pokeId)
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

export const receivePokemonErrors = errors => {
  return {
    type: RECEIVE_POKEMON_ERRORS,
    errors: errors
  }
}