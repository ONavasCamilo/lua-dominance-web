import { useEffect } from "react";
import { VITE_GET_PARTICIPANTS } from "../config/env.config";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(VITE_GET_PARTICIPANTS);
        console.log(response);
      } catch (err) {
        console.log("Error obteniendo los datos", err);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Participantes:</h1>
    </main>
  );
};

export default Home;
