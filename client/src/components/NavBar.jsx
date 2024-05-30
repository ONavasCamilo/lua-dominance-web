import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setParticipantLogOut } from "../redux/participantSlice";

const NavBar = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const onClickLogOut = () => {
    dispatch(setParticipantLogOut({}));
  };
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        {login && <NavLink to="/profile">Profile</NavLink>}
        {!login && <NavLink to="/signin">SignIn</NavLink>}
        {!login && <NavLink to="/signup">SignUp</NavLink>}
        {login && <button onClick={onClickLogOut}>logout</button>}
      </ul>
    </nav>
  );
};

export default NavBar;
