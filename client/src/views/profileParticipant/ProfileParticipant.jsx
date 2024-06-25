import { useDispatch, useSelector } from "react-redux";
import style from "./ProfileParticipant.module.css";
import iconConfig from "/iconConfig.svg";
import iconNacionality from "/iconNacionality.svg";
import iconDiscord from "/iconDiscord.svg";
import iconCheese from "/iconCheese.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { VITE_POST_PARTICIPANTS_UPDATE_DISCORD } from "../../config/env.config";
import { setParticipantDiscord } from "../../redux/participantSlice";

const ProfileParticipant = () => {
  const participant = useSelector((state) => state.participant);
  const token = useSelector((state) => state.token)

  const [isAddingDiscord, setIsAddingDiscord] = useState(false);
  const [newDiscord, setNewDiscord] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleClickTournament = () => {
    navigate("/tournament");
  };

  const handleClickAddDiscord = () => {
    setIsAddingDiscord(!isAddingDiscord);
  };

  const handleSaveDiscord = async () => {
    const body = {
      discord: newDiscord
    }
    const response = await axios.put(`${VITE_POST_PARTICIPANTS_UPDATE_DISCORD}/${participant.id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setIsAddingDiscord(false);
    dispatch(setParticipantDiscord(response.data.discord))
    console.log(participant)
    console.log(token)
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
      {participant.discord ? (
        <span className={style.discord_participant}>{participant.discord}</span>
      ) : isAddingDiscord ? (
        <div>
          <input
            type="text"
            value={newDiscord}
            onChange={(e) => setNewDiscord(e.target.value)}
          />
          <button onClick={handleSaveDiscord}>Guardar</button>
        </div>
      ) : (
        <button
          onClick={handleClickAddDiscord}
          className={style.add_btnDiscord_participant}
        >
          Agregar discord
        </button>
      )}
      <img
        className={style.iconCheese_participant}
        src={iconCheese}
        alt="icono cheese"
      />
      <span className={style.tournament_participant}>
        Participaciones: {participant.numberOfParticipations}
      </span>
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
