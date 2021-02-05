import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';



const configureStore = (preloadedState = {}) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancer(applyMiddleware(thunk, logger))
  );
}


export default configureStore;