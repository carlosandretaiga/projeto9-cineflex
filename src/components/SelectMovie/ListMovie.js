import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import './style.css';

function Movie({ posterURL, id }) {
    return (
        <Link to={`/movie/${id}`}>
            <div className='card-movie'>
                <img src={posterURL} />
            </div>
        </Link>
        

    )
}

export default function ListMovie() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            'https://mock-api.driven.com.br/api/v5/cineflex/movies'
        );

        promise.then((response) => {
            setMovies([...response.data]);
        });
    }, []);


    return (
        <>
            <div className='select-movie'>
                <h3>Selecione o filme</h3>
            <div className='card-movies'>
            {movies.map(movie => <Movie posterURL={movie.posterURL} id={movie.id}/>)}
            </div>
            </div>
        </>
    )
}