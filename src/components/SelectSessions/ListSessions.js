
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from "../Footer/Footer";




function EnviaFooter({title, posterURL}) {
    return (
        <FooterMovie>
            <FooterBoxImg>
            <img src={posterURL} alt="image-movie" />
            </FooterBoxImg>
            <h5>{title}</h5>
        </FooterMovie>
    )
}


function SessionMovie ({weekday, date, showtimes}) {
    return ( 
        <Sessions>
                <p>{weekday} - {date}</p>
            <SessionsHour>
            
                {showtimes}

            </SessionsHour>
       </Sessions>
    )
}

export default function ListSessions() {

    const {movieId} = useParams(); 
    const [movies, setMovies] = useState({}); 
    const [days, setDays] = useState([]);
    
    


   useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`); 

    promise.then(response => {
        setMovies({...response.data})
        setDays([...response.data.days]); 
    })
   }, [])


    return (
        <>
            <ContainerSessions>
            <h1> Selecione um horário </h1>
           
           {days.map(day => <SessionMovie weekday={day.weekday} date={day.date} showtimes={day.showtimes.map(hour => <Link to={`/seats/${hour.id}`}><Button>{hour.name} </Button></Link>)}/>)}

            </ContainerSessions>
            <Footer>
               <EnviaFooter title={movies.title} posterURL={movies.posterURL}/> 
            </Footer>
           
        </>
    )
}

const FooterMovie = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h5 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }

`

const FooterBoxImg = styled.div`
    margin-top: 14px;
    margin-left: 10px;
    margin-right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 89px;
    left: 10px;
    bottom: 14px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img {
        width: 48px;
        height: 72px;
        left: 18px;
        bottom: 23px;
    }
`

const Sessions = styled.div`
    width: 320px;
  
`

const SessionsHour = styled.div`
    margin-right: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Button = styled.div`
        margin-right: 11px;
        display: flex;
        justify-content: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        text-align: center;
        width: 83px;
        height: 43px;
        left: 24px;
        top: 351px;
        color: white; 
        background: #E8833A;
        border-radius: 3px;
`

const ContainerSessions = styled.div`
    margin-top: 80px; 
    padding-bottom: 200px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow:scroll;

    ::-webkit-scrollbar {
    display: none;
    }

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
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`