import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useState } from "react";
import SelectMovie from './SelectMovie/SelectMovie';
import SelectSeats from './SelectSeats/SelectSeats';
import OrderPlaced from './OrderPlaced/OrderPlaced';
import SelectSessions from './SelectSessions/SelectSessions';

export default function App(props) {

    const [data, setData] = useState({});

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SelectMovie /> }/>
                <Route path='/sessions/:movieId' element={<SelectSessions />}/> 
                <Route path='/seats/:sessionId' element={<SelectSeats />}/>
                <Route path='/sucess' element={<OrderPlaced data={data} setData={setData}/>}/>
            </Routes>
                  
        </BrowserRouter>
    )
}