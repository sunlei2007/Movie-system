import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dialog from './dialog';
import { Link } from 'react-router-dom';

const ContentComponent = () => {
    const [movies, setMovies] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [showSortOptions, setShowSortOptions] = useState(false);

    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        axios.get('https://api.andrespecht.dev/movies')
            .then(response => {
             
                setMovies(response.data.response);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSortByTitle = () => {
        setSortBy('title');
        setShowSortOptions(false);
    };

    const handleSortByYear = () => {
        setSortBy('year');
        setShowSortOptions(false);
    };

    const sortMovies = () => {
        if (sortBy === 'title') {
            return [...movies].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'year') {
            return [...movies].sort((a, b) => a.year - b.year);
        } else {
            return movies;
        }
    };

    const sortedMovies = sortMovies();

    const handleOpenDialog = () => {
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
       
        setShowDialog(false);
    };

    const handleSubmit = () => {
        //setShowDialog(false);
    };
    return (
        <div>
            <div className="buttons" >
                <div className="btncontainer">
                    <button className="button1" onClick={() => setShowSortOptions(!showSortOptions)}>Sort movies</button>

                    {showSortOptions && (
                        <div className="sort-options">
                            <div onClick={handleSortByTitle}>By Title</div>
                            <div onClick={handleSortByYear}>By Year</div>
                        </div>
                        )}
                </div>

                <button className="button2" onClick={handleOpenDialog}>Add movie</button>

            </div>
            <div className="grid">
                {sortedMovies.map((movie,index) => (
                    <div key={movie._id} className="movie">
                        <Link className="movie-title" to={`/movie/${movie.title}`}> <img src={movie.poster} alt={movie.title} className="movie-image" /></Link>
                       {/* <p className="movie-title">{movie.title}</p>*/}
                        <Link className="movie-title" to={`/movie/${movie.title}`}>{movie.title}</Link>
                    </div>
                ))}
            </div>
            {showDialog && <Dialog
                showDialog={showDialog}
                handleCloseDialog={handleCloseDialog}
                handleSubmit={handleSubmit}
            />}
           
        </div>
    );
};

export default ContentComponent;
