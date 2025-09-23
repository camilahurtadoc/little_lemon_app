import NavLogo from '../../assets/images/logoLong.png'
import Navbar from "../Navbar/Navbar"
import "./Header.css"

const Header = () => {
    return (
        <div id='header'>
            <img src={NavLogo} alt='logo'/>
            <Navbar />
        </div>
    )
}

export default Header