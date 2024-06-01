import { useEffect, useState } from "react";
import { VITE_GET_PARTICIPANTS } from "../../config/env.config";
import axios from "axios";
import Participants from "../../components/Participants";
import style from "./home.module.css";
import iconStrawberry from "../../../public/iconStrawberry.svg";

const Home = () => {
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(VITE_GET_PARTICIPANTS);
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
        <button className={style.button}>Inscribirse</button>
        <h2 className={style.subtitle}>
          Gana <strong className={style.strong_gold}>20usd</strong> o{" "}
          <strong className={style.strong_strawberry}>2400 fresas</strong>
          <img src={iconStrawberry} alt="icono fresa" />
        </h2>
      </div>
      {participants.map((participant) => (
        <Participants
          key={participant.id}
          id={participant.id}
          nick={participant.nick}
          discord={participant.discord}
        />
      ))}
    </main>
  );
};

export default Home;
