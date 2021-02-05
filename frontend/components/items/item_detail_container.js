import { connect } from 'react-redux'
import { selectSingleItem } from '../../reducers/selectors'

import ItemDetail from './item_detail'

const mapSateToProps = (state, ownProps) => {
  return {
    item: selectSingleItem(state, parseInt(ownProps.match.params.itemId))
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapSateToProps)(ItemDetail)