import { connect } from 'react-redux'

import PokemonForm from './pokemon_form'
import { postPokemon } from '../../actions/pokemon_actions'

const mapStateToProps = (state, ownProps) => {

}

const mapDispatchToProps = dispatch => {
  return {
    postPokemon: pokeToAdd => dispatch(postPokemon(pokeToAdd))
  }
}

export default connect(null, mapDispatchToProps)(PokemonForm)