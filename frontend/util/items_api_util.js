export const getAllPokemonItems = pokeId => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokeId}/items`
  })
}

export const getSingleItem = itemId => {
  return $.ajax({
    method: 'GET',
    url: `/api/items/${itemId}`
  })
}

export const postPokemonItems = (items, pokeId) => {
  return $.ajax({
    method: 'POST',
    url: `api/pokemon/${pokeId}/items/create_several`,
    data: {
      items: {
        items
      }
    }
  })
}

export const postItem = item => {
  return $.ajax({
    method: 'POST',
    url: `/api/pokemon/${item.pokemonId}/items`,
    data: {
      item: item
    }
  })
}

export const putItem = item => {
  return $.ajax({
    method: 'PUT',
    url: `/api/pokemon/${item.pokemonId}/items/${item.id}`,
    data: {
      item: item
    }
  })
}