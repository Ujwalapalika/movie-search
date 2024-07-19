import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        query: ''
    };

    handleChange = (e) => {
        this.setState({ query: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { query } = this.state;
        if (query.trim()) {
            this.props.onSearch(query)
        }
    };

    render() {
        return (
            <form className="search-bar" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={this.state.query}
                    onChange={this.handleChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        );
    }
}

export default SearchBar
