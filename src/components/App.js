import React from 'react';
import Container from './Container/Container';
import SelectMovie from './SelectMovie/SelectMovie';

import Top from './Top/Top';

export default function App() {

    
    return (
        <>
           
           <Container>

           <Top>
               <h1>CINEFLEX</h1>
           </Top>

           <SelectMovie /> 
           
           </Container>
        </>
    )
}