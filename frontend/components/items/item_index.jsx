import React from 'react'
import { Link } from 'react-router-dom'

const ItemIndex = props => {
  return (
    <div className="toys">
      <h3>Items</h3>
      <ul className="toy-list">
        {props.items.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/pokemon/${props.pokemonId}/items/${item.id}`}>
                <img src={item.imageUrl} alt={`image of ${item.name}`} className="item-image"/>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ItemIndex