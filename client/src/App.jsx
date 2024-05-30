import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProfileParticipant from "./views/ProfileParticipant";
import NavBar from "./components/NavBar";
import SignIn from "./views/SignIn";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<ProfileParticipant />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </>
  );
};

export default App;
