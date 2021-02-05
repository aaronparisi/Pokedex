import { connect } from 'react-redux'

import PokemonDetail from './pokemon_detail'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import { selectSinglePokemon, selectPokemonItems, selectPokemonMoveNames } from '../../reducers/selectors'

const mapSateToProps = (state, ownProps) => {
  return {
    items: selectPokemonItems(state),
    moves: selectPokemonMoveNames(state),
    pokemon: selectSinglePokemon(state, parseInt(ownProps.match.params.pokemonId))
    // * i think by the time this function is actually ~called~
    // * we will have access to the match stuff,
    // * so we don't have to preemptively pass that in from the index route
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePokemon: pokeId => dispatch(requestSinglePokemon(pokeId))
  }
}

const container = connect(mapSateToProps, mapDispatchToProps)(PokemonDetail)

export default container;