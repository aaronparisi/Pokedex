export const selectAllPokemon = state => {
  return Object.values(state.entities.pokemon)
}

export const selectSinglePokemon = (state, id) => {
  const singlePoke = selectAllPokemon(state).filter(poke => poke.id === id)[0]
  return singlePoke
}

export const selectPokemonMoveNames = state => {
  return Object.values(state.entities.moves).map(move => move.name)  // * temporary map?
}

export const selectPokemonItemNames = state => {
  return Object.values(state.entities.items).map(item => item.name)
}

export const selectPokemonMoves = state => {
  return Object.values(state.entities.moves)
}

export const selectPokemonItems = state => {
  return Object.values(state.entities.items)
}

export const selectSingleItem = (state, itemId) => {
  return Object.values(state.entities.items).filter(item => item.id === itemId)[0]
}