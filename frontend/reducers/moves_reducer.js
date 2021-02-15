import { RECEIVE_POKEMON_MOVES, CLEAR_POKEMON_MOVES } from './../actions/move_actions';

const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_POKEMON_MOVES:
    return Object.assign({}, state, action.moves)
  case CLEAR_POKEMON_MOVES:
    return {}
  default:
    return state;
  }
}
  
export default movesReducer;