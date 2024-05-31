import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setParticipantLogOut } from "../../redux/participantSlice";
import style from "./NavBar.module.css"

const NavBar = () => {
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogOut = () => {
    dispatch(setParticipantLogOut({}));
    window.localStorage.removeItem("participant");
    navigate("/");
  };
  return (
    <nav className={style.navbar}>
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
