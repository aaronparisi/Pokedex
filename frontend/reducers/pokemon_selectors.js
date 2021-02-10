export const selectPokemonIndex = state => {
  return Object.values(state.entities.index)
}

export const selectSinglePokemon = state => {
  return state.entities.currentPokemon.pokemon
}

// ? do i want to move these into separate selector files?
export const selectPokemonMoveNames = state => {
  return Object.values(state.entities.currentPokemon.moves).map(move => move.name)
}

export const selectPokemonItemNames = state => {
  return Object.values(state.entities.currentPokemon.items).map(item => item.name)
}

export const selectPokemonMoves = state => {
  return Object.values(state.entities.currentPokemon.moves)
}

export const selectPokemonItems = state => {
  return Object.values(state.entities.currentPokemon.items)
}

export const selectSingleItem = (state, itemId) => {
  return selectPokemonItems(state).filter(item => item.id === itemId)[0]
}