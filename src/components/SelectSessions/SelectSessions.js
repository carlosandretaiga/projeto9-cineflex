
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import ListSessions from "./ListSessions";
import Navbar from "../Navbar/Navbar";


export default function SelectSessions () {
    return (
        <>
            <Container>
            <Navbar />
            <ListSessions />
            </Container>
            <Footer /> 
        </>
    )
}