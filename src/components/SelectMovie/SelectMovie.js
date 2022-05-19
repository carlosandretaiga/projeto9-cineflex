import Container from "../Container/Container"
import Navbar from "../Navbar/Navbar"
import ListMovie from "./ListMovie"

export default function SelectMovie() {

    return (
        <>   
            <Container>
                <Navbar />
                <ListMovie />
            </Container>
        </>
    )
}