import { RECEIVE_POKEMON_ERRORS } from '../actions/error_actions'

const errorsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return Object.assign({}, action.errors, state)
    default:
      return state;
  }
}

export default errorsReducer