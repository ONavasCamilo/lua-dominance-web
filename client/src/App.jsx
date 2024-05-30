import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProfileParticipant from "./views/ProfileParticipant";
import NavBar from "./components/NavBar";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setParticipant, setParticipantLogOut } from "./redux/participantSlice";

const App = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const getLocalStorage = () => {
    const participantData = window.localStorage.getItem("participant");
      if (!participantData) {
        return dispatch(setParticipantLogOut({}));
      }
      const participantDataParse = JSON.parse(participantData);
      return dispatch(setParticipant(participantDataParse));
    }
  

  useEffect(() => {
    if (!login) { 
      getLocalStorage()
  }
})

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<ProfileParticipant />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};

export default App;
