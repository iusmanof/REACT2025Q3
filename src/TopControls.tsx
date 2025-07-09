import { ChangeEvent, Component, FormEvent } from 'react';

interface SearchFormProps {
  onSearch: (q: string) => void;
}

interface SearchFormState {
  q: string;
}

class TopControls extends Component<SearchFormProps, SearchFormState> {
  state: SearchFormState = {
    q: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ q: e.target.value });
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
