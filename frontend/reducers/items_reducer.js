import { RECEIVE_POKEMON_ITEMS, CLEAR_POKEMON_ITEMS } from './../actions/item_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_POKEMON_ITEMS:
    return Object.assign({}, action.items)  // * we can just obliterate the old state
  case CLEAR_POKEMON_ITEMS:
    return {}
  default:
    return state;
  }
}
  
export default itemsReducer;
