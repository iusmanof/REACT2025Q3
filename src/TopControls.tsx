import { ChangeEvent, Component, FormEvent } from 'react';

interface SearchFormProps {
  onSearch: (q: string) => void;
}

interface SearchFormState {
  q: string;
}

class TopControls extends Component<SearchFormProps, SearchFormState> {
  constructor(props){
    super(props)
    const savedQueryPokemon = localStorage.getItem("savedQueryPokemon") || '';
    this.state = {
      q: savedQueryPokemon,
    }
  }

  state: SearchFormState = {
    q: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newETargetVal = e.target.value; 
    this.setState({ q: newETargetVal });
    localStorage.setItem("savedQueryPokemon", newETargetVal);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { q } = this.state;
    if (q.trim()) {
      this.props.onSearch(q);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.q}
          onChange={this.handleChange}
          aria-label="Search"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default TopControls;
