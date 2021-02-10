import React from 'react'
import { Route } from 'react-router-dom'

import Header from './header/header'
import PokemonIndexContainer from './pokemon/pokemon_index_container'

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" component={PokemonIndexContainer} />
    </div>
  )
}

export default App