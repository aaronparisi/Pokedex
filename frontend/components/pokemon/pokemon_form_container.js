import { connect } from 'react-redux'

import PokemonForm from './pokemon_form'
import { postPokemon, putPokemon, requestSinglePokemon } from '../../actions/pokemon_actions'
import { receivePokemonErrors } from '../../actions/error_actions'
import { selectPokemonItems, selectPokemonMoveNames, selectSinglePokemon } from '../../reducers/pokemon_selectors'

const mapStateToProps = (state, ownProps) => {
  let pokemon = undefined;
  let moves = undefined;
  let items = undefined;
  
  if (ownProps.match.params.pokemonId) {
    pokemon = selectSinglePokemon(state, parseInt(ownProps.match.params.pokemonId))  // todo make this request happen conditionally
    moves = selectPokemonMoveNames(state)
    items = selectPokemonItems(state)
  }

  return {
    errors: state.ui.errors.responseJSON,
    pokemon: pokemon,
    moves: moves,
    items: items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postPokemon: pokeToAdd => dispatch(postPokemon(pokeToAdd)),
    putPokemon: pokeToAdd => dispatch(putPokemon(pokeToAdd)),
    receivePokemonErrors: errors => dispatch(receivePokemonErrors(errors)),
    requestSinglePokemon: pokeId => dispatch(requestSinglePokemon(pokeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm)