import * as APIUtil from '../util/moves_api_util'
import { receivePokemonErrors } from './error_actions'

export const RECEIVE_POKEMON_MOVES = "RECEIVE_POKEMON_MOVES"
export const START_LODING_POKEMON_MOVES = "START_LOADING_POKEMON_MOVES"
export const CLEAR_POKEMON_MOVES = "CLEAR_POKEMON_MOVES"

export const receivePokemonMoves = moves => {
  return {
    type: RECEIVE_POKEMON_MOVES,
    moves
  }
}

export const startLoadingPokemonMoves = () => {
  return {
    type: START_LODING_POKEMON_MOVES
  }
}

export const requestPokemonMoves = pokeId => dispatch => {
  dispatch(startLoadingPokemonMoves())

  APIUtil.getAllPokemonMoves(pokeId)
  .then(
    moves => {
      dispatch(receivePokemonMoves(moves.moves))
    },
    err => {
      dispatch(receivePokemonErrors(err))
    }
  )
}

export const requestSingleMove = moveId => dispacth => {
  // dispatch(startLoadingPokemonMove())  // ? do I need to do this or can I just take the info from what's already in redux state?

}

export const postPokemonMoves = (moves, pokeId) => dispatch => {
  APIUtil.postPokemonMoves(moves, pokeId)
  .then(
    moves => {
      dispatch(receivePokemonMoves(moves.moves))
    },
    err => {
      dispatch(receivePokemonErrors(err))
    }
  )
}

export const clearPokemonMoves = () => {
  return {
    type: CLEAR_POKEMON_MOVES
  }
}