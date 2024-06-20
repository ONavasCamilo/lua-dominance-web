import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import ProfileParticipant from "./views/profileParticipant/ProfileParticipant";
import NavBar from "./components/navbar/NavBar";
import SignIn from "./views/session/SignIn";
import SignUp from "./views/session/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setParticipant,
  setParticipantLogOut,
  setParticipationLogOut,
} from "./redux/participantSlice";
import Tournament from "./views/tournament/Tournament";

const App = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const getLocalStorage = () => {
    const participantData = window.localStorage.getItem("participant");
    const participationData = window.localStorage.getItem("participation");
    if (participationData) {
      const participationDataParse = JSON.parse(participationData);
      dispatch(setParticipationLogOut(participationDataParse));
    }
    if (!participationData) {
      dispatch(setParticipationLogOut([]));
    }
    if (participantData) {
      const participantDataParse = JSON.parse(participantData);
      dispatch(setParticipant(participantDataParse));
    }
    if (!participantData) {
      dispatch(setParticipantLogOut({}));
    }
  };

  useEffect(() => {
    if (!login) {
      getLocalStorage();
    }
  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<ProfileParticipant />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/tournament" element={<Tournament />}></Route>
      </Routes>
    </>
  );
};

export default App;
