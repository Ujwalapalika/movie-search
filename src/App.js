import React, { Component } from 'react';
import { fetchMovies } from './api/api'; 
import SearchBar from './components/SearchBar/SearchBar'
import MovieCard from './components/MovieCard/MovieCard'
import './App.css';

class App extends Component {
    state = {
        movies: [],
        loading: false,
        error: null
    };

    handleSearch = async (query) => {
        this.setState({ loading: true, error: null });
        try {
            const movies = await fetchMovies(query);
            this.setState({ movies });
        } catch (error) {
            this.setState({ error: 'Failed to fetch movies' });
        }
        this.setState({ loading: false });
    };

    render() {
        const { movies, loading, error } = this.state;

        return (
            <div className="app">
                <SearchBar onSearch={this.handleSearch} />
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <div className="movie-cards">
                    {movies.map((movie) => (
                        <MovieCard key={movie.key} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;

