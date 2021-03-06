import React from 'react'
import { Route } from 'react-router-dom'

import ItemDetailContainer from './items/item_detail_container'
import ItemIndexContainer from './items/item_index_container'
import LoadingPokeball from './loading_pokeball'

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    this.props.requestPokemonMoves(this.props.match.params.pokemonId)
    this.props.requestPokemonItems(this.props.match.params.pokemonId)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps && this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId)
      this.props.requestPokemonMoves(this.props.match.params.pokemonId)
      this.props.requestPokemonItems(this.props.match.params.pokemonId)
    }
  }

  componentDidUnmount() {
    this.props.clearPokemonMoves()
    this.props.clearPokemonItems()
  }

  detailsDisplay() {
    if (this.props.loadingSingle) {
      return <LoadingPokeball />
    }
    else if (this.props.pokemon) {
      return (
        <div className="pokemon-detail">
          <figure>
            <img src={this.props.pokemon.imageUrl} alt={`image of ${this.props.pokemon.name}`}/>
          </figure>
          <ul className="poke-detail-list">
            <li>Name: {this.props.pokemon.name}</li>
            <li>Type: {this.props.pokemon.pokeType}</li>
            <li>Attack: {this.props.pokemon.attack}</li>
            <li>Defense: {this.props.pokemon.defense}</li>
            <li>Moves: {this.props.moves.join(', ')}</li>
          </ul>

          <ItemIndexContainer items={this.props.items} pokemonId={this.props.pokemon.id} />

          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return this.detailsDisplay()
  }
}

export default PokemonDetail