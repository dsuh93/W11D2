import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_SINGLE_POKEMON:
    debugger
    return Object.assign({}, state, {[action.detail.pokemon.id]: action.detail.pokemon} );
  default:
    return state;
  }
}
  
export default pokemonReducer;
