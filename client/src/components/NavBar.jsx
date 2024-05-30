import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const participant = useSelector((state) => state.participant);
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        {participant.nick && <NavLink to="/profile">Profile</NavLink>}
        {!participant.nick && <NavLink to="/signin">SignIn</NavLink>}
      </ul>
    </nav>
  );
};

export default NavBar;
