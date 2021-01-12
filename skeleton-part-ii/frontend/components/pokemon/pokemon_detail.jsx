import React from 'react';
import PokemonDetailContainer from './pokemon_detail_container'

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.id)
  }

  render() {
    
    return (
    <h1>Pokemon Detail Render</h1>
    )
  }
}


export default PokemonDetail