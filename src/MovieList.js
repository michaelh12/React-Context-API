import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = (props) => {

    const [movies, setMovies] = useContext(MovieContext);

    return (

        <div>

            {
                movies.map(movie => {
                    return <Movie name={movie.name} price={movie.price} key={movie.id} />
                })
            }
        </div>
    )
}



export default MovieList