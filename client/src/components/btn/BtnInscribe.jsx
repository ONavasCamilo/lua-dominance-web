import { useDispatch, useSelector } from "react-redux";
import style from "./BtnInscribe.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VITE_POST_PARTICIPATIONS_INSCRIBE } from "../../config/env.config";
import { addParticipation } from "../../redux/participantSlice";

const BtnInscribe = ({ children }) => {
  const login = useSelector((state) => state.login);
  const participant = useSelector((state) => state.participant);
  const participations = useSelector((state) => state.participations)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(participations)

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
        dispatch(addParticipation(data))
      })
      .catch((err) => console.log(err));
    };
    console.log(participations)
  return (
    <button onClick={handleOnClick} className={style.btn_inscribe_tournament}>
      {children}
    </button>
  );
};

export default BtnInscribe;
