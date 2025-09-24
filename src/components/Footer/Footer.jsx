import logoTall from "../../assets/images/logoTall.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare, faTiktok, faSquareThreads, faSquareXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="p-3">
            <Container className="p-2">
                <Row className="g-3" id="row1">
                    <Col md={6} lg={3}>
                        <img className="px-2" id="footer-img" src={logoTall} alt="logo" />
                    </Col>
                    <Col md={6} lg={3}>
                        <span className="footer-list">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Reservations</a></li>
                                <li><a href="#">Order Online</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </span>
                    </Col>
                    <Col md={6} lg={3}>
                        <span className="footer-list">
                            <h4>Contact</h4>
                            <ul>
                                <li>Address</li>
                                <li>Phone number</li>
                                <li>Email</li>
                            </ul>
                        </span>
                    </Col>
                    <Col md={6} lg={3}>
                        <span className="footer-list">
                            <h4>Social Media Links</h4>
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="me-2 fs-5" />Instagram</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="me-2 fs-5" />Facebook</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTiktok} className="me-2 fs-5" />Tik Tok</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faSquareThreads} className="me-2 fs-5" />Threads</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faSquareXTwitter} className="me-2 fs-5" />X</a></li>
                            </ul>
                        </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer