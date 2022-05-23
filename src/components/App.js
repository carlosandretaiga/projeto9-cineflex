import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useState } from "react";
import SelectMovie from './SelectMovie/SelectMovie';
import SelectSeats from './SelectSeats/SelectSeats';
import OrderPlaced from './OrderPlaced/OrderPlaced';
import SelectSessions from './SelectSessions/SelectSessions';

export default function App() {

    const [data, setData] = useState({});

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SelectMovie /> }/>
                <Route path='/sessions/:movieId' element={<SelectSessions />}/> 
                <Route path='/seats/:sessionId' element={<SelectSeats data={data} setData={setData}/>}/>
                <Route path='/sucess' element={<OrderPlaced setData={setData}/> } data={data}/>
            </Routes>
                  
        </BrowserRouter>
    )
}