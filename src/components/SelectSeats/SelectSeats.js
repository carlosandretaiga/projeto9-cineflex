import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ListSeats from "./ListSeats";


export default function SelectSeats () {

    return (
        <>

        <Container>
            <Navbar /> 
            <ListSeats /> 
        </Container>

        </>
    )
}