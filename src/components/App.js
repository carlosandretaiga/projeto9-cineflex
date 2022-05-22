import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import SelectMovie from './SelectMovie/SelectMovie';
import SelectSeats from './SelectSeats/SelectSeats';
import OrderPlaced from './OrderPlaced/OrderPlaced';
import SelectSessions from './SelectSessions/SelectSessions';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SelectMovie /> }/>
                <Route path='/sessions/:movieId' element={<SelectSessions />}/> 
                <Route path='/seats/:sessionId' element={<SelectSeats />}/>
                <Route path='/order-placed' element={<OrderPlaced />}/>
            </Routes>
                  
        </BrowserRouter>
    )
}