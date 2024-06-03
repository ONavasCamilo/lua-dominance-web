import { useSelector } from "react-redux";
import style from "./ProfileParticipant.module.css";
import iconConfig from "/iconConfig.svg";
import iconNacionality from "/iconNacionality.svg";

const ProfileParticipant = () => {
  const participant = useSelector((state) => state.participant);

  return (
    <div className={style.cont_participant}>
      <img className={style.iconNacionality_participant} src={iconNacionality} alt="icono nacionalidad" />
      <h2 className={style.nick_participant}>{participant.nick}</h2>
      <img
        className={style.iconConfig_participant}
        src={iconConfig}
        alt="icono configuracion"
      />
      {!participant.discord && <button>Cambiar discord</button>}
    </div>
  );
};

export default ProfileParticipant;
