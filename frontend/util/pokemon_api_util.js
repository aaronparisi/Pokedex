export const getAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const getSinglePokemon = pokeId => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokeId}`
  })
}

export const postPokemon = pokemon => {
  return $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: {
      pokemon: pokemon
    }
  })
}

export const putPokemon = pokemon => {
  return $.ajax({
    method: 'PUT',
    url: '/api/pokemon',
    data: {
      pokemon: pokemon
    }
  })
}