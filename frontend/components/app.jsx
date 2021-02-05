import React from 'react'
import { Route } from 'react-router-dom'

import PokemonIndexContainer from './pokemon/pokemon_index_container'

const App = () => {
  return (
    <div>
      <Route path="/" component={PokemonIndexContainer} />
    </div>
  )
}

export default App