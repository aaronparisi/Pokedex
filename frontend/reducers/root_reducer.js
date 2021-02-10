import {combineReducers} from 'redux';

import pokemonReducer from './pokemon_reducer';
import uiReducer from './ui_reducer'

const rootReducer = combineReducers({
  entities: pokemonReducer,
  ui: uiReducer
});

export default rootReducer;