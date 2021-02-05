import React from 'react';
import { Route } from 'react-router-dom'

import PokemonIndexItem from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container'

class PokemonIndex extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.requestAllPokemon()
  }
  
  render() {
    const pokeItems = this.props.pokemon.map(poke => {
      return <PokemonIndexItem key={poke.id} poke={poke} />
    })
    
    return (
      <div className="main-content">
        <section className="pokedex">
          <ul>
            {pokeItems}
          </ul>
        </section>

        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>
    )
  }
  }
  
  
  
  export default PokemonIndex;