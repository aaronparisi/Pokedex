import { connect } from 'react-redux'

import ItemIndex from './item_index'

const mapSateToProps = (state, ownProps) => {
  return {
    items: ownProps.items,
    pokeId: ownProps.pokemonId
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapSateToProps)(ItemIndex)