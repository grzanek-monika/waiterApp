import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <Navbar bg="primary" data-bs-theme="dark" className="m-4 rounded">
            <Container>
                <Navbar.Brand>WaiterApp</Navbar.Brand>
                <Nav.Link as={NavLink} to='/' className="text-white">Home</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Navigation;