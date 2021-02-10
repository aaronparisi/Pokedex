export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS"

export const receivePokemonErrors = errors => {
  return {
    type: RECEIVE_POKEMON_ERRORS,
    errors: errors
  }
}