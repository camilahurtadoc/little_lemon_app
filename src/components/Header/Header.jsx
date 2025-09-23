import NavLogo from '../../assets/images/logoLong.png'
import Navbar from "../Navbar/Navbar"
import "./Header.css"

const Header = () => {
    return (
        <header>
            <img id='header-img' src={NavLogo} alt='logo'/>
            <Navbar />
        </header>
    )
}

export default Header