import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProfileParticipant from "./views/ProfileParticipant";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<ProfileParticipant />}></Route>
      </Routes>
    </>
  );
};

export default App;
