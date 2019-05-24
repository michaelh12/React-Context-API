import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (

        <div style={{
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
            minHeight: '10vh',
            textAlign: 'center',
            backgroundColor: '#54457F',
            color: 'white'
        }}>
            <h3 style={{ alignSelf: 'flex-start' }}>Dev Ed</h3>
            <p style={{ marginLeft: '200px' }}>List of Movies: {movies.length}</p>
        </div>
    )
}



export default Nav;