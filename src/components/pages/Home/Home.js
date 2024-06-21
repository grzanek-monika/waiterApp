import { Container } from "react-bootstrap";
import Tables from "../../features/Tables/Tables";

const Home = () => {
    return(
        <Container>
            <h2 className="m-4">All Tables: </h2>
            <Tables />
        </Container>
    )
}

export default Home;