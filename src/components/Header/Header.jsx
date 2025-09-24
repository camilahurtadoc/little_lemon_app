import NavLogo from '../../assets/images/logoLong.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

import "./Header.css"

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
                <Container className='w-auto' id='container'>
                    <Navbar.Brand href="#home" className='w-auto' id='brand'><img src={NavLogo} id='header-img' alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='w-auto' id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/">About</Nav.Link>
                            <Nav.Link to="/">Menu</Nav.Link>
                            <Nav.Link to="/">Reservations</Nav.Link>
                            <Nav.Link to="/">Order Online</Nav.Link>
                            <Nav.Link to="/">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header