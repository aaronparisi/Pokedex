import { connect } from 'react-redux'

import PokemonDetail from './pokemon_detail'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import { selectSinglePokemon, selectPokemonItems, selectPokemonMoveNames } from '../../reducers/pokemon_selectors'
import { requestPokemonMoves, clearPokemonMoves } from '../../actions/move_actions'
import { requestPokemonItems, clearPokemonItems } from '../../actions/item_actions'

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
    requestSinglePokemon: pokeId => dispatch(requestSinglePokemon(pokeId)),
    requestPokemonItems: pokeId => dispatch(requestPokemonItems(pokeId)),
    requestPokemonMoves: pokeId => dispatch(requestPokemonMoves(pokeId)),
    clearPokemonMoves: () => dispatch(clearPokemonMoves()),
    clearPokemonItems: () => dispatch(clearPokemonItems())
  }
}

const container = connect(mapSateToProps, mapDispatchToProps)(PokemonDetail)

export default container;