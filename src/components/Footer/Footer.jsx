import logoTall from "../../assets/images/logoTall.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare, faTiktok, faSquareThreads, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"

const Footer = () => {
    return (
        <Container fluid className="py-5" id="footer-container">
            <Row className="justify-content-md-center" id="row1">
                <Col lg={1} xxl={2}></Col>
                <Col md={5} lg={2} xxl={2} className="mb-4">
                    <img className="px-2" id="footer-img" src={logoTall} alt="logo" />
                </Col>
                <Col md={5} lg={2} xxl={2}>
                    <span className="footer-list">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservations">Reservations</a></li>
                            <li><a href="/order_online">Order Online</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </span>
                </Col>
                <Col md={5} lg={3} xxl={2}>
                    <span className="footer-list">
                        <h4>Social Media Links</h4>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="me-2 fs-5" />Instagram</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} className="me-2 fs-5" />Facebook</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTiktok} className="me-2 fs-5" />Tik Tok</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faSquareThreads} className="me-2 fs-5" />Threads</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faSquareXTwitter} className="me-2 fs-5" />X</a></li>
                        </ul>
                    </span>
                </Col>
                <Col md={5} lg={4} xxl={3}>
                    <span className="footer-list">
                        <h4>Contact</h4>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationDot} className="me-2 fs-5" />Pizza Street 123, Chicago</li>
                            <li><FontAwesomeIcon icon={faPhone} className="me-2 fs-5" />+1 123 123 1234</li>
                            <li><FontAwesomeIcon icon={faEnvelope} className="me-2 fs-5" />lemon@littlelemon.com</li>
                        </ul>
                    </span>
                </Col>
                <Col lg={0} xxl={1}></Col>
            </Row>
        </Container>
    )
}

export default Footer