import { useDispatch, useSelector } from "react-redux";
import style from "./BtnInscribe.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VITE_POST_PARTICIPATIONS_INSCRIBE } from "../../config/env.config";
import { addParticipation } from "../../redux/participantSlice";

const BtnInscribe = () => {
  const login = useSelector((state) => state.login);
  const participant = useSelector((state) => state.participant);
  const participations = useSelector((state) => state.participations);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        dispatch(addParticipation(data));
        const dataArray = [data];
        window.localStorage.setItem("participation", JSON.stringify(dataArray));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {!participations.length ? (
        <button
          onClick={handleOnClick}
          className={style.btn_inscribe_tournament}
        >
          Inscribirse
        </button>
      ) : (
        <button className={style.btn_registered_tournament}>Inscrito</button>
      )}
    </>
  );
};

export default BtnInscribe;
