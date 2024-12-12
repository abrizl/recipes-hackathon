import "./Header.scss";
import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            <nav className="header">
                <Link to="/" className="header__item">quick & cozy receipes</Link>
                <Link to="/" className="header__item">Home</Link>
            </nav>
        </>
    );
}

export default Header;