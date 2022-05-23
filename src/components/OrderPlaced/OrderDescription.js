import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useNavigate } from "react-router-dom";


export default function OrderDescription (props) {

    const navigate = useNavigate(); 
    const {data, setData} = props; 

    //const {titulo, hora, diaMes} = data; 

    //const {movie, diaMes, assentos, hora, comprador, cpf} = data;

    function finish () {
        navigate("/"); 
    }

   console.log(data); 

    const {seatId} = useParams(); 
    const [sessions, setSessions] = useState({}); 
    const [seats, setSeats] = useState([]);
    const [days, setDays] = useState({});
    const [hours, setHours] = useState(''); 
 

    return (
        <>
            <Container>
            
                <h1>Pedido feito com sucesso!</h1>

                <h2>Filme e sessão</h2>
                <p>{sessions.title}</p>
                <p>{days.date} - {hours.name}</p>
                
                <ContainerButton>
                <Button onClick={() => finish()}>Voltar para Home</Button>
                </ContainerButton>
                
            
            </Container>
        </>
    )

}

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const Button = styled.button`
    &:hover {
    filter: brightness(0.9);
    }
    cursor: pointer;
    margin-top: 20px;
    width: 225px;
    height: 42px;
    left: 72px;
   
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    background-color: #E8833A;
    border-radius: 3px;
`

const Container = styled.div`
    margin-top: 80px; 
    padding-bottom: 200px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow:scroll;

    ::-webkit-scrollbar {
    display: none;
    }

    p { 
        margin-top: 5px;
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
        margin-bottom: 20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`

const Escondido = styled.div`
 display: none;

`