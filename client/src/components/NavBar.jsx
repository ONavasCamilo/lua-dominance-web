import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/signin">SignIn</NavLink>
            </ul>
        </nav>
    )
};

export default NavBar;
