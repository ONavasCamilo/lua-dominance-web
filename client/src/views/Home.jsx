import { useEffect, useState } from "react";
import { VITE_GET_PARTICIPANTS } from "../config/env.config";
import axios from "axios";
import Participants from "../components/Participants";
import SignUp from "../components/register/SignUp";

const Home = () => {
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(VITE_GET_PARTICIPANTS);
        setParticipants(response.data);
      } catch (err) {
        console.log("Error obteniendo los datos", err);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      {participants.map((participant) => (
        <Participants
          key={participant.id}
          id={participant.id}
          nick={participant.nick}
          discord={participant.discord}
        />
      ))}
      <SignUp />
    </main>
  );
};

export default Home;
