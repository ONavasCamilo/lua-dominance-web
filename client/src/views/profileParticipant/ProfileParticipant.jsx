import { useSelector } from "react-redux";
import style from "./ProfileParticipant.module.css";
import iconConfig from "/iconConfig.svg";
import iconNacionality from "/iconNacionality.svg";
import iconDiscord from "/iconDiscord.svg";
import iconCheese from "/iconCheese.svg";
import { useNavigate } from "react-router-dom";

const ProfileParticipant = () => {
  const participant = useSelector((state) => state.participant);

  const navigate = useNavigate();

  const handleClickTournament = () => {
    navigate("/tournament");
  };

  return (
    <div className={style.cont_participant}>
      <img
        className={style.iconNacionality_participant}
        src={iconNacionality}
        alt="icono nacionalidad"
      />
      <span className={style.nick_participant}>{participant.nick}</span>
      <img
        className={style.iconConfig_participant}
        src={iconConfig}
        alt="icono configuracion"
      />
      <img
        className={style.iconDiscord_participant}
        src={iconDiscord}
        alt="icono discord"
      />
      <span className={style.discord_participant}>{participant.discord}</span>
      <img
        className={style.iconCheese_participant}
        src={iconCheese}
        alt="icono cheese"
      />
      <span className={style.tournament_participant}>Participaciones: {participant.numberOfParticipations}</span>
      <button
        onClick={handleClickTournament}
        className={style.button_participant}
      >
        Ver torneo
      </button>
    </div>
  );
};

export default ProfileParticipant;
