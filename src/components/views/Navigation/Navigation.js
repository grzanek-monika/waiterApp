import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <Navbar bg="primary" data-bs-theme="dark" className="m-4 rounded">
            <Container>
                <Navbar.Brand className="font-weight-bold">WaiterApp</Navbar.Brand>
                <div className="d-flex justify-content-end">
                    <Nav.Link as={NavLink} to='/' className="text-white p-3">Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/table/add-table' className="text-white p-3">Add table</Nav.Link>
                </div>
            </Container>
        </Navbar>
    )
}

export default Navigation;