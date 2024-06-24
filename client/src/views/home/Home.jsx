import { useEffect, useState } from "react";
import axios from "axios";
import Participants from "../../components/participants/Participants";
import style from "./home.module.css";
import iconStrawberry from "/iconStrawberry.svg";
import iconRat from "/iconRat.svg";
import BtnInscribe from "../../components/btn/BtnInscribe";
import { VITE_GET_PARTICIPATIONS_PARTICIPANTS } from "../../config/env.config";

const Home = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(VITE_GET_PARTICIPATIONS_PARTICIPANTS);
        setParticipants(response.data);
      } catch (err) {
        console.log("Error obteniendo los datos", err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className={style.cont_title}>
        <h1 className={style.title}>Lua Dominance</h1>
        <BtnInscribe />
        <h2 className={style}>
          Gana <strong className={style.strong_gold}>20usd</strong> o{" "}
          <strong className={style.strong_strawberry}>2400 fresas</strong>
          <img src={iconStrawberry} alt="icono fresa" />
        </h2>
      </div>
      <div>
        <h3 className={style.subtitle_participants}>
          <img className={style.iconRat} src={iconRat} alt="rata icono" />
          Participantes:
        </h3>
        <div className={style.cont_participants}>
          {participants.length ? (
            participants.map(({ id, participant }) => (
              <Participants key={id} participant={participant} />
            ))
          ) : (
            <p className={style.p_no_participants}>
              Sé el primero en participar
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
