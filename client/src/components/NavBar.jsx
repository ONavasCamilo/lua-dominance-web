import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/home">Inicio</NavLink>
                <NavLink to="/profile">Perfil</NavLink>
            </ul>
        </nav>
    )
};

export default NavBar;
