import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import ListSeats from "./ListSeats";

import { useState } from "react";
export default function SelectSeats (props) {

    const {data, setData} = props; 


    return (
        <>
        <Container>
            <Navbar /> 
            <ListSeats data={data} setData={setData}/> 
        </Container>

        </>
    )
}