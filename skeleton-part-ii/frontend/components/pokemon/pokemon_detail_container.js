import {connect} from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state) => {
  return ({
    detail: state.entities.pokemon.(this.props.match.params.id)
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    requestSinglePokemon: id => dispatch(requestSinglePokemon(id)) 
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)