import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  setParticipantLogOut,
  setParticipationLogOut,
} from "../../redux/participantSlice";
import style from "./NavBar.module.css";
import iconLogout from "/iconLogout.svg";

const NavBar = () => {
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogOut = () => {
    dispatch(setParticipantLogOut({}));
    dispatch(setParticipationLogOut([]));
    window.localStorage.removeItem("participant");
    window.localStorage.removeItem("participation");
    navigate("/");
  };
  return (
    <nav className={style.navbar}>
      <ul>
        <NavLink to="/">Inicio</NavLink>
        {login && <NavLink to="/profile">Perfil</NavLink>}
        {!login && <NavLink to="/signin">Iniciar sesión</NavLink>}
        {!login && <NavLink to="/signup">Registrarse</NavLink>}
        {login && <NavLink to="/tournament">Torneo</NavLink>}
        {login && (
          <button onClick={onClickLogOut} className={style.logout}>
            Cerrar sesión <img src={iconLogout} alt="icono logout" />
          </button>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
