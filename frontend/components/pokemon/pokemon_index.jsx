import React from 'react';
import { Route } from 'react-router-dom'

import PokemonIndexItem from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container'
import PokemonFormContainer from './pokemon_form_container'
import LoadingPokeball from './loading_pokeball'

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

    if (this.props.loadingAll) {
      // render spinner
      return <LoadingPokeball />
    } else {
      // render index view and detail view / form
      return (
        <div className="main-content">
          <section className="pokedex">
            <ul>
              {pokeItems}
            </ul>
          </section>
  
          <Route exact path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
          <Route path="/pokemon/:pokemonId/edit" component={PokemonFormContainer} />
          <Route exact path="/" component={PokemonFormContainer} />
        </div>
      )
    }
    
  }
  }
  
  
  
  export default PokemonIndex;