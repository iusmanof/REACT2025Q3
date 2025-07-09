import React, { Component } from 'react';

type ResultProps = {
  pokemonData: any;
};

class Result extends Component<ResultProps> {
  render() {
    const { pokemonData } = this.props;

    if (!pokemonData) {
      return null;
    }

    if (pokemonData.results) {
      return (
        <div>
          <ul>
            {pokemonData.results.map((pokemon: any) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div>
        <h2>{pokemonData.name}</h2>
        <p>H : {pokemonData.height}</p>
      </div>
    );
  }
}

export default Result;
