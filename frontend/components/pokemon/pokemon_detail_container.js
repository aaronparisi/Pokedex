import { connect } from 'react-redux'

import PokemonDetail from './pokemon_detail'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import { selectSinglePokemon, selectPokemonItems, selectPokemonMoveNames } from '../../reducers/pokemon_selectors'

const mapSateToProps = (state, ownProps) => {
  return {
    items: selectPokemonItems(state),
    moves: selectPokemonMoveNames(state),
    pokemon: selectSinglePokemon(state, parseInt(ownProps.match.params.pokemonId)),
    loadingSingle: state.ui.loading.loadingSingle
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePokemon: pokeId => dispatch(requestSinglePokemon(pokeId))
  }
}

const container = connect(mapSateToProps, mapDispatchToProps)(PokemonDetail)

export default container;