import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import "./Nav.css"

const Navlinks = () => {
    return (
        <>
            <ul id="navbar-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Menu</Nav.Link>
                <Nav.Link href="#">Reservations</Nav.Link>
                <Nav.Link href="#">Order Online</Nav.Link>
                <Nav.Link href="#">Login</Nav.Link>
            </ul>
        </>
    )
}

export default Nav;