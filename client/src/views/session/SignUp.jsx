import { useState } from "react";
import signUpFormData from "../../const/signUpFormData.js";
import InputLabel from "../../components/inputlabel/InputLabel.jsx";
import axios from "axios";
import { VITE_POST_PARTICIPANTS_SIGN_UP } from "../../config/env.config.js";
import { useDispatch } from "react-redux";
import { setParticipant } from "../../redux/participantSlice.js";
import { useNavigate } from "react-router-dom";
import style from "./session.module.css"

const SignUp = () => {
  const initialState = {
    nick: "",
    discord: "",
    contraseña: "",
    confirmpassword: "",
  };

  const checkDiscord = (obj) => {
    if (obj.discord.length === 0) {
      obj.discord = null;
    }
    return obj;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [participantSignUp, setParticipantSignUp] = useState(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const participantVerify = checkDiscord(participantSignUp);
    axios
      .post(VITE_POST_PARTICIPANTS_SIGN_UP, participantVerify)
      .then(({ data }) => data)
      .then((data) => {
        dispatch(setParticipant(data));
        window.localStorage.setItem("participant", JSON.stringify(data));
        setParticipantSignUp(initialState);
        navigate("/profile");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <form onSubmit={handleOnSubmit} className={style.form_session}>
      {signUpFormData.map(({ label, type, name, placeholder }) => {
        return (
          <InputLabel
            key={name}
            label={label}
            type={type}
            name={name}
            placeholder={placeholder}
            participant={participantSignUp}
            setParticipant={setParticipantSignUp}
          />
        );
      })}
      <div>
        <button className={style.button_session}>Enviar</button>
      </div>
    </form>
  );
};

export default SignUp;
