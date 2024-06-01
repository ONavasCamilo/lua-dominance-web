import { useState } from "react";
import signInFormData from "../../const/signInFormData";
import InputLabel from "../../components/inputlabel/InputLabel";
import axios from "axios";
import { VITE_POST_PARTICIPANTS_SIGN_IN } from "../../config/env.config";
import { useDispatch } from "react-redux";
import { setParticipant } from "../../redux/participantSlice";
import { useNavigate } from "react-router-dom";
import style from "./session.module.css";

const SignIn = () => {
  const initialState = {
    nick: "",
    password: "",
  };

  const [participantSignIn, setParticipantSignIn] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post(VITE_POST_PARTICIPANTS_SIGN_IN, participantSignIn)
      .then(({ data }) => data)
      .then((data) => {
        dispatch(setParticipant(data));
        window.localStorage.setItem("participant", JSON.stringify(data));
        setParticipantSignIn(initialState);
        navigate("/profile");
      });
  };

  return (
    <form onSubmit={handleOnSubmit} className={style.form_session}>
      {signInFormData.map(({ label, type, name }) => {
        return (
          <InputLabel
            key={name}
            label={label}
            type={type}
            name={name}
            participant={participantSignIn}
            setParticipant={setParticipantSignIn}
          />
        );
      })}
      <div>
        <button className={style.button_session}>Enviar</button>
      </div>
    </form>
  );
};

export default SignIn;
