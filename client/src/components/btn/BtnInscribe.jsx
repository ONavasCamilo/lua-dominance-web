import { useSelector } from "react-redux";
import style from "./BtnInscribe.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VITE_POST_PARTICIPATIONS_INSCRIBE } from "../../config/env.config";

const BtnInscribe = ({ children }) => {
  const login = useSelector((state) => state.login);
  const participant = useSelector((state) => state.participant);

  const navigate = useNavigate();

  const handleOnClick = () => {
    if (!login) {
      return navigate("/signup");
    }
    const body = {
      participantId: participant.id,
      tournamentId: 1,
    };
    axios
      .post(VITE_POST_PARTICIPATIONS_INSCRIBE, body)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <button onClick={handleOnClick} className={style.btn_inscribe_tournament}>
      {children}
    </button>
  );
};

export default BtnInscribe;
