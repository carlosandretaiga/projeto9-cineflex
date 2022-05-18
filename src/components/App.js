import React from 'react';
import SelectMovie from './SelectMovie/SelectMovie';
import SelectHour from './SelectHour/SelectHour';
import SelectSeats from './SelectSeats/SelectSeats';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './Container/Container';
import Navbar from './Navbar/Navbar';

import OrderPlaced from './OrderPlaced/OrderPlaced';

export default function App() {

    return (
        <BrowserRouter>
            
            <Container>
            <Navbar /> 
            <Routes>
                <Route path='/' element={<SelectMovie /> }/>
                <Route path='/select-hour' element={<SelectHour />}/> 
                <Route path='/select-seats' element={<SelectSeats />}/>
                <Route path='/order-placed' element={<OrderPlaced />}/>
            
                
            </Routes>
            </Container>
        
        </BrowserRouter>
           
            
    
    )
}