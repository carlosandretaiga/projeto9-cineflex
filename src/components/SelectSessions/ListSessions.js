
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


function SessionMovie () {
    return ( 
        <Sessions>
                <p>Quinta-feira - 24/05/2021</p>
            <div className='sessions-hour'>
                <Button>15:00</Button>
                <Button>15:00</Button>
            </div>
       </Sessions>
    )
}

export default function ListSessions() {

    const {movieId} = useParams(); 
    const [movies, setMovies] = useState({}); 


   useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`); 

    promise.then(response => {
        setMovies({...response.data})
    })
   }, [])

   console.log(movies); 

  

    return (
        <>
            <ContainerSessions>
            <h1> Selecione um horário </h1>
           
          <SessionMovie />

            </ContainerSessions>
           
        </>
    )
}

const Sessions = styled.div`

    width: 250px;
    height: 400px;

`

const Button = styled.button`
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        width: 83px;
        height: 43px;
        left: 24px;
        top: 351px;
        background: #E8833A;
        border-radius: 3px;
`

const ContainerSessions = styled.div`
    margin-top: 80px; 

    p { 
        margin-top: 20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;
    }

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`