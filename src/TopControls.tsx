import { ChangeEvent, Component, FormEvent } from 'react';

interface SearchFormProps {
    onSearch: (query: string) => void
}

interface SearchFormState {
    query: string
}   

class TopControls extends Component<SearchFormProps, SearchFormState> {
    state: SearchFormState = {
        query: ''
    }

     handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ query: e.target.value });
    };

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { query } = this.state
        if (query.trim()) {
            this.props.onSearch(query)
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Search..."
                    value={this.state.query}
                    onChange={this.handleChange}
                    aria-label="Search" />
                <button type='submit'>Search</button>
            </form>
        )
    }
}

export default TopControls;