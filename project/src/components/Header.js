import { Link } from "react-router-dom"

function Header () {
    return (
        <header>
            <img src="image/brands/logo.jpg"/>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/MensWatches">Men's Watch</Link>
            <Link to="/Brands">Brands</Link>
            <Link to="/">Women's Watch</Link>
            <Link to="/">Sign Up/Register</Link>
            </nav>
        </header>
    )
}

export default Header