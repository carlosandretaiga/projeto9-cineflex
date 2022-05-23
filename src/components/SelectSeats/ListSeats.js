import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Footer from "../Footer/Footer";

function EnviaFooter({title, posterURL, weekday, name}) {
    return (
        <FooterSeat>
            <FooterBoxImg>
            <img src={posterURL} alt="image-movie" />
            </FooterBoxImg>
           <FooterInfo>
           <h5>{title}</h5>
            <h5>{weekday} - {name}</h5>
           </FooterInfo>
        </FooterSeat>
    )
}



export default function ListSeats (props) {

    const navigate = useNavigate(); 

    const {sessionId} = useParams(); 
    const [sessions, setSessions] = useState({}); 
    const [seats, setSeats] = useState([]);
    const [days, setDays] = useState({});
    const [hours, setHours] = useState(''); 

    const [hora, setHora] = useState(''); 
    const [dia, setDia] = useState(''); 
    const [titulo, setTitulo] = useState(''); 

    const {data, setData} = props; 

    const [comprador, setComprador] = useState(); 
    const [cpf, setCpf] = useState(); 

    const [assento, setAssento] = useState([]); 


    function selectSeat(index,seat) {
        let indice = index + 1; 
        setAssento([...assento, indice])

        console.log("ok")
        console.log(indice);
        console.log(assento);
        console.log(seat);
        
    }


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`); 
    
        promise.then(response => {
            setHours({...response.data})
            setSessions({...response.data.movie})
            setDays({...response.data.day});
            setSeats([...response.data.seats]); 
            const diaMes = response.data.day.date;
            const hora = response.data.name; 
            const titulo = response.data.movie.title; 

            setData({...data, titulo: titulo, hora:hora, diaMes: diaMes}); 
            setTitulo(titulo); 
            setHora(hora);
        
            
        })
       }, [])


    const colorSelect = '#8DD7CF'; 
    const colorBorderSelect = '#1AAE9E'

    const colorDisponivel = '#C3CFD9';
    const colorBorderDisponivel = '#7B8B99';


    const colorIndisponivel = '#FBE192';
    const colorBorderIndisponivel = '#F7C52B';

    function submitForm (event) {
        event.preventDefault(); 
        
        if(assento.length === 0) {
            alert("Você precisa escolher pelo menos 1 (um) assento!"); 
        } else {
            setData({
                ...data, 
                assentos: assento,
                hora: hora, 
                comprador: comprador,
                cpf: cpf
            });
        

        const reserva = {
            ids: assento,
            name: comprador,
            cpf: cpf 
        }

        console.log(data); 

        console.log(reserva); 

        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', reserva);

        promise.then(navigate("/sucess")); 

    }
    }



    return (
        <>
            <ContainerSeats>
            <h1> Selecione os assentos </h1>

            <Seats>
             
             {seats.map((seat,index) => 
             <Seat key={index} onClick={() => selectSeat(index, seat)}
             colorSeat={ `${seat.isAvailable === false ? colorIndisponivel : colorDisponivel }` }>{seat.name}</Seat>)}

            </Seats>

            <Legend>
                <LegendItem>
                <LegendStatus color={colorSelect} colorBorder={colorBorderSelect}></LegendStatus>
                    <h6>Selecionado</h6>
                </LegendItem>

                <LegendItem>
                <LegendStatus color={colorDisponivel} colorBorder={colorBorderDisponivel}></LegendStatus>
                    <h6>Disponível</h6>
                </LegendItem>

                <LegendItem>
                <LegendStatus color={colorIndisponivel} colorBorder={colorBorderIndisponivel}></LegendStatus>
                    <h6>Indisponível</h6>
                </LegendItem>
            </Legend>

           
            <RegisterBuyer>
            <form onSubmit={submitForm}> 
                <InputBuer>
                    <h4>Nome do comprador:</h4>
                    <Input placeholder="Digite seu nome..." 
                    type="text" onChange={(e) => setComprador(e.target.value)} required></Input>
                </InputBuer>

                <InputBuer>
                    <h4>CPF do comprador:</h4>
                    <Input placeholder="Digite seu CPF..."
                     type="text"
                     onChange={(e) => setCpf(e.target.value)}
                    maxLength='11'
                    minLength='11'
                    required
                    ></Input>
                </InputBuer>
                
                <ContainerButton>
                <ButtonRegister type='submit'> Reservar assento(s) </ButtonRegister>
                </ContainerButton>
            </form>
            </RegisterBuyer>
            
           
            </ContainerSeats>
            <Footer>
               <EnviaFooter title={sessions.title} posterURL={sessions.posterURL} weekday={days.weekday} name={hours.name}/> 
            </Footer>
           
        </>
    )
}

const Legend = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

`

const LegendItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const LegendStatus = styled.div`
    width: 25px;
    height: 25px;
    left: 78px;
    top: 377px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${props => props.colorBorder};
    border-radius: 17px;
    background-color: ${props => props.color};
`

const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const InputBuer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    h4 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`

const ButtonRegister = styled.button`
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

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    margin-top: 5px; 
    width: 320px;
    height: 41px;
    padding-left: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding-left: 10px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
        
    &::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
    }

`;

const RegisterBuyer = styled.div`
    margin-top: 15px;
    width: 320px;
    display: flex;
    flex-direction: column;
`

const FooterSeat = styled.div`
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

const Seats = styled.div`
    padding-bottom: 10px;
    width: 320px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(10, 1fr);
    gap: 4px;
  
`

const Seat = styled.div`
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;

    width: 26px;
    height: 26px;
    left: 57px;
    background-color: ${props => props.colorSeat};
    border: 1px solid ${props => props.colorSeatBorder};
    border-radius: 12px;  
`



const ContainerSeats = styled.div`
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
        padding-bottom: 10px;
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