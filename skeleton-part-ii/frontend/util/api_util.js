export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchPokememonDetail = (pokeId) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokeId}`
  })
}