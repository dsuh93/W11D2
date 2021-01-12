import {connect} from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail'

const mapStateToProps = (state, ownProps) => {  

  return ({
    detail: state.entities.pokemon[ownProps.match.params.id]
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    requestSinglePokemon: id => dispatch(requestSinglePokemon(id)) 
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)