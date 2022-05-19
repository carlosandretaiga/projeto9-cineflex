import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";


function Movie({ posterURL, id }) {
    return (
        <Link to={`/sessions/${id}`}>
            <CardMovie>
                <img src={posterURL} />
            </CardMovie>
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
           <SelectMovie>
                <h3>Selecione o filme</h3>
            <CardMovies>
            {movies.map(movie => <Movie posterURL={movie.posterURL} id={movie.id}/>)}
            </CardMovies>
            </SelectMovie>
        </>
    )
}

const SelectMovie = styled.div`

    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow:scroll;

    ::-webkit-scrollbar {
    display: none;
    }

    h3 {
    padding-top: 120px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 20px;
}

`

const CardMovies = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
`

const CardMovie = styled.div`

    width: 145px;
    height: 209px;
    padding: 5px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;   

    img {
    width: 129px;
    height: 193px;
    }
`