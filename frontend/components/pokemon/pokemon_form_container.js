import { connect } from 'react-redux'

import PokemonForm from './pokemon_form'
import { postPokemon, receivePokemonErrors } from '../../actions/pokemon_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.ui.errors.responseJSON
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postPokemon: pokeToAdd => dispatch(postPokemon(pokeToAdd)),
    receivePokemonErrors: errors => dispatch(receivePokemonErrors(errors))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm)