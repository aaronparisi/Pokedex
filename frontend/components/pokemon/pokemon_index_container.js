import {connect} from 'react-redux';

import {requestAllPokemon} from './../../actions/pokemon_actions';
import {selectPokemonIndex} from './../../reducers/pokemon_selectors';
import PokemonIndex from './pokemon_index';


const mapStateToProps = state => {
  return {
    pokemon: selectPokemonIndex(state),
    loadingAll: state.ui.loading.loadingAll
  }
}

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex)