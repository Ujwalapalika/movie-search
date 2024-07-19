import React from 'react';
import './MovieCard.css';

class MovieCard extends React.Component {
    state = {
        dogImage: ''
    };

    async componentDidMount() {
        const dogImage = await this.fetchRandomDogImage();
        this.setState({ dogImage });
    }

    fetchRandomDogImage = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(data)
        return data.message;
    };

    render() {
        const { movie } = this.props;
        const { dogImage } = this.state;

        return (
            <div className="movie-card">
                <img src={dogImage} alt="Random Dog" className="dog-image" />
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-author">{movie.author_name && movie.author_name.join(', ')}</p>
                <p className="movie-publish">{movie.first_publish_year}</p>
                <p className="dog-emoji">🐶</p> 
            </div>
        );
    }
}

export default MovieCard;


