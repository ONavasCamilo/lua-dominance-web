import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setParticipantLogOut } from "../../redux/participantSlice";
import style from "./NavBar.module.css"
import iconLogout from "/iconLogout.svg"

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
        <NavLink to="/">Inicio</NavLink>
        {login && <NavLink to="/profile">Perfil</NavLink>}
        {!login && <NavLink to="/signin">Iniciar sesión</NavLink>}
        {!login && <NavLink to="/signup">Registrarse</NavLink>}
        {login && <button onClick={onClickLogOut} className={style.logout}>Cerrar sesión <img src={iconLogout} alt="icono logout" /></button>}
      </ul>
    </nav>
  );
};

export default NavBar;
