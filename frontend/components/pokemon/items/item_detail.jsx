import React from 'react'

const ItemDetail = props => {
  const detailRender = () => {
    if (props.item) {
      return (
        <ul className="item-detail-list">
          <li>{props.item.name}</li>
          <li>Happiness: {props.item.happiness}</li>
          <li>Price: {props.item.price}</li>
        </ul>
      )
    } else {
      return null
    }
  }

  return detailRender()
}

export default ItemDetail