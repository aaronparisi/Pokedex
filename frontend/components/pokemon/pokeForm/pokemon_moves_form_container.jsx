import { connect } from 'react-redux'

import PokemonMovesForm from './pokemon_moves_form'
import { postMove, putMove, requestSingleMove } from '../../actions/move_actions'
import { receivePokemonErrors } from '../../actions/error_actions'
import { selectPokemonItems, selectPokemonMoveNames, selectSinglePokemon } from '../../reducers/pokemon_selectors'

const mapStateToProps = (state, ownProps) => {
  let pokemon = undefined;
  let editing = false;
  
  if (ownProps.match.params.pokemonId) {
    pokemon = selectSinglePokemon(state, parseInt(ownProps.match.params.pokemonId))
    editing = true;
  }

  return {
    errors: state.ui.errors.responseJSON,
    pokemon: pokemon,
    editing: editing
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

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMovesForm)