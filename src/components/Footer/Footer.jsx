import logoTall from "../../assets/images/logoTall.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <img id="footer-img" src={logoTall} alt="logo" />
            <div className="footer-info">
                <span className="footer-list">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </span>
                <span className="footer-list">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </span>
                <span className="footer-list">
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Tik Tok</a></li>
                        <li><a href="#">Threads</a></li>
                        <li><a href="#">X</a></li>
                    </ul>
                </span>
            </div>
        </footer>
    )
}

export default Footer