export const getAllPokemonMoves = pokeId => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokeId}/moves`
  })
}

export const getSingleMove = moveId => {
  return $.ajax({
    method: 'GET',
    url: `/api/moves/${moveId}`
  })
}

export const postMove = move => {
  return $.ajax({
    method: 'POST',
    url: `/api/pokemon/${move.pokemonId}/moves`,
    data: {
      move: move
    }
  })
}

export const putMove = move => {
  return $.ajax({
    method: 'PUT',
    url: `/api/pokemon/${move.pokemonId}/moves/${move.id}`,
    data: {
      move: move
    }
  })
}