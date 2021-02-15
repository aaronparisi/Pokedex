import React from 'react';
import { Route, Switch } from 'react-router-dom'

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
  
          <Switch>
            <Route path="/pokemon/:pokemonId" render={() => {
              <div>
                <Switch>
                  <Route path="/pokemon/:pokemonId/edit-pokemon" component={PokemonFormContainer} />
                  <Route path="/pokemon/:pokemonId/" component={PokemonContainer} />
                </Switch>
                <Switch>
                  <Route path="/pokemon/:pokemonId/edit-moves" component={PokemonMovesFormContainer} />
                  <Route path="/pokemon/:pokemonId/" component={PokemonMovesContainer} />
                </Switch>
                <Switch>
                  <Route path="/pokemon/:pokemonId/edit-items" component={PokemonItemsFormContainer} />
                  <Route path="/pokemon/:pokemonId/" component={PokemonItemsContainer} />
                </Switch>
              </div>
            }} />
            <Route path="/pokemon/:pokemonId/edit" component={PokemonFormContainer} />
          </Switch>
          <Route exact path="/" component={PokemonFormContainer} />
        </div>
      )
    }
    
  }
  }
  
  
  
  export default PokemonIndex;