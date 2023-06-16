import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const MovieDetail = () => {
    const { movieName } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Fetch movie data from the backend using axios
        axios.get('https://api.andrespecht.dev/movies')
            .then(response => {
                const movies = response.data.response;
                
                const foundMovie = movies.find(movie => movie.title === movieName);
                console.log(foundMovie);
                setMovie(foundMovie);
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }, [movieName]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-detail-page">
            <Helmet>
                <title>{movie.title}</title>
            </Helmet>
            <div className="movie-detail-info">
                <div className="movie-detail-image">
                    <img src={movie.poster} alt={movie.name} />
                </div>
                <div className="movie-details">
                    <h2 >{movie.title}</h2>
                    <p className="pyear">{movie.year}</p>
                    <p className="pdes">{movie.description}</p>
                    <button className="button">Play</button>
                </div>
            </div>
           
        </div>
    );
};

export default MovieDetail;
