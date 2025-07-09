import React, { Component } from 'react';
import TopControls from './TopControls';
import Result from './Result';

type StateType = {
  pokemonData: any | null;
  loading: boolean;
  error: string | null;
};

class App extends Component<{}, StateType> {
  state: StateType = {
    pokemonData: null,
    loading: false,
    error: null,
  };

  handleSearch = (searchPokemon: string) => {
    console.log('Query pokemon', searchPokemon);
    this.fetchData(searchPokemon);
  };

  componentDidMount(): void {
    this.fetchData('');
  }

  fetchData = (searchPokemon: string) => {
    const url = searchPokemon
      ? `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
      : `https://pokeapi.co/api/v2/pokemon`;

    this.setState({ loading: true, error: null });

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Ну далось загрузить');
        }
        return res.json();
      })
      .then((pokemonData) => {
        this.setState({ pokemonData, loading: false });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
          pokemonData: null,
        });
      });
  };

  render() {
    const { pokemonData, loading, error } = this.state;

    return (
      <div className="text-center">
        <TopControls onSearch={this.handleSearch} />
        {loading && <p>Загрузка ...</p>}
        {error && { error }}
        {pokemonData && <Result pokemonData={pokemonData} />}
      </div>
    );
  }
}

export default App;
