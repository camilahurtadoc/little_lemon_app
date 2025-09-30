import NavLogo from '../../assets/images/logoLong.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

import "./Header.css"

const Header = () => {
    const setActiveClass = ({ isActive, isPending }) => (isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link");
    
    return (
        <>
            <Navbar expand="lg" className="" id='navbar'>
                <Container className='w-auto'>
                    <Navbar.Brand href="#home" className='w-auto'><img src={NavLogo} id='header-img' alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='w-auto' id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={setActiveClass}>Home</NavLink>
                            <NavLink to="/about" className={setActiveClass}>About</NavLink>
                            <NavLink to="/menu" className={setActiveClass}>Menu</NavLink>
                            <NavLink to="/reservations" className={setActiveClass}>Reservations</NavLink>
                            <NavLink to="/order_online" className={setActiveClass}>Order Online</NavLink>
                            <NavLink to="/login" className={setActiveClass}>Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header