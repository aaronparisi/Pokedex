import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON"

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
})

export const requestAllPokemon = () => (dispatch) => {
  console.log('requesting all pokemon')
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
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
        console.log('error requesting single pokemon')
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
      },
      err => {
        console.log('error posting pokemon')
      }
    )
  )
}